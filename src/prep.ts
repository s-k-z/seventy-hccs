import { holiday, pvpAttacksLeft, totalTurnsPlayed, visitUrl } from "kolmafia";
import { $monster, get, prepareAscension } from "libram";

export function checkReadyToAscend(checkVoteReady: boolean): void {
  const badDays = ["april fool's day"];
  const today = holiday().split("/");
  const badDayToday = today.some((day) => badDays.includes(day.toLowerCase()));
  if (badDayToday) throw `Don't want to ascend during ${holiday()}`;

  const banish = $monster`Perceiver of Sensations`;
  const notFound = () => !get("banishedMonsters").toLowerCase().includes(banish.name.toLowerCase());
  if (notFound()) visitUrl("museum.php?action=icehouse");
  if (notFound()) throw `Need to ice house ${banish}`;

  if (pvpAttacksLeft() > 0) throw `Spend your pvp fites`;

  const voterPreCoilNotReady = totalTurnsPlayed() % 11 !== 1;
  const voterPostCoilNotReady = (totalTurnsPlayed() + 60) % 11 !== 1;
  if (checkVoteReady && voterPreCoilNotReady && voterPostCoilNotReady) {
    const turnsA = 11 - (((totalTurnsPlayed() % 11) + 10) % 11);
    const turnsB = 11 - ((((totalTurnsPlayed() + 60) % 11) + 10) % 11);
    throw `Spend more ${turnsA} or ${turnsB} turns for voter monster`;
  }

  prepareAscension({
    workshed: "diabolic pizza cube",
    garden: "Peppermint Pip Packet",
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "Swiss piggy bank",
      ceiling: "ceiling fan",
      nightstand: "foreign language tapes",
    },
    throwOnFail: true,
  });
}
