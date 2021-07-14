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
  getCampground,
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
  mySpleenUse,
  print,
  retrieveItem,
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
  $familiar,
  $item,
  $items,
  $skill,
  $slot,
  $stat,
  get,
  have,
  sinceKolmafiaRevision,
  SourceTerminal,
} from "libram";
import { educate } from "libram/dist/resources/2016/SourceTerminal";
import {
  BRICKOS_PER_FIGHT,
  BRICKO_TARGET_ITEM,
  CHATEAU_REST_LEVEL,
  MEAT_SAFE_LIMIT,
  MP_SAFE_LIMIT,
  MAIN_CLAN,
  FAX_AND_SLIME_CLAN,
  FORTUNE_TELLER_FRIEND,
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
  buyUpTo,
  checkAvailable,
  shrugEffect,
  tryRunChoice,
  tryUse,
  tuple,
  whitelist,
  wishEffect,
  withContext,
} from "./lib";
import { checkReadyToAscend } from "./prep";
import {
  buffUpBeginning,
  buffUpLeveling,
  equipOutfit,
  equipWadOfUsedTape,
  haveQuest,
  prepAndDoQuest,
  Quest,
} from "./quests";
import { synthesize } from "./sweetsynthesis";
import { ascend } from "./valhalla";

const choiceAdventures = new Map([
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
  [1310, 1], // Granted a Boon: (1) equipment (2) blessing (3) experience
  [1322, 2], // The Beginning of the Neverend: (1) accept quest (2) decline quest (3) leave
  [1324, 5], // It Hasn't Ended, It's Just Paused: (1) upstairs (2) kitchen (3) backyard (4) basement (5) fight
  [1340, 2], // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
  [1387, 3], // Using the Force: (1) banish (2) find friends (3) force item drops
]);

const mummingConstumes = new Map([
  [$familiar`Green Pixie`, "mp"],
  [$familiar`Machine Elf`, "meat"],
  [$familiar`Melodramedary`, "myst"],
  [$familiar`Pocket Professor`, "hp"],
  [$familiar`Shorter-Order Cook`, "item"],
]);

//
// Community Service Starts!
//
export function main() {
  sinceKolmafiaRevision(20795);

  const date = new Date();
  const startTime = date.getTime();

  if (myPath() !== "Community Service") {
    checkReadyToAscend();
    if (canInteract() && userConfirm(`Ready to Ascend into Community Service?`)) {
      ascend();
    } else {
      abort();
    }
  }

  if (myClass() !== $class`Sauceror`) throw `Don't yet know how to run this as ${myClass()}`;
  if (MAIN_CLAN.length < 1) throw `seventycs_main_clan property not set`;
  if (FAX_AND_SLIME_CLAN.length < 1) throw `seventycs_side_clan not set`;

  print("Save the Kingdom, save the world. Community Service time!", "green");
  print(`Using main clan ${MAIN_CLAN} and fax/slime clan ${FAX_AND_SLIME_CLAN}`);

  const settings = new Map<string, number | string>([
    // breakableHandling values:
    // 1: abort
    // 2: equip previous
    // 3: re-equip from inventory, or abort
    // 4: re-equip from inventory, or previous
    // 5: acquire & re-equip
    [`breakableHandling${toInt($item`makeshift garbage shirt`)}`, 2],
    ["customCombatScript", "seventy_hccs"],
  ]);
  for (const [prop, val] of choiceAdventures) {
    settings.set(`choiceAdventure${prop}`, val);
  }
  withContext(levelAndDoQuests, settings);

  const endTime = date.getTime();
  print(`Community Service completed in ${(endTime - startTime) / 1000} seconds`);
}

