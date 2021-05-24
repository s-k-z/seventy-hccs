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

enum candyType {
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
  allowTomeUse: boolean = true,
  targetEffects: Effect[] = $effects`Synthesis: Smart, Synthesis: Collection, Synthesis: Learning`,
  reserveCandies: [Item, number][] = [
    [$item`Chubby and Plump bar`, 1],
    [$item`sugar sheet`, 3],
  ]
) {
  const candies = {
    [candyType.complex]: <candySet>[],
    [candyType.simple]: <candySet>[],
  };
  const inv = getInventory();
  // Initialize candies with ones in inventory
  // TODO: change this to Object.entries and skip inv[name] lookup for count when Rhino supports Object.entries
  Object.keys(inv).forEach((name) => {
    const item = Item.get(name);
    const count = inv[name];
    if (item.candyType === candyType.complex) candies.complex.push({ candy: item, count: count });
    if (item.candyType === candyType.simple) candies.simple.push({ candy: item, count: count });
  });

  // Pretend summon sugar sheets if tome summons available
  const sheet = $item`sugar sheet`;
  if (allowTomeUse) {
    candies.complex.push({
      candy: sheet,
      count: inv[`${sheet}`] + Math.min(0, 3 - get("tomeSummons")),
    });
  }

  // Simulate sweet synthesis with reserved candies omitted, add them back in one at a time until a solution is found
  let sim: simulateResult = { result: false, pairs: [] };
  for (let i = 0; i < reserveCandies.length; i++) {
    const used = new Map<Item, number>([...reserveCandies.slice(i)]);
    sim = simulate(targetEffects, candies, used);
    if (sim.result) break;
  }
  if (!sim.result) throw `Unable to find a combination for all synthesis targets`;

  // Found a solution, now transform candies and synthesize
  for (const [a, b] of sim.pairs) {
    [a, b].forEach((creatable) => {
      // source will be $item`none` if no ingredients
      const source = toItem(Object.keys(getIngredients(creatable))[0]);
      if (!have(creatable) && transforms.has(source)) {
        // only cast summon sugar sheets if needed
        if (allowTomeUse && source === $item`sugar sheet`) useSkill($skill`Summon Sugar Sheets`);
        cliExecute(`make ${creatable}`);
      }
    });
    sweetSynthesis(a, b);
  }
}

type simulateResult = { result: boolean; pairs: [Item, Item][] };

function simulate(
  synthTargets: Effect[],
  candies: { complex: candySet; simple: candySet },
  reserveCandies: Map<Item, number>
): simulateResult {
  const used = new Map<Item, number>(reserveCandies);
  const sim: simulateResult = { result: true, pairs: [] };
  for (const target of synthTargets) {
    const startA = candies[tier(target).a];
    const startB = candies[tier(target).b];
    const res = search(startA, startB, used, target);
    if (!res.found) return { result: false, pairs: [] };
    // Add the candies from each search to the list of used candies
    sim.pairs.push([res.a, res.b]);
    used.set(res.a, 1 + (used.get(res.a) || 0));
    used.set(res.b, 1 + (used.get(res.b) || 0));
    // Increment candies transformed from too, if any
    if (res.fromA) used.set(res.fromA, 1 + (used.get(res.fromA) || 0));
    if (res.fromB) used.set(res.fromB, 1 + (used.get(res.fromB) || 0));
  }
  return sim;
}

type searchResult = {
  found: boolean;
  a: Item;
  b: Item;
  fromA: Item | null;
  fromB: Item | null;
};

function search(
  setA: candySet,
  setB: candySet,
  used: Map<Item, number>,
  target: Effect,
  fromA: Item | null = null,
  fromB: Item | null = null,
  indexA: number = setA.length - 1,
  indexB: number = setB.length - 1
): searchResult {
  const A = setA[indexA].candy;
  const B = setB[indexB].candy;
  const countA = setA[indexA].count - (used.get(A) || 0);
  const countB = setB[indexB].count - (used.get(B) || 0);
  // Test a solution if we have the candies available
  // If A and B are the same then we need to ensure we have 2 or more candies
  const enoughIfSame = A !== B || countA + countB > 2;
  if (countA > 0 && countB > 0 && enoughIfSame && sweetSynthesisResult(A, B) === target) {
    return { found: true, a: A, b: B, fromA: fromA, fromB: fromB };
  }
  // Try transforming candy into another type
  // Fall through if we don't find a match
  const subA = transforms.get(A);
  const subB = transforms.get(B);
  // ensure we have the available candy to transform
  if (countA > 0 && subA) {
    if (fromA) throw `Can't transform candy again from ${fromA}`;
    const simA = search(subA, setB, used, target, A, fromB);
    if (simA.found) return simA;
  }
  if (countB > 0 && subB) {
    if (fromB) throw `Can't transform candy again from ${fromB}`;
    const simB = search(setA, subB, used, target, fromA, B);
    if (simB.found) return simB;
  }
  // Try the next candy in the list
  if (indexB > 0) return search(setA, setB, used, target, fromA, fromB, indexA, indexB - 1);
  // Loop around once b reaches 0
  if (indexA > 0) return search(setA, setB, used, target, fromA, fromB, indexA - 1);
  // No solution found
  return { found: false, a: $item`none`, b: $item`none`, fromA: fromA, fromB: fromB };
}
