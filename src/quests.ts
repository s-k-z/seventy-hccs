import {
  cliExecute,
  containsText,
  equip,
  getIngredients,
  numericModifier,
  visitUrl,
} from "kolmafia";
import { $effect, $item, $slot, $stat, have } from "libram";
import { acquireEffect } from "./lib";

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
  Sprinkles = 901,
  Leveling = 902,
  DeepDark = 903,
}

export function equipRetroCapeMystStats() {
  cliExecute("retrocape heck thrill");
}

function handleCreateEquip(equip: Item) {
  switch (equip) {
    case $item`broken champagne bottle`:
    case $item`wad of used tape`: {
      if (!have(equip)) {
        cliExecute(`fold ${equip}`);
      }
      return;
    }

    case $item`burning paper crane`:
    case $item`meteorite guard`: {
      const ingredients = Object.keys(getIngredients(equip));
      if (!have(equip) && have(Item.get(ingredients[0] ?? "none"))) {
        cliExecute(`make ${equip}`);
      }
      return;
    }
  }
}

export function equipWadOfUsedTape() {
  const wadOfUsedTape = $item`wad of used tape`;
  handleCreateEquip(wadOfUsedTape);
  equip($slot`hat`, wadOfUsedTape);
}

const questOutfits: Record<Quest, () => Map<Item, Slot>> = {
  [Quest.Beginning]: () => {
    return new Map([
      [$item`Iunion Crown`, $slot`hat`],
      [$item`protonic accelerator pack`, $slot`back`],
      //[$item`fresh coat of paint`, $slot`shirt`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`Kramco Sausage-o-Matic™`, $slot`off-hand`],
      [$item`pantogram pants`, $slot`pants`],
      [$item`hewn moon-rune spoon`, $slot`acc1`],
      [$item`Powerful Glove`, $slot`acc2`],
      [$item`Kremlin's Greatest Briefcase`, $slot`acc3`],
    ]);
  },

  // Maximize Myst and MP, blue rocket will do all the regen for us
  [Quest.CoilWire]: () => {
    equipRetroCapeMystStats();
    return new Map([
      [$item`Iunion Crown`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`weeping willow wand`, $slot`off-hand`],
      [$item`Cargo Cultist Shorts`, $slot`pants`],
      [$item`hewn moon-rune spoon`, $slot`acc1`],
      [$item`Retrospecs`, $slot`acc2`],
      [$item`Kremlin's Greatest Briefcase`, $slot`acc3`],
    ]);
  },

  [Quest.Leveling]: () => {
    if (have($item`LOV Epaulettes`)) {
      equip($slot`back`, $item`LOV Epaulettes`);
    } else {
      equipRetroCapeMystStats();
    }
    equip(
      $slot`pants`,
      numericModifier($item`pantogram pants`, "mana cost") !== 0
        ? $item`pantogram pants`
        : $item`Cargo Cultist Shorts`
    );
    equip(
      $slot`acc1`,
      have($item`battle broom`) ? $item`battle broom` : $item`gold detective badge`
    );
    return new Map([
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`weeping willow wand`, $slot`off-hand`],
      [$item`hewn moon-rune spoon`, $slot`acc2`],
      [$item`Beach Comb`, $slot`acc3`],
    ]);
  },

  [Quest.Sprinkles]: () => {
    if (have($item`LOV Epaulettes`)) {
      equip($slot`back`, $item`LOV Epaulettes`);
    } else {
      equipRetroCapeMystStats();
    }
    equip($slot`off-hand`, have($item`rope`) ? $item`rope` : $item`weeping willow wand`);
    return new Map([
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`pantogram pants`, $slot`pants`],
      [$item`Lil' Doctor™ bag`, $slot`acc1`],
      [$item`Brutal brogues`, $slot`acc2`],
      [$item`Beach Comb`, $slot`acc3`],
    ]);
  },

  [Quest.Muscle]: () => {
    cliExecute(`retrocape ${$stat`Muscle`}`);
    return new Map([
      [$item`wad of used tape`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`dented scepter`, $slot`off-hand`],
      [$item`Brutal brogues`, $slot`acc1`],
      [$item`"I Voted!" sticker`, $slot`acc3`],
    ]);
  },

  [Quest.Moxie]: () => {
    cliExecute(`retrocape ${$stat`Moxie`}`);
    return new Map([
      [$item`very pointy crown`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`your cowboy boots`, $slot`acc1`],
      [$item`Beach Comb`, $slot`acc2`],
      [$item`"I Voted!" sticker`, $slot`acc3`],
    ]);
  },

  [Quest.HP]: () => {
    return new Map([
      [$item`wad of used tape`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`Cargo Cultist Shorts`, $slot`pants`],
      [$item`"I Voted!" sticker`, $slot`acc3`],
    ]);
  },

  [Quest.DeepDark]: () => {
    cliExecute("retrocape vampire hold");
    return new Map([
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`burning paper crane`, $slot`off-hand`],
      [$item`pantogram pants`, $slot`pants`],
    ]);
  },

  [Quest.SpellDamage]: () => {
    return new Map([
      [$item`wrench`, $slot`weapon`],
      [$item`weeping willow wand`, $slot`off-hand`],
      [$item`pantogram pants`, $slot`pants`],
      [$item`battle broom`, $slot`acc1`],
      [$item`Powerful Glove`, $slot`acc2`],
      [$item`Kremlin's Greatest Briefcase`, $slot`acc3`],
    ]);
  },

  [Quest.WeaponDamage]: () => {
    return new Map([
      [$item`broken champagne bottle`, $slot`weapon`],
      [$item`dented scepter`, $slot`off-hand`],
      [$item`Brutal brogues`, $slot`acc1`],
      [$item`Powerful Glove`, $slot`acc2`],
    ]);
  },

  [Quest.Mysticality]: () => {
    cliExecute(`retrocape ${$stat`Mysticality`}`);
    return new Map([
      [$item`wad of used tape`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`battle broom`, $slot`acc1`],
      [$item`"I Voted!" sticker`, $slot`acc3`],
    ]);
  },

  [Quest.CombatFrequency]: () => {
    return new Map([
      [$item`very pointy crown`, $slot`hat`],
      [$item`protonic accelerator pack`, $slot`back`],
      [$item`pantogram pants`, $slot`pants`],
      [$item`Kremlin's Greatest Briefcase`, $slot`acc3`],
    ]);
  },

  [Quest.HotResist]: () => {
    cliExecute("retrocape vampire hold");
    return new Map([
      [$item`high-temperature mining mask`, $slot`hat`],
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`meteorite guard`, $slot`off-hand`],
      [$item`lava-proof pants`, $slot`pants`],
      [$item`Brutal brogues`, $slot`acc1`],
      [$item`heat-resistant gloves`, $slot`acc2`],
      [$item`Kremlin's Greatest Briefcase`, $slot`acc3`],
    ]);
  },

  [Quest.FamiliarWeight]: () => {
    return new Map([
      [$item`Fourth of May Cosplay Saber`, $slot`weapon`],
      [$item`rope`, $slot`off-hand`],
      [$item`Brutal brogues`, $slot`acc1`],
      [$item`hewn moon-rune spoon`, $slot`acc2`],
      [$item`Beach Comb`, $slot`acc3`],
    ]);
  },

  [Quest.ItemDrop]: () => {
    equip(
      $slot`off-hand`,
      numericModifier($item`latte lovers member's mug`, "item drop") > 0
        ? $item`latte lovers member's mug`
        : $item`Kramco Sausage-o-Matic™`
    );
    return new Map([
      [$item`wad of used tape`, $slot`hat`],
      [$item`vampyric cloake`, $slot`back`],
      [$item`Guzzlr tablet`, $slot`acc1`],
      [$item`gold detective badge`, $slot`acc2`],
      [$item`your cowboy boots`, $slot`acc3`],
    ]);
  },

  [Quest.Donate]: () => {
    return new Map();
  },
};

