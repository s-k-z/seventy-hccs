import {
  effectModifier,
  mpCost,
  myClass,
  myHash,
  myMp,
  myPrimestat,
  print,
  toInt,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $class, $effect, $item, $skill, $stat, get, have, Macro, Witchess } from "libram";
import { BRICKOS_PER_FIGHT } from "./config";
import { setPropertyInt, tryRunChoice } from "./lib";

export function castBestLibram() {
  if (
    get("_brickoEyeSummons") < 3 ||
    !have($item`BRICKO brick`, BRICKOS_PER_FIGHT * (3 - get("_brickoFights")))
  ) {
    useSkill($skill`Summon BRICKOs`);
  } else if (!have($item`green candy heart`) && !have($effect`Heart of Green`)) {
    useSkill($skill`Summon Candy Heart`);
  } else if (!have($item`love song of icy revenge`)) {
    useSkill($skill`Summon Love Song`);
  } else if (!have($item`resolution: be kinder`) && !have($effect`Kindly Resolve`)) {
    useSkill($skill`Summon Resolutions`);
  } else if (!have($item`love song of icy revenge`, 2)) {
    useSkill($skill`Summon Love Song`);
  } else if (!have($item`pulled blue taffy`, 4)) {
    useSkill($skill`Summon Taffy`);
  } else {
    useSkill($skill`Summon Resolutions`);
  }
}

export function fightWitchess(piece: Monster, macro: Macro) {
  macro.setAutoAttack();
  Witchess.fightPiece(piece);
}

export function gazeAtTheStars() {
  while (get("_campAwaySmileBuffs") < 3) {
    visitUrl("place.php?whichplace=campaway&action=campaway_sky");
  }
}

export function getPantogramPants() {
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
  // -3 mp to use skills or +20 mp
  const s1 = have($item`baconstone`) ? `${toInt($item`baconstone`)},1` : "-2,0";
  const s2 = "-2,0"; // Spell Damage +20%
  const s3 = "-1,0"; // Monsters will be less attracted to you
  visitUrl(`inv_use.php?pwd=${myHash()}&whichitem=${toInt($item`portable pantogram`)}`);
  visitUrl(
    `choice.php?pwd=${myHash()}&whichchoice=1270&option=1&m=${m}&e=${e}&s1=${s1}&s2=${s2}&s3=${s3}`
  );
  if (!have($item`pantogram pants`)) throw "Failed to create pantogram pants";
}

export function harvestBatteries() {
  visitUrl(`inv_use.php?pwd=${myHash()}&whichitem=${toInt($item`potted power plant`)}`);
  for (let i = 0; i < 7; i++) {
    visitUrl(`choice.php?pwd=${myHash()}&whichchoice=1448&option=1&pp=${i + 1}`);
  }
}

export function scavengeDaycare() {
  visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!get("_daycareNap")) {
    tryRunChoice(1, 1334, "have a boxing daydream.");
  }
  if (get("_daycareGymScavenges") < 1) {
    tryRunChoice(3, 1334, "enter the gym.");
    tryRunChoice(2, 1336, "scavenge for gym equipment.");
    if (get("_daycareGymScavenges") < 1) {
      print("Incrementing daycare scavenges count", "red");
      setPropertyInt("_daycareGymScavenges", 1);
    }
  }
}

export function spendAllMpOnLibrams() {
  while (myMp() > mpCost($skill`Summon BRICKOs`)) {
    castBestLibram();
  }
}

export enum MoonSign {
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

export function tuneMoon(moon: MoonSign) {
  visitUrl(`inv_use.php?whichitem=${toInt($item`hewn moon-rune spoon`)}&doit=96&whichsign=${moon}`);
}

const libramDrops = new Map([
  [$item`green candy heart`, 1],
  [$item`pulled violet taffy`, 50],
  [$item`pulled yellow taffy`, 50],
  [$item`resolution: be feistier`, 1],
  [$item`resolution: be happier`, 1],
  [$item`resolution: be kinder`, 1],
  [$item`resolution: be luckier`, 1],
  [$item`resolution: be smarter`, 1],
  [$item`resolution: be wealthier`, 1],
]);

export function useLibramsDrops() {
  for (const [item, duration] of libramDrops) {
    while (have(item) && !have(effectModifier(item, "effect"), duration)) {
      use(item);
    }
  }
}

export function vote() {
  if (myClass() !== $class`Sauceror`) throw `Don't yet know how to run this as a ${myClass()}`;
  visitUrl("place.php?whichplace=town_right&action=townright_vote");
  visitUrl(`choice.php?pwd=${myHash()}&option=1&whichchoice=1331&g=2&local[]=1&local[]=3`);
  if (!have($item`"I Voted!" sticker`)) throw "Voting failed";
}
