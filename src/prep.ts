import { totalTurnsPlayed, holiday, myGardenType, getWorkshed } from "kolmafia";
import { $item, $monster, ChateauMantegna, have } from "libram";

export function checkReadyToAscend() {
  const badDays = [
    "El Dia de Los Muertos Borrachos",
    "Feast of Boris",
    "April Fool's Day",
    "Talk Like a Pirate Day",
  ];
  const holidays = holiday().split("/");
  const intersect = badDays.filter((day) => holidays.includes(day));
  if (intersect.length > 0) {
    throw `Don't want to ascend during ${holiday()}`;
  }
  const targetPaintingMon = $monster`Pterodactyl`;
  if (ChateauMantegna.paintingMonster() !== targetPaintingMon) {
    throw `Missing ${targetPaintingMon} in Chateau painting`;
  }

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend ${(totalTurnsPlayed() + 60 - 1) % 11} turns to prepare for the next voter monster`;
  }

  if (!myGardenType().toLowerCase().includes("peppermint")) {
    if (have($item`peppermint pip packet`)) {
      //use(1, $item`peppermint pip packet`);
    }
    throw `Need a peppermint garden installed`;
  }
  if (getWorkshed() !== $item`diabolic pizza cube`) {
    if (have($item`diabolic pizza cube`)) {
      //use(1, $item`diabolic pizza cube`);
    }
    throw `Need a diabolic pizza cube installed`;
  }
  return true;
}
