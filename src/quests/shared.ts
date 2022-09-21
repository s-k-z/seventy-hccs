import { Task } from "grimoire-kolmafia";
import {
  cliExecute,
  elementalResistance,
  Familiar,
  myHp,
  myLevel,
  myMaxhp,
  useSkill,
  visitUrl,
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

export function refreshGhost(verify = true): void {
  visitUrl("questlog.php?which=1");
  if (verify && !get("ghostLocation")) throw `Failed to get protonic ghost notice`;
}

export function runTest(test: CommunityService): void {
  const famWeight = test.statName === "Familiar Weight";
  if (famWeight && test.actualCost() > 1) throw `Can't do ${test.statName} in 1 turn?`;
  const coilWire = test.name === "Coil Wire";
  const err = test.run(() => undefined, coilWire || famWeight ? 60 : 1);
  // prettier-ignore
  const handler = {
    "completed":         () => { return },
    "already completed": () => { throw `Re-ran test ${test.statName}`; },
    "failed":            () => { throw `Failed test ${test.statName}`; },
  }[err];
  handler();
}

export const enum AdvReq {
  NoAttack,
  Normal,
  Toxic,
  Wine,
}

export function selectBestFamiliar(req: AdvReq = AdvReq.Normal): Familiar {
  const wine = $item`1950 Vampire Vintner wine`;
  if (req === AdvReq.Wine && !haveItemOrEffect(wine)) return $familiar`Vampire Vintner`;

  if (req === AdvReq.Toxic && get("_hipsterAdv") < 7) return $familiar`Artistic Goth Kid`;

  const pancake = $item`short stack of pancakes`;
  if (req === AdvReq.Normal && !haveItemOrEffect(pancake)) return $familiar`Shorter-Order Cook`;

  const absinthe = $item`tiny bottle of absinthe`;
  if (req === AdvReq.Normal && !haveItemOrEffect(absinthe)) return $familiar`Green Pixie`;

  if (!$items`rope, burning newspaper, burning paper crane`.some((i) => have(i)))
    return $familiar`Garbage Fire`;

  return $familiar`Baby Sandworm`;
}

export function darkHorse(): Task {
  return {
    name: "Dark Horse",
    completed: () => get("_horsery").toLowerCase() === "dark horse",
    do: () => cliExecute("horsery dark"),
  };
}

export function deepDarkVisions(): Task {
  const safeHpLimit = (): number => {
    const resist = 1 - elementalResistance($element`spooky`) / 100;
    if (resist <= 0) throw `invalid resist value ${resist} calculated?`;
    const maxMultiplier = 4;
    return myMaxhp() * maxMultiplier * resist;
  };

  return {
    name: "Deep Dark Visions",
    ready: () => myMaxhp() > 500,
    completed: () => have($effect`Visions of the Deep Dark Deeps`),
    prepare: () => {
      cliExecute("parka spooky");
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
}

export function innerElf(): Task {
  return {
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
}

export function tuneMoonPlatypus(): Task {
  return {
    name: "Tune Moon",
    completed: () => get("moonTuned"),
    do: () => tuneMoon(MoonSign.Platypus),
  };
}
