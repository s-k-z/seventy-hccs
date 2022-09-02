import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $effects, $item, $items, CommunityService } from "libram";
import { runTest } from "./shared";

export const HPQuest: Quest<Task> = {
  name: "Donate Blood",
  completed: () => CommunityService.HP.isDone(),
  tasks: [
    {
      name: "HP Test",
      completed: () => CommunityService.HP.isDone(),
      do: () => runTest(CommunityService.HP),
      effects: $effects`Song of Starch`,
      outfit: {
        hat: $items`extra-wide head candle, wad of used tape`,
        back: $item`vampyric cloake`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`Cargo Cultist Shorts`,
      },
    },
  ],
};

export const MoxieQuest: Quest<Task> = {
  name: "Feed Conspirators",
  completed: () => CommunityService.Moxie.isDone(),
  tasks: [
    {
      name: "Moxie Test",
      completed: () => CommunityService.Moxie.isDone(),
      prepare: () => cliExecute("retrocape moxie"),
      do: () => runTest(CommunityService.Moxie),
      effects: $effects`Disco Fever, Expert Oiliness, Quiet Desperation, Sparkly!, Spit Upon`,
      outfit: {
        hat: $item`very pointy crown`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`unbreakable umbrella`,
        acc1: $item`your cowboy boots`,
        acc2: $item`Beach Comb`,
        acc3: $item`"I Voted!" sticker`,
      },
    },
  ],
};

export const MuscleQuest: Quest<Task> = {
  name: "Feed The Children (But Not Too Much)",
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [
    {
      name: "Muscle Test",
      completed: () => CommunityService.Muscle.isDone(),
      prepare: () => cliExecute("retrocape muscle"),
      do: () => runTest(CommunityService.Muscle),
      effects: [
        $effect`Expert Oiliness`,
        $effect`Giant Growth`,
        $effect`Phorcefullness`,
        $effect`Quiet Determination`,
        $effect`Rage of the Reindeer`,
        $effect`Spit Upon`,
      ],
      outfit: {
        hat: $item`wad of used tape`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`dented scepter`,
        offhand: $item`unbreakable umbrella`,
        acc1: $item`Brutal brogues`,
        acc3: $item`"I Voted!" sticker`,
      },
    },
  ],
};

export const MysticalityQuest: Quest<Task> = {
  name: "Build Playground Mazes",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Mysticality Test",
      completed: () => CommunityService.Mysticality.isDone(),
      prepare: () => cliExecute("retrocape myst"),
      do: () => runTest(CommunityService.Mysticality),
      effects: $effects`Nanobrainy, Quiet Judgement, Spit Upon, Witch Breaded`,
      outfit: {
        hat: $item`wad of used tape`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        acc1: $item`battle broom`,
        acc3: $item`"I Voted!" sticker`,
      },
    },
  ],
};
