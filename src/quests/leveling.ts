import { CombatStrategy, OutfitSpec, Quest, Task } from "grimoire-kolmafia";
import {
  adv1,
  autosell,
  cliExecute,
  create,
  eat,
  equip,
  familiarWeight,
  itemAmount,
  mpCost,
  myBasestat,
  myBuffedstat,
  myFamiliar,
  myHp,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  myPrimestat,
  mySoulsauce,
  print,
  runChoice,
  soulsauceCost,
  sweetSynthesis,
  totalFreeRests,
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
  $skill,
  $slot,
  $stat,
  Clan,
  DNALab,
  get,
  have,
  Macro,
  Witchess,
} from "libram";
import {
  DefaultCombat,
  DefaultMacro,
  DefaultStrategy,
  RunawayCombat,
  StenchCombat,
} from "../combat";
import { BRICKO_COST, BRICKO_TARGET_ITEM, config } from "../config";
import { castBestLibram, spendAllMpOnLibrams } from "../iotms";
import {
  acquireEffect,
  checkAvailable,
  checkEffect,
  haveItemOrEffect,
  tuple,
  voterMonsterNow,
  wishEffect,
} from "../lib";
import { AdvReq, deepDarkVisions, innerElf, refreshGhost, selectBestFamiliar } from "./shared";

function levelingOutfit(cap?: number): OutfitSpec {
  const multiplyML = myBuffedstat(myPrimestat()) < (cap ?? Infinity);
  return {
    hat: $item`Daylight Shavings Helmet`,
    back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
    shirt: $item`Jurassic Parka`,
    weapon: $item`Fourth of May Cosplay Saber`,
    offhand: multiplyML ? $item`unbreakable umbrella` : $item`familiar scrapbook`,
    pants: $item`Cargo Cultist Shorts`,
    acc1: $item`hewn moon-rune spoon`,
    acc2: $items`battle broom, gold detective badge`,
    acc3: $item`Beach Comb`,
    modes: { parka: "kachungasaur", retrocape: ["heck", "thrill"], umbrella: "broken" },
  };
}

