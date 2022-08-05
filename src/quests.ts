import {
  canEquip,
  cliExecute,
  Effect,
  equip,
  Familiar,
  getIngredients,
  getRelated,
  Item,
  myClass,
  myEffects,
  myFamiliar,
  numericModifier,
  print,
  Slot,
  toEffect,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import { $class, $effect, $effects, $familiar, $item, $slot, get, have, isSong } from "libram";
import { acquireEffect, checkEffect, shrugEffect } from "./lib";

type QuestInfo = { id: number; service: string };
// prettier-ignore
export const Quest: Record<string, QuestInfo> = {
  HP:              { id: 1,   service: "Donate Blood" },
  Muscle:          { id: 2,   service: "Feed The Children" },
  Mysticality:     { id: 3,   service: "Build Playground Mazes" },
  Moxie:           { id: 4,   service: "Feed Conspirators" },
  FamiliarWeight:  { id: 5,   service: "Breed More Collies" },
  WeaponDamage:    { id: 6,   service: "Reduce Gazelle Population" },
  SpellDamage:     { id: 7,   service: "Make Sausage" },
  CombatFrequency: { id: 8,   service: "Be a Living Statue" },
  ItemDrop:        { id: 9,   service: "Make Margaritas" },
  HotResist:       { id: 10,  service: "Clean Steam Tunnels" },
  CoilWire:        { id: 11,  service: "Coil Wire" },
  Donate:          { id: 30,  service: "Donate Your Body To Science" },

  Beginning:       { id: 900, service: "" },
  Leveling:        { id: 901, service: "" },
  LevelingML:      { id: 902, service: "" },
  DeepDark:        { id: 903, service: "" },
  Vintner:         { id: 904, service: "" },
} as const;

type QuestData = {
  acquire: Effect[];
  check: Effect[];
  equipment: Map<Slot, Item>;
  familiar?: Familiar;
  retrocapeMode?: string;
  umbrellaMode?: string;
};
const questRecords: Record<number, () => QuestData> = {
  [Quest.Beginning.id]: () => {
    return {
      acquire: [
        $effect`Feeling Excited`,
        $effect`Feeling Peaceful`,
        $effect`Inscrutable Gaze`,
        $effect`Spirit of Peppermint`,
        $effect`Triple-Sized`,
        $effect`Uncucumbered`,
        $effect`substats.enh`,
      ],
      check: [],
      equipment: new Map([
        [$slot`hat`, $item`Daylight Shavings Helmet`],
        [$slot`back`, $item`protonic accelerator pack`],
        //[$slot`shirt`, $item`fresh coat of paint`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`familiar scrapbook`],
        [$slot`pants`, $item`designer sweatpants`],
        [$slot`acc1`, $item`hewn moon-rune spoon`],
        [$slot`acc2`, $item`Powerful Glove`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
    };
  },

  // Maximize Myst and MP
  [Quest.CoilWire.id]: () => {
    const bloodSugar =
      myClass() === $class`Sauceror`
        ? $effect`[1458]Blood Sugar Sauce Magic`
        : $effect`[1457]Blood Sugar Sauce Magic`;
    return {
      acquire: [bloodSugar],
      check: [],
      equipment: new Map([
        [$slot`hat`, $item`Iunion Crown`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [
          $slot`off-hand`,
          have($item`wrench`) ? $item`wrench` : $item`industrial fire extinguisher`,
        ],
        [$slot`pants`, $item`Cargo Cultist Shorts`],
        [$slot`acc1`, $item`hewn moon-rune spoon`],
        [$slot`acc2`, $item`Retrospecs`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
      retrocapeMode: "heck thrill",
    };
  },

  [Quest.Leveling.id]: () => {
    const toAcquire = [
      $effect`A Girl Named Sue`,
      $effect`Billiards Belligerence`,
      $effect`Broad-Spectrum Vaccine`,
      $effect`Favored by Lyle`,
      $effect`Fidoxene`,
      $effect`Grumpy and Ornery`,
      $effect`Hustlin'`,
      $effect`Loyal Tea`,
      $effect`Mental A-cue-ity`,
      $effect`Mystically Oiled`,
      $effect`Pisces in the Skyces`,
      $effect`Puzzle Champ`,
      $effect`Sigils of Yeg`,
      $effect`Starry-Eyed`,
      $effect`Total Protonic Reversal`,
      $effect`You Can Really Taste the Dormouse`,
      $effect`Warlock, Warstock, and Warbarrel`,
      $effect`items.enh`,
      $effect`meat.enh`,
      // Beach comb
      $effect`Cold as Nice`,
      $effect`A Brush with Grossness`,
      $effect`Do I Know You From Somewhere?`,
      $effect`Does It Have a Skull In There??`,
      $effect`Hot-Headed`,
      $effect`Lack of Body-Building`,
      $effect`Oiled, Slick`,
      $effect`Pomp & Circumsands`,
      $effect`Resting Beach Face`,
      $effect`We're All Made of Starfish`,
      $effect`You Learned Something Maybe!`,
      // Skills
      $effect`Big`,
      $effect`Blessing of the Bird`,
      $effect`Blessing of your favorite Bird`,
      $effect`Blood Bond`,
      $effect`Blood Bubble`,
      $effect`Carol of the Bulls`,
      $effect`Carol of the Hells`,
      $effect`Carol of the Thrills`,
      $effect`Feeling Excited`,
      $effect`Feeling Peaceful`,
      $effect`Frenzied, Bloody`,
      $effect`Inscrutable Gaze`,
      $effect`Ruthlessly Efficient`,
      $effect`Singer's Faithful Ocelot`,
      $effect`Triple-Sized`,
      // Batteries
      $effect`AAA-Charged`, // +30 MP
      $effect`Lantern-Charged`, // +70 MP
      // Class skills
      $effect`Astral Shell`,
      $effect`Elemental Saucesphere`,
      $effect`Empathy`,
      $effect`Ghostly Shell`,
      $effect`Leash of Linguini`,
      $effect`Springy Fusilli`,
      // Songs
      $effect`Ode to Booze`,
      $effect`Polka of Plenty`,
    ];
    const mpSavings = numericModifier($item`pantogram pants`, "mana cost") !== 0;
    const toWear = new Map([
      [$slot`hat`, $item`Daylight Shavings Helmet`],
      [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
      [$slot`off-hand`, $item`weeping willow wand`],
      [$slot`pants`, mpSavings ? $item`pantogram pants` : $item`Cargo Cultist Shorts`],
      [$slot`acc1`, $item`hewn moon-rune spoon`],
      // When re-running the script, may have the broom available
      [$slot`acc2`, have($item`battle broom`) ? $item`battle broom` : $item`gold detective badge`],
      [$slot`acc3`, $item`Beach Comb`],
    ]);
    const toCape = !have($item`LOV Epaulettes`) ? "heck thrill" : undefined;
    if (have($item`LOV Epaulettes`)) toWear.set($slot`back`, $item`LOV Epaulettes`);
    return { acquire: toAcquire, check: [], equipment: toWear, retrocapeMode: toCape };
  },

  [Quest.LevelingML.id]: () => {
    const pastalordShield =
      myClass() === $class`Pastamancer`
        ? $effect`Shield of the Pastalord`
        : $effect`Flimsy Shield of the Pastalord`;
    const toAcquire = [
      pastalordShield,
      $effect`Drescher's Annoying Noise`,
      $effect`Polka of Plenty`,
      $effect`Pride of the Puffin`,
    ];
    const toWear = new Map([
      [$slot`hat`, $item`Daylight Shavings Helmet`],
      [$slot`back`, $item`LOV Epaulettes`],
      [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
      [$slot`pants`, $item`Cargo Cultist Shorts`],
      [$slot`acc1`, $item`hewn moon-rune spoon`],
      [$slot`acc2`, have($item`battle broom`) ? $item`battle broom` : $item`gold detective badge`],
      [$slot`acc3`, $item`Beach Comb`],
    ]);
    return { acquire: toAcquire, check: [], equipment: toWear, umbrellaMode: "ml" };
  },

  [Quest.DeepDark.id]: () => {
    const toWear = new Map([
      [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
      [$slot`pants`, $item`pantogram pants`],
      [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
    ]);
    if (have($item`burning paper crane`)) toWear.set($slot`off-hand`, $item`burning paper crane`);
    return {
      acquire: [$effect`Polka of Plenty`],
      check: [],
      equipment: toWear,
      retrocapeMode: "vampire hold",
      familiar: $familiar`Exotic Parrot`,
    };
  },

  [Quest.Vintner.id]: () => {
    const toAcquire = [
      $effect`Jackasses' Symphony of Destruction`,
      $effect`Polka of Plenty`,
      $effect`Sauce Monocle`,
      $effect`Song of Sauce`,
      $effect`Wizard Squint`,
    ];
    const toCheck = [
      $effect`Bastille Bourgeoisie`,
      $effect`Pointy Wizard Beard`,
      $effect`Sparkly!`,
      $effect`Visions of the Deep Dark Deeps`,
    ];
    const toEquip = new Map([
      [$slot`back`, $item`LOV Epaulettes`],
      [$slot`weapon`, $item`weeping willow wand`],
      [$slot`pants`, $item`pantogram pants`],
      [$slot`acc1`, $item`Powerful Glove`],
      [$slot`acc2`, $item`battle broom`],
      [$slot`acc3`, $item`backup camera`],
    ]);
    return { acquire: toAcquire, check: toCheck, equipment: toEquip, umbrellaMode: "ml" };
  },

  [Quest.Muscle.id]: () => {
    return {
      acquire: [
        $effect`Expert Oiliness`,
        $effect`Phorcefullness`,
        $effect`Quiet Determination`,
        $effect`Rage of the Reindeer`,
      ],
      check: [$effect`Giant Growth`, $effect`Spit Upon`],
      equipment: new Map([
        [$slot`hat`, $item`wad of used tape`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`dented scepter`],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
      retrocapeMode: "muscle",
    };
  },

  [Quest.Moxie.id]: () => {
    return {
      acquire: [$effect`Disco Fever`, $effect`Expert Oiliness`, $effect`Quiet Desperation`],
      check: [$effect`Sparkly!`, $effect`Spit Upon`],
      equipment: new Map([
        [$slot`hat`, $item`very pointy crown`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`industrial fire extinguisher`],
        [$slot`acc1`, $item`your cowboy boots`],
        [$slot`acc2`, $item`Beach Comb`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
      retrocapeMode: "moxie",
    };
  },

  [Quest.HP.id]: () => {
    const candle = $item`extra-wide head candle`;
    return {
      acquire: [$effect`Song of Starch`],
      check: [],
      equipment: new Map([
        [$slot`hat`, have(candle) ? candle : $item`wad of used tape`],
        [$slot`back`, $item`vampyric cloake`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`pants`, $item`Cargo Cultist Shorts`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
    };
  },

  [Quest.SpellDamage.id]: () => {
    const candle = $item`Abracandalabra`;
    return {
      acquire: [
        $effect`Arched Eyebrow of the Archmage`,
        $effect`Cowrruption`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Song of Sauce`,
        $effect`The Magic of LOV`,
      ],
      check: [
        $effect`Do You Crush What I Crush?`,
        $effect`Filled with Magic`,
        $effect`In a Lather`,
        $effect`Inner Elf`,
        $effect`Meteor Showered`,
        $effect`Nanobrainy`,
        $effect`Sparkly!`,
        $effect`Spit Upon`,
        $effect`Toxic Vengeance`,
        $effect`Visions of the Deep Dark Deeps`,
      ],
      equipment: new Map([
        [$slot`weapon`, $item`wrench`],
        [$slot`off-hand`, $item`weeping willow wand`],
        [$slot`pants`, $item`pantogram pants`],
        [$slot`acc1`, $item`battle broom`],
        [$slot`acc2`, $item`Powerful Glove`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
        [$slot`familiar`, have(candle) ? candle : $item`astral statuette`],
      ]),
      familiar: $familiar`Left-Hand Man`,
    };
  },

  [Quest.WeaponDamage.id]: () => {
    const toAcquire = [
      $effect`Bow-Legged Swagger`,
      $effect`Cowrruption`,
      $effect`Jackasses' Symphony of Destruction`,
      $effect`Rage of the Reindeer`,
      $effect`Scowl of the Auk`,
      $effect`Song of the North`,
      $effect`Tenacity of the Snapper`,
      $effect`The Power of LOV`,
    ];
    const toCheck = [
      $effect`Do You Crush What I Crush?`,
      $effect`In a Lather`,
      $effect`Inner Elf`,
      $effect`Meteor Showered`,
      $effect`Spit Upon`,
    ];
    const toWear = new Map([
      [$slot`weapon`, $item`dented scepter`],
      [$slot`acc1`, $item`Brutal brogues`],
      [$slot`acc2`, $item`Powerful Glove`],
      [$slot`familiar`, $item`broken champagne bottle`],
    ]);
    const candle = $item`extra-wide head candle`;
    if (have(candle)) toWear.set($slot`hat`, candle);
    return {
      acquire: toAcquire,
      check: toCheck,
      equipment: toWear,
      umbrellaMode: "weapon",
      familiar: $familiar`Disembodied Hand`,
    };
  },

  [Quest.CombatFrequency.id]: () => {
    return {
      acquire: [
        $effect`Feeling Lonely`,
        $effect`Gummed Shoes`,
        $effect`Silent Running`,
        $effect`Smooth Movements`,
        $effect`The Sonata of Sneakiness`,
        $effect`Throwing Some Shade`,
      ],
      check: [$effect`Silence of the God Lobster`],
      equipment: new Map([
        [$slot`hat`, $item`very pointy crown`],
        [$slot`back`, $item`protonic accelerator pack`],
        [$slot`pants`, $item`pantogram pants`],
        [$slot`acc2`, $item`atlas of local maps`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
      familiar: $familiar`Disgeist`,
      umbrellaMode: "nc",
    };
  },

  [Quest.HotResist.id]: () => {
    return {
      acquire: [$effect`Astral Shell`, $effect`Elemental Saucesphere`, $effect`Empathy`],
      check: [$effect`Fireproof Foam Suit`],
      equipment: new Map([
        [$slot`hat`, $item`Daylight Shavings Helmet`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`industrial fire extinguisher`],
        [$slot`pants`, $item`designer sweatpants`],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc2`, $item`hewn moon-rune spoon`],
        [$slot`acc3`, $item`Beach Comb`],
        [$slot`familiar`, $item`cracker`],
      ]),
      retrocapeMode: "vampire hold",
      familiar: $familiar`Exotic Parrot`,
    };
  },

  [Quest.FamiliarWeight.id]: () => {
    const rope = $item`rope`;
    const crane = $item`burning paper crane`;
    const offhand = have(rope) ? rope : have(crane) ? crane : $item`familiar scrapbook`;
    return {
      acquire: [
        $effect`Empathy`,
        $effect`Joy`,
        $effect`Robot Friends`,
        $effect`Shortly Stacked`,
        $effect`Whole Latte Love`,
      ],
      check: [
        $effect`[1701]Hip to the Jive`,
        $effect`All Is Forgiven`,
        $effect`Bureaucratized`,
        $effect`Chorale of Companionship`,
        $effect`Down With Chow`,
        $effect`Meteor Showered`,
        $effect`Open Heart Surgery`,
        $effect`You Can Really Taste the Dormouse`,
      ],
      equipment: new Map([
        [$slot`hat`, $item`Daylight Shavings Helmet`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, offhand],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc2`, $item`hewn moon-rune spoon`],
        [$slot`acc3`, $item`Beach Comb`],
        [$slot`familiar`, $item`cracker`],
      ]),
      familiar: $familiar`Exotic Parrot`,
    };
  },

  [Quest.ItemDrop.id]: () => {
    const toAcquire = [
      $effect`Blessing of the Bird`,
      $effect`Ermine Eyes`,
      $effect`Fat Leon's Phat Loot Lyric`,
      $effect`Feeling Lost`,
      $effect`Nearly All-Natural`,
      $effect`Singer's Faithful Ocelot`,
      $effect`Steely-Eyed Squint`,
      $effect`The Spirit of Taking`,
    ];
    const toCheck = [$effect`Bat-Adjacent Form`];
    const toWear = new Map([
      [$slot`hat`, $item`wad of used tape`],
      [$slot`back`, $item`vampyric cloake`],
      [$slot`acc1`, $item`Guzzlr tablet`],
      [$slot`acc2`, $item`gold detective badge`],
      [$slot`acc3`, $item`your cowboy boots`],
      [$slot`familiar`, $item`li'l ninja costume`],
    ]);
    const candles = [
      $item`extra-large utility candle`,
      $item`novelty sparkling candle`,
      $item`runed taper candle`,
    ];
    const sparkler = $item`oversized sparkler`;
    if (!candles.some(have) && have(sparkler)) toWear.set($slot`weapon`, sparkler);
    // can only have one candle
    for (const c of candles) if (have(c)) toWear.set($slot`weapon`, c);
    return {
      acquire: toAcquire,
      check: toCheck,
      equipment: toWear,
      familiar: $familiar`Trick-or-Treating Tot`,
      umbrellaMode: "item",
    };
  },

  [Quest.Mysticality.id]: () => {
    return {
      acquire: [$effect`Quiet Judgement`],
      check: [$effect`Nanobrainy`, $effect`Spit Upon`, $effect`Witch Breaded`],
      equipment: new Map([
        [$slot`hat`, $item`wad of used tape`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`acc1`, $item`battle broom`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
      retrocapeMode: "mysticality",
    };
  },

  [Quest.Donate.id]: () => {
    return { acquire: [], check: [], equipment: new Map() };
  },
} as const;

export function validateQuestOutfits(): void {
  for (const quest of Object.values(Quest)) {
    const record = questRecords[quest.id]();
    const back = record.equipment.get($slot`back`);
    if (back && record.retrocapeMode) throw `Multiple back items for ${quest.id}`;
    const offhand = record.equipment.get($slot`off-hand`);
    if (offhand && record.umbrellaMode) throw `Multiple off-hands for ${quest.id}`;
  }
  print("Validated quest outfits");
}

export function prep(quest: QuestInfo): void {
  const record = questRecords[quest.id]();
  shrugExtraSongs(record.acquire);
  record.acquire.forEach(acquireEffect);
  record.check.forEach(checkEffect);
  if (record.familiar) useFamiliar(record.familiar);
  const famEquip = record.equipment.get($slot`familiar`);
  if (famEquip && !canEquip(myFamiliar(), famEquip)) {
    throw `Cannot equip ${famEquip} on ${myFamiliar()}`;
  }
  if (record.retrocapeMode) {
    cliExecute(`retrocape ${record.retrocapeMode}`);
    equip($slot`back`, $item`unwrapped knock-off retro superhero cape`);
  }
  if (record.umbrellaMode) {
    cliExecute(`umbrella ${record.umbrellaMode}`);
    equip($slot`off-hand`, $item`unbreakable umbrella`);
  }
  record.equipment.forEach((item, slot) => {
    if (!have(item)) {
      const ingredients = Object.keys(getIngredients(item));
      if (getRelated(item, "fold")) cliExecute(`fold ${item}`);
      else if (have(Item.get(ingredients[0] ?? "none"))) cliExecute(`make ${item}`);
      else throw `Unable to find ${item}?`;
    }
    equip(slot, item);
  });
}

function shrugExtraSongs(effectsToAcquire: Effect[]) {
  const songsToAlwaysKeep = $effects`Ode to Booze, Chorale of Companionship`;
  Object.entries(myEffects()).forEach(([effectName]) => {
    const effect = toEffect(effectName);
    if (
      isSong(effect) &&
      !songsToAlwaysKeep.includes(effect) &&
      !effectsToAcquire.includes(effect)
    ) {
      shrugEffect(effect);
    }
  });
}

export function haveQuest(quest: QuestInfo): boolean {
  if (quest.id > Quest.Donate.id) throw `Invalid quest ${quest.id}: ${quest.service}!`;
  if (quest.id < Quest.Donate.id) return !get("csServicesPerformed").includes(quest.service);
  return visitUrl("council.php").includes(`<input type=hidden name=option value=${quest.id}>`);
}

export function prepAndDoQuest(quest: QuestInfo): void {
  if (quest.id > Quest.Donate.id) throw `Invalid quest ${quest.id}: ${quest.service}!`;
  if (haveQuest(quest)) {
    prep(quest);
    visitUrl("council.php");
    visitUrl(`choice.php?whichchoice=1089&option=${quest.id}`);
    if (haveQuest(quest)) throw `Couldn't complete quest ${quest.id}: ${quest.service}?`;
  }
}
