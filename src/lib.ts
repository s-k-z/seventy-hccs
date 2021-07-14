import {
  availableAmount,
  buy,
  cliExecute,
  containsText,
  getClanName,
  getIngredients,
  hermit,
  itemAmount,
  myMeat,
  runChoice,
  toInt,
  totalTurnsPlayed,
  use,
  visitUrl,
} from "kolmafia";
import { $item, get, have, set } from "libram";

export function acquireEffect(e: Effect) {
  if (!have(e)) cliExecute(e.default);
}

export function acquireGumOrHermitItem(i: Item) {
  const gum = $item`chewing gum on a string`;
  const source = Object.keys(getIngredients(i));
  if (source[0] === gum.name) {
    while (!have(i)) {
      if (myMeat() < 50) throw "Out of meat for chewing gums!!!";
      if (!have(gum)) buy(gum, 1);
      use(gum);
    }
  } else if (source[0] === $item`worthless item`.name) {
    if (have(i)) return;
    if (myMeat() < 50) throw "Out of meat for chewing gums!!!";
    buyUpTo(1, $item`hermit permit`);
    if (!hermit(i, 1)) throw `Failed to purchase ${i} from Hermit`;
  } else throw `${i} is not a gum or hermit item`;
}

export function buyUpTo(n: number, i: Item) {
  if (!have(i, n)) buy(i, n - availableAmount(i));
}

export function checkAvailable(i: Item, n: number = 1) {
  if (!have(i, n)) {
    throw `Why don't we have at least ${n} ${n > 1 ? i.plural : i} (id: ${toInt(i)})?`;
  }
}

export function checkEffect(e: Effect) {
  if (!have(e)) throw `Missing effect ${e}`;
}

export function checkFax(monster: Monster) {
  if (
    !containsText(
      visitUrl(`desc_item.php?whichitem=${$item`photocopied monster`.descid}`),
      `${monster}`
    )
  ) {
    throw "Error: grabbed wrong fax?";
  }
}

export function cookPizza(a: Item, b: Item, c: Item, d: Item) {
  const counts = new Map<Item, number>();
  [...arguments].forEach((f) => counts.set(f, 1 + (counts.get(f) || 0)));
  for (const [item, count] of counts) checkAvailable(item, count);
  visitUrl(`campground.php?action=makepizza&pizza=${toInt(a)},${toInt(b)},${toInt(c)},${toInt(d)}`);
}

export function shrugEffect(effect: Effect) {
  if (have(effect)) cliExecute(`shrug ${effect}`);
}

export function tryRunChoice(pageIndex: number, choiceID: number, goal: string) {
  if (!runChoice(pageIndex).includes(`whichchoice=${choiceID}`)) {
    const trim = goal.trim();
    throw `Error: failed to ${trim.charAt(0).toLowerCase()}${trim.slice(1)}`;
  }
}

export function tryUse(n: number, i: Item) {
  if (itemAmount(i) >= n) use(n, i);
}

export function tuple<T extends any[]>(...args: T): T {
  return args;
}

export function voterMonsterNow(): boolean {
  return totalTurnsPlayed() % 11 === 1;
}

export function whitelist(clan: string) {
  if (getClanName() !== clan) cliExecute(`/whitelist ${clan}`);
}

export function wishEffect(e: Effect) {
  if (!have(e)) cliExecute(`genie effect ${e}`);
}

export function withContext(func: Function, context: Map<string, number | string>) {
  const previous = new Map();
  const setPrefsTo = (c: Map<string, number | string>) => {
    for (const [prop, value] of c) set(prop, value);
  };
  for (const [prop] of context) previous.set(prop, get(prop));
  try {
    setPrefsTo(context);
    func();
  } finally {
    setPrefsTo(previous);
  }
}
