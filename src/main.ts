import {
  abort,
  autosell,
  canInteract,
  changeMcd,
  cliExecute,
  containsText,
  create,
  drink,
  eat,
  effectModifier,
  equip,
  getProperty,
  haveEquipped,
  mpCost,
  myAdventures,
  myBasestat,
  myBuffedstat,
  myClass,
  myGardenType,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  myPath,
  myPrimestat,
  mySoulsauce,
  print,
  retrieveItem,
  reverseNumberology,
  runChoice,
  soulsauceCost,
  toInt,
  totalFreeRests,
  use,
  useFamiliar,
  userConfirm,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $skill,
  $slot,
  ascend,
  Clan,
  get,
  have,
  Lifestyle,
  Paths,
  sinceKolmafiaRevision,
  SongBoom,
  SourceTerminal,
} from "libram";
import {
  BRICKO_TARGET_ITEM,
  BRICKOS_PER_FIGHT,
  CHATEAU_REST_LEVEL,
  FAX_AND_SLIME_CLAN,
  FORTUNE_TELLER_FRIEND,
  MAIN_CLAN,
  MEAT_SAFE_LIMIT,
  MP_SAFE_LIMIT,
} from "./config";
import { eatPizzas } from "./diet";
import { events, getRemainingFreeFights, oneOffEvents } from "./events";
import {
  castBestLibram,
  gazeAtTheStars,
  getPantogramPants,
  harvestBatteries,
  MoonSign,
  scavengeDaycare,
  spendAllMpOnLibrams,
  tuneMoon,
  useLibramsDrops,
  vote,
} from "./iotms";
import {
  acquireEffect,
  acquireGumOrHermitItem,
  checkAvailable,
  shrugEffect,
  tryUse,
  wishEffect,
  withContext,
  withEquipment,
} from "./lib";
import { checkReadyToAscend } from "./prep";
import {
  buffUpBeginning,
  buffUpLeveling,
  equipOutfit,
  haveQuest,
  prepAndDoQuest,
  Quest,
} from "./quests";
import { synthesize } from "./sweetsynthesis";

const choiceAdventures = [
  [297, 3], // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
  [326, 1], // Showdown: (1) fight mother slime (2) leave
  [1203, 4], // Midnight in the Civic Center: (1) 500 myst stats (2) counterfeit city for 300 sprinkles (3) N/A (4) 5 gingerbread cigarettes for 5 sprinkles (5) N/A
  [1204, 1], // Noon at the Train Station: (1) get a bunch of candy (2) increase size of sewer gators (3) 250 myst stats
  [1208, 3], // Upscale Noon: (3) buy gingerbread latte for 50 sprinkles
  [1215, 1], // Setting the Clock: (1) set the clock forward 5 turns (2) skip
  [1222, 1], // The Tunnel of L.O.V.E.: (1) enter the tunnel (2) leave
  [1223, 1], // L.O.V. Entrance: (1) fight the enforcer (2) skip
  [1224, 2], // L.O.V. Equipment Room: (1) take the cardigan (2) take the epaulettes (3) take the earrings (4) skip
  [1225, 1], // L.O.V. Engine Room: (1) fight the engineer (2) skip
  [1226, 2], // L.O.V. Emergency Room: (1) Lovebotamy (2) Open Heart Surgery (3) Wandering Eye Surgery (4) skip
  [1227, 1], // L.O.V. Elbow Room: (1) fight the equivocator (2) skip
  [1228, 3], // L.O.V. Emporium: (1) enamorang (2) emotionizer (3) chocolate (4) bouquet (5) elephant (6) toast (7) skip
  [1310, ""], // Granted a Boon: (1) equipment (2) blessing (3) experience
  [1322, 2], // The Beginning of the Neverend: (1) accept quest (2) decline quest (3) leave
  [1324, 5], // It Hasn't Ended, It's Just Paused: (1) upstairs (2) kitchen (3) backyard (4) basement (5) fight
  [1340, 2], // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
  [1386, 4], // Upgrade Your May the Fourth Cosplay Saber: (1) 15-20 MP regen (2) +20 ML (3) +3 resists (4) +10 familiar weight
  [1387, 3], // Using the Force: (1) banish (2) find friends (3) force item drops
].map(([id, val]): [string, string | number] => [`choiceAdventure${id}`, val]);

function checkMainClan() {
  if (Clan.get().name !== MAIN_CLAN) throw `Not in main clan?`;
}

