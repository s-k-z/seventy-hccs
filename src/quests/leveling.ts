import { CombatStrategy, OutfitSpec, Quest, Task } from "grimoire-kolmafia";
import {
  cliExecute,
  create,
  eat,
  haveEffect,
  itemAmount,
  Location,
  mpCost,
  myBasestat,
  myBuffedstat,
  myHp,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  myPrimestat,
  mySoulsauce,
  runChoice,
  Skill,
  soulsauceCost,
  toInt,
  use,
  useSkill,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $monsters,
  $phylum,
  $skill,
  $stat,
  AutumnAton,
  Clan,
  Counter,
  DNALab,
  get,
  have,
  Macro,
  SourceTerminal,
  Witchess,
} from "libram";
import { DefaultCombat, DefaultMacro, mapMonster, notAllowList } from "../combat";
import { BRICKO_COST, BRICKO_TARGET_ITEM, config } from "../config";
import { castBestLibram, spendAllMpOnLibrams, wish } from "../iotms";
import { acquireEffect, assert, haveItemOrEffect, voterMonsterNow } from "../lib";
import { AdvReq, selectBestFamiliar } from "./shared";
import { NumericProperty } from "libram/dist/propertyTypes";

function levelingOutfit(cap?: number, req?: AdvReq): OutfitSpec {
  const multiplyML = myBuffedstat(myPrimestat()) < (cap ?? Infinity);
  return {
    hat: $item`Daylight Shavings Helmet`,
    back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
    shirt: get("garbageShirtCharge") > 0 ? $item`makeshift garbage shirt` : $item`Jurassic Parka`,
    weapon: $item`Fourth of May Cosplay Saber`,
    offhand: multiplyML ? $item`unbreakable umbrella` : $item`familiar scrapbook`,
    pants: $item`Cargo Cultist Shorts`,
    acc1: $item`hewn moon-rune spoon`,
    acc2: $items`battle broom, gold detective badge`,
    acc3: $item`Beach Comb`,
    ...selectBestFamiliar(req),
    modes: { parka: "kachungasaur", retrocape: ["heck", "thrill"], umbrella: "broken" },
  };
}

function lightweightOutfit(): OutfitSpec {
  return {
    hat: $item`Iunion Crown`,
    back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
    shirt: get("garbageShirtCharge") > 0 ? $item`makeshift garbage shirt` : $item`Jurassic Parka`,
    weapon: $item`June cleaver`,
    offhand: $item`unbreakable umbrella`,
    pants: $item`Cargo Cultist Shorts`,
    acc1: $item`Eight Days a Week Pill Keeper`,
    acc2: $items`battle broom, gold detective badge`,
    acc3: $item`combat lover's locket`,
    ...selectBestFamiliar(AdvReq.NoHipster),
    modes: { parka: "kachungasaur", retrocape: ["heck", "thrill"], umbrella: "broken" },
  };
}

function getHowManySausagesToEat(): number {
  if (myMaxmp() - myMp() < 999) return 0;

  if (itemAmount($item`magical sausage casing`) < 1) return 0;

  if (myMaxmp() - mpCost($skill`Summon BRICKOs`) < config.MP_SAFE_LIMIT) return 0;

  const offset = get("_sausagesMade");
  if (offset >= 23) return 0;

  const costsOfNext = [...Array(24).keys()].map((k) => k * 111).splice(1);
  const mpRefills = Math.floor((myMaxmp() - myMp()) / 999);
  let toEat = 0;
  let totalCost = 0;
  while (toEat < mpRefills && toEat + offset < costsOfNext.length) {
    totalCost += costsOfNext[toEat + offset];
    if (myMeat() - totalCost < config.MEAT_SAFE_LIMIT) break;
    toEat++;
  }

  return Math.min(toEat, itemAmount($item`magical sausage casing`));
}

