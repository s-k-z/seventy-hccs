import {
  buy,
  cliExecute,
  containsText,
  equip,
  equippedItem,
  getIngredients,
  hermit,
  myMeat,
  retrieveItem,
  toInt,
  totalTurnsPlayed,
  use,
  visitUrl,
} from "kolmafia";
import { $item, get, have, set } from "libram";

export function acquireEffect(e: Effect): void {
  if (!have(e) && e.default.startsWith("cargo")) throw `Can't obtain ${e}?`;
  if (!have(e)) cliExecute(e.default);
}

export function acquireGumOrHermitItem(i: Item): void {
  const gum = $item`chewing gum on a string`;
  const source = Object.keys(getIngredients(i));
  if (source[0] === gum.name) {
    while (!have(i)) {
      if (myMeat() < 50) throw "Out of meat for chewing gums!!!";
      if (!have(gum)) buy(gum, 1);
      use(gum);
    }
  } else if (source[0] === "worthless item") {
    if (have(i)) return;
    if (myMeat() < 50) throw "Out of meat for chewing gums!!!";
    retrieveItem($item`hermit permit`);
    if (!hermit(i, 1)) throw `Failed to purchase ${i} from Hermit`;
  } else throw `${i} is not a gum or hermit item`;
}

export function checkAvailable(i: Item, n = 1): void {
  if (!have(i, n)) {
    throw `Why don't we have at least ${n} ${n > 1 ? i.plural : i} (id: ${toInt(i)})?`;
  }
}

export function checkEffect(e: Effect): void {
  if (!have(e)) throw `Missing effect ${e}`;
}

export function checkFax(monster: Monster): void {
  const id = $item`photocopied monster`.descid;
  if (!containsText(visitUrl(`desc_item.php?whichitem=${id}`), `${monster}`)) {
    throw "Error: grabbed wrong fax?";
  }
}

export function shrugEffect(effect: Effect): void {
  if (have(effect)) cliExecute(`shrug ${effect}`);
}

export function tryUse(i: Item, n = 1): void {
  if (have(i, n)) use(i, n);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tuple<T extends any[]>(...args: T): T {
  return args;
}

export function voterMonsterNow(): boolean {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}

export function wishEffect(e: Effect): void {
  if (!have(e)) cliExecute(`genie effect ${e}`);
}

type propertyPair = [string, string | number | boolean];
export function withContext(callback: () => void, context: propertyPair[]): void {
  const previous = context.map(([prop]): propertyPair => [prop, get(prop)]);
  const setProps = (p: propertyPair[]) => p.forEach(([prop, value]) => set(prop, value));
  setProps(context);
  try {
    callback();
  } finally {
    setProps(previous);
  }
}

type slottedItem = [Slot, Item];
export function withEquipment(callback: () => void, equips: slottedItem[]): void {
  const previous = equips.map(([slot]): slottedItem => [slot, equippedItem(slot)]);
  const equipAll = (o: slottedItem[]) => o.forEach(([slot, item]) => equip(slot, item));
  equipAll(equips);
  try {
    callback();
  } finally {
    equipAll(previous);
  }
}