export function main(): void {
  sinceKolmafiaRevision(20807);

  if (MAIN_CLAN.length < 1) throw `seventyhccs_main_clan property not set`;
  if (FAX_AND_SLIME_CLAN.length < 1) throw `seventyhccs_side_clan not set`;

  const date = new Date();
  const startTime = date.getTime();

  if (myPath() !== "Community Service") {
    checkReadyToAscend();
    if (canInteract() && userConfirm(`Ready to Ascend into Community Service?`)) {
      ascend(
        Paths.CommunityService,
        $class`Sauceror`,
        Lifestyle.hardcore,
        "wallaby",
        $item`astral six-pack`,
        $item`astral statuette`
      );
    } else {
      abort();
    }
  }

  if (myClass() !== $class`Sauceror`) throw `Don't yet know how to run this as ${myClass()}`;

  print("Save the Kingdom, save the world. Community Service time!", "green");
  print(`Using main clan ${MAIN_CLAN} and fax/slime clan ${FAX_AND_SLIME_CLAN}`);
  // Gotta talk to the Council the first time before seeing quests
  visitUrl("council.php");
  withContext(levelAndDoQuests, [
    // breakableHandling values:
    // 1: abort
    // 2: equip previous
    // 3: re-equip from inventory, or abort
    // 4: re-equip from inventory, or previous
    // 5: acquire & re-equip
    [`breakableHandling${toInt($item`makeshift garbage shirt`)}`, 2],
    ["customCombatScript", "seventy_hccs"],
    ...choiceAdventures,
  ]);

  const endTime = date.getTime();
  print(`Community Service completed in ${(endTime - startTime) / 1000} seconds`, "green");
}

