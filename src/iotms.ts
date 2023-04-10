import {
  Effect,
  fileToBuffer,
  haveEquipped,
  Item,
  itemAmount,
  mpCost,
  myClass,
  myMp,
  myPrimestat,
  retrieveItem,
  runChoice,
  Skill,
  toInt,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $class, $item, $skill, $stat, get, have } from "libram";
import { BRICKO_COST, BRICKO_DROP, BRICKO_TARGET_ITEM } from "./config";
import { assert, haveItemOrEffect } from "./lib";

export function castBestLibram(): void {
  const owned = itemAmount(BRICKO_TARGET_ITEM);
  const remainingFights = Math.max(0, 3 - get("_brickoFights"));
  const remainingDrops = Math.max(0, 2 - get("_brickoFights"));
  const need = BRICKO_COST * remainingFights - BRICKO_DROP * remainingDrops - owned;
  const wantBrickos = get("_brickoEyeSummons") < 3 || !have($item`BRICKO brick`, need);
  // prettier-ignore
  for (const [summon, check] of new Map<Skill, boolean>([
    [$skill`Summon BRICKOs`,      wantBrickos],
    [$skill`Summon Candy Heart`, !haveItemOrEffect($item`green candy heart`)],
    [$skill`Summon Love Song`,   !have($item`love song of icy revenge`, 4)],
    [$skill`Summon Resolutions`, get("_resolutionRareSummons") < 3],
  ])) {
    if (check) {
      useSkill(summon);
      return;
    }
  }
  useSkill($skill`Summon Taffy`);
}

export function getPantogramPants(): void {
  if (!have($item`portable pantogram`) || have($item`pantogram pants`)) return;
  const m = new Map([
    [$stat`Muscle`, 1],
    [$stat`Mysticality`, 2],
    [$stat`Moxie`, 3],
  ]).get(myPrimestat());
  enum element {
    hot = 1,
    cold = 2,
    spooky = 3,
    sleaze = 4,
    stench = 5,
  }
  const e = element.spooky;
  const s1 = "-2,0";
  const s2 = "-2,0"; // Spell Damage +20%
  const s3 = "-1,0"; // Monsters will be less attracted to you
  visitUrl(`inv_use.php?pwd=&whichitem=${toInt($item`portable pantogram`)}`);
  visitUrl(`choice.php?pwd=&whichchoice=1270&option=1&m=${m}&e=${e}&s1=${s1}&s2=${s2}&s3=${s3}`);
  assert($item`pantogram pants`);
}

export function harvestBatteries(): void {
  visitUrl(`inv_use.php?pwd=&whichitem=${toInt($item`potted power plant`)}`);
  for (let i = 0; i < 7; i++) {
    visitUrl(`choice.php?pwd=&whichchoice=1448&option=1&pp=${i + 1}`);
  }
}

export function scavengeDaycare(): void {
  visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!get("_daycareNap")) runChoice(1);
  if (get("_daycareGymScavenges") < 1) {
    runChoice(3);
    runChoice(2);
  }
}

export function spendAllMpOnLibrams(): void {
  while (myMp() > mpCost($skill`Summon BRICKOs`)) castBestLibram();
}

export const enum MoonSign {
  Mongoose = 1,
  Wallaby = 2,
  Vole = 3,
  Platypus = 4,
  Opossum = 5,
  Marmot = 6,
  Wombat = 7,
  Blender = 8,
  Packrat = 9,
}

export function tuneMoon(moon: MoonSign): void {
  if (haveEquipped($item`hewn moon-rune spoon`)) retrieveItem($item`hewn moon-rune spoon`);
  visitUrl(`inv_use.php?whichitem=${toInt($item`hewn moon-rune spoon`)}&doit=96&whichsign=${moon}`);
}

export function vote(): void {
  assert(myClass() === $class`Sauceror`, `Don't yet know how to run this as a ${myClass()}`);
  visitUrl("place.php?whichplace=town_right&action=townright_vote");
  visitUrl(`choice.php?pwd=&option=1&whichchoice=1331&g=2&local[]=1&local[]=3`);
  assert($item`"I Voted!" sticker`);
}

export function wish(effect: Effect): void {
  assert(!have(effect), `Already have ${effect}`);
  const data: { [key: string]: string } = JSON.parse(fileToBuffer("data/wish_descriptions.json"));
  const map = new Map(Object.entries(data).map(([key, val]) => [Effect.get(key), val]));
  const desc = map.get(effect);
  if (!desc) throw `Failed to find description text for ${effect}`;
  visitUrl(`inv_use.php?whichitem=${toInt($item`genie bottle`)}`);
  runChoice(1, `wish=to be ${desc}`);
  assert(effect);
}

export function wishMonkey(thing: Effect | Item): void {
  assert(!have(thing), `Already have ${thing}`);
  visitUrl("main.php?action=cmonk&pwd=");
  runChoice(1, `wish=${thing}`);
  visitUrl("main.php");
  assert(thing);
}
