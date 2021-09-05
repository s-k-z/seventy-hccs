import { holiday, totalTurnsPlayed, visitUrl } from "kolmafia";
import { $item, $monster, ChateauMantegna, get, prepareAscension } from "libram";

export function checkReadyToAscend(): void {
  const badDays = [
    "el dia de los muertos borrachos",
    "feast of boris",
    "april fool's day",
    "talk like a pirate day",
  ];
  const today = holiday().split("/");
  const badDayToday = today.some((day) => badDays.includes(day.toLowerCase()));
  if (badDayToday) throw `Don't want to ascend during ${holiday()}`;

  const target = $monster`pterodactyl`;
  if (ChateauMantegna.paintingMonster() !== target) throw `Missing ${target} in Chateau painting`;

  const banish = $monster`Perceiver of Sensations`;
  const notFound = () => !get("banishedMonsters").toLowerCase().includes(banish.name.toLowerCase());
  if (notFound()) visitUrl("museum.php?action=icehouse");
  if (notFound()) throw `Need to ice house ${banish}`;

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend more turns for voter monster`;
  }

  prepareAscension(
    {
      workshed: $item`diabolic pizza cube`,
      garden: $item`Peppermint Pip Packet`,
      eudora: $item`New-You Club Membership Form`,
    },
    {
      desk: $item`Swiss piggy bank`,
      ceiling: $item`ceiling fan`,
      nightstand: $item`foreign language tapes`,
    },
    true
  );
}
