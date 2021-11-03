import { holiday, pvpAttacksLeft, totalTurnsPlayed, visitUrl } from "kolmafia";
import { $item, $monster, get, prepareAscension } from "libram";

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

  if (checkVoteReady && (totalTurnsPlayed() + 60) % 11 !== 1) {
    const targetTurnBaseline = totalTurnsPlayed() + 60;
    const m = Math.floor((targetTurnBaseline - 1) / 11);
    const turns = 11 * (m + 1) + 1 - (totalTurnsPlayed() + 60);
    throw `Spend more ${turns} turns for voter monster`;
  }

  prepareAscension(
    {
      workshed: $item`diabolic pizza cube`,
      garden: $item`Peppermint Pip Packet`,
      eudora: $item`Our Daily Candles™ order form`,
    },
    {
      desk: $item`Swiss piggy bank`,
      ceiling: $item`ceiling fan`,
      nightstand: $item`foreign language tapes`,
    },
    true
  );
}