function topOffHp(): void {
  const delta = myMaxhp() - myHp();
  const restorers = new Map<Skill, number>([
    [$skill`Cannelloni Cocoon`, 1000],
    [$skill`Disco Nap`, 40],
    [$skill`Lasagna Bandages`, 20],
    [$skill`Tongue of the Walrus`, 35],
  ]);
  while (myHp() < myMaxhp()) {
    const best = Array.from(restorers).reduce(
      (target, [skill, restores]) => {
        const rate = Math.min(delta, restores) / mpCost(skill);
        if (rate > target[1]) return [skill, rate];
        else return target;
      },
      [$skill`none`, 0]
    )[0];
    if (best === $skill`none`) throw `Couldn't find an restorer for ${myHp()}/${myMaxhp()} hp`;
    useSkill(best);
  }
}

function validateFreeFightCounter(prop: NumericProperty, url: string, location: Location): void {
  const pre = get(prop);
  visitUrl(url);
  const delta = get(prop) - pre;
  assert(delta === 0, `Miscounted ${delta} turn(s) at ${location}?`);
}

export const Leveling: Quest<Task> = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").includes(","),
  tasks: [
    {
      name: "Cast Best Libram",
      completed: () => myMp() - mpCost($skill`Summon BRICKOs`) < config.MP_SAFE_LIMIT,
      do: () => castBestLibram(),
    },
    {
      name: "Cast Soul Food",
      completed: () =>
        mySoulsauce() / soulsauceCost($skill`Soul Food`) < 1 || myMaxmp() - myMp() < 15,
      do: () => {
        const maxMpGain = (myMaxmp() - myMp()) / 15;
        const maxSoulFoodCasts = mySoulsauce() / soulsauceCost($skill`Soul Food`);
        const soulFoodCasts = Math.floor(Math.min(maxMpGain, maxSoulFoodCasts));
        if (soulFoodCasts > 0) useSkill(soulFoodCasts, $skill`Soul Food`);
      },
    },
    {
      name: "Eat Magical Sausages",
      completed: () => getHowManySausagesToEat() < 1,
      do: () => {
        const toEat = getHowManySausagesToEat();
        create(toEat, $item`magical sausage`);
        eat(toEat, $item`magical sausage`);
      },
    },
    {
      name: "Remove Temporary Blindness",
      completed: () => !have($effect`Temporary Blindness`),
      prepare: () => assert(get("_hotTubSoaks") < 5, "Don't have hot tub available?"),
      do: () => cliExecute("hottub"),
    },
    {
      name: "Heal if needed",
      completed: () => myHp() / myMaxhp() > 0.3,
      do: () => useSkill($skill`Cannelloni Cocoon`),
    },
    {
      name: "Make Burning Paper Crane",
      ready: () => have($item`burning newspaper`),
      completed: () => have($item`burning paper crane`),
      do: () => create($item`burning paper crane`),
    },
    {
      name: "Make candy knife",
      ready: () => myBasestat($stat`muscle`) >= 40,
      completed: () => get("_discoKnife"),
      do: () => useSkill($skill`That's Not a Knife`),
    },
    {
      name: "Summon Alice's Army",
      completed: () => get("grimoire3Summons") > 0,
      do: () => useSkill($skill`Summon Alice's Army Cards`), // 5 mp
    },
    {
      name: "Ointment of the Occult",
      completed: () => have($item`ointment of the occult`),
      do: () => {
        if (!have($item`grapefruit`)) {
          useSkill($skill`Prevent Scurvy and Sobriety`); // 50 mp
        }
        useSkill($skill`Advanced Saucecrafting`); // 10 mp
        create($item`ointment of the occult`); // -900 meat
      },
    },
    {
      name: "Summon Chubby and Plump Bar",
      completed: () => haveItemOrEffect($item`Chubby and Plump bar`),
      do: () => useSkill($skill`Chubby and Plump`), // 50 mp
    },
    {
      name: "Use box of familiar jacks",
      completed: () => have($item`homemade robot gear`),
      do: () => use($item`box of Familiar Jacks`),
      outfit: { familiar: $familiar`Homemade Robot` },
    },
    {
      name: "Open MayDay package",
      completed: () => have($effect`Ready to Survive`),
      do: () => use($item`MayDay™ supply package`),
    },
    {
      name: "Configure KGB",
      completed: () => get("_kgbClicksUsed") > 0,
      do: () => cliExecute("Briefcase e spell spooky -combat"),
    },
    {
      name: "Triple-Size",
      completed: () => have($effect`Triple-Sized`),
      do: () => acquireEffect($effect`Triple-Sized`),
      outfit: { acc2: $item`Powerful Glove` },
    },
    {
      name: "Ten-percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      effects: $effects`Inscrutable Gaze`,
      outfit: { offhand: $item`familiar scrapbook` },
    },
    {
      name: "Forcefully eat the first sausage of the day",
      completed: () => get("_sausagesEaten") > 0,
      do: () => {
        spendAllMpOnLibrams();
        create(1, $item`magical sausage`);
        eat(1, $item`magical sausage`);
        assert(get("_sausagesEaten") > 0, "Didn't eat a sausage?");
      },
    },
    {
      name: "Advance Clock",
      completed: () => get("_gingerbreadClockAdvanced"),
      choices: { 1215: 1 }, // Setting the Clock: (1) set the clock forward 5 turns (2) skip
      do: $location`Gingerbread Civic Center`,
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().macro(Macro.abort()),
    },
    {
      name: "Nanobrainy",
      completed: () => have($effect`Nanobrainy`),
      do: $location`Gingerbread Upscale Retail District`,
      post: () => assert($effect`Nanobrainy`),
      outfit: {
        offhand: $item`latte lovers member's mug`,
        familiar: $familiar`Nanorhino`,
      },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Entangling Noodles`)
          .trySkill($skill`Throw Latte on Opponent`)
          .trySkill($skill`KGB tranquilizer dart`)
          .trySkill($skill`Reflex Hammer`)
          .trySkill($skill`Feel Hatred`)
          .abort()
      ),
    },
    {
      name: "Visit the Looking Glass",
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
      outfit: { pants: $item`designer sweatpants` },
    },
    {
      name: "Buff Familiar Weight",
      completed: () => get("_saberMod") !== 0,
      prepare: () => Clan.join(config.main_clan),
      do: () => cliExecute("saber familiar"),
      effects: [
        $effect`A Girl Named Sue`,
        // Skills
        $effect`Blood Bond`,
        // Class skills
        $effect`Empathy`, // 15 mp, -720 meat
        $effect`Leash of Linguini`, // 12 mp
      ],
    },
    {
      name: "Wish Effects",
      completed: () => $effects`Sparkly!, Witch Breaded`.every((e) => have(e)),
      do: () => $effects`Sparkly!, Witch Breaded`.forEach(wish),
    },
    {
      name: "Crimbo Carol",
      completed: () =>
        [
          $effect`All I Want For Crimbo Is Stuff`,
          $effect`Crimbo Wrapping`,
          $effect`Do You Crush What I Crush?`,
          $effect`Holiday Yoked`,
          $effect`Let It Snow/Boil/Stink/Frighten/Grease`,
        ].some((carol) => have(carol)),
      do: $location`The Dire Warren`,
      post: () => assert($effect`Do You Crush What I Crush?`),
      outfit: {
        back: $item`vampyric cloake`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Ghost of Crimbo Carols`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Giant Growth`)
          .trySkill($skill`Become a Wolf`)
          .trySkill($skill`Bowl Straight Up`)
          .trySkill($skill`Throw Latte on Opponent`)
          .trySkill($skill`KGB tranquilizer dart`)
          .trySkill($skill`Reflex Hammer`)
          .trySkill($skill`Feel Hatred`)
          .abort()
      ),
    },
    {
      name: "Christmas Card",
      completed: () =>
        haveItemOrEffect($item`Gene Tonic: Elf`) ||
        get("_deckCardsSeen").includes("Christmas Card"),
      do: () => cliExecute("cheat christmas card"),
      post: () => {
        DNALab.makeTonic();
        use($item`Gene Tonic: Elf`);
        assert(
          get("_deckCardsSeen").includes("Christmas Card"),
          "Failed to record christmas card draw?"
        );
      },
      effects: $effects`Inscrutable Gaze, Ode to Booze`, // 10 + 50 mp
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy()
        .startingMacro(Macro.item($item`DNA extraction syringe`))
        .macro(
          Macro.skill($skill`Curse of Weaksauce`)
            .skill($skill`Micrometeorite`)
            .item($item`Time-Spinner`)
            .skill($skill`Sing Along`)
            .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
            .attack()
            .repeat(),
          $monster`Black Crayon Crimbo Elf`
        )
        .macro(Macro.runaway()),
    },
    {
      name: "Glitter",
      completed: () => have($effect`Glittering Eyelashes`),
      do: () => use($item`glittery mascara`), // -21 meat
      post: () => assert($effect`Glittering Eyelashes`),
    },
    {
      name: "Ensure Imported Taffy",
      ready: () => get("_speakeasyFreeFights") === 2,
      completed: () => haveItemOrEffect($item`imported taffy`) || get("_speakeasyFreeFights") >= 3,
      do: () => mapMonster($location`An Unusually Quiet Barroom Brawl`, $monster`goblin flapper`),
      post: () =>
        validateFreeFightCounter(
          "_speakeasyFreeFights",
          "place.php?whichplace=speakeasy",
          $location`An Unusually Quiet Barroom Brawl`
        ),
      outfit: () => levelingOutfit(),
      combat: new CombatStrategy()
        .macro(() => Macro.skill($skill`Feel Envy`).step(DefaultMacro()), $monster`goblin flapper`)
        .macro(Macro.abort()),
    },
    {
      name: "Wanderer Sweep",
      completed: () => get("_speakeasyFreeFights") >= 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      post: () =>
        validateFreeFightCounter(
          "_speakeasyFreeFights",
          "place.php?whichplace=speakeasy",
          $location`An Unusually Quiet Barroom Brawl`
        ),
      outfit: () => {
        const outfit = levelingOutfit();
        const wantOrb =
          !haveItemOrEffect($item`imported taffy`) &&
          (get("crystalBallPredictions") === "" ||
            get("crystalBallPredictions").includes("goblin flapper"));
        if (wantOrb) outfit.famequip = $item`miniature crystal ball`;
        return outfit;
      },
      combat: new CombatStrategy()
        .macro(
          () =>
            Macro.externalIf(
              !haveItemOrEffect($item`imported taffy`),
              Macro.skill($skill`Feel Envy`)
            ),
          $monster`goblin flapper`
        )
        .macro(DefaultMacro), // Don't abort on unexpected monsters
      effects: [
        $effect`Broad-Spectrum Vaccine`,
        $effect`Favored by Lyle`,
        $effect`Grumpy and Ornery`,
        $effect`Mental A-cue-ity`,
        $effect`Mystically Oiled`,
        $effect`Pisces in the Skyces`,
        $effect`Plump and Chubby`,
        $effect`Sigils of Yeg`,
        $effect`Starry-Eyed`,
        $effect`Total Protonic Reversal`,
        $effect`Warlock, Warstock, and Warbarrel`,
        $effect`items.enh`,
        $effect`meat.enh`,
        // Beach comb (requres >0 turns available)
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
        $effect`Big`, // 15 mp
        $effect`Blessing of the Bird`, // 10 mp
        $effect`Blessing of your favorite Bird`, // 50 mp
        $effect`Blood Bubble`,
        $effect`Carol of the Bulls`, // 30 mp
        $effect`Carol of the Hells`, // 30 mp
        $effect`Carol of the Thrills`, // 30 mp
        $effect`Feeling Excited`,
        $effect`Feeling Peaceful`,
        $effect`Frenzied, Bloody`,
        $effect`Inscrutable Gaze`, // 10 mp, used above
        $effect`Ruthlessly Efficient`, // 10 mp
        $effect`Singer's Faithful Ocelot`, // 15 mp
        $effect`Walberg's Dim Bulb`, // 5 mp
        // Class skills
        $effect`Astral Shell`, // 10 mp
        $effect`Curiosity of Br'er Tarrypin`, // 10 mp
        $effect`Elemental Saucesphere`, // 10 mp
        $effect`Flimsy Shield of the Pastalord`, // 20 mp
        $effect`Ghostly Shell`, // 6 mp
        $effect`Sauce Monocle`, // 20 mp
        $effect`Springy Fusilli`, // 10 mp
        // Batteries
        $effect`AA-Charged`, // +40 MP
        $effect`AAA-Charged`, // +30 MP
        // Song(s)
        $effect`Ode to Booze`, // 50 mp
        $effect`Polka of Plenty`, // 7 mp
        $effect`Stevedave's Shanty of Superiority`, // 30 mp
        // Dread Song
        $effect`Song of Sauce`, // 100 mp
      ],
    },
    {
      name: "Tunnel of L.O.V.E.",
      completed: () => get("_loveTunnelUsed"),
      prepare: spendAllMpOnLibrams,
      // 1222 The Tunnel of L.O.V.E.: (1) enter the tunnel (2) leave
      // 1223 L.O.V. Entrance: (1) fight the enforcer (2) skip
      // 1224 L.O.V. Equipment Room: (1) take the cardigan (2) take the epaulettes (3) take the earrings (4) skip
      // 1225 L.O.V. Engine Room: (1) fight the engineer (2) skip
      // 1226 L.O.V. Emergency Room: (1) Lovebotamy (2) Open Heart Surgery (3) Wandering Eye Surgery (4) skip
      // 1227 L.O.V. Elbow Room: (1) fight the equivocator (2) skip
      // 1228 L.O.V. Emporium: (1) enamorang (2) emotionizer (3) chocolate (4) bouquet (5) elephant (6) toast (7) skip
      choices: { 1222: 1, 1223: 1, 1224: 2, 1225: 1, 1226: 2, 1227: 1, 1228: 3 },
      do: $location`The Tunnel of L.O.V.E.`,
      post: () => {
        assert($effect`Open Heart Surgery`);
        $items`LOV Elixir #3, LOV Elixir #6, LOV Epaulettes`.forEach((l) => assert(l));
        use($item`LOV Elixir #3`);
        use($item`LOV Elixir #6`);
        use($item`LOV Extraterrestrial Chocolate`);
      },
      outfit: () => levelingOutfit(10000, AdvReq.NoAttack),
      combat: DefaultCombat,
    },
    {
      name: "Spit On a Pirate",
      ready: () => {
        return (
          get("camelSpit") >= 100 &&
          get("lastCopyableMonster") !== $monster`sausage goblin` &&
          !Counter.exists("portscan.edu")
        );
      },
      completed: () => have($effect`Spit Upon`) || haveItemOrEffect($item`Gene Tonic: Pirate`),
      do: $location`Pirates of the Garbage Barges`,
      post: () => {
        if (get("lastEncounter") === "Dead Men Smell No Tales") return;
        if (get("dnaSyringe") === $phylum`pirate`) {
          DNALab.makeTonic();
        }
        assert($item`Gene Tonic: Pirate`);
        assert($effect`Spit Upon`);
      },
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Melodramedary`, acc3: $item`Kremlin's Greatest Briefcase` },
      combat: new CombatStrategy()
        .macro(
          Macro.tryItem($item`DNA extraction syringe`)
            .trySkill($skill`%fn, spit on me!`)
            .trySkill($skill`Throw Latte on Opponent`)
            .trySkill($skill`KGB tranquilizer dart`)
            .trySkill($skill`Reflex Hammer`)
            .trySkill($skill`Feel Hatred`)
            .abort(),
          $monsters`filthy pirate, fishy pirate, flashy pirate, funky pirate`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Witchess Rook",
      completed: () => haveItemOrEffect($item`Greek fire`),
      do: () => Witchess.fightPiece($monster`Witchess Rook`),
      post: () => {
        use($item`Greek fire`);
        visitUrl("questlog.php?which=1");
        assert(!!get("ghostLocation"), `Failed to get protonic ghost notice`);
      },
      effects: [
        $effect`Drescher's Annoying Noise`,
        $effect`Imported Strength`,
        $effect`Pride of the Puffin`,
        // Song(s)
        $effect`Ur-Kel's Aria of Annoyance`,
      ],
      outfit: () => ({
        ...levelingOutfit(600),
        back: $item`protonic accelerator pack`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Protonic Ghost",
      completed: () => !get("ghostLocation"),
      do: () => get("ghostLocation"),
      post: () => {
        visitUrl("questlog.php?which=1");
        assert(!get("ghostLocation"), "Still have a ghost location");
      },
      outfit: () => ({
        ...levelingOutfit(undefined, AdvReq.NoAttack),
        back: $item`protonic accelerator pack`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Snojo",
      completed: () => get("_snojoFreeFights") >= 10,
      prepare: () => {
        if (get("snojoSetting") !== $stat`Muscle`) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
      },
      do: $location`The X-32-F Combat Training Snowman`,
      post: () => {
        if (!haveItemOrEffect($item`Gene Tonic: Construct`)) DNALab.makeTonic();
      },
      outfit: () => levelingOutfit(),
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(
          !haveItemOrEffect($item`Gene Tonic: Construct`),
          Macro.item([$item`DNA extraction syringe`, $item`Time-Spinner`])
        )
          .skill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: "Become Shadow Affine",
      completed: () => get("questRufus") !== "unstarted",
      // Calling Rufus: (1) I'll fight the entity (2) I'll find the artifact (3) I'll collect the goods (4) Hang up
      choices: { 1497: 1 },
      do: () => use($item`closed-circuit pay phone`),
      post: () => {
        assert($effect`Shadow Affinity`);
        assert(get("questRufus") !== "unstarted", "Failed to start Rufus quest?");
      },
    },
    {
      name: "Shadow Monster",
      completed: () => haveEffect($effect`Shadow Affinity`) <= 3,
      do: $location`Shadow Rift (The Right Side of the Tracks)`,
      outfit: () => levelingOutfit(),
      combat: DefaultCombat,
    },
    {
      name: "Send autumn-aton",
      completed: () => !AutumnAton.available(),
      do: (): void => {
        AutumnAton.sendTo($location`Shadow Rift`);
      },
    },
    {
      name: "BRICKOS",
      ready: () => have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKO_COST),
      completed: () => get("_brickoFights") >= 3,
      acquire: [{ item: BRICKO_TARGET_ITEM }],
      do: () => use(BRICKO_TARGET_ITEM),
      outfit: () => levelingOutfit(),
      combat: DefaultCombat,
    },
    {
      name: "Eldritch Tentacle",
      completed: () => get("_eldritchHorrorEvoked"),
      prepare: () => SourceTerminal.educate($skill`Portscan`),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: () => {
        // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned
        if (myHp() / myMaxhp() < 0.5) useSkill($skill`Cannelloni Cocoon`);
        assert(Counter.exists("portscan.edu"), "Failed to setup portscan?");
      },
      outfit: () => levelingOutfit(400),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Portscan`)
          .skill($skill`Curse of Weaksauce`)
          .item($item`Time-Spinner`)
          .skill($skill`Micrometeorite`)
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
    },
    {
      name: "God Lobster",
      completed: () => get("_godLobsterFights") >= 3,
      choices: { 1310: () => (have($item`God Lobster's Ring`) ? 2 : 1) }, // Granted a Boon: (1) equipment (2) blessing (3) experience
      do: () => visitUrl("main.php?fightgodlobster=1"),
      outfit: () => ({
        ...levelingOutfit(1500),
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Shadow Agent",
      completed: () => !have($effect`Shadow Affinity`),
      do: $location`Shadow Rift (The Right Side of the Tracks)`,
      outfit: () => levelingOutfit(10000),
      combat: new CombatStrategy()
        .macro(
          Macro.if_(`!haseffect ${$effect`Shadow Affinity`}`, Macro.abort())
            .trySkill($skill`Portscan`)
            .skill($skill`Curse of Weaksauce`)
            .item($item`Time-Spinner`)
            .skill($skill`Micrometeorite`)
            .skill($skill`Sing Along`)
            .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
            .attack()
            .repeat(),
          $monster`Government agent`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Shadow Entity",
      completed: () => get("encountersUntilSRChoice") !== 0 || have($effect`Inner Elf`),
      prepare: topOffHp,
      do: $location`Shadow Rift (The Right Side of the Tracks)`,
      post: () => {
        assert(
          get("encountersUntilSRChoice") !== 0,
          "Spent fewer shadow rift combats than expected?"
        );
        assert($effect`Inner Elf`);
      },
      outfit: () => ({
        ...levelingOutfit(),
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
      }),
      combat: new CombatStrategy()
        .macro(
          Macro.skill($skill`Saucegeyser`),
          $monsters`shadow cauldron, shadow matrix, shadow scythe, shadow spire, shadow tongue`
        )
        .macro(Macro.skill($skill`Northern Explosion`), $monster`shadow orrery`)
        .macro(Macro.abort()),
    },
    {
      name: "Witchess Witch",
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      outfit: () => levelingOutfit(7000),
      combat: DefaultCombat,
    },
    {
      name: "Witchess King",
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      outfit: () => levelingOutfit(6000),
      combat: DefaultCombat,
    },
    {
      name: "Remaining Witchess Fights",
      completed: () => Witchess.fightsDone() >= 5,
      acquire: [{ item: $item`makeshift garbage shirt` }],
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      outfit: () => levelingOutfit(8000),
      combat: DefaultCombat,
    },
    {
      name: "Deep Machine Tunnels",
      completed: () => get("_machineTunnelsAdv") >= 5,
      prepare: topOffHp,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      outfit: () => ({
        ...levelingOutfit(10000),
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Voting Booth Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") > 0,
      // 1467 Poetic Justice: (1) Moxie stats (2) Myst stats (3) 5 Adventures & Beaten up
      // 1468 Aunts not Ants: (1) Moxie stats (2) Muscle stats (3) +10 stats per fight, -20% to all stats
      // 1469 Beware of Aligator: (1) +20 ML (2) Awesome booze (3) 1500 meat
      // 1470 Teacher's Pet: (1) Sleaze Res + DA (2) Teacher's pen (3)  Muscle stats
      // 1471 Lost and Found: (1) Meat potion (2) Myst stats (3) Meat, Muscle stats + Beaten up
      // 1472 Summer Days: (1) -5% Combat Frequency potion (2) Good food (3) Moxie stats
      // 1473 Bath Time: (1) Muscle + gob of wet hair (2) Resists + DA (3) Hot res + Init
      // 1474 Delicious Sprouts: (1) Myst stats (2) Good food (3) Muscle stats
      // 1475 Hypnotic Master: (1) Mother's necklace (2) Muscle stats (3) random effects
      choices: { 1467: 3, 1468: 4, 1469: 3, 1470: 2, 1471: 1, 1472: 4, 1473: 4, 1474: 1, 1475: 1 },
      do: $location`The Toxic Teacups`,
      post: () => {
        assert(
          get("lastEncounter") === "In Your Cups" || get("_voteFreeFights") > 0,
          "Didn't increment vote counter?"
        );
        if (have($effect`Beaten Up`)) useSkill($skill`Tongue of the Walrus`);
      },
      outfit: () => ({
        ...lightweightOutfit(),
        acc3: $item`"I Voted!" sticker`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Chest X-Ray",
      completed: () => get("_chestXRayUsed") >= 3,
      choices: { 1467: 3, 1468: 4, 1469: 3, 1470: 2, 1471: 1, 1472: 4, 1473: 4, 1474: 1, 1475: 1 },
      do: $location`The Toxic Teacups`,
      post: () => {
        if (have($effect`Beaten Up`)) useSkill($skill`Tongue of the Walrus`);
      },
      outfit: () => ({
        ...lightweightOutfit(),
        acc3: $item`Lil' Doctor™ bag`,
      }),
      combat: DefaultCombat,
    },
    {
      name: "Shattering Punch",
      completed: () => get("_shatteringPunchUsed") >= 3,
      choices: { 1467: 3, 1468: 4, 1469: 3, 1470: 2, 1471: 1, 1472: 4, 1473: 4, 1474: 1, 1475: 1 },
      do: $location`The Toxic Teacups`,
      post: () => {
        if (have($effect`Beaten Up`)) useSkill($skill`Tongue of the Walrus`);
      },
      outfit: () => lightweightOutfit(),
      combat: DefaultCombat,
    },
    {
      name: "Mob Hit",
      completed: () => get("_gingerbreadMobHitUsed"),
      choices: { 1467: 3, 1468: 4, 1469: 3, 1470: 2, 1471: 1, 1472: 4, 1473: 4, 1474: 1, 1475: 1 },
      do: $location`The Toxic Teacups`,
      post: () => {
        if (have($effect`Beaten Up`)) useSkill($skill`Tongue of the Walrus`);
      },
      outfit: () => lightweightOutfit(),
      combat: DefaultCombat,
    },
    {
      name: "Lectures on Relativity",
      completed: () => get("_pocketProfessorLectures") > 0,
      prepare: topOffHp,
      do: $location`The Toxic Teacups`,
      post: () => assert(get("_pocketProfessorLectures") > 0, "Failed to lecture?"),
      outfit: () => ({
        ...levelingOutfit(10000),
        offhand: $item`Kramco Sausage-o-Matic™`,
        familiar: $familiar`Pocket Professor`,
        famequip: $item`tiny stillsuit`,
      }),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Curse of Weaksauce`)
          .item($item`Time-Spinner`)
          .skill($skill`Micrometeorite`)
          .if_(
            `hasskill ${toInt($skill`lecture on relativity`)}`,
            Macro.skill($skill`lecture on relativity`).skill($skill`Saucy Salve`)
          )
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
    },
    {
      name: "Neverending Party",
      completed: () => get("_neverendingPartyFreeTurns") >= 10,
      choices: { 1322: 2, 1324: 5 },
      do: $location`The Neverending Party`,
      post: () =>
        validateFreeFightCounter(
          "_neverendingPartyFreeTurns",
          "place.php?whichplace=town_wrong",
          $location`The Neverending Party`
        ),
      outfit: () => levelingOutfit(20000),
      combat: new CombatStrategy().startingMacro(Macro.if_(notAllowList, Macro.abort())).macro(
        Macro.externalIf(
          get("cosmicBowlingBallReturnCombats") > 1,
          Macro.trySkill($skill`Feel Pride`)
        )
          .trySkill($skill`Bowl Sideways`)
          .skill($skill`Curse of Weaksauce`)
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
    },
    {
      name: "Drink Lattes",
      completed: () => get("_latteRefillsUsed") >= 3,
      prepare: () => {
        assert(get("_banderRunaways") < weightAdjustment() / 5, "Used too many runaways?");
        if (get("_latteDrinkUsed")) cliExecute("latte refill pumpkin cinnamon vanilla");
      },
      do: $location`The Dire Warren`,
      effects: $effects`Ode to Booze`,
      outfit: {
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        offhand: $item`latte lovers member's mug`,
        pants: $item`Cargo Cultist Shorts`,
        acc2: $items`battle broom`,
        acc3: $item`"I Voted!" sticker`,
        familiar: $familiar`Frumious Bandersnatch`,
        modes: { parka: "ghostasaurus", retrocape: ["heck", "hold"] },
      },
      combat: new CombatStrategy().macro(() =>
        Macro.trySkill($skill`Gulp Latte`)
          // 3rd refil occurs after macro is evaluated
          .externalIf(get("_latteRefillsUsed") < 2, Macro.trySkill($skill`Throw Latte on Opponent`))
          .runaway()
      ),
    },
  ],
};
