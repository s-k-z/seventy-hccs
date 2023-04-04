import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { Item, itemAmount, use, weightAdjustment } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  CommunityService,
  have,
  Macro,
} from "libram";
import { reminisce } from "libram/dist/resources/2022/CombatLoversLocket";
import { mapMonster } from "../combat";
import { wishMonkey } from "../iotms";
import { assert, itemToEffect, tryUse } from "../lib";
import { runTest } from "./shared";

export const FamiliarWeightQuest: Quest<Task> = {
  name: "Breed More Collies",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Meteor Showered",
      completed: () => have($effect`Meteor Showered`),
      prepare: () => tryUse($item`tiny bottle of absinthe`),
      do: () => {
        const target = $monster`toothless mastiff bitch`;
        have($effect`Absinthe-Minded`)
          ? mapMonster($location`The Stately Pleasure Dome`, target)
          : reminisce(target);
      },
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
        const needMore = (): boolean => weightAdjustment() < 275;
        const useIfUnused = (i: Item): void => {
          if (have(i) && !have(itemToEffect(i))) use(i);
        };
        if (needMore()) useIfUnused($item`resolution: be kinder`);
        if (needMore()) useIfUnused($item`green candy heart`);
        const librams: [number, Item][] = [
          [4, $item`love song of icy revenge`],
          [5, $item`pulled blue taffy`],
        ];
        librams.forEach(([n, i]) => {
          if (needMore()) use(Math.min(n, itemAmount(i)), i);
        });
        if (needMore()) wishMonkey($effect`All Is Forgiven`);
        if (needMore()) wishMonkey($effect`Bureaucratized`);
        if (needMore()) wishMonkey($effect`Healthy Green Glow`);
      },
      do: () => runTest(CommunityService.FamiliarWeight),
      effects: [
        $effect`[1701]Hip to the Jive`,
        $effect`A Girl Named Sue`,
        $effect`Billiards Belligerence`,
        $effect`Blood Bond`,
        $effect`Do I Know You From Somewhere?`,
        $effect`Empathy`,
        $effect`Fidoxene`,
        $effect`Human-Machine Hybrid`,
        $effect`Human-Fish Hybrid`,
        $effect`Leash of Linguini`,
        $effect`Loyal Tea`,
        $effect`Man's Worst Enemy`,
        $effect`Meteor Showered`,
        $effect`Open Heart Surgery`,
        $effect`Over-Familiar With Dactyls`,
        $effect`Puzzle Champ`,
        $effect`Robot Friends`,
        $effect`Shortly Stacked`,
        $effect`Shrimpin' Ain't Easy`,
        $effect`Whole Latte Love`,
        $effect`You Can Really Taste the Dormouse`,
      ],
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, rope, familiar scrapbook`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        famequip: $item`overloaded Yule battery`,
        familiar: $familiar`Mini-Trainbot`,
      },
    },
  ],
};