const vintnerOutfit = (): OutfitSpec => ({
  hat: $item`Iunion Crown`,
  back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
  shirt: get("garbageShirtCharge") > 0 ? $item`makeshift garbage shirt` : $item`Jurassic Parka`,
  weapon: $item`weeping willow wand`,
  offhand: $item`unbreakable umbrella`,
  pants: $item`Cargo Cultist Shorts`,
  acc1: $item`Powerful Glove`,
  acc2: $items`battle broom, gold detective badge`,
  acc3: get("_backUpUses") < 11 ? $item`backup camera` : $item`Kremlin's Greatest Briefcase`,
  familiar: selectBestFamiliar(AdvReq.Wine),
  modes: { parka: "kachungasaur", retrocape: ["heck", "thrill"], umbrella: "broken" },
});

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
  if (myHp() < myMaxhp()) useSkill(Math.ceil(myMaxhp() / myHp()), $skill`Cannelloni Cocoon`);
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
      ready: () => get("_hotTubSoaks") < 5,
      completed: () => !have($effect`Temporary Blindness`),
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
      name: "Synthesize Learning",
      completed: () => have($effect`Synthesis: Learning`),
      do: () => {
        cliExecute("garden pick");
        const peppermints = tuple($item`peppermint patty`, $item`peppermint twist`);
        for (const p of peppermints) if (!have(p)) create(p);
        sweetSynthesis(...peppermints);
      },
    },
    {
      name: "Synthesize Smart",
      completed: () => have($effect`Synthesis: Smart`),
      do: () => {
        useSkill($skill`Chubby and Plump`); // 50 mp
        sweetSynthesis($item`Chubby and Plump bar`, $item`bag of many confections`);
      },
    },
    {
      name: "Eat a donut",
      completed: () => have($effect`Filled with Magic`),
      do: () => eat($item`occult jelly donut`), // 3-4 adventures, 1 full
      effects: $effects`Inscrutable Gaze`, // 10 mp
    },
    {
      name: "Drink Speakeasy",
      completed: () => have($effect`In a Lather`),
      prepare: () => Clan.join(config.main_clan),
      do: () => acquireEffect($effect`In a Lather`), // 7-9 adventures, 2 drunk, -500 meat
      effects: $effects`Ode to Booze`, // 50 mp
    },
    {
      name: "Use box of familiar jacks",
      completed: () => have($item`overloaded Yule battery`),
      do: () => use($item`box of Familiar Jacks`),
      outfit: { familiar: $familiar`Mini-Trainbot` },
    },
    {
      name: "Open MayDay package",
      completed: () => have($effect`Ready to Survive`),
      do: () => use($item`MayDay™ supply package`),
    },
    {
      name: "Sell space blanket",
      completed: () => !have($item`space blanket`),
      do: () => autosell(1, $item`space blanket`), // +5000 meat
    },
    {
      name: "Configure KGB",
      completed: () => get("_kgbClicksUsed") > 0,
      do: () => cliExecute("Briefcase e spell spooky -combat"),
    },
    {
      name: "Triple-Size",
      completed: () => have($effect`Triple-Sized`),
      do: () => {
        equip($slot`acc2`, $item`Powerful Glove`);
        acquireEffect($effect`Triple-Sized`);
      },
    },
    {
      name: "Advance Clock",
      completed: () => get("_gingerbreadClockAdvanced"),
      choices: { 1215: 1 }, // Setting the Clock: (1) set the clock forward 5 turns (2) skip
      do: $location`Gingerbread Civic Center`,
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().startingMacro(Macro.abort()),
    },
    {
      name: "Nanobrainy",
      completed: () => have($effect`Nanobrainy`),
      do: $location`Gingerbread Upscale Retail District`,
      post: () => checkEffect($effect`Nanobrainy`),
      outfit: {
        offhand: $item`latte lovers member's mug`,
        familiar: $familiar`Nanorhino`,
      },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Entangling Noodles`)
          .trySkill($skill`Throw Latte on Opponent`)
          .trySkill($skill`KGB tranquilizer dart`)
          .trySkill($skill`Reflex Hammer`)
          .trySkill($skill`Bowl a Curveball`)
          .trySkill($skill`Feel Hatred`)
          .abort()
      ),
    },
    {
      name: "Visit the Looking Glass",
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
    },
    {
      name: "Buff Familiar Weight",
      completed: () => get("_saberMod") !== 0,
      do: () => cliExecute("saber familiar"),
      effects: [
        $effect`A Girl Named Sue`,
        $effect`Billiards Belligerence`,
        $effect`Fidoxene`,
        $effect`Loyal Tea`,
        $effect`Over-Familiar With Dactyls`,
        $effect`Puzzle Champ`,
        $effect`Shrimpin' Ain't Easy`,
        $effect`You Can Really Taste the Dormouse`,
        // Skills
        $effect`Blood Bond`,
        // Class skills
        $effect`Empathy`,
        $effect`Leash of Linguini`,
      ],
    },
    {
      name: "Wish Effects",
      completed: () => $effects`All Is Forgiven, Sparkly!, Witch Breaded`.every((e) => have(e)),
      do: () => $effects`All Is Forgiven, Sparkly!, Witch Breaded`.forEach(wishEffect),
    },
    innerElf(),
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
      post: () => checkEffect($effect`Do You Crush What I Crush?`),
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
      },
      effects: $effects`Ode to Booze`,
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
      name: "Ten-percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      effects: $effects`Inscrutable Gaze, Synthesis: Learning`,
      outfit: { offhand: $item`familiar scrapbook` },
    },
    {
      name: "Chateau Rest",
      completed: () => get("timesRested") >= totalFreeRests(),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree"),
      effects: $effects`Inscrutable Gaze, Synthesis: Learning`,
      outfit: { offhand: $item`familiar scrapbook` },
    },
    {
      name: "Wanderer Sweep",
      completed: () => get("_speakeasyFreeFights") >= 3,
      prepare: () => print(`Have ${myMp()} mp after buffing up.`),
      do: $location`An Unusually Quiet Barroom Brawl`,
      post: () => visitUrl("place.php?whichplace=speakeasy"),
      outfit: { familiar: selectBestFamiliar() },
      combat: new CombatStrategy().macro(DefaultMacro), // Don't abort on unexpected monsters
      effects: [
        $effect`Broad-Spectrum Vaccine`,
        $effect`Favored by Lyle`,
        $effect`Grumpy and Ornery`,
        $effect`Hustlin'`,
        $effect`Mental A-cue-ity`,
        $effect`Pisces in the Skyces`,
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
        // Song(s)
        $effect`Ode to Booze`, // 50 mp
        $effect`Polka of Plenty`, // 7 mp
        $effect`Stevedave's Shanty of Superiority`, // 30 mp
        // Batteries
        $effect`AAA-Charged`, // +30 MP
        $effect`Lantern-Charged`, // +70 MP
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
        checkEffect($effect`Open Heart Surgery`);
        $items`LOV Elixir #3, LOV Elixir #6, LOV Epaulettes`.forEach((l) => checkAvailable(l));
        use($item`LOV Elixir #3`);
        use($item`LOV Elixir #6`);
      },
      outfit: () => ({ ...levelingOutfit(10000), familiar: selectBestFamiliar(AdvReq.NoAttack) }),
      combat: DefaultCombat,
    },
    {
      name: "Witchess Rook",
      completed: () => haveItemOrEffect($item`Greek fire`),
      do: () => Witchess.fightPiece($monster`Witchess Rook`),
      post: () => {
        refreshGhost();
        use($item`Greek fire`);
      },
      effects: [
        $effect`Drescher's Annoying Noise`,
        $effect`Pride of the Puffin`,
        // Song(s)
        $effect`Ur-Kel's Aria of Annoyance`,
      ],
      outfit: () => ({
        ...levelingOutfit(600),
        back: $item`protonic accelerator pack`,
        familiar: selectBestFamiliar(),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Protonic Ghost",
      completed: () => get("ghostLocation") === null,
      do: () => {
        const ghostZone = get("ghostLocation");
        if (!ghostZone) throw `Failed to get protonic ghost notice`;
        adv1(ghostZone, -1);
      },
      post: () => visitUrl("questlog.php?which=1"),
      outfit: () => ({
        ...levelingOutfit(),
        back: $item`protonic accelerator pack`,
        familiar: selectBestFamiliar(AdvReq.NoAttack),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Get Sprinkles",
      completed: () =>
        haveItemOrEffect($item`gingerbread spice latte`) || have($item`sprinkles`, 50),
      prepare: () => {
        print(`Getting sprinkles, have ${familiarWeight(myFamiliar()) + weightAdjustment()} lbs`);
        if (get("_gingerbreadCityTurns") >= 5) throw `Failed to get gingerbread spice latte?`;
      },
      do: $location`Gingerbread Upscale Retail District`,
      post: () => checkAvailable($item`sprinkles`, 50),
      outfit: {
        ...levelingOutfit(1000),
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, rope, familiar scrapbook`,
        acc1: $item`hewn moon-rune spoon`,
        acc2: $item`Brutal brogues`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Chocolate Lab`,
      },
      combat: DefaultCombat,
    },
    {
      name: "Get Gingerbread Spice Latte",
      ready: () => have($item`sprinkles`, 50),
      completed: () =>
        haveItemOrEffect($item`gingerbread spice latte`) || get("_gingerbreadCityTurns") >= 5,
      choices: { 1208: 3 }, // Upscale Noon: (3) buy gingerbread latte for 50 sprinkles
      do: $location`Gingerbread Upscale Retail District`,
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: RunawayCombat,
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
      outfit: () => ({ ...levelingOutfit(), familiar: selectBestFamiliar() }),
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
      name: "BRICKOS",
      ready: () => have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKO_COST),
      completed: () => get("_brickoFights") >= 3,
      acquire: [{ item: BRICKO_TARGET_ITEM }],
      do: () => use(BRICKO_TARGET_ITEM),
      outfit: () => ({ ...levelingOutfit(), familiar: selectBestFamiliar() }),
      combat: DefaultCombat,
    },
    {
      name: "Eldritch Tentacle",
      completed: () => get("_eldritchHorrorEvoked"),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: () => {
        // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned
        if (myHp() / myMaxhp() < 0.5) useSkill($skill`Cannelloni Cocoon`);
      },
      outfit: () => ({ ...levelingOutfit(400), familiar: selectBestFamiliar() }),
      combat: DefaultCombat,
    },
    {
      name: "God Lobster",
      completed: () => get("_godLobsterFights") >= 3,
      choices: { 1310: () => (have($item`God Lobster's Ring`) ? 2 : 1) }, // Granted a Boon: (1) equipment (2) blessing (3) experience
      do: () => visitUrl("main.php?fightgodlobster=1"),
      outfit: {
        ...levelingOutfit(1500),
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
      },
      combat: DefaultCombat,
    },
    {
      name: "Witchess Witch",
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      post: () => equip($item`battle broom`),
      outfit: () => ({ ...levelingOutfit(7000), familiar: selectBestFamiliar() }),
      combat: DefaultCombat,
    },
    {
      name: "Witchess King",
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      outfit: () => ({ ...levelingOutfit(6000), familiar: selectBestFamiliar() }),
      combat: DefaultCombat,
    },
    {
      name: "Remaining Witchess Fights",
      completed: () => Witchess.fightsDone() >= 5,
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      outfit: () => ({ ...levelingOutfit(8000), familiar: selectBestFamiliar() }),
      combat: DefaultCombat,
    },
    {
      name: "Voter Wandering Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") >= 1,
      do: $location`The Toxic Teacups`,
      outfit: () => ({
        ...levelingOutfit(10000),
        acc3: $item`"I Voted!" sticker`,
        familiar: selectBestFamiliar(AdvReq.Toxic),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Deep Machine Tunnels Fights",
      completed: () => get("_machineTunnelsAdv") >= 3,
      prepare: topOffHp,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      outfit: {
        ...levelingOutfit(10000),
        familiar: $familiar`Machine Elf`,
      },
      combat: DefaultCombat,
    },
    {
      name: "Ensure Abstraction: Action",
      completed: () =>
        haveItemOrEffect($item`abstraction: joy`) ||
        have($item`abstraction: action`) ||
        get("_machineTunnelsAdv") >= 4,
      prepare: topOffHp,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      post: () => checkAvailable($item`abstraction: action`),
      outfit: { ...levelingOutfit(10000), familiar: $familiar`Machine Elf` },
      combat: DefaultStrategy()
        .macro(
          Macro.if_(
            `!monsterid ${$monster`Performer of Actions`.id}`,
            Macro.skill($skill`Macrometeorite`)
          ).skill($skill`Feel Envy`)
        )
        .macro(DefaultMacro),
    },
    {
      name: "Ensure Abstraction: Joy",
      ready: () => have($item`abstraction: action`),
      completed: () => haveItemOrEffect($item`abstraction: joy`) || get("_machineTunnelsAdv") >= 5,
      prepare: topOffHp,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      post: () => checkAvailable($item`abstraction: joy`),
      outfit: { ...levelingOutfit(10000), familiar: $familiar`Machine Elf` },
      combat: DefaultStrategy()
        .macro(
          Macro.if_(
            `!monsterid ${$monster`Thinker of Thoughts`.id}`,
            Macro.skill($skill`Macrometeorite`)
          ).item($item`abstraction: action`)
        )
        .macro(DefaultMacro),
    },
    {
      name: "Remaining Deep Machine Tunnels Fights",
      completed: () => get("_machineTunnelsAdv") >= 5,
      prepare: topOffHp,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      outfit: { ...levelingOutfit(10000), familiar: $familiar`Machine Elf` },
      combat: DefaultCombat,
    },
    {
      name: "Chest X-ray Fights",
      completed: () => get("_chestXRayUsed") >= 3,
      do: $location`The Toxic Teacups`,
      outfit: () => ({
        ...levelingOutfit(11111),
        acc3: $item`Lil' Doctor™ bag`,
        familiar: selectBestFamiliar(AdvReq.Toxic),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Shattering Punch Fights",
      completed: () => get("_shatteringPunchUsed") >= 3,
      do: $location`The Toxic Teacups`,
      outfit: () => ({ ...levelingOutfit(11111), familiar: selectBestFamiliar(AdvReq.Toxic) }),
      combat: DefaultCombat,
    },
    {
      name: "Mob Hit",
      completed: () => get("_gingerbreadMobHitUsed"),
      do: $location`The Toxic Teacups`,
      outfit: () => ({ ...levelingOutfit(11111), familiar: selectBestFamiliar(AdvReq.Toxic) }),
      combat: DefaultCombat,
    },
    {
      name: "Shocking Lick",
      completed: () => get("shockingLickCharges") < 1,
      acquire: [{ item: $item`makeshift garbage shirt` }],
      do: $location`The Toxic Teacups`,
      post: () => {
        if (get("shockingLickCharges") > 0 && get("lastEncounter") === "toxic beastie") {
          throw `Failed to decrement shockingLickCharges?`;
        }
      },
      outfit: () => ({
        ...levelingOutfit(11111),
        shirt: $item`makeshift garbage shirt`,
        familiar: selectBestFamiliar(AdvReq.Toxic),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Lectures on Relativity",
      completed: () => get("_pocketProfessorLectures") > 0,
      acquire: [{ item: $item`makeshift garbage shirt` }],
      prepare: topOffHp,
      do: $location`The Toxic Teacups`,
      outfit: {
        ...levelingOutfit(10000),
        shirt: $item`makeshift garbage shirt`,
        offhand: $item`Kramco Sausage-o-Matic™`,
        familiar: $familiar`Pocket Professor`,
      },
      combat: DefaultCombat,
    },
    deepDarkVisions(),
    {
      name: "Backup Camera Fights",
      ready: () => get("lastCopyableMonster") === $monster`sausage goblin`,
      completed: () => get("_backUpUses") >= 7,
      acquire: [{ item: $item`makeshift garbage shirt` }],
      do: $location`The Toxic Teacups`,
      post: () => {
        if (get("lastCopyableMonster") !== $monster`sausage goblin`) {
          throw `Encountered a ${get("lastCopyableMonster")}?`;
        }
      },
      outfit: () => ({
        ...levelingOutfit(10000),
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        familiar: selectBestFamiliar(AdvReq.Normal),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Vintner Backup Fights",
      ready: () => get("lastCopyableMonster") === $monster`sausage goblin`,
      completed: () => get("_backUpUses") >= 11,
      do: $location`The Toxic Teacups`,
      post: () => {
        if (get("lastCopyableMonster") !== $monster`sausage goblin`) {
          throw `Encountered a ${get("lastCopyableMonster")}?`;
        }
      },
      effects: $effects`Wizard Squint`,
      outfit: vintnerOutfit,
      combat: StenchCombat,
    },
    {
      name: "Neverending Party",
      completed: () => get("_neverendingPartyFreeTurns") >= 10,
      choices: { 1322: 2, 1324: 5 },
      do: $location`The Neverending Party`,
      effects: $effects`Wizard Squint`,
      outfit: vintnerOutfit,
      combat: StenchCombat,
    },
    {
      name: "Drink Lattes",
      completed: () => get("_latteRefillsUsed") >= 3,
      prepare: () => {
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
