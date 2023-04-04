import {
  cliExecute,
  Effect,
  effectModifier,
  Item,
  numericModifier,
  Skill,
  totalTurnsPlayed,
  use,
} from "kolmafia";
import { get, have } from "libram";

export function assert(expectTrue: Effect | Item | Skill): void;
export function assert(expectTrue: boolean, messageIfFalse: string): void;
export function assert(expectTrue: Effect | Item | Skill | boolean, messageIfFalse?: string): void {
  if (typeof expectTrue === "boolean") {
    if (!expectTrue) throw messageIfFalse ?? "Unknown error";
    return;
  }
  if (!have(expectTrue)) throw `Missing ${expectTrue}`;
}

export function acquireEffect(e: Effect): void {
  assert(have(e) || !e.default.startsWith("cargo"), `Can't obtain ${e}?`);
  if (!have(e)) cliExecute(e.default);
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
export function tuple<T extends any[]>(...args: T): Readonly<T> {
  return args;
}

export function voterMonsterNow(): boolean {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
