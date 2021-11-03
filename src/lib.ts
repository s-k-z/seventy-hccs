import {
  cliExecute,
  effectModifier,
  equip,
  equippedItem,
  holiday,
  toInt,
  totalTurnsPlayed,
  use,
} from "kolmafia";
import { get, have, set } from "libram";

export function acquireEffect(e: Effect): void {
  if (!have(e) && e.default.startsWith("cargo")) throw `Can't obtain ${e}?`;
  if (!have(e)) cliExecute(e.default);
}

export function checkAvailable(i: Item, n = 1): void {
  if (!have(i, n)) {
    throw `Why don't we have at least ${n} ${n > 1 ? i.plural : i} (id: ${toInt(i)})?`;
  }
}

export function checkEffect(e: Effect): void {
  if (!have(e)) throw `Missing effect ${e}`;
}

export function isHolidayWandererDay(): boolean {
  const holidays = ["el dia de los muertos borrachos", "feast of boris", "talk like a pirate day"];
  const today = holiday().split("/");
  const wandererToday = today.some((day) => holidays.includes(day.toLowerCase()));
  return wandererToday;
}

export function itemToEffect(i: Item): Effect {
  return effectModifier(i, "effect");
}

export function shrugEffect(effect: Effect): void {
  if (have(effect)) cliExecute(`shrug ${effect}`);
}

export function tryUse(i: Item): void {
  if (have(i)) use(i);
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
