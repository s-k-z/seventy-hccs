import {
  eudoraItem,
  getWorkshed,
  holiday,
  myGardenType,
  totalTurnsPlayed,
  visitUrl,
} from "kolmafia";
import { $item, $monster, ChateauMantegna, get } from "libram";

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
  const notFound = () => get("banishedMonsters").match(`(.+)?${banish}:ice house.+`) === null;
  if (notFound()) visitUrl("museum.php?action=icehouse");
  if (notFound()) throw `Need to ice house ${banish}`;

  if (!myGardenType().toLowerCase().includes("peppermint")) throw `Install a peppermint garden`;

  if (getWorkshed() !== $item`diabolic pizza cube`) throw `Install a diabolic pizza cube`;

  if (eudoraItem() !== $item`New-You Club Membership Form`) throw `Select New-You Club for Eudora`;
  //if( eudoraItem() !== $item`Our Daily Candles™ order form`) throw `Select Daily Candles for Eudora`;

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend ${(totalTurnsPlayed() + 60 - 1) % 11} turns to prepare a voter monster`;
  }
}
