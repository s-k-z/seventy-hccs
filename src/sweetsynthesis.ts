import {
  cliExecute,
  getIngredients,
  getInventory,
  sweetSynthesis,
  sweetSynthesisResult,
  toItem,
  useSkill,
} from "kolmafia";
import { $effect, $effects, $item, $skill, get, have } from "libram";

const enum candyType {
  complex = "complex",
  simple = "simple",
}

function tier(effect: Effect) {
  switch (effect) {
    case $effect`Synthesis: Hot`:
    case $effect`Synthesis: Cold`:
    case $effect`Synthesis: Pungent`:
    case $effect`Synthesis: Scary`:
    case $effect`Synthesis: Greasy`:
      return { a: candyType.simple, b: candyType.simple };

    case $effect`Synthesis: Strong`:
    case $effect`Synthesis: Smart`:
    case $effect`Synthesis: Cool`:
    case $effect`Synthesis: Hardy`:
    case $effect`Synthesis: Energy`:
      return { a: candyType.complex, b: candyType.simple };

    case $effect`Synthesis: Greed`:
    case $effect`Synthesis: Collection`:
    case $effect`Synthesis: Movement`:
    case $effect`Synthesis: Learning`:
    case $effect`Synthesis: Style`:
      return { a: candyType.complex, b: candyType.complex };
  }
  throw `Not a type of synthesis effect: ${effect}`;
}

type candySet = { candy: Item; count: number }[];
const sugarGroup: candySet = [
  $item`sugar shotgun`,
  $item`sugar shillelagh`,
  $item`sugar shank`,
  $item`sugar chapeau`,
  $item`sugar shorts`,
  $item`sugar shield`,
  $item`sugar shirt`,
].map((i) => {
  return { candy: i, count: 1 };
});
// TODO: handle peppermint patty and peppermint crook which take 2 and 3 sprouts respectively
// Need to alter search function to weight cost of candy transforms
const peppermintGroup: candySet = [{ candy: $item`peppermint twist`, count: 1 }];
const transforms = new Map<Item, candySet>([
  [$item`sugar sheet`, sugarGroup],
  [$item`peppermint sprout`, peppermintGroup],
]); // Cyclical references will break searching, no keys allowed in the candySets!

/**
 * Search for a set candy pairs that satisfy all chosen Sweet Synthesis effects and then cast them all.
 *
 * Throw an error if a solution can't be found.
 * @param allowTomeUse Disallow cast summon sugar sheet tome if false. Default true
 * @param targetEffects Optional list of effects to search for and use.
 * @param reserveCandies Optional list of [candy,quantity] to keep if possible
 */
export function synthesize(
  allowTomeUse = true,
  targetEffects: Effect[] = $effects`Synthesis: Collection, Synthesis: Smart, Synthesis: Learning`.filter(
    (effect) => !have(effect)
  ),
  reserveCandies: Item[] = [
    $item`Chubby and Plump bar`,
    $item`sugar sheet`,
    $item`sugar sheet`,
    $item`sugar sheet`,
  ]
): void {
  const candies = {
    [candyType.complex]: <candySet>[],
    [candyType.simple]: <candySet>[],
  };
  cliExecute("refresh inventory");
  const inv = getInventory();
  // Initialize candies with ones in inventory
  Object.entries(inv).forEach(([name, count]) => {
    const item = Item.get(name);
    candies[item.candyType as candyType]?.push({ candy: item, count: count });
  });
  // Pretend summon sugar sheets if tome summons available
  if (allowTomeUse && get("tomeSummons") < 3) {
    candies.complex.push({
      candy: $item`sugar sheet`,
      count: inv["sugar sheet"] + 3 - get("tomeSummons"),
    });
  }
  // Simulate sweet synthesis with reserved candies omitted, add them back individually until a solution is found
  let sim: simulateResult = { result: false, pairs: [] };
  for (let i = 0; i <= reserveCandies.length; i++) {
    const reserved = new Map<Item, number>(reserveCandies.slice(i).map((r) => [r, 1]));
    sim = simulate(targetEffects, candies, reserved);
    if (sim.result) break;
  }
  if (!sim.result) throw `Unable to find a combination for all synthesis targets`;
  // Found a solution, now transform candies and synthesize
  for (const pair of sim.pairs) {
    for (const creatable of pair) {
      // source will be $item`none` if no ingredients
      const source = toItem(Object.keys(getIngredients(creatable))[0]);
      if (!have(creatable) && transforms.has(source)) {
        // only cast summon sugar sheets if needed
        if (allowTomeUse && source === $item`sugar sheet`) useSkill($skill`Summon Sugar Sheets`);
        cliExecute(`make ${creatable}`);
      }
    }
    sweetSynthesis(pair[0], pair[1]);
  }
}

