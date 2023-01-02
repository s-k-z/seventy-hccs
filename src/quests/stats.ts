import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $effects, $item, $items, CommunityService } from "libram";
import { runTest } from "./shared";

export const HPQuest: Quest<Task> = {
  name: "Donate Blood",
  tasks: [
    {
      name: "HP Test",
      completed: () => CommunityService.HP.isDone(),
      prepare: () => cliExecute("parka hp"),
      do: () => runTest(CommunityService.HP),
      acquire: [{ item: $item`wad of used tape` }],
      effects: $effects`Song of Starch`,
      outfit: {
        hat: $items`extra-wide head candle, wad of used tape`,
        back: $item`vampyric cloake`,
        shirt: $item`Jurassic Parka`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`Cargo Cultist Shorts`,
      },
    },
  ],
};

export const MoxieQuest: Quest<Task> = {
  name: "Feed Conspirators",
  tasks: [
    {
      name: "Moxie Test",
      completed: () => CommunityService.Moxie.isDone(),
      prepare: () => cliExecute("retrocape moxie"),
      do: () => runTest(CommunityService.Moxie),
      effects: $effects`Disco Fever, Quiet Desperation, Sparkly!`,
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
  tasks: [
    {
      name: "Muscle Test",
      completed: () => CommunityService.Muscle.isDone(),
      prepare: () => cliExecute("retrocape muscle"),
      do: () => runTest(CommunityService.Muscle),
      acquire: [{ item: $item`wad of used tape` }],
      effects: [$effect`Giant Growth`, $effect`Quiet Determination`, $effect`Rage of the Reindeer`],
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
  tasks: [
    {
      name: "Mysticality Test",
      completed: () => CommunityService.Mysticality.isDone(),
      prepare: () => cliExecute("retrocape myst"),
      do: () => runTest(CommunityService.Mysticality),
      acquire: [{ item: $item`wad of used tape` }],
      effects: $effects`Nanobrainy, Quiet Judgement, Witch Breaded`,
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