function levelAndDoQuests() {
  // Mafia saves a list of #'s corresponding to costumes used, maybe can check those?
  for (const [familiar, costume] of mummingConstumes) {
    useFamiliar(familiar);
    cliExecute(`mummery ${costume}`);
  }

  if (haveQuest(Quest.CoilWire)) {
    preCoilWire();
    // 60 turns down the drain 😢
    prepAndDoQuest(Quest.CoilWire);
    print(`Coil Wire done: have ${myHp()} HP and ${myMp()} MP available.`);
  }

  const mainstat = myPrimestat();
  if (getRemainingFreeFights() > 0) {
    postCoilWire();

    leveling: while (true) {
      // Spend excess MP on librams
      // Use free rests on stats at configured level
      // Swap equipment as needed between combats
      // Get Inner Elf at level 13
      // Free run for some items
      // Do all the leveling combats
      // Then gulp latte for more libram summons

      while (
        myLevel() >= CHATEAU_REST_LEVEL &&
        //myMaxmp() - myMp() > 150 &&
        get("timesRested") < totalFreeRests()
      ) {
        visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree");
      }

      if (!have($effect`Soulerskates`)) {
        if (mySoulsauce() >= soulsauceCost($skill`Soulerskates`)) {
          acquireEffect($effect`Soulerskates`);
        }
      } else {
        while (mySoulsauce() >= soulsauceCost($skill`Soul Food`) && myMaxmp() - myMp() >= 15) {
          useSkill($skill`Soul Food`);
        }
      }

      while (
        have($item`sausage casing`) &&
        (get("_sausagesMade") + 1) * 111 < myMeat() - MEAT_SAFE_LIMIT &&
        myMaxmp() - myMp() > 1000 &&
        myMaxmp() - mpCost($skill`Summon BRICKOs`) > MP_SAFE_LIMIT &&
        get("_sausagesEaten") < 23
      ) {
        cliExecute(`make ${$item`magical sausage`}`);
        eat($item`magical sausage`);
      }

      while (myMp() - mpCost($skill`Summon BRICKOs`) > MP_SAFE_LIMIT) {
        castBestLibram();
        continue leveling; // get more MP and make more librams before adventuring on
      }
      useLibramsDrops();

      while (have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKOS_PER_FIGHT)) {
        cliExecute(`make ${BRICKO_TARGET_ITEM}`);
      }

      const paperCrane = $item`burning paper crane`;
      if (!have(paperCrane) && have($item`burning newspaper`)) {
        cliExecute(`make ${paperCrane}`);
        checkAvailable(paperCrane);
      }

      // Save the Garbage shirt for the last 37 fights
      // Swap from Iunion Crown to Wad of Used Tape once Myst is high enough
      const garbageShirt = $item`makeshift garbage shirt`;
      if (haveEquipped(garbageShirt) || getRemainingFreeFights() <= 37) {
        if (!have(garbageShirt)) {
          cliExecute(`fold ${garbageShirt}`);
          educate(SourceTerminal.Skills.Turbo);
        }
        equip($slot`shirt`, garbageShirt);
        equip($slot`hat`, $item`Iunion Crown`);
      } else if (myBasestat(mainstat) > 100) {
        equipWadOfUsedTape();
      } else {
        equip($slot`hat`, $item`Iunion Crown`);
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
  cliExecute("shower hot");
  shrugEffect($effect`Ur-Kel's Aria of Annoyance`);
  shrugEffect($effect`Polka of Plenty`);
  wishEffect($effect`Sparkly!`);

  prepAndDoQuest(Quest.Muscle);

  prepAndDoQuest(Quest.Moxie);

  prepAndDoQuest(Quest.HP);

  if (haveQuest(Quest.SpellDamage)) {
    events.innerElf.run();
    oneOffEvents.lavaCo.run();
    if (!have($effect`Visions of the Deep Dark Deeps`)) {
      print(`Current HP before Deep Dark Visions: ${myHp()}`);
      equipOutfit(Quest.DeepDark);
      if (myHp() < myMaxhp() * 0.9) {
        cliExecute("hottub");
      }
      useSkill($skill`Deep Dark Visions`);
      print(`Current HP after Deep Dark Visions: ${myHp()}`);
    }
    if (!have($effect`Cowrruption`)) {
      use($item`corrupted marrow`);
      if (myHp() < myMaxhp() * 0.5) {
        cliExecute("hottub");
      }
    }
    prepAndDoQuest(Quest.SpellDamage);
  }

  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    events.innerElf.run();
    oneOffEvents.velvetGoldMine.run();
    prepAndDoQuest(Quest.WeaponDamage);
  }

  shrugEffect($effect`Jackasses' Symphony of Destruction`);

  prepAndDoQuest(Quest.Mysticality);

  if (haveQuest(Quest.CombatFrequency)) {
    useFamiliar($familiar`Disgeist`);
    equip($slot`acc2`, $item`Powerful Glove`);
    prepAndDoQuest(Quest.CombatFrequency);
  }

  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.mistform.run();
    useFamiliar($familiar`Exotic Parrot`);
    if (!haveEquipped($item`cracker`)) {
      throw "Wrong familiar equipment?";
    }
    if (!get("_horsery").startsWith("pale")) {
      cliExecute("horsery pale");
    }
    prepAndDoQuest(Quest.HotResist);
  }

  shrugEffect($effect`The Sonata of Sneakiness`);

  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.wormwood.run();
    useFamiliar($familiar`Exotic Parrot`);
    if (!haveEquipped($item`cracker`)) {
      throw "Wrong familiar equipment?";
    }
    if (!have($effect`Smart Drunk`)) {
      useSkill(2, $skill`The Ode to Booze`);
      drink($item`vintage smart drink`);
    }
    const icyRevenge = $item`love song of icy revenge`;
    if (!have($effect`Cold Hearted`) && have(icyRevenge)) {
      cliExecute("pillkeeper extend");
      use(icyRevenge);
    }
    prepAndDoQuest(Quest.FamiliarWeight);
  }

  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform.run();
    useFamiliar($familiar`Trick-or-Treating Tot`);
    equip($slot`familiar`, $item`li'l ninja costume`);
    prepAndDoQuest(Quest.ItemDrop);
  }

  prepAndDoQuest(Quest.Donate);
}