type simulateResult = { result: boolean; pairs: [Item, Item][] };

function simulate(
  synthTargets: Effect[],
  candies: { complex: candySet; simple: candySet },
  reserveCandies: Map<Item, number>
): simulateResult {
  const sim: simulateResult = { result: true, pairs: [] };
  const used = new Map<Item, number>(reserveCandies);
  const markUsed = (item: Item) => used.set(item, 1 + (used.get(item) || 0));
  for (const target of synthTargets) {
    const startA = candies[tier(target).a];
    const startB = candies[tier(target).b];
    const res = search(target, startA, startB, used);
    if (!res.found) return { result: false, pairs: [] };
    // Add the candies from each search to the list of used candies
    sim.pairs.push([res.a, res.b]);
    markUsed(res.a);
    markUsed(res.b);
    // Increment candies transformed from too, if any
    if (res.fromA) markUsed(res.fromA);
    if (res.fromB) markUsed(res.fromB);
  }
  return sim;
}

type searchResult = {
  found: boolean;
  a: Item;
  b: Item;
  fromA?: Item;
  fromB?: Item;
};

function search(
  target: Effect,
  setA: candySet,
  setB: candySet,
  used: Map<Item, number>,
  fromA: Item | undefined = undefined,
  fromB: Item | undefined = undefined,
  indexA: number = setA.length - 1,
  indexB: number = setB.length - 1
): searchResult {
  const get = (set: candySet, index: number): { candy: Item; count: number } => {
    const candy = set[index].candy;
    const count = set[index].count - (used.get(candy) || 0);
    return { candy: candy, count: count };
  };
  const A = get(setA, indexA);
  const B = get(setB, indexB);
  // Test a solution if we have the candies available
  // If A and B are the same then we need to ensure we have 2 or more candies
  const haveEnough = (A.count > 0 && B.count > 0 && A.candy !== B.candy) || A.count >= 2;
  if (haveEnough && sweetSynthesisResult(A.candy, B.candy) === target) {
    return { found: true, a: A.candy, b: B.candy, fromA: fromA, fromB: fromB };
  }
  // Try transforming candy into another type
  // Fall through if we don't find a match
  const subA = transforms.get(A.candy);
  const subB = transforms.get(B.candy);
  // ensure we have the available candy to transform
  if (A.count > 0 && subA) {
    if (fromA) throw `Can't transform candy again from ${fromA}`;
    const simA = search(target, subA, setB, used, A.candy, fromB);
    if (simA.found) return simA;
  }
  if (B.count > 0 && subB) {
    if (fromB) throw `Can't transform candy again from ${fromB}`;
    const simB = search(target, setA, subB, used, fromA, B.candy);
    if (simB.found) return simB;
  }
  // Try the next candy in the list
  if (indexB > 0) return search(target, setA, setB, used, fromA, fromB, indexA, indexB - 1);
  // Loop around once b reaches 0
  if (indexA > 0) return search(target, setA, setB, used, fromA, fromB, indexA - 1);
  // No solution found
  return { found: false, a: $item`none`, b: $item`none` };
}
