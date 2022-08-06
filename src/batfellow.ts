import { itemAmount, myHp, print, runChoice, takeStorage, use, visitUrl } from "kolmafia";
import { $item, $location, $skill, get, have, Macro } from "libram";
import { adventure } from "./combat";

export function batfellow() {
  const comic = $item`Batfellow comic`;
  if (!have(comic)) print("No comics found in inventory or storage?");
  if (itemAmount(comic) < 1 && !takeStorage(1, comic)) throw `Missing batfellow comic?`;
  use(comic); // Batfellow Begins
  runChoice(1); // Read the comic
  visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
  /*
    1: Bat-Suit upgrades
    3: Extra-Swishy Cloak (Always get the jump)
    11: Back to Main R&D Menu
    3: Bat-Cavern upgrades
    4: Surveillance Network (Fights cost 1 minute less)
    11: Back to Main R&D Menu
    6: Stop Researching and Developing
  */
  for (const c of [1, 3, 11, 3, 4, 11, 6]) runChoice(c);
  visitUrl("place.php?whichplace=batman_cave&action=batman_cave_car");
  runChoice(5); // Center Park
  while (myHp() > 0 && get("batmanTimeLeft") >= 4) {
    adventure($location`Center Park After Dark`, new Macro().skill($skill`Bat-Kick`).repeat());
  }
  visitUrl("place.php?whichplace=batman_park&action=batman_park_car");
  runChoice(9); // EJECT
  runChoice(1); // Batfellow Ends
}
