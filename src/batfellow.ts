import { itemAmount, runChoice, setAutoAttack, takeStorage, toUrl, use, visitUrl } from "kolmafia";
import { $item, $location, $skill, get, Macro } from "libram";
import { withContext } from "./lib";

const choiceAdventures = [
  [1133, 1], // Batfellow Begins
  [1134, 1], // Batfellow Ends
  [1135, 0], // The Bat-Sedan
  [1136, 0], // Bat-Research and Bat-Development
  [1137, 0], // Bat-Suit Upgrades
  [1138, 0], // Bat-Sedan Upgrades
  [1139, 0], // Bat-Cavern Upgrades
].map(([id, value]): [string, number] => [`choiceAdventure${id}`, value]);

export function batfellow() {
  withContext(runBatfellow, choiceAdventures);
}

function runBatfellow() {
  const comic = $item`Batfellow comic`;
  if (itemAmount(comic) < 1 && !takeStorage(1, comic)) throw `Missing batfellow comic?`;
  new Macro().skill($skill`Bat-Kick`).setAutoAttack();
  use(1, comic); // Batfellow Begins
  visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
  /*
    1: Bat-Suit upgrades
    3: Extra-Swishy Cloak (Always get the jump)
    11: Back to Main R&D Menu
    2: Bat-Sedan Upgrades (Reduce travel time by 5 minutes)
    1: Rocket Booster
    11: Back to Main R&D Menu
    3: Bat-Cavern upgrades
    4: Surveillance Network (Fights cost 1 minute less)
    11: Back to Main R&D Menu
    6: Stop Researching and Developing
  */
  for (const c of [1, 3, 11, 2, 1, 11, 3, 4, 11, 6]) runChoice(c);
  visitUrl("place.php?whichplace=batman_cave&action=batman_cave_car");
  runChoice(5); // Center Park
  while (get("batmanTimeLeft") >= 4) visitUrl(toUrl($location`Center Park After Dark`));
  visitUrl("place.php?whichplace=batman_park&action=batman_park_car");
  runChoice(9); // EJECT
  setAutoAttack(0);
}
