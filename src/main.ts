import {
  abort,
  autosell,
  canInteract,
  changeMcd,
  cliExecute,
  create,
  drink,
  eat,
  effectModifier,
  equip,
  familiarWeight,
  gametimeToInt,
  getProperty,
  haveEffect,
  itemAmount,
  mpCost,
  myBasestat,
  myBuffedstat,
  myClass,
  myFamiliar,
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
  use,
  userConfirm,
  useSkill,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $item,
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
} from "libram";
import {
  BRICKO_TARGET_ITEM,
  BRICKOS_PER_FIGHT,
  FAX_AND_SLIME_CLAN,
  FORTUNE_TELLER_FRIEND,
  MAIN_CLAN,
  MEAT_SAFE_LIMIT,
  MP_SAFE_LIMIT,
} from "./config";
import { eatPizzas } from "./diet";
import { hasRemainingFreeFights, levelingEvents, oneOffEvents, preCoilEvents } from "./events";
import {
  castBestLibram,
  gazeAtTheStars,
  getPantogramPants,
  harvestBatteries,
  MoonSign,
  scavengeDaycare,
  spendAllMpOnLibrams,
  tuneMoon,
  useDroppedItems,
  vote,
} from "./iotms";
import { acquireEffect, tryUse, wishEffect, withContext } from "./lib";
import { checkReadyToAscend } from "./prep";
import { haveQuest, prep, prepAndDoQuest, Quest } from "./quests";
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
  [1322, ""], // The Beginning of the Neverend: (1) accept quest (2) decline quest (3) leave
  [1324, 5], // It Hasn't Ended, It's Just Paused: (1) upstairs (2) kitchen (3) backyard (4) basement (5) fight
  [1340, 2], // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
  [1386, 4], // Upgrade Your May the Fourth Cosplay Saber: (1) 15-20 MP regen (2) +20 ML (3) +3 resists (4) +10 familiar weight
  [1387, 3], // Using the Force: (1) banish (2) find friends (3) force item drops
].map(([id, value]): [string, string | number] => [`choiceAdventure${id}`, value]);

function checkMainClan() {
  if (Clan.get().name !== MAIN_CLAN) throw `Not in main clan?`;
}

export function main(argString = ""): void {
  const args = argString.split(" ");
  for (const arg of args) {
    if (arg.match(/test/)) {
      synthesize(
        [$effect`Synthesis: Collection`, $effect`Synthesis: Learning`, $effect`Synthesis: Greed`],
        new Set<Item>(),
        true
      );
      return;
    }
  }
  sinceKolmafiaRevision(25702);

  if (MAIN_CLAN.length < 1) throw `seventyhccs_main_clan property not set`;
  if (FAX_AND_SLIME_CLAN.length < 1) throw `seventyhccs_side_clan not set`;
  if (FORTUNE_TELLER_FRIEND.length < 1)
    print("Maybe set seventyhccs_fortune_friend property?", "orange");

  const startTime = gametimeToInt();

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

  const endTime = gametimeToInt();
  const duration = endTime - startTime;
  print(`Community Service completed in ${duration} miliseconds`, "green");
}

function openQuestZones() {
  [
    ["questM23Meatsmith", "meatsmith"],
    ["questM24Doc", "doc"],
    ["questM25Armorer", "armory"],
  ].forEach(([prop, id]) => {
    if (getProperty(prop).toLowerCase() === "unstarted") {
      visitUrl(`shop.php?whichshop=${id}&action=talk`);
      runChoice(1);
    }
  });
}

