import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $familiar, $item, $location, CommunityService, have } from "libram";
import { FoamForceCombat } from "../combat";
import { runTest } from "./shared";

export const HotResistQuest: Quest<Task> = {
  name: "Clean Steam Tunnels",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Fireproof Foam Suit",
      completed: () => have($effect`Fireproof Foam Suit`),
      do: $location`The Dire Warren`,
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        familiar: $familiar`Machine Elf`,
      },
      combat: FoamForceCombat,
    },
    {
      name: "Hot Resist Test",
      after: ["Fireproof Foam Suit"],
      completed: () => CommunityService.HotRes.isDone(),
      prepare: () => {
        cliExecute("parka pterodactyl");
        cliExecute("retrocape vampire hold");
      },
      do: () => runTest(CommunityService.HotRes),
      effects: [
        $effect`Astral Shell`,
        $effect`Elemental Saucesphere`,
        $effect`Empathy`,
        $effect`Fireproof Foam Suit`,
      ],
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        pants: $item`designer sweatpants`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        famequip: $item`cracker`,
        familiar: $familiar`Exotic Parrot`,
      },
    },
  ],
};
