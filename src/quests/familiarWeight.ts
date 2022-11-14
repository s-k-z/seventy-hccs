import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  cliExecute,
  drink,
  familiarWeight,
  haveEffect,
  itemAmount,
  myFamiliar,
  use,
  weightAdjustment,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  have,
  Macro,
} from "libram";
import { acquireEffect, itemToEffect } from "../lib";
import { runTest, tuneMoonPlatypus } from "./shared";

export const FamiliarWeightQuest: Quest<Task> = {
  name: "Breed More Collies",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    tuneMoonPlatypus(),
    {
      name: "Meteor Showered",
      completed: () => have($effect`Meteor Showered`),
      do: $location`The Dire Warren`,
      outfit: { weapon: $item`Fourth of May Cosplay Saber`, familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
      ),
    },
    {
      name: "Familiar Weight Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      prepare: () => {
        const loveSong = $item`love song of icy revenge`;
        const coldHeart = itemToEffect(loveSong);
        const icyWeight = Math.ceil(2.5 * Math.min(4, itemAmount(loveSong)));
        const loveSongSufficient =
          familiarWeight(myFamiliar()) + weightAdjustment() + icyWeight >= 295;
        const taffy = $item`pulled blue taffy`;
        const swayed = itemToEffect(taffy);
        const wine = $item`1950 Vampire Vintner wine`;
        const needWeight = () => familiarWeight(myFamiliar()) + weightAdjustment() < 295;
        if (needWeight() && !have(swayed) && have(taffy)) cliExecute(`use * ${taffy}`);
        if (needWeight() && !have(coldHeart) && loveSongSufficient) cliExecute(`use * ${loveSong}`);
        if (needWeight() && have(wine)) {
          acquireEffect($effect`Ode to Booze`);
          drink(wine); // 1 drunk
        }
        if (needWeight()) {
          while (have(loveSong) && haveEffect(coldHeart) < 20) {
            if (itemAmount(loveSong) * 5 + haveEffect(coldHeart) < 20)
              cliExecute("pillkeeper extend");
            use(loveSong);
          }
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
        $effect`[1701]Hip to the Jive`,
        $effect`Human-Machine Hybrid`,
        $effect`Human-Fish Hybrid`,
        $effect`Joy`,
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
        famequip: $item`cracker`,
        familiar: $familiar`Exotic Parrot`,
      },
    },
  ],
};
