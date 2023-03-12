import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  CommunityService,
  have,
  Macro,
} from "libram";
import { assert } from "../lib";
import { runTest } from "./shared";

export const HotResistQuest: Quest<Task> = {
  name: "Clean Steam Tunnels",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Fireproof Foam Suit",
      completed: () => have($effect`Fireproof Foam Suit`),
      do: $location`The Dire Warren`,
      post: () => assert($effect`Fireproof Foam Suit`),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        familiar: $familiar`Machine Elf`,
      },
      combat: new CombatStrategy()
        .ccs(
          `skill ${$skill`Fire Extinguisher: Foam Yourself`}
          twiddle your thumbs
          skill ${$skill`Use the Force`}`,
          $monster`fluffy bunny`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Hot Resist Test",
      completed: () => CommunityService.HotRes.isDone(),
      do: () => runTest(CommunityService.HotRes),
      effects: [
        $effect`Astral Shell`,
        $effect`Blood Bond`,
        $effect`Elemental Saucesphere`,
        $effect`Empathy`,
        $effect`Fireproof Foam Suit`,
        $effect`Leash of Linguini`,
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
        familiar: $familiar`Exotic Parrot`,
        modes: { parka: "pterodactyl", retrocape: ["vampire", "hold"] },
      },
    },
  ],
};
