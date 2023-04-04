import { Quest, Task } from "grimoire-kolmafia";
import {
  currentRound,
  equip,
  Familiar,
  haveFamiliar,
  itemAmount,
  runChoice,
  runCombat,
  setAutoAttack,
  storageAmount,
  takeStorage,
  toUrl,
  use,
  visitUrl,
} from "kolmafia";
import {
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
  set,
} from "libram";
import { spendAllMpOnLibrams } from "../iotms";
import { assert } from "../lib";

function runChoices(...choices: number[]): void {
  for (const c of choices) runChoice(c);
}

export const DonateQuest: Quest<Task> = {
  name: "Donate Your Body to Science",
  completed: () => get("kingLiberated"),
  tasks: [
    {
      name: "Finish Rufus Quest",
      ready: () => get("questRufus") === "step1",
      completed: () => have($item`Rufus's shadow lodestone`),
      // Calling Rufus Back: (1) "Yes!" (6) Hang up
      choices: { 1498: 1 },
      do: () => use($item`closed-circuit pay phone`),
      post: () => {
        assert($item`Rufus's shadow lodestone`);
        assert(get("questRufus") === "unstarted", "Failed to finish Rufus quest?");
      },
    },
    {
      name: "Grab Comic",
      ready: () => storageAmount($item`Batfellow comic`) > 0,
      completed: () => itemAmount($item`Batfellow comic`) > 0 || get("_batfellowToday", false),
      do: () => takeStorage(1, $item`Batfellow comic`),
    },
    {
      name: "Enter the Batfellow",
      completed: () => !have($item`Batfellow comic`) || get("_batfellowToday", false),
      acquire: [{ item: $item`tiny stillsuit` }],
      prepare: () => {
        spendAllMpOnLibrams();
        Macro.skill($skill`Bat-Kick`)
          .repeat()
          .setAutoAttack();
      },
      choices: { 1133: 1 },
      do: () => use(1, $item`Batfellow comic`),
      post: () => set("_batfellowToday", true),
      outfit: () => {
        const stillFam = $familiar`Shorter-Order Cook`;
        equip(stillFam, $item`tiny stillsuit`);
        const myFams = Familiar.all().filter(
          (f) => !f.attributes.includes("pokefam") && haveFamiliar(f) && f !== stillFam
        );
        const randomFam = myFams[Math.floor(Math.random() * myFams.length)];
        assert(
          randomFam && randomFam !== $familiar`none` && haveFamiliar(randomFam),
          "Failed to select a valid familiar?"
        );
        return { familiar: randomFam };
      },
    },
    {
      name: "Get Extra-Swishy Cloak",
      ready: () => get("batmanFundsAvailable") > 0,
      completed: () => get("batmanUpgrades").includes("Extra-Swishy Cloak"),
      choices: { 1136: 0, 1137: 0 },
      do: () => {
        visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
        /*
          1: Bat-Suit upgrades
          3: Extra-Swishy Cloak (Always get the jump)
          11: Back to Main R&D Menu
          6: Stop Researching and Developing
        */
        runChoices(1, 3, 11, 6);
      },
    },
    {
      name: "Get Surveillance Network",
      ready: () => get("batmanFundsAvailable") > 0,
      completed: () => get("batmanUpgrades").includes("Surveillance Network"),
      choices: { 1136: 0, 1139: 0 },
      do: () => {
        visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
        /*
          3: Bat-Cavern upgrades
          4: Surveillance Network (Fights cost 1 minute less)
          11: Back to Main R&D Menu
          6: Stop Researching and Developing
        */
        runChoices(3, 4, 11, 6);
      },
    },
    {
      name: "Get Transfusion Satellite",
      ready: () => get("batmanFundsAvailable") > 0,
      completed: () => get("batmanUpgrades").includes("Transfusion Satellite"),
      choices: { 1136: 0, 1139: 0 },
      do: () => {
        visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
        /*
          3: Bat-Cavern upgrades
          3: Transfusion Satellite (Restore 5 HP at the end of combat)
          11: Back to Main R&D Menu
          6: Stop Researching and Developing
        */
        runChoices(3, 3, 11, 6);
      },
    },
    {
      name: "Get Rocket Booster",
      ready: () => get("batmanFundsAvailable") > 0,
      completed: () => get("batmanUpgrades").includes("Rocket Booster"),
      choices: { 1136: 0, 1138: 0 },
      do: () => {
        visitUrl("place.php?whichplace=batman_cave&action=batman_cave_rnd");
        /*
          2: Bat-Sedan Upgrades
          1: Rocket Booster (Reduce travel time by 5 minutes)
          11: Back to Main R&D Menu
          6: Stop Researching and Developing
        */
        runChoices(2, 1, 11, 6);
      },
    },
    {
      name: "Go to Center Park",
      ready: () => get("batmanTimeLeft") >= 4,
      completed: () => get("batmanZone") === "Center Park (Low Crime)",
      choices: { 1135: 0 },
      do: () => {
        visitUrl("place.php?whichplace=batman_cave&action=batman_cave_car");
        runChoice(5); // Center Park
      },
    },
    {
      name: "Fight a common criminal",
      completed: () => get("batmanTimeLeft") < 4,
      do: () => {
        while (get("batmanTimeLeft") >= 4) {
          visitUrl(toUrl($location`Center Park After Dark`));
          if (currentRound() > 0)
            runCombat(
              Macro.skill($skill`Bat-Kick`)
                .repeat()
                .toString()
            );
        }
      },
    },
    {
      name: "End Comic",
      completed: () => get("batmanZone").includes("Gotpork City"),
      choices: { 1134: 1 },
      do: () => {
        visitUrl("place.php?whichplace=batman_park&action=batman_park_car");
        runChoice(9); // EJECT
        setAutoAttack(0);
      },
    },
    {
      name: "Donate",
      completed: () => get("kingLiberated"),
      do: () => CommunityService.donate(),
    },
  ],
};
