import { totalTurnsPlayed, holiday, myGardenType, getWorkshed } from "kolmafia";
import { $item, $monster, ChateauMantegna } from "libram";

export function checkReadyToAscend() {
  const badDays = [
    "El Dia De Los Muertos Borrachos",
    "Feast of Boris",
    "April Fool's Day",
    "Talk Like a Pirate Day",
  ];
  const today = holiday().split("/");
  const badDayToday = badDays.some((day) => today.includes(day));
  if (badDayToday) throw `Don't want to ascend during ${holiday()}`;
  const targetPaintingMon = $monster`Pterodactyl`;
  if (ChateauMantegna.paintingMonster() !== targetPaintingMon) {
    throw `Missing ${targetPaintingMon} in Chateau painting`;
  }

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend ${(totalTurnsPlayed() + 60 - 1) % 11} turns to prepare for the next voter monster`;
  }

  if (!myGardenType().toLowerCase().includes("peppermint")) {
    throw `Need a peppermint garden installed`;
  }
  if (getWorkshed() !== $item`diabolic pizza cube`) {
    throw `Need a diabolic pizza cube installed`;
  }
  return true;
}
