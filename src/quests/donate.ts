import { Quest, Task } from "grimoire-kolmafia";
import {
  Familiar,
  haveFamiliar,
  itemAmount,
  runChoice,
  setAutoAttack,
  storageAmount,
  takeStorage,
  toFamiliar,
  toUrl,
  use,
  visitUrl,
} from "kolmafia";
import { $familiar, $item, $location, $skill, CommunityService, get, have, Macro } from "libram";
import { config } from "../config";

export const BatfellowTask: Task = {
  name: "Enter the Batfellow",
  completed: () => !have($item`Batfellow comic`) || get("lastEncounter") === "Batfellow Ends",
  choices: { 1133: 1, 1134: 1, 1135: 0, 1136: 0, 1137: 0, 1138: 0, 1139: 0 },
  prepare: () => Macro.skill($skill`Bat-Kick`).setAutoAttack(),
  do: () => {
    use(1, $item`Batfellow comic`); // Batfellow Begins
    visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
    /*
      1: Bat-Suit upgrades
      3: Extra-Swishy Cloak (Always get the jump)
      11: Back to Main R&D Menu
      2: Bat-Sedan Upgrades
      1: Rocket Booster (Reduce travel time by 5 minutes)
      11: Back to Main R&D Menu
      3: Bat-Cavern upgrades
      3: Transfusion Satellite (Restore 5 HP at the end of combat)
      4: Surveillance Network (Fights cost 1 minute less)
      11: Back to Main R&D Menu
      6: Stop Researching and Developing
    */
    for (const c of [1, 3, 11, 2, 1, 11, 3, 3, 4, 11, 6]) runChoice(c);
    visitUrl("place.php?whichplace=batman_cave&action=batman_cave_car");
    runChoice(5); // Center Park
    while (get("batmanTimeLeft") >= 4) visitUrl(toUrl($location`Center Park After Dark`));
    visitUrl("place.php?whichplace=batman_park&action=batman_park_car");
    runChoice(9); // EJECT
  },
  post: () => setAutoAttack(0),
  outfit: () => {
    const stillSuitFam = toFamiliar(config.stillsuit);
    const myFams = Familiar.all().filter(
      (f) => !f.attributes.includes("pokefam") && haveFamiliar(f) && f !== stillSuitFam
    );
    const randomFam = myFams[Math.floor(Math.random() * myFams.length)];
    if (!randomFam || randomFam === $familiar`none` || !haveFamiliar(randomFam)) {
      throw "Failed to select a valid familiar?";
    }
    return { familiar: randomFam };
  },
};

export const DonateQuest: Quest<Task> = {
  name: "Donate Your Body to Science",
  completed: () => get("kingLiberated"),
  tasks: [
    {
      name: "Grab Comic",
      ready: () => storageAmount($item`Batfellow comic`) > 0,
      completed: () => itemAmount($item`Batfellow comic`) > 0,
      do: () => takeStorage(1, $item`Batfellow comic`),
    },
    BatfellowTask,
    {
      name: "Donate",
      completed: () => get("kingLiberated"),
      do: () => CommunityService.donate(),
    },
  ],
};
