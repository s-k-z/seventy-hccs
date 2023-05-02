import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { equip, Item, itemAmount, use, weightAdjustment } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  CommunityService,
  have,
  Macro,
} from "libram";
import { assert, itemToEffect } from "../lib";
import { runTest } from "./shared";

export const FamiliarWeightQuest: Quest<Task> = {
  name: "Breed More Collies",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Meteor Showered",
      completed: () => have($effect`Meteor Showered`),
      do: $location`The Dire Warren`,
      post: () => assert($effect`Meteor Showered`),
      outfit: { weapon: $item`Fourth of May Cosplay Saber`, familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy()
        .ccs(
          `skill ${$skill`Meteor Shower`}
        twiddle your thumbs
        skill ${$skill`Use the Force`}`,
          $monster`toothless mastiff bitch`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Familiar Weight Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      prepare: () => {
        equip($slot`Familiar`, $item`homemade robot gear`);
        const needMore = (): boolean => weightAdjustment() < 190;
        const useIfUnused = (i: Item): void => {
          if (have(i) && !have(itemToEffect(i))) use(i);
        };
        if (needMore()) useIfUnused($item`green candy heart`);
        if (needMore()) useIfUnused($item`resolution: be kinder`);
        const librams: [number, Item][] = [
          [4, $item`love song of icy revenge`],
          [5, $item`pulled blue taffy`],
        ];
        librams.forEach(([n, i]) => {
          if (needMore()) use(Math.min(n, itemAmount(i)), i);
        });
      },
      do: () => runTest(CommunityService.FamiliarWeight),
      effects: [
        $effect`A Girl Named Sue`,
        $effect`Billiards Belligerence`,
        $effect`Blood Bond`,
        $effect`Do I Know You From Somewhere?`,
        $effect`Empathy`,
        $effect`Human-Machine Hybrid`,
        $effect`Human-Fish Hybrid`,
        $effect`Leash of Linguini`,
        $effect`Meteor Showered`,
        $effect`Open Heart Surgery`,
        $effect`Puzzle Champ`,
        $effect`Robot Friends`,
        $effect`Shortly Stacked`,
        $effect`Shrimpin' Ain't Easy`,
        $effect`You Can Really Taste the Dormouse`,
      ],
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, rope, familiar scrapbook`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Comma Chameleon`,
      },
    },
  ],
};
