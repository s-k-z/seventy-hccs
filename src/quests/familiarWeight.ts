import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { autosell, chew, drink, Item, itemAmount, use, weightAdjustment } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $monster,
  $skill,
  CommunityService,
  have,
  Macro,
} from "libram";
import { reminisce } from "libram/dist/resources/2022/CombatLoversLocket";
import { MoonSign, tuneMoon } from "../iotms";
import { acquireEffect, itemToEffect } from "../lib";
import { runTest } from "./shared";

export const FamiliarWeightQuest: Quest<Task> = {
  name: "Breed More Collies",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Meteor Showered",
      completed: () => have($effect`Meteor Showered`),
      do: () => reminisce($monster`toothless mastiff bitch`),
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
        const haveUnused = (i: Item): boolean => have(i) && !have(itemToEffect(i));
        if (needMore() && haveUnused($item`resolution: be kinder`)) {
          use($item`resolution: be kinder`);
        }
        if (needMore() && haveUnused($item`green candy heart`)) use($item`green candy heart`);
        const librams: [number, Item][] = [
          [4, $item`love song of icy revenge`],
          [5, $item`pulled blue taffy`],
        ];
        librams.forEach(([n, i]) => {
          if (needMore()) use(Math.min(n, itemAmount(i)), i);
        });
        if (needMore()) {
          acquireEffect($effect`Ode to Booze`);
          drink($item`1950 Vampire Vintner wine`); // 3-5 adventures, 1 drunk
        }
        tuneMoon(MoonSign.Platypus);
        if (needMore() && have($item`abstraction: joy`)) chew($item`abstraction: joy`);
        if (needMore()) {
          autosell(1, $item`space blanket`); // +5000 meat
          drink($item`Hot Socks`);
        }
      },
      do: () => runTest(CommunityService.FamiliarWeight),
      effects: [
        $effect`A Girl Named Sue`,
        $effect`All Is Forgiven`,
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
