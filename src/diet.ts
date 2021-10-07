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
  [$item`sprocket assembly`, () => cliExecute(`make ${$item`sprocket assembly`}`)],
  [$item`ravioli hat`, () => acquireGumOrHermitItem($item`ravioli hat`)],
  [$item`repeating crossbow`, () => cliExecute(`make ${$item`repeating crossbow`}`)],
  [$item`turtle totem`, () => acquireGumOrHermitItem($item`turtle totem`)],

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
    effect: $effect`Spit Upon`,
    equip: undefined, // Don't equip the licorice boa
    familiar: $familiar`Peppermint Rhino`,
    ingredients: tuple(
      $item`sprocket assembly`, // 38 meat
      $item`perfect dark and stormy`,
      $item`ironic moustache`,
      $item`turtle totem`
    ),
  },

  2: {
    effect: $effect`Bureaucratized`,
    equip: $item`Pocket Professor memory chip`,
    familiar: $familiar`Pocket Professor`,
    ingredients: tuple(
      $item`bugged balaclava`,
      $item`useless powder`, // 950 + 28 meat
      $item`ravioli hat`,
      $item`eyedrops of the ermine`
    ),
  },

  3: {
    effect: $effect`Down With Chow`,
    equip: $item`cracker`,
    familiar: $familiar`Exotic Parrot`,
    ingredients: tuple(
      $item`dripping meat crossbow`, // 195 meat
      $item`ointment of the occult`,
      $item`wooden figurine`,
      $item`blood-faced volleyball`
    ),
  },

  4: {
    effect: $effect`Chorale of Companionship`,
    equip: undefined,
    familiar: undefined,
    ingredients: tuple(
      $item`cog and sprocket assembly`, // 77 meat
      $item`hot buttered roll`,
      $item`ointment of the occult`,
      $item`repeating crossbow` // 495 meat
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
      if (pizza.familiar) useFamiliar(pizza.familiar);
      cookPizza(...pizza.ingredients);
      eat($item`diabolic pizza`);
      if (pizza.equip) equip($slot`familiar`, pizza.equip);
    }
  }
}

function cookPizza(a: Item, b: Item, c: Item, d: Item) {
  const counts = new Map<Item, number>();
  [a, b, c, d].forEach((f) => counts.set(f, 1 + (counts.get(f) ?? 0)));
  for (const [item, count] of counts) checkAvailable(item, count);
  visitUrl(`campground.php?action=makepizza&pizza=${toInt(a)},${toInt(b)},${toInt(c)},${toInt(d)}`);
}
