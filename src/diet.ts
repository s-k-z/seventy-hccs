import { cliExecute, create, eat, equip, use, useFamiliar, useSkill, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, $skill, $slot, have } from "libram";
import { acquireEffect, acquireGumOrHermitItem, buyUpTo, cookPizza, tuple } from "./lib";

const recipes = new Map<Item, Function>([
  [
    $item`bugged balaclava`,
    () => {
      useFamiliar($familiar`Baby Bugged Bugbear`);
      visitUrl("arena.php");
      cliExecute(`fold ${$item`bugged balaclava`}`);
    },
  ],

  [
    $item`blood-faced volleyball`,
    () => {
      acquireGumOrHermitItem($item`seal tooth`);
      acquireGumOrHermitItem($item`volleyball`);
      acquireEffect($effect`Bloody Hand`);
      use($item`volleyball`);
    },
  ],

  [
    $item`cog and sprocket assembly`,
    () => {
      cliExecute(`make ${$item`cog and sprocket assembly`}`);
    },
  ],

  [
    $item`dripping meat crossbow`,
    () => {
      acquireGumOrHermitItem($item`catsup`);
      cliExecute(`make ${$item`dripping meat crossbow`}`);
    },
  ],

  [
    $item`hot buttered roll`,
    () => {
      acquireGumOrHermitItem($item`hot buttered roll`);
    },
  ],

  [
    $item`perfect dark and stormy`,
    () => {
      useSkill($skill`Perfect Freeze`);
      create($item`perfect dark and stormy`);
    },
  ],

  [
    $item`ravioli hat`,
    () => {
      acquireGumOrHermitItem($item`ravioli hat`);
    },
  ],

  [
    $item`useless powder`,
    () => {
      buyUpTo(1, $item`tenderizing hammer`);
      buyUpTo(1, $item`cool whip`);
      cliExecute(`pulverize 1 ${$item`cool whip`}`);
    },
  ],

  [
    $item`wooden figurine`,
    () => {
      acquireGumOrHermitItem($item`wooden figurine`);
    },
  ],
]);

const diabolicPizzas = {
  bureaucratized: {
    effect: $effect`Bureaucratized`,
    equip: $item`none`, // Don't equip the licorice boa
    familiar: $familiar`Peppermint Rhino`,
    ingredients: tuple(
      $item`bugged balaclava`,
      $item`useless powder`,
      $item`ravioli hat`,
      $item`eyedrops of the ermine`
    ),
  },

  chorale: {
    effect: $effect`Chorale of Companionship`,
    equip: $item`dromedary drinking helmet`,
    familiar: $familiar`Melodramedary`,
    ingredients: tuple(
      $item`chiptune guitar`,
      $item`hot buttered roll`,
      $item`ointment of the occult`,
      $item`ravioli hat`
    ),
  },

  downWithChow: {
    effect: $effect`Down With Chow`,
    equip: $item`Pocket Professor memory chip`,
    familiar: $familiar`Pocket Professor`,
    ingredients: tuple(
      $item`dripping meat crossbow`,
      $item`ointment of the occult`,
      $item`wooden figurine`,
      $item`blood-faced volleyball`
    ),
  },

  optimistPrimal: {
    effect: $effect`Optimist Primal`,
    equip: $item`cracker`,
    familiar: $familiar`Exotic Parrot`,
    ingredients: tuple(
      $item`oil of expertise`,
      $item`perfect dark and stormy`,
      $item`blood-faced volleyball`,
      $item`cog and sprocket assembly`
    ),
  },
};

// Conveniently going to eat all the pizzas in one sitting,
// otherwise could split some out into another object for later
export function eatPizzas() {
  for (const pizza of Object.values(diabolicPizzas)) {
    if (!have(pizza.effect)) {
      for (const ingredient of pizza.ingredients) {
        if (!have(ingredient)) {
          const recipe = recipes.get(ingredient);
          if (!recipe) throw `Missing recipe for ${ingredient}`;
          recipe();
        }
      }
      useFamiliar(pizza.familiar);
      cookPizza(...pizza.ingredients);
      eat($item`Diabolic pizza`);
      equip($slot`familiar`, pizza.equip);
    }
  }
}
