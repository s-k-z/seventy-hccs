import { cliExecute, create, eat, equip, use, useFamiliar, useSkill, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, $skill, $slot, have } from "libram";
import { acquireEffect, acquireGumOrHermitItem, buyUpTo, cookPizza, tuple } from "./lib";

const recipes: Record<string, () => void> = {
  "bugged balaclava": () => {
    useFamiliar($familiar`Baby Bugged Bugbear`);
    visitUrl("arena.php");
    cliExecute(`fold ${$item`bugged balaclava`}`);
  },

  "blood-faced volleyball": () => {
    acquireGumOrHermitItem($item`seal tooth`);
    acquireGumOrHermitItem($item`volleyball`);
    acquireEffect($effect`Bloody Hand`);
    use($item`volleyball`);
  },

  "chiptune guitar": () => {
    throw `Unable to acquire ${$item`chiptune guitar`} for pizza`;
  },

  "cog and sprocket assembly": () => {
    cliExecute(`make ${$item`cog and sprocket assembly`}`);
  },

  "dripping meat crossbow": () => {
    acquireGumOrHermitItem($item`catsup`);
    cliExecute(`make ${$item`dripping meat crossbow`}`);
  },

  "eyedrops of the ermine": () => {
    throw `Unable to acquire ${$item`eyedrops of the ermine`} for pizza`;
  },

  "hot buttered roll": () => {
    acquireGumOrHermitItem($item`hot buttered roll`);
  },

  "oil of expertise": () => {
    throw `Unable to acquire ${$item`oil of expertise`} for pizza`;
  },

  "ointment of the occult": () => {
    throw `Unable to acquire ${$item`ointment of the occult`} for pizza`;
  },

  "perfect dark and stormy": () => {
    useSkill($skill`Perfect Freeze`);
    create($item`perfect dark and stormy`);
  },

  "ravioli hat": () => {
    acquireGumOrHermitItem($item`ravioli hat`);
  },

  "useless powder": () => {
    buyUpTo(1, $item`tenderizing hammer`);
    buyUpTo(1, $item`cool whip`);
    cliExecute(`pulverize 1 ${$item`cool whip`}`);
  },

  "wooden figurine": () => {
    acquireGumOrHermitItem($item`wooden figurine`);
  },
};
Object.keys(recipes).forEach((itemName) => {
  if (Item.get(itemName).name !== itemName) {
    throw `Bad item name in pizza recipes: ${itemName}`;
  }
});

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
for (const pizza of Object.values(diabolicPizzas)) {
  for (const ingredient of pizza.ingredients) {
    if (!Object.keys(recipes).includes(ingredient.name)) {
      throw `Missing recipe for ${ingredient}`;
    }
  }
}

// Conveniently going to eat all the pizzas in one sitting,
// otherwise could split some out into another object for later
export function eatPizzas() {
  for (const pizza of Object.values(diabolicPizzas)) {
    if (!have(pizza.effect)) {
      for (const ingredient of pizza.ingredients) {
        if (!have(ingredient)) {
          recipes[`${ingredient}` as keyof typeof recipes]();
        }
      }
      useFamiliar(pizza.familiar);
      cookPizza(...pizza.ingredients);
      eat($item`Diabolic pizza`);
      equip($slot`familiar`, pizza.equip);
    }
  }
}
