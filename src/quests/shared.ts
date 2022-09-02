import { CombatStrategy, Task } from "grimoire-kolmafia";
import { cliExecute, Familiar, myLevel } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  Clan,
  CommunityService,
  get,
  have,
} from "libram";
import { MacroList } from "../combat";
import { config } from "../config";
import { MoonSign, tuneMoon } from "../iotms";
import { haveItemOrEffect } from "../lib";

export function runTest(test: CommunityService): void {
  const err = test.run(() => undefined, 1);
  // prettier-ignore
  const handler = {
    "completed":         () => false,
    "already completed": () => { throw `Re-ran test ${test.name}`; },
    "failed":            () => { throw `Failed test ${test.name}`; },
  }[err];
  handler();
}

export const enum AdvReq {
  NoAttack,
  Toxic,
  Normal,
  Wine,
}

export function selectBestFamiliar(req: AdvReq = AdvReq.Normal): Familiar {
  const wine = $item`1950 Vampire Vintner wine`;
  if (req === AdvReq.Wine && !haveItemOrEffect(wine)) return $familiar`Vampire Vintner`;

  if (req === AdvReq.Toxic && get("_hipsterAdv") < 7) return $familiar`Artistic Goth Kid`;

  const pancake = $item`short stack of pancakes`;
  if (req >= AdvReq.Normal && !haveItemOrEffect(pancake)) return $familiar`Shorter-Order Cook`;

  const absinthe = $item`tiny bottle of absinthe`;
  if (req >= AdvReq.Normal && !haveItemOrEffect(absinthe)) return $familiar`Green Pixie`;

  if (!$items`rope, burning newspaper, burning paper crane`.some((i) => have(i)))
    return $familiar`Garbage Fire`;

  return $familiar`Baby Sandworm`;
}

export const darkHorse: Task = {
  name: "Dark Horse",
  completed: () => get("_horsery").toLowerCase() === "dark horse",
  do: () => cliExecute("horsery dark"),
};

export const innerElf: Task = {
  name: "Inner Elf",
  ready: () => myLevel() >= 13,
  completed: () => have($effect`Inner Elf`),
  prepare: () => Clan.join(config.side_clan),
  choices: { 326: 1 }, // Showdown: (1) fight mother slime (2) leave
  do: $location`The Slime Tube`,
  post: () => Clan.join(config.main_clan),
  outfit: { familiar: $familiar`Machine Elf` },
  combat: new CombatStrategy().macro(MacroList.Banish),
};

export const tuneMoonPlatypus: Task = {
  name: "Tune Moon",
  completed: () => get("moonTuned"),
  do: () => tuneMoon(MoonSign.Platypus),
};
