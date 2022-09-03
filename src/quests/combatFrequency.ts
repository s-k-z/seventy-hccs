import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $familiar, $item, CommunityService } from "libram";
import { darkHorse, runTest } from "./shared";

export const CombatFrequencyQuest: Quest<Task> = {
  name: "Be a Living Statue",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    darkHorse,
    {
      name: "Non-Combat Frequency Test",
      completed: () => CommunityService.Noncombat.isDone(),
      prepare: () => {
        cliExecute("parka pterodactyl");
        cliExecute("umbrella nc");
      },
      do: () => runTest(CommunityService.Noncombat),
      effects: [
        $effect`Feeling Lonely`,
        $effect`Silence of the God Lobster`,
        $effect`Silent Running`,
        $effect`Smooth Movements`,
        $effect`The Sonata of Sneakiness`,
        $effect`Throwing Some Shade`,
      ],
      outfit: {
        hat: $item`very pointy crown`,
        back: $item`protonic accelerator pack`,
        shirt: $item`Jurassic Parka`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`pantogram pants`,
        acc2: $item`atlas of local maps`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Disgeist`,
      },
    },
  ],
};
