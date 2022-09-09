import {
  canInteract,
  holiday,
  isBanished,
  myPath,
  print,
  pvpAttacksLeft,
  totalTurnsPlayed,
  userConfirm,
  visitUrl,
} from "kolmafia";
import { $class, $item, $monster, $path, ascend, Lifestyle, prepareAscension } from "libram";

export function isReadyToContinue(skipFites: boolean, skipVote: boolean): boolean {
  if (myPath() === $path`Community Service`) return true;

  const inWrongPath = !canInteract();
  if (inWrongPath) {
    print("Nope", "red");
    return false;
  }

  const badDays = ["april fool's day"];
  const today = holiday().split("/");
  const badDayToday = today.some((day) => badDays.includes(day.toLowerCase()));
  if (badDayToday) {
    print(`Don't want to ascend during ${holiday()}`, "red");
    return false;
  }

  const banish = $monster`Perceiver of Sensations`;
  const found = () => isBanished(banish);
  if (!found()) visitUrl("museum.php?action=icehouse");
  if (!found()) {
    print(`Need to ice house ${banish}`, "red");
    return false;
  }

  if (!skipFites && pvpAttacksLeft() > 0) {
    print("Spend your pvp fites", "red");
    return false;
  }

  const voterPreCoilNotReady = totalTurnsPlayed() % 11 !== 1;
  const voterPostCoilNotReady = (totalTurnsPlayed() + 60) % 11 !== 1;
  if (!skipVote && voterPreCoilNotReady && voterPostCoilNotReady) {
    const turnsA = 11 - (((totalTurnsPlayed() % 11) + 10) % 11);
    const turnsB = 11 - ((((totalTurnsPlayed() + 60) % 11) + 10) % 11);
    print(`Spend more ${turnsA} or ${turnsB} turns for voter monster`, "red");
    return false;
  }

  if (!userConfirm(`Ready to Ascend into Community Service?`)) return false;

  return true;
}

export function prepAndAscendIfNecessary() {
  if (myPath() !== $path`Community Service`) {
    prepareAscension({
      workshed: "Little Geneticist DNA-Splicing Lab",
      garden: "Peppermint Pip Packet",
      eudora: "Our Daily Candles™ order form",
      chateau: {
        desk: "Swiss piggy bank",
        ceiling: "ceiling fan",
        nightstand: "foreign language tapes",
      },
      throwOnFail: true,
    });
    ascend(
      $path`Community Service`,
      $class`Sauceror`,
      Lifestyle.hardcore,
      "wallaby",
      $item`astral six-pack`,
      $item`astral trousers`
    );
  }
}
