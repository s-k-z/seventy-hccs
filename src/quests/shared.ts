import { Task } from "grimoire-kolmafia";
import {
  cliExecute,
  elementalResistance,
  Familiar,
  myHp,
  myLevel,
  myMaxhp,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $element,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  Clan,
  CommunityService,
  get,
  have,
} from "libram";
import { DefaultCombat } from "../combat";
import { config } from "../config";
import { MoonSign, tuneMoon } from "../iotms";
import { haveItemOrEffect } from "../lib";

export function runTest(test: CommunityService): void {
  if (test.actualCost() > 1) throw `Can't do ${test.name} in 1 turn?`;
  const err = test.run(() => undefined);
  // prettier-ignore
  const handler = {
    "completed":         () => { return },
    "already completed": () => { throw `Re-ran test ${test.name}`; },
    "failed":            () => { throw `Failed test ${test.name}`; },
  }[err];
  handler();
  if (!test.verifyIsDone()) throw `Failed to actually do ${test.name}?`;
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

function safeHpLimit(): number {
  const resist = 1 - elementalResistance($element`spooky`) / 100;
  if (resist <= 0) throw `invalid resist value ${resist} calculated?`;
  const maxMultiplier = 4;
  return myMaxhp() * maxMultiplier * resist;
}

export const deepDarkVisions: Task = {
  name: "Deep Dark Visions",
  ready: () => myMaxhp() > 500,
  completed: () => have($effect`Visions of the Deep Dark Deeps`),
  prepare: () => {
    cliExecute("parka ghostasaurus");
    cliExecute("retrocape vampire hold");
  },
  do: () => {
    if (myMaxhp() < safeHpLimit()) throw `Not enough HP for deep dark visions`;
    if (myHp() < safeHpLimit()) cliExecute(`cast * ${$skill`Cannelloni Cocoon`}`);
    if (myHp() < safeHpLimit()) throw `Failed to heal enough for Deep Dark Visions?`;
    useSkill($skill`Deep Dark Visions`);
  },
  post: () => cliExecute(`cast * ${$skill`Cannelloni Cocoon`}`),
  outfit: {
    back: $item`unwrapped knock-off retro superhero cape`,
    shirt: $item`Jurassic Parka`,
    weapon: $item`Fourth of May Cosplay Saber`,
    offhand: $items`burning paper crane, unbreakable umbrella`,
    pants: $item`pantogram pants`,
    acc3: $item`Kremlin's Greatest Briefcase`,
    famequip: $item`cracker`,
    familiar: $familiar`Exotic Parrot`,
  },
};

export const innerElf: Task = {
  name: "Inner Elf",
  ready: () => myLevel() >= 13,
  completed: () => have($effect`Inner Elf`),
  prepare: () => {
    if (get("_snokebombUsed") >= 3) throw "Can't banish Mother Slime?";
    Clan.join(config.side_clan);
  },
  choices: { 326: 1 }, // Showdown: (1) fight mother slime (2) leave
  do: $location`The Slime Tube`,
  post: () => Clan.join(config.main_clan),
  outfit: { familiar: $familiar`Machine Elf` },
  combat: DefaultCombat,
};

export const tuneMoonPlatypus: Task = {
  name: "Tune Moon",
  completed: () => get("moonTuned"),
  do: () => tuneMoon(MoonSign.Platypus),
};