function levelAndDoQuests() {
  const results = new Map<Quest, number>();
  const completeQuest = (q: Quest) => results.set(q, prepAndDoQuest(q));
  Clan.join(MAIN_CLAN);
  if (haveQuest(Quest.CoilWire)) {
    preCoilWire();
    prepAndDoQuest(Quest.CoilWire);
    print(`Coil Wire done: have ${myHp()} HP and ${myMp()} MP available.`);
  }

  const mainstat = myPrimestat();
  if (getRemainingFreeFights() > 0) {
    postCoilWire();

    const chateauNapReady = (): boolean => {
      return myLevel() >= CHATEAU_REST_LEVEL && get("timesRested") < totalFreeRests();
    };

    // eslint-disable-next-line no-constant-condition
    leveling: while (true) {
      // Spend excess MP on librams
      // Use free rests on stats at configured level
      // Swap equipment as needed between combats
      // Get Inner Elf at level 13
      // Free run for some items
      // Do all the leveling combats
      // Then gulp latte for more libram summons

      if (chateauNapReady()) {
        withEquipment(() => {
          while (chateauNapReady()) {
            visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree");
          }
        }, [[$slot`off-hand`, $item`familiar scrapbook`]]);
      }

      if (!have($effect`Soulerskates`)) {
        if (mySoulsauce() >= soulsauceCost($skill`Soul Rotation`)) {
          acquireEffect($effect`Soulerskates`);
        }
      } else {
        while (mySoulsauce() >= soulsauceCost($skill`Soul Food`) && myMaxmp() - myMp() >= 15) {
          useSkill($skill`Soul Food`);
        }
      }

      while (
        have($item`magical sausage casing`) &&
        (get("_sausagesMade") + 1) * 111 < myMeat() - MEAT_SAFE_LIMIT &&
        myMaxmp() - myMp() > 1000 &&
        myMaxmp() - mpCost($skill`Summon BRICKOs`) > MP_SAFE_LIMIT &&
        get("_sausagesEaten") < 23
      ) {
        create($item`magical sausage`);
        eat($item`magical sausage`);
      }

      while (myMp() - mpCost($skill`Summon BRICKOs`) > MP_SAFE_LIMIT) {
        castBestLibram();
        continue leveling; // get more MP and make more librams before adventuring on
      }
      useLibramsDrops();

      while (have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKOS_PER_FIGHT)) {
        create(BRICKO_TARGET_ITEM);
      }

      if (have($item`burning newspaper`)) create($item`burning paper crane`);
      tryUse($item`short stack of pancakes`);

      // Save the Garbage shirt for the last 37 fights
      // Swap from Iunion Crown to Wad of Used Tape once Myst is high enough
      const crown = $item`Iunion Crown`;
      const garbageShirt = $item`makeshift garbage shirt`;
      const wad = $item`wad of used tape`;
      if (haveEquipped(garbageShirt) || getRemainingFreeFights() <= 37) {
        if (!have(garbageShirt)) {
          cliExecute(`fold ${garbageShirt}`);
          // Turbo used a flag to cast pride
          SourceTerminal.educate(SourceTerminal.Skills.Turbo);
          equip($slot`shirt`, garbageShirt);
          equip($slot`hat`, crown);
        }
      } else if (myBasestat(mainstat) > 100) {
        if (!have(wad)) cliExecute(`fold ${wad}`);
        equip($slot`hat`, wad);
      } else {
        equip($slot`hat`, crown);
      }

      // This is where all the leveling happens
      // Loop through the list of events until an unfinished one is found
      // After doing an event, go back to the top of the outer loop to
      // handle librams, sausages, garbage shirt, etc.
      for (const event of Object.values(events)) {
        if (event.current() < event.max) {
          event.run();
          continue leveling;
        }
      }

      break;
    }

    print(
      `Finished leveling combats at level ${myLevel()} with ${myBasestat(
        mainstat
      )} base ${mainstat} and ${myBuffedstat(mainstat)} buffed ${mainstat}`
    );
  }

  // Leveling done, time to put on the final effects before the tests
  checkMainClan();
  cliExecute("shower hot");
  shrugEffect($effect`Ur-Kel's Aria of Annoyance`);
  shrugEffect($effect`Polka of Plenty`);
  wishEffect($effect`Sparkly!`);

  completeQuest(Quest.Muscle);
  completeQuest(Quest.Moxie);
  completeQuest(Quest.HP);

  if (haveQuest(Quest.SpellDamage)) {
    if (!have($effect`Inner Elf`)) events.innerElf.run();
    oneOffEvents.meteorUngulith();
    if (!have($effect`Visions of the Deep Dark Deeps`)) {
      print(`Current HP before Deep Dark Visions: ${myHp()}`);
      equipOutfit(Quest.DeepDark);
      if (myHp() < myMaxhp() * 0.9) cliExecute("hottub");
      useSkill($skill`Deep Dark Visions`);
      print(`Current HP after Deep Dark Visions: ${myHp()}`);
    }
    if (!have($effect`Cowrruption`)) {
      use($item`corrupted marrow`);
      if (myHp() < myMaxhp() * 0.5) cliExecute("hottub");
    }
    completeQuest(Quest.SpellDamage);
  }

  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    if (!have($effect`Inner Elf`)) events.innerElf.run();
    oneOffEvents.meteorShower();
    completeQuest(Quest.WeaponDamage);
  }

  shrugEffect($effect`Jackasses' Symphony of Destruction`);

  completeQuest(Quest.Mysticality);

  if (haveQuest(Quest.CombatFrequency)) {
    useFamiliar($familiar`Disgeist`);
    equip($slot`acc2`, $item`Powerful Glove`);
    completeQuest(Quest.CombatFrequency);
  }

  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.foamYourself();
    useFamiliar($familiar`Exotic Parrot`);
    if (!haveEquipped($item`cracker`)) throw "Wrong familiar equipment?";
    completeQuest(Quest.HotResist);
  }

  shrugEffect($effect`The Sonata of Sneakiness`);

  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.meteorShower();
    useFamiliar($familiar`Exotic Parrot`);
    if (!haveEquipped($item`cracker`)) throw "Wrong familiar equipment?";
    if (!have($effect`Smart Drunk`)) {
      useSkill(2, $skill`The Ode to Booze`);
      drink($item`vintage smart drink`); // 10 drunk
    }
    const icyRevenge = $item`love song of icy revenge`;
    if (!have($effect`Cold Hearted`) && have(icyRevenge)) {
      cliExecute("pillkeeper extend");
      use(icyRevenge);
    }
    completeQuest(Quest.FamiliarWeight);
  }

  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform();
    useFamiliar($familiar`Trick-or-Treating Tot`);
    equip($slot`familiar`, $item`li'l ninja costume`);
    completeQuest(Quest.ItemDrop);
  }

  prepAndDoQuest(Quest.Donate);
  print(`${results.forEach((turnCount, id) => `\n${Quest[id]}: ${turnCount}`)}`);
}

