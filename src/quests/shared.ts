import { OutfitSpec, Task } from "grimoire-kolmafia";
import {
  cliExecute,
  elementalResistance,
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
import { assert, haveItemOrEffect } from "../lib";

export function refreshGhost(): void {
  visitUrl("questlog.php?which=1");
  assert(!!get("ghostLocation"), `Failed to get protonic ghost notice`);
}

export function runTest(test: CommunityService): void {
  const coilWire = test.name === "Coil Wire";
  if (coilWire) visitUrl("council.php");
  switch (test.run(() => undefined, coilWire ? 60 : 1)) {
    case "completed":
      assert(
        get("csServicesPerformed").includes(test.name),
        `Did not record completion of ${test.name}`
      );
      return;
    case "already completed":
      throw `Re-ran test ${test.statName}`;
    case "failed":
      throw `Failed test ${test.statName}`;
    default:
      throw `Unexpected test result`;
  }
}

export const enum AdvReq {
  NoAttack,
  Normal,
}

export function selectBestFamiliar(req = AdvReq.Normal): OutfitSpec {
  if (!have($effect`Spit Upon`) && get("camelSpit") < 100) {
    return { familiar: $familiar`Melodramedary`, famequip: $item`tiny stillsuit` };
  }

  const pancake = $item`short stack of pancakes`;
  if (req === AdvReq.Normal && !haveItemOrEffect(pancake)) {
    return { familiar: $familiar`Shorter-Order Cook`, famequip: $item`none` };
  }

  if (!$items`rope, burning newspaper, burning paper crane`.some((i) => have(i))) {
    return { familiar: $familiar`Garbage Fire`, famequip: $item`tiny stillsuit` };
  }

  if (req === AdvReq.Normal && !have($item`tiny bottle of absinthe`)) {
    return { familiar: $familiar`Green Pixie`, famequip: $item`none` };
  }

  return { familiar: $familiar`Baby Sandworm`, famequip: $item`tiny stillsuit` };
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
    assert(resist > 0, `invalid resist value ${resist} calculated`);
    const maxMultiplier = 4;
    return myMaxhp() * maxMultiplier * resist;
  };

  return {
    name: "Deep Dark Visions",
    ready: () => myMaxhp() > 500,
    completed: () => have($effect`Visions of the Deep Dark Deeps`),
    do: () => {
      assert(myMaxhp() > safeHpLimit(), "Not enough HP for deep dark visions");
      if (myHp() < myMaxhp()) useSkill(Math.ceil(myMaxhp() / myHp()), $skill`Cannelloni Cocoon`);
      assert(myHp() > safeHpLimit(), "Failed to heal enough for Deep Dark Visions?");
      useSkill($skill`Deep Dark Visions`);
    },
    post: () => {
      assert($effect`Visions of the Deep Dark Deeps`);
      useSkill(Math.ceil(myMaxhp() / myHp()), $skill`Cannelloni Cocoon`);
    },
    outfit: {
      back: $item`unwrapped knock-off retro superhero cape`,
      shirt: $item`Jurassic Parka`,
      weapon: $item`Fourth of May Cosplay Saber`,
      offhand: $items`burning paper crane, unbreakable umbrella`,
      pants: $item`pantogram pants`,
      acc3: $item`Kremlin's Greatest Briefcase`,
      familiar: $familiar`Exotic Parrot`,
      modes: { parka: "ghostasaurus", retrocape: ["vampire", "hold"] },
    },
  };
}

export function innerElf(): Task {
  return {
    name: "Inner Elf",
    ready: () => myLevel() >= 13,
    completed: () => have($effect`Inner Elf`),
    prepare: () => {
      assert(get("_snokebombUsed") < 3, "Can't banish Mother Slime?");
      Clan.join(config.side_clan);
    },
    choices: { 326: 1 }, // Showdown: (1) fight mother slime (2) leave
    do: $location`The Slime Tube`,
    post: () => {
      Clan.join(config.main_clan);
      assert($effect`Inner Elf`);
    },
    outfit: { acc3: $item`Kremlin's Greatest Briefcase`, familiar: $familiar`Machine Elf` },
    combat: DefaultCombat,
  };
}