// Who needs the maximizer? It's slow!
export function equipOutfit(outfit: Quest) {
  questOutfits[outfit]().forEach((s, i) => {
    handleCreateEquip(i);
    if (have(i)) {
      equip(s, i);
    }
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

  [Quest.CoilWire]: new Map<Effect, Context>(),

  // For effects that aren't covered by the stat tests below this key
  [Quest.Leveling]: new Map([
    [$effect`Blood Bubble`, Context.leveling],
    [$effect`Carol of the Thrills`, Context.leveling],
    [$effect`Ghostly Shell`, Context.leveling],
    [$effect`Inscrutable Gaze`, Context.leveling],
    //[$effect`Purity of Spirit`, EffectContext.leveling],
    [$effect`Ruthlessly Efficient`, Context.leveling],
    [$effect`Shield of the Pastalord`, Context.leveling],
    [$effect`Springy Fusilli`, Context.leveling],

    // Beach comb
    [$effect`Cold as Nice`, Context.leveling],
    [$effect`A Brush with Grossness`, Context.leveling],
    [$effect`Does It Have a Skull in There??`, Context.leveling],
    [$effect`Oiled, Slick`, Context.leveling],
    [$effect`Resting Beach Face`, Context.leveling],
    [$effect`You Learned Something Maybe!`, Context.leveling],
    // Class buffs
    [$effect`Polka of Plenty`, Context.leveling],
    [$effect`Ode to Booze`, Context.leveling],
    [$effect`Astral Shell`, Context.leveling],
    [$effect`Elemental Saucesphere`, Context.leveling],
    //[$effect`Scarysauce`, EffectContext.leveling],
  ]),

  [Quest.Sprinkles]: new Map<Effect, Context>(),

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
  [Quest.DeepDark]: new Map<Effect, Context>(),

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
    [$effect`Drunk With Power`, Context.special],
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
    [$effect`Rainbow Vaccine`, Context.leveling],

    [$effect`Amazing`, Context.test],

    // in case we want Robin's egg
    //[$effect`Egged On`, Context.special],
    [$effect`Misty Form`, Context.special],
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
    // Food/Booze/Spleen
    [$effect`[1701]Hip to the Jive`, Context.special],
    [$effect`Joy`, Context.special],
    [$effect`Smart Drunk`, Context.special],
    // Librams
    [$effect`Cold Hearted`, Context.special],
    [$effect`Heart of Green`, Context.special],
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
    [$effect`Leon's Phat Loot Lyric`, Context.leveling],
    [$effect`Singer's Faithful Ocelot`, Context.leveling],

    [$effect`Feeling Lost`, Context.test],
    [$effect`Nearly All-Natural`, Context.test],
    [$effect`Steely-Eyed Squint`, Context.test],
    [$effect`The Spirit of Taking`, Context.test],

    [$effect`Bat-Adjacent Form`, Context.special],
    [$effect`Synthesis: Collection`, Context.special],
  ]),

  [Quest.Donate]: new Map<Effect, Context>(),
};

function acquireQuestEffects(id: Quest) {
  questEffects[id].forEach((source, effect) => {
    if (source !== Context.special) {
      acquireEffect(effect);
    } else if (!have(effect)) {
      throw `Failed to obtain effect ${effect}`;
    }
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

export function buffUpBeginning() {
  buffUp(Context.beginning);
}

export function buffUpLeveling() {
  // TODO: Want to swap pants to maybe spend less MP but also don't want to lose MP by swapping pants...
  buffUp(Context.leveling);
}

export function haveQuest(id: number) {
  return containsText(visitUrl("council.php"), `<input type=hidden name=option value=${id}>`);
}

export function prepAndDoQuest(id: Quest) {
  if (id > Quest.Donate) throw `Invalid Quest ${id} (these are just for outfits)!!`;
  if (haveQuest(id)) {
    // Convenient but also non-obvious here, maybe a bad design?
    acquireQuestEffects(id);
    equipOutfit(id);
    visitUrl(`choice.php?whichchoice=1089&option=${id}`);
    if (haveQuest(id)) throw `Couldn't complete quest ${id}?`;
  }
}