function openQuestZones() {
  [
    tuple("questM23Meatsmith", "meatsmith", 1059),
    tuple("questM24Doc", "doc", 1064),
    tuple("questM25Armorer", "armory", 1065),
  ].forEach(([prop, name, id]) => {
    if (getProperty(prop).toLowerCase() === "unstarted") {
      // Don't think we need?
      //visitUrl("shop.php?whichshop=${b}");
      visitUrl(`shop.php?whichshop=${name}&action=talk`);
      tryRunChoice(1, id, `start ${name} quest`);
      if (getProperty(prop).toLowerCase() === "unstarted") {
        throw `Failed to start ${name} quest`;
      }
    }
  });
}

function preCoilWire() {
  // Visit Toot Oriole, sell pork gems, save a baconstone for pantogram
  visitUrl("tutorial.php?action=toot");
  tryUse(1, $item`letter from King Ralph XI`);
  tryUse(1, $item`pork elf goodies sack`);
  // Only need one consult for a candy
  if (get("_clanFortuneConsultUses") < 3 && FORTUNE_TELLER_FRIEND.length > 1) {
    whitelist(MAIN_CLAN);
    cliExecute(`fortune ${FORTUNE_TELLER_FRIEND} garbage garbage thick`);
  }
  if (!have($item`battery (AAA)`)) harvestBatteries();
  getPantogramPants();
  equipOutfit(Quest.Beginning);

  //
  // Let's get a buncha meat!
  //
  $items`baconstone,hamethyst,porquoise`.forEach((gem) => autosell(5, gem));
  useSkill($skill`Communism!`);
  if (myLevel() + mySpleenUse() === 1) {
    while (get("_universeCalculated") < get("skillLevel144")) {
      cliExecute("numberology 14");
    }
    autosell(14 * get("_universeCalculated"), $item`moxie weed`);
  }
  if (!get("_chateauDeskHarvested")) {
    visitUrl("place.php?whichplace=chateau&action=chateau_desk1");
  }
  if (get("boomBoxSong").toLowerCase() !== "total eclipse of your meat") cliExecute("boombox meat");
  if (get("_horsery") === "") cliExecute("horsery dark");
  // 8600 meat

  // Get Community Service quests
  visitUrl("guild.php?place=challenge");
  openQuestZones();

  visitUrl("place.php?whichplace=town_right&action=townright_ltt");
  checkAvailable($item`your cowboy boots`);
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

  ["forest", "rope", "wrench"].forEach((card) => {
    if (!get("_deckCardsSeen").toLowerCase().includes(card)) {
      cliExecute(`cheat ${card}`);
    }
  });

  if (!have($skill`Digitize`) && get("_sourceTerminalDigitizeUses") < 1) {
    educate(SourceTerminal.Skills.Digitize);
    if (!have($skill`Digitize`)) {
      throw `Error: need to learn ${$skill`Digitize`}`;
    }
  }

  if (myAdventures() < 60) {
    if (!have($item`borrowed time`)) {
      create(1, $item`borrowed time`);
    }
    use($item`borrowed time`);
  }

  if (myHp() < myMaxhp()) cliExecute("hottub");

  // Fight Kramco
  oneOffEvents.hipster.run();

  if (get("_sourceTerminalDigitizeUses") > 0) {
    educate(SourceTerminal.Skills.Compress);
    educate(SourceTerminal.Skills.Extract);
  }
  if (have($skill`Digitize`)) throw `Error: need to unlearn ${$skill`Digitize`}`;

  const wand = $item`weeping willow wand`;
  if (!haveEquipped(wand)) {
    visitUrl("shop.php?whichshop=lathe");
    if (have($item`flimsy hardwood scraps`)) {
      retrieveItem(1, wand);
    } else {
      checkAvailable(wand);
    }
    equip($slot`off-hand`, wand);
  }

  buyUpTo(1, $item`detuned radio`); // 8600 - 285 = 8315 meat
  changeMcd(10);

  buyUpTo(1, $item`blue rocket`); // 8315 - 237 = 8078 meat
  // Fight Protonic Ghost
  oneOffEvents.mimic.run();

  // Start the digitize counter by going to a wanderer-friendly zone and encountering a normal combat
  // Decorate Crimbo Shrub with LED Mandala, Jack-O-Lantern Lights, Popcorn Strands, and Big Red-Wrapped Presents
  oneOffEvents.tropicalSkeleton.run();
  // 8078 + 2000 = 10078 meat

  if (!have($item`occult jelly donut`)) create(1, $item`occult jelly donut`);
  acquireEffect($effect`Blood Sugar Sauce Magic`);

  spendAllMpOnLibrams();
}

