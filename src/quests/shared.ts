import { OutfitSpec, Task } from "grimoire-kolmafia";
import { cliExecute, Familiar, myLevel, visitUrl } from "kolmafia";
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
import { DefaultCombat } from "../combat";
import { config } from "../config";
import { assert, haveItemOrEffect } from "../lib";
import { printModtrace } from "libram/dist/modifier";

const statLookup = new Map<string, string | string[]>([
  ["Be a Living Statue", "Combat Rate"],
  ["Build Playground Mazes", "Mysticality Percent"],
  ["Donate Blood", ["Maximum HP", "Maximum HP Percent"]],
  ["Feed Conspirators", "Moxie Percent"],
  ["Feed The Children", "Muscle Percent"],
  ["Make Margaritas", ["Item Drop", "Booze Drop"]],
  ["Make Sausage", ["Spell Damage", "Spell Damage Percent"]],
  ["Reduce Gazelle Population", ["Weapon Damage", "Weapon Damage Percent"]],
]);

export function runTest(test: CommunityService): void {
  const coilWire = test.name === "Coil Wire";
  if (coilWire) visitUrl("council.php");
  else printModtrace(statLookup.get(test.name) ?? test.statName);
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

export function selectBestFamiliar(canAttack = true): OutfitSpec {
  // prettier-ignore
  for (const [fam, check] of [
    [$familiar`Melodramedary`,      () => !have($effect`Spit Upon`) && get("camelSpit") < 100],
    [$familiar`Shorter-Order Cook`, () => !haveItemOrEffect($item`short stack of pancakes`)],
    [$familiar`Garbage Fire`,       () => !$items`rope, burning newspaper, burning paper crane`.some((i) => have(i))],
    [$familiar`Artistic Goth Kid`,  () => get("_hipsterAdv") < 7],
  ] as [Familiar, () => boolean][]) {
    const attacks = fam.physicalDamage || fam.elementalDamage;
    if ((canAttack || !attacks) && check()) {
      return { familiar: fam, famequip: attacks ? $item`none` : $item`tiny stillsuit` };
    }
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
