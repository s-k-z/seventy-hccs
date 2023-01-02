import {
  cliExecute,
  Effect,
  effectModifier,
  Item,
  numericModifier,
  toInt,
  totalTurnsPlayed,
  use,
} from "kolmafia";
import { get, have } from "libram";

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

export function effectDuration(i: Item): number {
  return numericModifier(i, "effect duration");
}

export function itemToEffect(i: Item): Effect {
  return effectModifier(i, "effect");
}

export function haveItemOrEffect(i: Item): boolean {
  return have(i) || have(itemToEffect(i));
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