function postCoilWire() {
  gazeAtTheStars();
  if (have($item`occult jelly donut`)) eat($item`occult jelly donut`);
  if (!have($skill`Seek out a Bird`)) use(1, $item`bird-a-day calendar`);
  if (!have($item`Yeg's Motel hand soap`)) cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`);
  cliExecute("Briefcase e spell hot -combat");
  let click = true;
  for (let i = 0; i < 22 && click; ++i) {
    click = !containsText(
      visitUrl("place.php?whichplace=kgb&action=kgb_actuator1"),
      "Nothing happens."
    );
  }
  // Visit Gingerbread Civic Center & fast forward clock
  // Then use nanorhino for nanobrainy and increment the gingerbread city counter
  oneOffEvents.nanobrainy.run();
  // Upgrade Cosplay Saber and start buffing familiar weight now that we're done with Nanorhino
  if (get("_saberMod") === 0) {
    visitUrl("main.php?action=may4");
    runChoice(4); // familiar weight option
  }
  if (!get("_pottedTeaTreeUsed")) cliExecute("teatree loyal");
  wishEffect($effect`All is Forgiven`);
  wishEffect($effect`Witch Breaded`);
  useLibramsDrops(); // In case we obtained a green candy heart already, don't want to synthesize it later

  const range = $item`Dramatic™ range`;
  const camp = getCampground();
  const installedRange = Object.keys(camp).some((k: string) => {
    return k.includes("Dramatic");
  });
  if (!installedRange) buyUpTo(1, range);
  if (have(range)) use(range);
  // 10078 - 950 = 9128 meat
  [
    // Need all three of these to craft with
    $skill`Advanced Saucecrafting`,
    $skill`Advanced Cocktailcrafting`,
    $skill`Prevent Scurvy and Sobriety`,

    // Only need Alice's Army for now
    $skill`Summon Alice's Army Cards`,
    $skill`Summon Confiscated Things`,
    $skill`Summon Geeky Gifts`,
    $skill`Summon Tasteful Items`,

    // Buffs that can't fit elsewhere
    $skill`Incredible Self-Esteem`,
  ].forEach((s) => useSkill(s));

  [
    $item`oil of expertise`,
    $item`philter of phorce`,
    $item`ointment of the occult`,
    $item`eyedrops of the ermine`,
  ].forEach((saucePotion) => {
    if (!have(saucePotion) && !have(effectModifier(saucePotion, "effect"))) {
      create(saucePotion);
      checkAvailable(saucePotion, 3);
    }
  });
  if (!have($item`tiny black hole`)) cliExecute(`make ${$item`tiny black hole`}`);

  buyUpTo(1, $item`toy accordion`);
  acquireEffect($effect`Ode to Booze`);
  // 9128 - 142 - 95 - 950 - 28 = 7913 meat
  whitelist(MAIN_CLAN);
  acquireEffect($effect`[1701]Hip to the Jive`); // drink Hot Socks (3 drunk, 5000 meat)
  // 7913 - 5000 = 2913 meat
  acquireEffect($effect`In a Lather`); // drink Sockdollager (2 drunk, 500 meat)
  // 2913 - 500 = 2413 meat

  // Eat pizza before synthesizing, generate a licorice boa from pizza
  eatPizzas();
  // TODO: maybe spend down MP on librams if we can generate some sausages?
  if (myGardenType().toLowerCase().includes("peppermint")) cliExecute("garden pick");
  [$skill`Chubby and Plump`, $skill`Summon Crimbo Candy`].forEach((s) => useSkill(s));
  synthesize();
  // If we didn't use a sugar sheet for synthesis we can make a cold-filtered water
  if (
    get("tomeSummons") < 3 &&
    !have($item`cold-filtered water`) &&
    !have($effect`Purity of Spirit`)
  ) {
    create(1, $item`cold-filtered water`);
  }
  if (have($item`cold-filtered water`)) use($item`cold-filtered water`);
  // If we didn't use a chubby and plump bar for synthesis we can use it for more HP and MP
  if (have($item`Chubby and Plump bar`)) use($item`Chubby and Plump bar`);

  equip($slot`acc2`, $item`Powerful Glove`);
  acquireGumOrHermitItem($item`turtle totem`);
  acquireGumOrHermitItem($item`saucepan`);
  buffUpLeveling();
  equipOutfit(Quest.Leveling);
}