function preCoilWire() {
  // Visit Toot Oriole, sell pork gems, save a baconstone for pantogram
  visitUrl("tutorial.php?action=toot");
  while (get("_deluxeKlawSummons") < 3) visitUrl("clan_viplounge.php?action=klaw");
  [
    $item`letter from King Ralph XI`,
    $item`pork elf goodies sack`,
    $item`pack of KWE trading card`,
    $item`banana candle`,
    $item`ear candle`,
    $item`natural magick candle`,
    $item`rainbow glitter candle`,
    $item`votive of confidence`,
  ].forEach(tryUse);
  // Only need one consult for a candy
  if (get("_clanFortuneConsultUses") < 1 && FORTUNE_TELLER_FRIEND.length > 0) {
    checkMainClan();
    cliExecute(`fortune ${FORTUNE_TELLER_FRIEND} garbage batman thick`);
  }
  const calculation = "69";
  const canCalculate = () => get("_universeCalculated") < get("skillLevel144");
  const hasSolution = () => Object.keys(reverseNumberology()).includes(calculation);
  while (canCalculate() && hasSolution()) cliExecute(`numberology ${calculation}`);
  getPantogramPants();

  //
  // Let's get a buncha meat!
  //
  if (!get("_deckCardsSeen").includes("1952")) cliExecute("cheat 1952");
  if (have($item`1952 Mickey Mantle card`)) autosell(1, $item`1952 Mickey Mantle card`);
  useSkill($skill`Communism!`);
  if (!get("_chateauDeskHarvested")) visitUrl("place.php?whichplace=chateau&action=chateau_desk1");
  if (!get("_horsery")) cliExecute("horsery dark");
  SongBoom.setSong("Total Eclipse of Your Meat");
  // 10001 meat
  openQuestZones();
  equip($slot`acc2`, $item`Powerful Glove`); // Optimize away equipping & unequipping to buff up
  prep(Quest.Beginning);
  //prettier-ignore
  for (const [check, retrieve] of [
    [
      $effect`That's Just Cloud-Talk, Man`,
      () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
    ],
    [
      $item`"DRINK ME" potion`,
      () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
    ],
    [
      $item`your cowboy boots`,
      () => visitUrl("place.php?whichplace=town_right&action=townright_ltt"),
    ],
    [
      $item`detuned radio`,
      () => {
        retrieveItem($item`detuned radio`); // 10001 - 285 = 9716 meat
        changeMcd(10);
      },
    ],
    [$item`flimsy hardwood scraps`, () => visitUrl("shop.php?whichshop=lathe")],
    [
      $item`weeping willow wand`,
      () => {
        create($item`weeping willow wand`);
        equip($slot`off-hand`, $item`weeping willow wand`);
      },
    ],
    [$item`battery (AAA)`,             () => harvestBatteries()],
    [$item`battery (lantern)`,         () => create($item`battery (lantern)`)],
    [$item`Brutal brogues`,            () => cliExecute("bastille bbq brutalist catapult")],
    [$item`cop dollar`,                () => cliExecute("Detective Solver")],
    [$item`cuppa Loyal tea`,           () => cliExecute("teatree loyal")],
    [$item`green mana`,                () => cliExecute(`cheat forest`)],
    [$item`wrench`,                    () => cliExecute(`cheat wrench`)],
    [$item`occult jelly donut`,        () => create($item`occult jelly donut`)],
    [$item`sombrero-mounted sparkler`, () => retrieveItem($item`sombrero-mounted sparkler`)], // 9716 - 475 = 9241 meat
    [$item`Yeg's Motel hand soap`,     () => cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`)],
    [$skill`Seek out a Bird`,          () => use($item`Bird-a-Day calendar`)],
  ] as [Effect | Item | Skill, () => void][]) {
    if (!have(check)) retrieve();
  }
  vote();
  scavengeDaycare();
  if (!get("_borrowedTimeUsed")) {
    if (!have($item`borrowed time`)) create($item`borrowed time`);
    use($item`borrowed time`);
  }
  if (myHp() < myMaxhp() * 0.9) cliExecute("hottub");
  for (const event of Object.values(preCoilEvents)) if (event.ready()) event.run();
  // 9241 + 2000 = 11241 meat
  spendAllMpOnLibrams();
}

function postCoilWire() {
  gazeAtTheStars();
  if (have($item`occult jelly donut`)) eat($item`occult jelly donut`);
  cliExecute("Briefcase e spell spooky -combat");
  // Visit Gingerbread Civic Center & fast forward clock
  // Then use nanorhino for nanobrainy and increment the gingerbread city counter
  oneOffEvents.nanobrainy();
  // Upgrade Cosplay Saber and start buffing familiar weight now that we're done with Nanorhino
  if (get("_saberMod") < 1) {
    visitUrl("main.php?action=may4");
    runChoice(4);
  }
  $effects`All Is Forgiven, Sparkly!, Witch Breaded`.forEach(wishEffect);
  useDroppedItems(); // In case we obtained a green candy heart already, don't want to synthesize it later

  if (!get("hasRange")) {
    const range = $item`Dramatic™ range`;
    if (!have(range)) retrieveItem(range);
    use(range);
  }
  // 11241 - 950 = 10291 meat
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
  ].forEach((skill) => useSkill(skill));
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
  // 10291 - 142 = 10149 meat
  //useSkill(2, $skill`The Ode to Booze`);
  acquireEffect($effect`Ode to Booze`);
  checkMainClan();
  $effects`[1701]Hip to the Jive, In a Lather`.forEach(acquireEffect); // 5 drunk, 5500 meat
  // 10149 - 5500 = 4649 meat

  // Eat pizza before synthesizing, generate a licorice boa from pizza
  eatPizzas(); // 4649 - 987 - 950 - 495 - 215 - 77 - 38 = 1887 meat
  const toSynth = [
    $effect`Synthesis: Collection`,
    $effect`Synthesis: Smart`,
    $effect`Synthesis: Learning`,
  ].filter((effect) => !have(effect));
  if (toSynth.length > 0) {
    cliExecute("garden pick");
    cliExecute("refresh inventory");
    // Sweet synthesis with reserved candies omitted, add them back individually until a solution is found
    const wantToKeep = [$item`Chubby and Plump bar`, $item`sugar sheet`];
    for (let tries = 0; tries <= wantToKeep.length; tries++) {
      const toKeep = new Set(wantToKeep.slice(tries));
      if (!toKeep.has($item`sugar sheet`)) useSkill($skill`Summon Sugar Sheets`);
      if (synthesize(toSynth, toKeep)) break;
      else if (toKeep.size === 0) throw `Unable to find a combination for all synthesis targets`;
    }
  }
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
  retrieveItem($item`turtle totem`);
  retrieveItem($item`saucepan`);
  prep(Quest.Leveling);
  // 316 mp
  if (have($item`LOV Epaulettes`)) prep(Quest.LevelingML);
}

function levelAndDoQuests() {
  Clan.join(MAIN_CLAN);
  visitUrl("clan_viplounge.php?action=fwshop"); // Enable access to the fireworks shop
  const mainstat = myPrimestat();
  if (haveQuest(Quest.CoilWire)) {
    preCoilWire();
    print(`Coil Wire start: have ${myHp()}/${myMaxhp()} HP and ${myMp()}/${myMaxmp()} MP.`);
    print(`\tand ${myBuffedstat(mainstat)} (${myBasestat(mainstat)}) ${mainstat}.`);
    prepAndDoQuest(Quest.CoilWire);
    print(`Coil Wire done: have ${myHp()}/${myMaxhp()} HP and ${myMp()}/${myMaxmp()} MP.`);
  }

  if (hasRemainingFreeFights()) {
    postCoilWire();
    print(`Leveling start: have ${myHp()}/${myMaxhp()} HP and ${myMp()}/${myMaxmp()} MP.`);

    // eslint-disable-next-line no-constant-condition
    leveling: while (true) {
      // Spend excess MP on librams
      // Use free rests on stats at configured level
      // Swap equipment as needed between combats
      // Get Inner Elf at level 13
      // Free run for some items
      // Do all the leveling combats
      // Then gulp latte for more libram summons
      if (have($effect`Temporary Blindness`)) {
        if (get("_hotTubSoaks") < 5) cliExecute("hottub");
        else throw `Can't handle temporary blindness`;
      }

      const maxMPGains = (myMaxmp() - myMp()) / 15;
      const maxSoulFoodCasts = mySoulsauce() / soulsauceCost($skill`Soul Food`);
      const soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
      if (soulFoodCasts > 0) useSkill(soulFoodCasts, $skill`Soul Food`);

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
      useDroppedItems();

      while (have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKOS_PER_FIGHT)) {
        create(BRICKO_TARGET_ITEM);
      }

      if (have($item`burning newspaper`)) create($item`burning paper crane`);
      oneOffEvents.innerElf();
      // This is where all the leveling happens
      // Loop through the list of events until an unfinished one is found
      // After doing an event, go back to the top of the outer loop to
      // handle librams, sausages, garbage shirt, etc.
      for (const event of Object.values(levelingEvents)) {
        if (event.ready()) {
          event.run();
          continue leveling;
        }
      }

      break;
    }

    print(
      `Leveling done: have ${myHp()}/${myMaxhp()} HP and ${myMp()}/${myMaxmp()} MP at level ${myLevel()}.`
    );
    print(`\twith ${myBuffedstat(mainstat)} (${myBasestat(mainstat)}) ${mainstat}.`);
  }

  // Leveling done
  checkMainClan();
  cliExecute("shower hot");
  changeMcd(0);

  prepAndDoQuest(Quest.Muscle);
  prepAndDoQuest(Quest.Moxie);
  prepAndDoQuest(Quest.HP);

  if (haveQuest(Quest.SpellDamage)) {
    oneOffEvents.innerElf();
    oneOffEvents.meteorUngulith();
    if (!have($effect`Cowrruption`)) use($item`corrupted marrow`);
    prepAndDoQuest(Quest.SpellDamage);
  }

  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    oneOffEvents.innerElf();
    oneOffEvents.meteorPleasureDome();
    prepAndDoQuest(Quest.WeaponDamage);
  }

  if (haveQuest(Quest.CombatFrequency)) {
    equip($slot`acc2`, $item`Powerful Glove`);
    prepAndDoQuest(Quest.CombatFrequency);
  }

  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.foamYourself();
    prepAndDoQuest(Quest.HotResist);
  }

  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.meteorPleasureDome();
    prep(Quest.FamiliarWeight);
    const loveSong = $item`love song of icy revenge`;
    const taffy = $item`pulled blue taffy`;
    const coldHeart = effectModifier(loveSong, "effect");
    const swayed = effectModifier(taffy, "effect");
    const wine = $item`1950 Vampire Vintner wine`;
    const needWeight = () => Math.floor(familiarWeight(myFamiliar()) + weightAdjustment()) < 295;
    if (needWeight() && have(taffy) && !have(swayed)) cliExecute(`use * ${taffy}`);
    if (needWeight() && have(loveSong, 4) && !have(coldHeart)) use(4, loveSong);
    if (needWeight() && have(wine)) {
      acquireEffect($effect`Ode to Booze`);
      drink(wine); // 1 drunk
    }
    if (needWeight()) {
      while (have(loveSong) && haveEffect(coldHeart) < 20) {
        if (itemAmount(loveSong) * 5 + haveEffect(coldHeart) < 20) {
          cliExecute("pillkeeper extend");
          use(loveSong);
        } else {
          use(loveSong);
        }
      }
    }
    prepAndDoQuest(Quest.FamiliarWeight);
  }

  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform();
    prepAndDoQuest(Quest.ItemDrop);
  }

  prepAndDoQuest(Quest.Mysticality);
  prepAndDoQuest(Quest.Donate);
}
