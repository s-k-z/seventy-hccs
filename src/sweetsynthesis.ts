import {
  create,
  getIngredients,
  getInventory,
  print,
  sweetSynthesis,
  sweetSynthesisResult,
  toInt,
  toItem,
} from "kolmafia";
import { $effect, $item, have } from "libram";

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
const peppermintGroup: candySet = [{ candy: $item`peppermint twist`, count: 1 }];
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
const transforms = new Map<Item, candySet>([
  [$item`peppermint sprout`, peppermintGroup],
  [$item`sugar sheet`, sugarGroup],
]); // Cyclical references will break searching, no keys allowed in the candySets!

export function testSynthesize(): void {
  print("Testing sweet synthesis");
  // Generate sets of candies to test with
  const candies = {
    [candyType.complex]: <candySet>[],
    [candyType.simple]: <candySet>[],
  };
  candies.complex = [
    { candy: $item`bag of many confections`, count: 1 },
    { candy: $item`licorice boa`, count: 1 },
    { candy: $item`sugar sheet`, count: 1 },
    { candy: $item`Crimbo candied pecan`, count: 3 },
    { candy: $item`peppermint sprout`, count: 3 },
  ];
  candies.simple = [{ candy: $item`Chubby and Plump bar`, count: 1 }];
  const targetEffects = [
    $effect`Synthesis: Collection`,
    $effect`Synthesis: Learning`,
    $effect`Synthesis: Smart`,
  ];
  print("Searching for effects:");
  for (const target of targetEffects) print(`${target}`);
  const reserved = new Map<Item, number>([[$item`Ultra Mega Sour Ball`, 999999]]);
  const solution = simulate(targetEffects, candies, reserved);
  if (!solution.result) throw `Could not find solution for sweet synthesis test`;
  for (const pair of solution.pairs) {
    print(`Synthesis: ${pair[0]}:${toInt(pair[0]) % 5} and ${pair[1]}:${toInt(pair[1]) % 5}`);
  }
}

/**
 * Search for candy pairs that satisfy all chosen Sweet Synthesis effects and then cast them all.
 *
 * Return true after obtaining all effects.
 *
 * Return false if not all effects can be obtained before casting.
 * @param targetEffects Array of effects to search for and cast.
 * @param reserveCandies Set of candies that will not be used. Always includes Ultra Mega Sour Ball.
 */
export function synthesize(targetEffects: Effect[], reserveCandies: Set<Item>): boolean {
  if (targetEffects.length === 0) return true;
  const candies = {
    [candyType.complex]: <candySet>[],
    [candyType.simple]: <candySet>[],
  };
  const inv = getInventory();
  Object.entries(inv).forEach(([name, count]) => {
    const item = Item.get(name);
    candies[item.candyType as candyType]?.push({ candy: item, count: count });
  });
  const reserved = new Map<Item, number>(
    [...reserveCandies, $item`Ultra Mega Sour Ball`].map((r) => [r, 999999])
  );
  const solution = simulate(targetEffects, candies, reserved);
  if (!solution.result) return false;
  // Found a solution, now transform candies and synthesize
  for (const pair of solution.pairs) {
    for (const creatable of pair) {
      // source will be $item`none` if no ingredients
      const source = toItem(Object.keys(getIngredients(creatable))[0]);
      if (!have(creatable) && transforms.has(source)) create(creatable);
    }
    sweetSynthesis(pair[0], pair[1]);
  }
  return true;
}

type simulateResult = { result: boolean; pairs: [Item, Item][] };

function simulate(
  targetEffects: Effect[],
  candies: { complex: candySet; simple: candySet },
  reserveCandies: Map<Item, number>
): simulateResult {
  const sim: simulateResult = { result: true, pairs: [] };
  const used = new Map<Item, number>(reserveCandies);
  const markUsed = (item: Item) => used.set(item, 1 + (used.get(item) ?? 0));
  for (const target of targetEffects) {
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
  const NO_SOLUTION = { found: false, a: $item`none`, b: $item`none` };
  if (setA.length === 0 || setB.length === 0) return NO_SOLUTION;
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
  return NO_SOLUTION;
}
