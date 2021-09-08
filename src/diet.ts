import { cliExecute, eat, equip, retrieveItem, toInt, use, useFamiliar, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, $slot, have } from "libram";
import { acquireEffect, acquireGumOrHermitItem, checkAvailable, tuple } from "./lib";

const recipes = new Map<Item, () => void>([
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

  [$item`cog and sprocket assembly`, () => cliExecute(`make ${$item`cog and sprocket assembly`}`)],

  [
    $item`dripping meat crossbow`,
    () => {
      acquireGumOrHermitItem($item`catsup`);
      cliExecute(`make ${$item`dripping meat crossbow`}`);
    },
  ],

  [$item`hot buttered roll`, () => acquireGumOrHermitItem($item`hot buttered roll`)],
  [$item`perfect dark and stormy`, () => cliExecute(`make ${$item`perfect dark and stormy`}`)],
  [$item`ravioli hat`, () => acquireGumOrHermitItem($item`ravioli hat`)],

  [
    $item`useless powder`,
    () => {
      retrieveItem($item`tenderizing hammer`);
      retrieveItem($item`cool whip`);
      cliExecute(`pulverize ${$item`cool whip`}`);
    },
  ],

  [$item`wooden figurine`, () => acquireGumOrHermitItem($item`wooden figurine`)],
]);

const diabolicPizzas = {
  1: {
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

  2: {
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

  3: {
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

  4: {
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

export function eatPizzas(): void {
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
      eat($item`diabolic pizza`);
      equip($slot`familiar`, pizza.equip);
    }
  }
}

function cookPizza(a: Item, b: Item, c: Item, d: Item) {
  const counts = new Map<Item, number>();
  [a, b, c, d].forEach((f) => counts.set(f, 1 + (counts.get(f) ?? 0)));
  for (const [item, count] of counts) checkAvailable(item, count);
  visitUrl(`campground.php?action=makepizza&pizza=${toInt(a)},${toInt(b)},${toInt(c)},${toInt(d)}`);
}
