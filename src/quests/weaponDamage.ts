import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute, use } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  CommunityService,
  have,
} from "libram";
import { MacroList, mapMonster } from "../combat";
import { innerElf, runTest, tuneMoonPlatypus } from "./shared";

export const WeaponDamageQuest: Quest<Task> = {
  name: "Reduce Gazelle Population",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    tuneMoonPlatypus,
    innerElf,
    {
      name: "Meteor Showered",
      after: ["Inner Elf"],
      completed: () => have($effect`Meteor Showered`),
      prepare: () => use($item`tiny bottle of absinthe`),
      do: () => mapMonster($location`The Stately Pleasure Dome`, $monster`toothless mastiff bitch`),
      post: () => use($item`disintegrating spiky collar`),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Machine Elf`,
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Weapon Damage Test",
      after: ["Inner Elf", "Meteor Showered"],
      completed: () => CommunityService.WeaponDamage.isDone(),
      prepare: () => cliExecute("umbrella weapon"),
      do: () => runTest(CommunityService.WeaponDamage),
      effects: [
        $effect`Billiards Belligerence`,
        $effect`Blessing of your favorite Bird`,
        $effect`Bow-Legged Swagger`,
        $effect`Carol of the Bulls`,
        $effect`Cowrruption`,
        $effect`Do You Crush What I Crush?`,
        $effect`Frenzied, Bloody`,
        $effect`Grumpy and Ornery`,
        $effect`In a Lather`,
        $effect`Inner Elf`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Lack of Body-Building`,
        $effect`Meteor Showered`,
        $effect`Rage of the Reindeer`,
        $effect`Ready to Survive`,
        $effect`Scowl of the Auk`,
        $effect`Song of the North`,
        $effect`Tenacity of the Snapper`,
        $effect`The Power of LOV`,
      ],
      outfit: {
        hat: $items`extra-wide head candle, none`,
        weapon: $item`dented scepter`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`astral trousers`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Powerful Glove`,
        famequip: $item`broken champagne bottle`,
        familiar: $familiar`Disembodied Hand`,
      },
    },
  ],
};