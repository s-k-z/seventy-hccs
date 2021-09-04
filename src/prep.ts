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
  [
    [$item`ceiling fan`, ChateauMantegna.getCeiling],
    [$item`Swiss piggy bank`, ChateauMantegna.getDesk],
    [$item`foreign language tapes`, ChateauMantegna.getNightstand],
  ].forEach(([item, check]) => {
    if (check !== item) throw `Install ${item} in Chateau Mantegna`;
  });

  const banish = $monster`Perceiver of Sensations`;
  const notFound = () => !get("banishedMonsters").toLowerCase().includes(banish.name.toLowerCase());
  if (notFound()) visitUrl("museum.php?action=icehouse");
  if (notFound()) throw `Need to ice house ${banish}`;

  if (!myGardenType().toLowerCase().includes("peppermint")) throw `Install a peppermint garden`;

  if (getWorkshed() !== $item`diabolic pizza cube`) throw `Install a diabolic pizza cube`;

  if (eudoraItem() !== $item`New-You Club Membership Form`) throw `Select New-You Club for Eudora`;
  //if( eudoraItem() !== $item`Our Daily Candles™ order form`) throw `Select Daily Candles for Eudora`;

  if ((totalTurnsPlayed() + 60) % 11 !== 1) {
    throw `Spend some turns to prepare a voter monster`;
  }

  /*

    prepareAscension(
      {
        workshed: $item`diabolic pizza cube`,
        garden: $item`Peppermint Pip Packet`,
        eudora: $item`New-You Club Membership Form`,
      },
      {
        desk: $item`S ss piggy bank`,
        ceiling: $item`ceiling fan`,
        nightstand: $item`foreign language tapes`,
      },
      true
    );

  */
}
