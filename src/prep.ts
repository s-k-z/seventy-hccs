import { totalTurnsPlayed, holiday, myGardenType, getWorkshed } from "kolmafia";
import { $item, $monster, ChateauMantegna } from "libram";

export function checkReadyToAscend() {
  const badDays = [
    "el dia de los muertos borrachos",
    "feast of boris",
    "april fool's day",
    "talk like a pirate day",
  ];
  const today = holiday().split("/");
  const badDayToday = today.some((day) => badDays.includes(day.toLowerCase()));
  if (badDayToday) throw `Don't want to ascend during ${holiday()}`;

  const target = $monster`Pterodactyl`;
  if (ChateauMantegna.paintingMonster() !== target) throw `Missing ${target} in Chateau painting`;

  if (!myGardenType().toLowerCase().includes("peppermint")) throw `Install a peppermint garden`;

  if (getWorkshed() !== $item`diabolic pizza cube`) throw `Install a diabolic pizza cube`;

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend ${(totalTurnsPlayed() + 60 - 1) % 11} turns to prepare a voter monster`;
  }
}