function openQuestZones() {
  [
    ["questM23Meatsmith", "meatsmith"],
    ["questM24Doc", "doc"],
    ["questM25Armorer", "armory"],
  ].forEach(([prop, name]) => {
    if (getProperty(prop).toLowerCase() === "unstarted") {
      visitUrl(`shop.php?whichshop=${name}&action=talk`);
      runChoice(1);
    }
  });
}

function preCoilWire() {
  // Visit Toot Oriole, sell pork gems, save a baconstone for pantogram
  visitUrl("tutorial.php?action=toot");
  [
    $item`letter from King Ralph XI`,
    $item`pork elf goodies sack`,
    $item`banana candle`,
    $item`ear candle`,
    $item`natural magick candle`,
    $item`rainbow glitter candle`,
    $item`votive of confidence`,
  ].forEach(tryUse);
  // Only need one consult for a candy
  if (get("_clanFortuneConsultUses") < 3 && FORTUNE_TELLER_FRIEND.length > 1) {
    checkMainClan();
    cliExecute(`fortune ${FORTUNE_TELLER_FRIEND} garbage garbage thick`);
  }
  if (!have($item`battery (AAA)`)) harvestBatteries();
  getPantogramPants();
  equipOutfit(Quest.Beginning);

  //
  // Let's get a buncha meat!
  //
  $items`baconstone, hamethyst, porquoise`.forEach((gem) => autosell(5, gem));
  useSkill($skill`Communism!`);
  const calculation = "14";
  const canCalculate = () => get("_universeCalculated") < get("skillLevel144");
  const hasSolution = () => Object.keys(reverseNumberology()).includes(calculation);
  while (canCalculate() && hasSolution()) cliExecute(`numberology ${calculation}`);
  autosell(14 * get("skillLevel144"), $item`moxie weed`);
  if (!get("_chateauDeskHarvested")) visitUrl("place.php?whichplace=chateau&action=chateau_desk1");
  if (!get("_horsery")) cliExecute("horsery dark");
  SongBoom.setSong("Total Eclipse of Your Meat");
  // 8601 meat

  // Get Community Service quests
  visitUrl("guild.php?place=challenge");
  openQuestZones();
  if (!have($item`your cowboy boots`)) {
    visitUrl("place.php?whichplace=town_right&action=townright_ltt");
    checkAvailable($item`your cowboy boots`);
  }
  cliExecute("Detective Solver");
  checkAvailable($item`gold detective badge`);
  buffUpBeginning();
  if (!have($effect`That's Just Cloud-Talk, Man`)) {
    visitUrl("place.php?whichplace=campaway&action=campaway_sky");
  }
  vote();

  // Get free stats
  scavengeDaycare();
  if (!have($item`Brutal brogues`)) cliExecute("bastille bbq brutalist gesture");
  checkAvailable($item`Brutal brogues`);

  ["forest", "rope", "wrench"].forEach((card) => {
    if (!get("_deckCardsSeen").toLowerCase().includes(card)) cliExecute(`cheat ${card}`);
  });

  if (get("_sourceTerminalDigitizeUses") < 1) {
    SourceTerminal.educate(SourceTerminal.Skills.Digitize);
  }

  if (myAdventures() < 60) {
    if (!have($item`borrowed time`)) create($item`borrowed time`);
    use($item`borrowed time`);
  }

  if (myHp() < myMaxhp()) cliExecute("hottub");

  oneOffEvents.hipster();

  if (get("_sourceTerminalDigitizeUses") > 0) {
    SourceTerminal.educate(SourceTerminal.Skills.Compress);
    SourceTerminal.educate(SourceTerminal.Skills.Extract);
  }

  const wand = $item`weeping willow wand`;
  if (!have(wand) && !have($item`flimsy hardwood scraps`)) visitUrl("shop.php?whichshop=lathe");
  if (!have(wand)) create(wand);
  equip($slot`off-hand`, wand);

  retrieveItem($item`detuned radio`); // 8601 - 285 = 8316 meat
  changeMcd(10);
  // Fight Protonic Ghost
  oneOffEvents.mimic();

  // Start the digitize counter by going to a wanderer-friendly zone and encountering a normal combat
  // Decorate Crimbo Shrub with LED Mandala, Jack-O-Lantern Lights, Popcorn Strands, and Big Red-Wrapped Presents
  oneOffEvents.tropicalSkeleton();
  // 8316 + 2000 = 10316 meat

  const donut = $item`occult jelly donut`;
  if (!have(donut)) create(donut);
  // TODO: handle non-sauceror [1457]Blood Sugar Sauce Magic
  acquireEffect($effect`[1458]Blood Sugar Sauce Magic`);

  spendAllMpOnLibrams();
}

