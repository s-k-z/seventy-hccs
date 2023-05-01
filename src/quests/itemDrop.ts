import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
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
import { assert } from "../lib";
import { runTest } from "./shared";

export const ItemDropQuest: Quest<Task> = {
  name: "Make Margaritas",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Become a Bat",
      completed: () => have($effect`Bat-Adjacent Form`),
      prepare: () => assert($item`cosmic bowling ball`),
      do: $location`The Dire Warren`,
      post: () => $effects`Bat-Adjacent Form, Cosmic Ball in the Air`.forEach((e) => assert(e)),
      effects: $effects`Ode to Booze`,
      outfit: { back: $item`vampyric cloake`, familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Become a Bat`)
          .skill($skill`Bowl Straight Up`)
          .runaway()
      ),
    },
    {
      name: "Booze & Item Drop Test",
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () => runTest(CommunityService.BoozeDrop),
      acquire: [{ item: $item`wad of used tape` }],
      effects: [
        $effect`Bat-Adjacent Form`,
        $effect`Blessing of the Bird`,
        $effect`Blessing of your favorite Bird`,
        $effect`Cosmic Ball in the Air`,
        $effect`Crunching Leaves`,
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        $effect`Human-Pirate Hybrid`,
        $effect`items.enh`,
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
        // eslint-disable-next-line libram/verify-constants
        acc3: $item`Cincho de Mayo`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
        modes: { umbrella: "bucket style" },
      },
    },
  ],
};
