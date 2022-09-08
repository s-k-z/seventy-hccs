import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  have,
  Macro,
} from "libram";
import { runTest } from "./shared";

export const ItemDropQuest: Quest<Task> = {
  name: "Make Margaritas",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Become a Bat",
      completed: () => have($effect`Bat-Adjacent Form`),
      do: $location`The Dire Warren`,
      effects: $effects`Ode to Booze`,
      outfit: {
        back: $item`vampyric cloake`,
        familiar: $familiar`Frumious Bandersnatch`,
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Become a Bat`).runaway()),
    },
    {
      name: "Booze & Item Drop Test",
      after: ["Become a Bat"],
      completed: () => CommunityService.BoozeDrop.isDone(),
      prepare: () => cliExecute("umbrella item"),
      do: () => runTest(CommunityService.BoozeDrop),
      effects: [
        $effect`Bat-Adjacent Form`,
        $effect`Blessing of the Bird`,
        $effect`Blessing of your favorite Bird`,
        $effect`Cosmic Ball in the Air`,
        $effect`Ermine Eyes`,
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        $effect`Hustlin'`,
        $effect`items.enh`,
        $effect`Lantern-Charged`,
        $effect`Nearly All-Natural`,
        $effect`Singer's Faithful Ocelot`,
        $effect`Steely-Eyed Squint`,
        $effect`The Spirit of Taking`,
        $effect`Uncucumbered`,
      ],
      outfit: {
        hat: $item`wad of used tape`,
        back: $item`vampyric cloake`,
        weapon: [
          $item`extra-large utility candle`,
          $item`novelty sparkling candle`,
          $item`runed taper candle`,
          $item`oversized sparkler`,
          $item`none`,
        ],
        offhand: $item`unbreakable umbrella`,
        acc1: $item`Guzzlr tablet`,
        acc2: $item`gold detective badge`,
        acc3: $item`your cowboy boots`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
      },
    },
  ],
};