function postCoilWire() {
  gazeAtTheStars();
  if (have($item`occult jelly donut`)) eat($item`occult jelly donut`);
  if (!have($skill`Seek out a Bird`)) use($item`Bird-a-Day calendar`);
  if (!have($item`Yeg's Motel hand soap`) && !have($effect`Sigils of Yeg`)) {
    cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`);
  }
  cliExecute("Briefcase e spell spooky -combat");
  let click = true;
  for (let i = 0; i < 22 && click; ++i) {
    click = !containsText(
      visitUrl("place.php?whichplace=kgb&action=kgb_actuator1"),
      "Nothing happens."
    );
  }
  // Visit Gingerbread Civic Center & fast forward clock
  // Then use nanorhino for nanobrainy and increment the gingerbread city counter
  oneOffEvents.nanobrainy();
  // Upgrade Cosplay Saber and start buffing familiar weight now that we're done with Nanorhino
  if (get("_saberMod") < 1) {
    visitUrl("main.php?action=may4");
    runChoice(4);
  }
  if (!get("_pottedTeaTreeUsed")) cliExecute("teatree loyal");
  wishEffect($effect`All Is Forgiven`);
  wishEffect($effect`Witch Breaded`);
  useLibramsDrops(); // In case we obtained a green candy heart already, don't want to synthesize it later

  if (!get("hasRange")) {
    const range = $item`Dramatic™ range`;
    if (!have(range)) retrieveItem(range);
    use(range);
  }
  // 10316 - 950 = 9366 meat
  [
    // Need all of these to craft with
    $skill`Advanced Cocktailcrafting`,
    $skill`Advanced Saucecrafting`,
    $skill`Chubby and Plump`,
    $skill`Perfect Freeze`,
    $skill`Prevent Scurvy and Sobriety`,

    // Only need Alice's Army and Crimbo Candy for now
    $skill`Summon Alice's Army Cards`,
    //$skill`Summon Confiscated Things`,
    $skill`Summon Crimbo Candy`,
    //$skill`Summon Geeky Gifts`,
    //$skill`Summon Tasteful Items`,

    // Buffs that can't fit elsewhere
    $skill`Incredible Self-Esteem`,
  ].forEach((s) => useSkill(s));
  // 143 mp

  [
    $item`oil of expertise`,
    $item`philter of phorce`,
    $item`ointment of the occult`,
    $item`eyedrops of the ermine`,
  ].forEach((saucePotion) => {
    if (!have(saucePotion) && !have(effectModifier(saucePotion, "effect"))) create(saucePotion);
  });

  retrieveItem($item`toy accordion`);
  acquireEffect($effect`Ode to Booze`);
  // 9366 - 142 = 9224 meat
  checkMainClan();
  $effects`[1701]Hip to the Jive, In a Lather`.forEach(acquireEffect); // 5 drunk, 5500 meat
  // 9224 - 5500 = 3724 meat

  // Eat pizza before synthesizing, generate a licorice boa from pizza
  eatPizzas(); // 3724 - 987 - 950 - 215 - 95 - 28 = 1449 meat
  if (myGardenType().toLowerCase().includes("peppermint")) cliExecute("garden pick");
  synthesize();
  // If we didn't use a sugar sheet for synthesis we can make a cold-filtered water
  const water = $item`cold-filtered water`;
  if (get("tomeSummons") < 3 && !have(water) && !have($effect`Purity of Spirit`)) create(water);
  tryUse(water);
  // If we didn't use a chubby and plump bar for synthesis we can use it for more HP and MP
  [
    $item`Chubby and Plump bar`,
    $item`Napalm In The Morning™ candle`,
    $item`Salsa Caliente™ candle`,
    $item`Smoldering Clover™ candle`,
  ].forEach(tryUse);

  equip($slot`acc2`, $item`Powerful Glove`);
  acquireGumOrHermitItem($item`turtle totem`);
  acquireGumOrHermitItem($item`saucepan`);
  buffUpLeveling();
  // 316 mp
  equipOutfit(Quest.Leveling);
}
