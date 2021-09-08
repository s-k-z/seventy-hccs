import {
  cliExecute,
  containsText,
  equip,
  getIngredients,
  getRelated,
  numericModifier,
  totalTurnsPlayed,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $slot, have } from "libram";
import { acquireEffect, checkEffect } from "./lib";

export enum Quest {
  HP = 1,
  Muscle = 2,
  Mysticality = 3,
  Moxie = 4,
  FamiliarWeight = 5,
  WeaponDamage = 6,
  SpellDamage = 7,
  CombatFrequency = 8,
  ItemDrop = 9,
  HotResist = 10,
  CoilWire = 11,
  Donate = 30,

  Beginning = 900,
  Leveling = 901,
  DeepDark = 902,
}

const questOutfits: Record<Quest, () => { equipment: Map<Slot, Item>; familiar?: Familiar }> = {
  [Quest.Beginning]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`Iunion Crown`],
        [$slot`back`, $item`protonic accelerator pack`],
        //[$slot`shirt`, $item`fresh coat of paint`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`Kramco Sausage-o-Matic™`],
        [$slot`pants`, $item`pantogram pants`],
        [$slot`acc1`, $item`hewn moon-rune spoon`],
        [$slot`acc2`, $item`Powerful Glove`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
    };
  },

  // Maximize Myst and MP, blue rocket will do all the regen for us
  [Quest.CoilWire]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`Iunion Crown`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`industrial fire extinguisher`],
        [$slot`pants`, $item`Cargo Cultist Shorts`],
        [$slot`acc1`, $item`hewn moon-rune spoon`],
        [$slot`acc2`, $item`Retrospecs`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
    };
  },

  [Quest.Leveling]: () => {
    const mpSavings = numericModifier($item`pantogram pants`, "mana cost") !== 0;
    const outfit = new Map([
      [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
      [$slot`off-hand`, $item`weeping willow wand`],
      [$slot`pants`, mpSavings ? $item`pantogram pants` : $item`Cargo Cultist Shorts`],
      [$slot`acc1`, $item`hewn moon-rune spoon`],
      [$slot`acc2`, have($item`battle broom`) ? $item`battle broom` : $item`gold detective badge`],
      [$slot`acc3`, $item`Beach Comb`],
    ]);
    if (have($item`LOV Epaulettes`)) outfit.set($slot`back`, $item`LOV Epaulettes`);
    return { equipment: outfit };
  },

  [Quest.Muscle]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`wad of used tape`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`dented scepter`],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
    };
  },

  [Quest.Moxie]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`very pointy crown`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`acc1`, $item`your cowboy boots`],
        [$slot`acc2`, $item`Beach Comb`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
    };
  },

  [Quest.HP]: () => {
    const candle = $item`extra-wide head candle`;
    return {
      equipment: new Map([
        [$slot`hat`, have(candle) ? candle : $item`wad of used tape`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`pants`, $item`Cargo Cultist Shorts`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
    };
  },

  [Quest.DeepDark]: () => {
    const outfit = new Map([
      [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
      [$slot`pants`, $item`pantogram pants`],
      [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
    ]);
    if (have($item`burning paper crane`)) outfit.set($slot`off-hand`, $item`burning paper crane`);
    return { equipment: outfit };
  },

  [Quest.SpellDamage]: () => {
    // TODO: handle spell damage candle
    //const candle = [$slot`off-hand`, $item`Abracandalabra`];
    return {
      equipment: new Map([
        [$slot`weapon`, $item`wrench`],
        [$slot`off-hand`, $item`weeping willow wand`],
        [$slot`pants`, $item`pantogram pants`],
        [$slot`acc1`, $item`battle broom`],
        [$slot`acc2`, $item`Powerful Glove`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
        [$slot`familiar`, $item`astral statuette`],
      ]),
      familiar: $familiar`Left-Hand Man`,
    };
  },

  [Quest.WeaponDamage]: () => {
    const outfit = new Map([
      [$slot`weapon`, $item`broken champagne bottle`],
      [$slot`off-hand`, $item`dented scepter`],
      [$slot`acc1`, $item`Brutal brogues`],
      [$slot`acc2`, $item`Powerful Glove`],
    ]);
    const candle = $item`extra-wide head candle`;
    if (have(candle)) outfit.set($slot`hat`, candle);
    return { equipment: outfit };
  },

  [Quest.Mysticality]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`wad of used tape`],
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`acc1`, $item`battle broom`],
        [$slot`acc3`, $item`"I Voted!" sticker`],
      ]),
    };
  },

  [Quest.CombatFrequency]: () => {
    return {
      equipment: new Map([
        [$slot`hat`, $item`very pointy crown`],
        [$slot`back`, $item`protonic accelerator pack`],
        [$slot`pants`, $item`pantogram pants`],
        [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
      ]),
      familiar: $familiar`Disgeist`,
    };
  },

  [Quest.HotResist]: () => {
    return {
      equipment: new Map([
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, $item`industrial fire extinguisher`],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc2`, $item`hewn moon-rune spoon`],
        [$slot`acc3`, $item`Beach Comb`],
        [$slot`familiar`, $item`cracker`],
      ]),
      familiar: $familiar`Exotic Parrot`,
    };
  },

  [Quest.FamiliarWeight]: () => {
    return {
      equipment: new Map([
        [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
        [$slot`off-hand`, have($item`rope`) ? $item`rope` : $item`familiar scrapbook`],
        [$slot`acc1`, $item`Brutal brogues`],
        [$slot`acc2`, $item`hewn moon-rune spoon`],
        [$slot`acc3`, $item`Beach Comb`],
        [$slot`familiar`, $item`cracker`],
      ]),
      familiar: $familiar`Exotic Parrot`,
    };
  },

  [Quest.ItemDrop]: () => {
    const carrot = numericModifier($item`latte lovers member's mug`, "item drop") > 0;
    const candles = [
      $item`extra-large utility candle`,
      $item`novelty sparkling candle`,
      $item`runed taper candle`,
    ];
    const sparkler = $item`oversized sparkler`;
    const outfit = new Map([
      [$slot`hat`, $item`wad of used tape`],
      [$slot`back`, $item`vampyric cloake`],
      [$slot`off-hand`, carrot ? $item`latte lovers member's mug` : $item`Kramco Sausage-o-Matic™`],
      [$slot`acc1`, $item`Guzzlr tablet`],
      [$slot`acc2`, $item`gold detective badge`],
      [$slot`acc3`, $item`your cowboy boots`],
      [$slot`familiar`, $item`li'l ninja costume`],
    ]);
    if (!candles.some(have) && have(sparkler)) outfit.set($slot`weapon`, sparkler);
    // can only have one candle
    for (const c of candles) if (have(c)) outfit.set($slot`weapon`, c);
    return { equipment: outfit, familiar: $familiar`Trick-or-Treating Tot` };
  },

  [Quest.Donate]: () => {
    return { equipment: new Map() };
  },
};

export function equipOutfit(quest: Quest): void {
  const mode = new Map([
    [Quest.Muscle, "muscle"],
    [Quest.Mysticality, "mysticality"],
    [Quest.Moxie, "moxie"],
    [Quest.HP, "vampire hold"],
    [Quest.HotResist, "vampire hold"],
    [Quest.DeepDark, "vampire hold"],
  ]);
  const outfit = questOutfits[quest]();
  if (outfit.familiar) useFamiliar(outfit.familiar);
  if (!outfit.equipment.get($slot`back`)) {
    cliExecute(`retrocape ${mode.get(quest) ?? "heck thrill"}`);
  }
  outfit.equipment.forEach((item, slot) => {
    if (!have(item)) {
      const ingredients = Object.keys(getIngredients(item));
      if (getRelated(item, "fold")) cliExecute(`fold ${item}`);
      else if (have(Item.get(ingredients[0] ?? "none"))) cliExecute(`make ${item}`);
      else throw `Unable to find ${item}?`;
    }
    equip(slot, item);
  });
}

enum Context {
  beginning,
  leveling,
  test,

  special,
}

const sharedStats = new Map([
  [$effect`Feeling Excited`, Context.beginning],
  [$effect`Triple-Sized`, Context.beginning],

  [$effect`Big`, Context.leveling],
  [$effect`Favored by Lyle`, Context.leveling],
  [$effect`Starry-Eyed`, Context.leveling],
  [$effect`Total Protonic Reversal`, Context.leveling],

  [$effect`Spit Upon`, Context.special],
]);

const sharedSpellWeaponDamage = new Map([
  [$effect`Grumpy and Ornery`, Context.leveling],

  [$effect`Cowrruption`, Context.test],
  [$effect`Jackasses' Symphony of Destruction`, Context.test],
  // Food/Booze/Spleen
  [$effect`In a Lather`, Context.special],
  // Other
  [$effect`Do You Crush What I Crush?`, Context.special],
  [$effect`Inner Elf`, Context.special],
  [$effect`Meteor Showered`, Context.special],
  [$effect`Spit Upon`, Context.special],
]);

const questEffects: Record<Quest, Map<Effect, Context>> = {
  [Quest.Beginning]: new Map([
    [$effect`Inscrutable Gaze`, Context.beginning],
    [$effect`Spirit of Peppermint`, Context.beginning],

    [$effect`meat.enh`, Context.beginning],
    [$effect`init.enh`, Context.beginning],
  ]),

  [Quest.CoilWire]: new Map(),

  // For effects that aren't covered by the stat tests below this key
  [Quest.Leveling]: new Map([
    [$effect`Blood Bubble`, Context.leveling],
    [$effect`Carol of the Thrills`, Context.leveling],
    [$effect`Ghostly Shell`, Context.leveling],
    [$effect`Inscrutable Gaze`, Context.leveling],
    //[$effect`Purity of Spirit`, EffectContext.leveling],
    [$effect`Ruthlessly Efficient`, Context.leveling],
    // Need the non-flimsy effect for PM
    [$effect`Flimsy Shield of the Pastalord`, Context.leveling],
    [$effect`Springy Fusilli`, Context.leveling],
    // Take the stat vaccine instead of resists now
    [$effect`Broad-Spectrum Vaccine`, Context.leveling],
    // Beach comb
    [$effect`Cold as Nice`, Context.leveling],
    [$effect`A Brush with Grossness`, Context.leveling],
    [$effect`Does It Have a Skull In There??`, Context.leveling],
    [$effect`Oiled, Slick`, Context.leveling],
    [$effect`Resting Beach Face`, Context.leveling],
    [$effect`You Learned Something Maybe!`, Context.leveling],
    // Class buffs
    [$effect`Polka of Plenty`, Context.leveling],
    [$effect`Ode to Booze`, Context.leveling],
    [$effect`Astral Shell`, Context.leveling],
    [$effect`Elemental Saucesphere`, Context.leveling],
  ]),

  [Quest.Muscle]: new Map([
    ...sharedStats,
    [$effect`Lack of Body-Building`, Context.leveling],

    [$effect`Expert Oiliness`, Context.test],
    [$effect`Phorcefullness`, Context.test],
    [$effect`Quiet Determination`, Context.test],
    [$effect`Rage of the Reindeer`, Context.test],

    [$effect`Giant Growth`, Context.special],
  ]),

  [Quest.Moxie]: new Map([
    ...sharedStats,
    [$effect`Blessing of the Bird`, Context.leveling],
    [$effect`Pomp & Circumsands`, Context.leveling],

    [$effect`Disco Fever`, Context.test],
    [$effect`Expert Oiliness`, Context.test],
    [$effect`Quiet Desperation`, Context.test],
    // Wish
    [$effect`Sparkly!`, Context.special],
  ]),

  [Quest.HP]: new Map([[$effect`Song of Starch`, Context.test]]),
  [Quest.DeepDark]: new Map(),

  [Quest.SpellDamage]: new Map([
    ...sharedSpellWeaponDamage,
    [$effect`Spirit of Peppermint`, Context.beginning],

    [$effect`AAA-Charged`, Context.leveling],
    [$effect`Carol of the Hells`, Context.leveling],
    [$effect`Full Bottle in front of Me`, Context.leveling],
    [$effect`Mental A-cue-ity`, Context.leveling],
    [$effect`Pisces in the Skyces`, Context.leveling],
    [$effect`Sigils of Yeg`, Context.leveling],
    [$effect`Warlock, Warstock, and Warbarrel`, Context.leveling],
    [$effect`We're All Made of Starfish`, Context.leveling],

    [$effect`Arched Eyebrow of the Archmage`, Context.test],
    [$effect`Song of Sauce`, Context.test],
    [$effect`The Magic of LOV`, Context.test],
    // Food/Booze/Spleen
    [$effect`Filled with Magic`, Context.special],
    // Wish
    [$effect`Sparkly!`, Context.special],
    // Other
    [$effect`Visions of the Deep Dark Deeps`, Context.special],
    [$effect`Nanobrainy`, Context.special],
    [$effect`Toxic Vengeance`, Context.special],
  ]),

  [Quest.WeaponDamage]: new Map([
    ...sharedSpellWeaponDamage,
    [$effect`Billiards Belligerence`, Context.leveling],
    [$effect`Blessing of your favorite Bird`, Context.leveling],
    [$effect`Carol of the Bulls`, Context.leveling],
    [$effect`Frenzied, Bloody`, Context.leveling],
    [$effect`Lack of Body-Building`, Context.leveling],

    [$effect`Bow-Legged Swagger`, Context.test],
    [$effect`Rage of the Reindeer`, Context.test],
    [$effect`Scowl of the Auk`, Context.test],
    [$effect`Song of the North`, Context.test],
    [$effect`Tenacity of the Snapper`, Context.test],
    [$effect`The Power of LOV`, Context.test],
  ]),

  [Quest.Mysticality]: new Map([
    ...sharedStats,
    [$effect`Uncucumbered`, Context.beginning],

    [$effect`Blessing of your favorite Bird`, Context.leveling],
    [$effect`Mystically Oiled`, Context.leveling],
    [$effect`We're All Made of Starfish`, Context.leveling],

    [$effect`Quiet Judgement`, Context.test],
    // Wish
    [$effect`Witch Breaded`, Context.special],
    // Other
    [$effect`Nanobrainy`, Context.special],
  ]),

  [Quest.CombatFrequency]: new Map([
    [$effect`Become Superficially interested`, Context.test],
    [$effect`Feeling Lonely`, Context.test],
    [$effect`Gummed Shoes`, Context.test],
    [$effect`Invisible Avatar`, Context.test],
    [$effect`Silent Running`, Context.test],
    [$effect`Smooth Movements`, Context.test],
    [$effect`The Sonata of Sneakiness`, Context.test],
    [$effect`Throwing Some Shade`, Context.test],

    [$effect`Silence of the God Lobster`, Context.special],
  ]),

  [Quest.HotResist]: new Map([
    [$effect`Feeling Peaceful`, Context.beginning],

    [$effect`Astral Shell`, Context.leveling],
    [$effect`Elemental Saucesphere`, Context.leveling],
    [$effect`Hot-Headed`, Context.leveling],

    [$effect`Fireproof Foam Suit`, Context.special],
  ]),

  [Quest.FamiliarWeight]: new Map([
    [$effect`Loyal Tea`, Context.leveling],
    [$effect`A Girl Named Sue`, Context.leveling],
    [$effect`Billiards Belligerence`, Context.leveling],
    [$effect`Blood Bond`, Context.leveling],
    [$effect`Do I Know You From Somewhere?`, Context.leveling],
    [$effect`Empathy`, Context.leveling],
    [$effect`Fidoxene`, Context.leveling],
    [$effect`Leash of Linguini`, Context.leveling],
    [$effect`Puzzle Champ`, Context.leveling],

    //[$effect`Man's Worst Enemy`, Context.test],
    [$effect`Over-Familiar With Dactyls`, Context.test],
    [$effect`Robot Friends`, Context.test],
    [$effect`Whole Latte Love`, Context.test],
    [$effect`Shortly Stacked`, Context.test],
    // Food/Booze/Spleen
    [$effect`[1701]Hip to the Jive`, Context.special],
    [$effect`Joy`, Context.special],
    [$effect`Smart Drunk`, Context.special],
    // Librams
    //[$effect`Cold Hearted`, Context.special],
    //[$effect`Heart of Green`, Context.special],
    // Wishes
    [$effect`All Is Forgiven`, Context.special],
    [$effect`Bureaucratized`, Context.special],
    [$effect`Chorale of Companionship`, Context.special],
    [$effect`Down With Chow`, Context.special],
    // Other
    [$effect`Meteor Showered`, Context.special],
    [$effect`Open Heart Surgery`, Context.special],
  ]),

  [Quest.ItemDrop]: new Map([
    [$effect`items.enh`, Context.beginning],
    [$effect`Uncucumbered`, Context.beginning],

    [$effect`Blessing of the Bird`, Context.leveling],
    [$effect`Blessing of your favorite Bird`, Context.leveling],
    [$effect`Ermine Eyes`, Context.leveling],
    [$effect`Hustlin'`, Context.leveling],
    [$effect`Fat Leon's Phat Loot Lyric`, Context.leveling],
    [$effect`Singer's Faithful Ocelot`, Context.leveling],

    [$effect`Feeling Lost`, Context.test],
    [$effect`Nearly All-Natural`, Context.test],
    [$effect`Steely-Eyed Squint`, Context.test],
    [$effect`The Spirit of Taking`, Context.test],

    [$effect`Bat-Adjacent Form`, Context.special],
    [$effect`Synthesis: Collection`, Context.special],
  ]),

  [Quest.Donate]: new Map(),
};

function acquireQuestEffects(id: Quest) {
  questEffects[id].forEach((source, effect) => {
    if (source !== Context.special) acquireEffect(effect);
    checkEffect(effect);
  });
}

function buffUp(progress: Context) {
  for (const qe of Object.values(questEffects)) {
    for (const [effect, source] of qe) {
      if (source <= progress) {
        acquireEffect(effect);
      }
    }
  }
}

export function buffUpBeginning(): void {
  buffUp(Context.beginning);
}

export function buffUpLeveling(): void {
  // TODO: Want to swap pants to maybe spend less MP but also don't want to lose MP by swapping pants...
  buffUp(Context.leveling);
}

export function haveQuest(id: number): boolean {
  return containsText(visitUrl("council.php"), `<input type=hidden name=option value=${id}>`);
}

export function prepAndDoQuest(id: Quest): number {
  const turns = totalTurnsPlayed();
  if (id > Quest.Donate) throw `Invalid Quest ${id} (these are just for outfits)!!`;
  if (haveQuest(id)) {
    acquireQuestEffects(id);
    equipOutfit(id);
    visitUrl("council.php");
    visitUrl(`choice.php?whichchoice=1089&option=${id}`);
    if (haveQuest(id)) throw `Couldn't complete quest ${id}?`;
  }
  return totalTurnsPlayed() - turns;
}
