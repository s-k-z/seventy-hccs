import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  adv1,
  chew,
  cliExecute,
  create,
  eat,
  handlingChoice,
  mpCost,
  myClass,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  soulsauceCost,
  totalFreeRests,
  use,
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
  $location,
  $monster,
  $skill,
  $stat,
  get,
  have,
  SourceTerminal,
  Witchess,
} from "libram";
import { MacroList } from "../combat";
import { BRICKO_COST, BRICKO_TARGET_ITEM, config } from "../config";
import { castBestLibram, spendAllMpOnLibrams } from "../iotms";
import { acquireEffect, checkAvailable, checkEffect, tryUse, voterMonsterNow } from "../lib";
import { AdvReq, deepDarkVisions, innerElf, selectBestFamiliar } from "./shared";

const monsterLevel = [
  myClass() === $class`Pastamancer`
    ? $effect`Shield of the Pastalord`
    : $effect`Flimsy Shield of the Pastalord`,
  $effect`Drescher's Annoying Noise`,
  $effect`Pride of the Puffin`,
  // Song(s)
  $effect`Ur-Kel's Aria of Annoyance`,
];

export const Leveling: Quest<Task> = {
  name: "Leveling",
  tasks: [
    {
      name: "Cast Soul Food",
      completed: () => mySoulsauce() / soulsauceCost($skill`Soul Food`) < 1,
      do: () => {
        const maxMPGains = (myMaxmp() - myMp()) / 15;
        const maxSoulFoodCasts = mySoulsauce() / soulsauceCost($skill`Soul Food`);
        const soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
        if (soulFoodCasts >= 1) useSkill(soulFoodCasts, $skill`Soul Food`);
      },
    },
    {
      name: "Eat Magical Sausages",
      completed: () => true,
      do: () => {
        while (
          have($item`magical sausage casing`) &&
          (get("_sausagesMade") + 1) * 111 < myMeat() - config.MEAT_SAFE_LIMIT &&
          myMaxmp() - myMp() > 1000 &&
          myMaxmp() - mpCost($skill`Summon BRICKOs`) > config.MP_SAFE_LIMIT &&
          get("_sausagesEaten") < 23
        ) {
          create($item`magical sausage`);
          eat($item`magical sausage`);
        }
      },
    },
    {
      name: "Cast Best Libram",
      completed: () => myMp() - mpCost($skill`Summon BRICKOs`) < config.MP_SAFE_LIMIT,
      do: () => castBestLibram(),
    },
    {
      name: "Remove Temporary Blindness",
      ready: () => get("_hotTubSoaks") < 5,
      completed: () => !have($effect`Temporary Blindness`),
      do: () => cliExecute("hottub"),
      post: () => {
        if (have($effect`Temporary Blindness`)) {
          throw `Can't handle ${$effect`Temporary Blindness`}`;
        }
      },
    },
    {
      name: "Protonic Ghost",
      completed: () => get("ghostLocation") === null,
      do: () => {
        const ghostZone = get("ghostLocation");
        if (!ghostZone) throw `Failed to get protonic ghost notice`;
        adv1(ghostZone, -1);
      },
      outfit: () => {
        return {
          back: $item`protonic accelerator pack`,
          familiar: selectBestFamiliar(AdvReq.NoAttack),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    innerElf,
    {
      name: "Crimbo Carol",
      completed: () =>
        ![
          $effect`All I Want For Crimbo Is Stuff`,
          $effect`Crimbo Wrapping`,
          $effect`Do You Crush What I Crush?`,
          $effect`Holiday Yoked`,
          $effect`Let It Snow/Boil/Stink/Frighten/Grease`,
        ].some((carol) => have(carol)),
      do: $location`The Dire Warren`,
      post: () => checkEffect($effect`Do You Crush What I Crush?`),
      outfit: {
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Ghost of Crimbo Carols`,
      },
      combat: new CombatStrategy().macro(MacroList.Banish),
    },
    {
      name: "Tunnel of L.O.V.E.",
      completed: () => get("_loveTunnelUsed"),
      prepare: () => spendAllMpOnLibrams(),
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
      outfit: () => {
        return {
          back: $item`protonic accelerator pack`,
          familiar: selectBestFamiliar(AdvReq.NoAttack),
        };
      },
      combat: new CombatStrategy().macro(MacroList.TunnelOfLOV),
    },
    {
      name: "Buff ML",
      after: ["Tunnel of L.O.V.E."],
      completed: () => monsterLevel.every((m) => have(m)),
      do: () => monsterLevel.forEach((m) => acquireEffect(m)),
    },
    {
      name: "Ten-percent Bonus",
      ready: () => have($item`LOV Epaulettes`),
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      effects: $effects`Inscrutable Gaze, That's Just Cloud-Talk\, Man, Synthesis: Learning`,
      outfit: {
        back: $item`LOV Epaulettes`,
        offhand: $item`familiar scrapbook`,
      },
    },
    {
      name: "Chateau Rest",
      ready: () => have($item`LOV Epaulettes`) && myLevel() >= 8,
      completed: () => get("timesRested") > totalFreeRests(),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree"),
      effects: $effects`Inscrutable Gaze, That's Just Cloud-Talk\, Man, Synthesis: Learning`,
      outfit: {
        back: $item`LOV Epaulettes`,
        offhand: $item`familiar scrapbook`,
      },
    },
    {
      name: "Witchess Rook",
      completed: () => have($effect`Sweetbreads Flambé`),
      prepare: () => cliExecute("umbrella ml"),
      do: () => Witchess.fightPiece($monster`Witchess Rook`),
      post: () => use($item`Greek fire`),
      outfit: () => {
        return {
          hat: $item`Daylight Shavings Helmet`,
          back: $item`LOV Epaulettes`,
          weapon: $item`Fourth of May Cosplay Saber`,
          offhand: $item`unbreakable umbrella`,
          pants: $item`Cargo Cultist Shorts`,
          acc1: $item`hewn moon-rune spoon`,
          acc2: $items`battle broom, gold detective badge`,
          acc3: $item`Beach Comb`,
          familiar: selectBestFamiliar(),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Get Sprinkles",
      completed: () => have($effect`Whole Latte Love`) || have($item`sprinkles`, 50),
      do: $location`Gingerbread Upscale Retail District`,
      post: () => checkAvailable($item`sprinkles`, 50),
      outfit: {
        back: $item`protonic accelerator pack`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, rope, familiar scrapbook`,
        acc1: $item`hewn moon-rune spoon`,
        acc2: $item`Brutal brogues`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Chocolate Lab`,
      },
      combat: new CombatStrategy().macro(MacroList.Sprinkles),
    },
    {
      name: "Get Gingerbread Spice Latte",
      ready: () => have($item`sprinkles`, 50),
      completed: () => have($effect`Whole Latte Love`) || get("_gingerbreadCityTurns") >= 5,
      choices: { 1208: 3 }, // Upscale Noon: (3) buy gingerbread latte for 50 sprinkles
      do: $location`Gingerbread Upscale Retail District`,
      post: () => tryUse($item`gingerbread spice latte`),
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().macro(MacroList.Runaway),
    },
    {
      name: "Snojo",
      completed: () => get("_snojoFreeFights") >= 10,
      prepare: () => {
        if (get("snojoSetting") !== $stat`Muscle`) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        }
        if (handlingChoice()) throw `Can't set choice adventure to automate this one?`;
      },
      choices: { 1118: 1 },
      do: $location`The X-32-F Combat Training Snowman`,
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "BRICKOS",
      ready: () => have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKO_COST),
      completed: () => get("_brickoFights") >= 3,
      prepare: () => create(BRICKO_TARGET_ITEM),
      do: () => use(BRICKO_TARGET_ITEM),
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Witchess Witch",
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.WitchessWitch),
    },
    {
      name: "Eldritch Tentacle",
      completed: () => get("_eldritchHorrorEvoked"),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: () => {
        // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned
        if (myHp() / myMaxhp() < 0.5) useSkill($skill`Cannelloni Cocoon`);
      },
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "God Lobster",
      completed: () => get("_godLobsterFights") > 3,
      choices: { 1310: have($item`God Lobster's Ring`) ? 2 : 1 }, // Granted a Boon: (1) equipment (2) blessing (3) experience
      do: () => visitUrl("main.php?fightgodlobster=1"),
      outfit: {
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Witchess King",
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Remaining Witchess Fights",
      completed: () => get("_witchessFights") >= 5,
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      outfit: () => {
        return { familiar: selectBestFamiliar() };
      },
      combat: new CombatStrategy().macro(MacroList.WitchessQueen),
    },
    {
      name: "Voter Wandering Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") >= 1,
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return { acc3: $item`"I Voted!" sticker`, familiar: selectBestFamiliar(AdvReq.Toxic) };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Holiday Wandering Monster",
      completed: () => $location`The Deep Dark Jungle`.combatQueue.length > 0,
      do: $location`The Deep Dark Jungle`,
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().macro(MacroList.Runaway),
    },
    {
      name: "Get Abstraction: Action",
      completed: () =>
        have($effect`Joy`) || have($item`abstraction: joy`) || have($item`abstraction: action`),
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      post: () => checkAvailable($item`abstraction: action`),
      outfit: { familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy().macro(MacroList.DMTSquare),
    },
    {
      name: "Get Abstraction: Joy",
      ready: () => have($item`abstraction: action`),
      completed: () => have($effect`Joy`) || have($item`abstraction: joy`),
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      post: () => {
        checkAvailable($item`abstraction: joy`);
        chew($item`abstraction: joy`);
      },
      outfit: { familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy().macro(MacroList.DMTCircle),
    },
    {
      name: "Remaining Deep Machine Tunnels Fights",
      completed: () => get("_machineTunnelsAdv") >= 5,
      choices: { 1119: -1 }, // Shining Mauve Backwards In Time
      do: $location`The Deep Machine Tunnels`,
      outfit: { familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Remaining Chest X-ray Fights",
      completed: () => get("_chestXRayUsed") >= 3,
      prepare: () => SourceTerminal.educate($skill`Turbo`), // Turbo used a flag to cast pride
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return {
          shirt: $item`makeshift garbage shirt`,
          acc3: $item`Lil' Doctor™ bag`,
          familiar: selectBestFamiliar(AdvReq.Toxic),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Shattering Punch Fights",
      completed: () => get("_shatteringPunchUsed") >= 3,
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return {
          shirt: $item`makeshift garbage shirt`,
          familiar: selectBestFamiliar(AdvReq.Toxic),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Mob Hit",
      completed: () => get("_gingerbreadMobHitUsed"),
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return {
          shirt: $item`makeshift garbage shirt`,
          familiar: selectBestFamiliar(AdvReq.Toxic),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Shocking Lick",
      completed: () => get("shockingLickCharges") < 1,
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return {
          shirt: $item`makeshift garbage shirt`,
          familiar: selectBestFamiliar(AdvReq.Toxic),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Lectures on Relativity",
      completed: () => get("_pocketProfessorLectures") > 0,
      do: $location`The Toxic Teacups`,
      outfit: { offhand: $item`Kramco Sausage-o-Matic™`, familiar: $familiar`Pocket Professor` },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    deepDarkVisions,
    {
      name: "Backup Camera Fights",
      after: ["Lectures on Relativity"],
      ready: () => get("lastCopyableMonster") === $monster`sausage goblin`,
      completed: () => get("_backUpUses") >= 11,
      prepare: () => cliExecute("umbrella ml"),
      do: $location`The Toxic Teacups`,
      outfit: () => {
        return {
          offhand: $item`unbreakable umbrella`,
          acc3: $item`backup camera`,
          familiar: selectBestFamiliar(get("_backUpUses") >= 7 ? AdvReq.Wine : AdvReq.Normal),
        };
      },
      combat: new CombatStrategy().macro(MacroList.StenchFreeFight),
    },
    {
      name: "Neverending Party",
      after: ["Backup Camera Fights"],
      completed: () => get("_neverendingPartyFreeTurns") >= 10,
      choices: { 1322: 2, 1324: 5 },
      do: $location`The Neverending Party`,
      outfit: () => {
        return {
          // acc3: $item`none`, PICK SOMETHING
          familiar: selectBestFamiliar(AdvReq.Wine),
        };
      },
      combat: new CombatStrategy().macro(MacroList.StenchFreeFight),
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
        offhand: $item`latte lovers member's mug`,
        pants: $item`Cargo Cultist Shorts`,
        familiar: $familiar`Frumious Bandersnatch`,
      },
      combat: new CombatStrategy().macro(MacroList.LatteGulpRunaway),
    },
  ],
};
