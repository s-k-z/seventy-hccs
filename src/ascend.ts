import {
  canInteract,
  equippedItem,
  Item,
  myPath,
  print,
  pvpAttacksLeft,
  Slot,
  totalTurnsPlayed,
  userConfirm,
  visitUrl,
} from "kolmafia";
import { $class, $item, $path, $slot, ascend, have, Lifestyle, prepareAscension } from "libram";
import { config } from "./config";

export function isReadyToContinue(): boolean {
  if (myPath() === $path`Community Service`) return true;

  const inWrongPath = !canInteract();
  if (inWrongPath) {
    print("Nope", "red");
    return false;
  }

  const bootsReady = (
    [
      [$slot`bootspur`, $item`nicksilver spurs`],
      [$slot`bootskin`, $item`mountain lion skin`],
    ] as [Slot, Item][]
  ).every(([slot, item]) => equippedItem(slot) === item);
  if (!bootsReady) {
    print("Equip your cowboy boots with nicksilver spurs and mountain lion skin", "red");
    return false;
  }

  if (!config.nofites && pvpAttacksLeft() > 0) {
    print("Spend your pvp fites", "red");
    return false;
  }

  const voterPreCoilNotReady = totalTurnsPlayed() % 11 !== 1;
  const voterPostCoilNotReady = (totalTurnsPlayed() + 60) % 11 !== 1;
  if (!config.novote && voterPreCoilNotReady && voterPostCoilNotReady) {
    const turnsA = 11 - (((totalTurnsPlayed() % 11) + 10) % 11);
    const turnsB = 11 - ((((totalTurnsPlayed() + 60) % 11) + 10) % 11);
    print(`Spend more ${turnsA} or ${turnsB} turns for voter monster`, "red");
    return false;
  }

  if (config.noprompt || userConfirm(`Ready to Ascend into Community Service?`)) return true;

  return false;
}

export function prepareToAscend() {
  if (myPath() !== $path`Community Service`) {
    prepareAscension({
      garden: "packet of rock seeds",
      eudora: "Our Daily Candles™ order form",
      chateau: {
        desk: "Swiss piggy bank",
      },
      throwOnFail: true,
    });
  }
}

export function prepAndAscendIfNecessary() {
  if (myPath() !== $path`Community Service`) {
    prepareToAscend();
    visitUrl("council.php");
    visitUrl("charsheet.php");

    const toPerm = new Map(
      (config.skills_to_perm ?? []).filter((s) => have(s)).map((s) => [s, Lifestyle.hardcore])
    );

    ascend(
      $path`Community Service`,
      $class`Sauceror`,
      Lifestyle.hardcore,
      "platypus",
      $item`astral six-pack`,
      $item`astral statuette`,
      {
        permSkills: toPerm,
        neverAbort: true,
      }
    );
  }
}
