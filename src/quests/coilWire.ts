import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  adv1,
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  equip,
  itemAmount,
  myClass,
  reverseNumberology,
  toFamiliar,
  toInt,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  CommunityService,
  DNALab,
  get,
  have,
  Macro,
  SongBoom,
} from "libram";
import { monstersReminisced, reminisce } from "libram/dist/resources/2022/CombatLoversLocket";
import { MacroList, mapMonster } from "../combat";
import { config } from "../config";
import {
  getPantogramPants,
  harvestBatteries,
  scavengeDaycare,
  spendAllMpOnLibrams,
  vote,
} from "../iotms";
import { checkAvailable, checkEffect, voterMonsterNow } from "../lib";
import { AdvReq, darkHorse, selectBestFamiliar } from "./shared";

export const PreCoilWire: Quest<Task> = {
  name: "Pre-Coil Setup",
  tasks: [
    {
      name: "Visit Toot Oriole",
      completed: () => get("questM05Toot") === "finished",
      do: () => {
        visitUrl("tutorial.php?action=toot");
        use($item`letter from King Ralph XI`);
        use($item`pork elf goodies sack`);
      },
    },
    {
      name: "Light a candle",
      completed: () => !have($item`natural magick candle`),
      do: () => use($item`natural magick candle`),
    },
    {
      name: "Open Skeleton Store",
      completed: () => get("questM23Meatsmith").toLowerCase() === "started",
      choices: { 1059: 1 },
      do: () => visitUrl("shop.php?whichshop=meatsmith&action=talk"),
    },
    {
      name: "Open Overgrown Lot",
      completed: () => get("questM24Doc").toLowerCase() === "started",
      choices: { 1064: 1 },
      do: () => visitUrl("shop.php?whichshop=doc&action=talk"),
    },
    {
      name: "Open Madness Bakery",
      completed: () => get("questM25Armorer").toLowerCase() === "started",
      choices: { 1065: 1 },
      do: () => visitUrl("shop.php?whichshop=armory&action=talk"),
    },
    {
      name: "Calculate the Universe",
      ready: () => Object.keys(reverseNumberology()).includes("69"),
      completed: () => get("_universeCalculated") >= 3,
      do: () => cliExecute(`numberology 69`),
      limit: { tries: 3 },
    },
    {
      name: "Equip Stillsuit",
      completed: () =>
        toFamiliar(config.stillsuit) === $familiar`none` || itemAmount($item`tiny stillsuit`) < 1,
      do: () => equip(toFamiliar(config.stillsuit), $item`tiny stillsuit`),
    },
    {
      name: "Communism!",
      completed: () => get("_communismUsed"),
      do: () => useSkill($skill`Communism!`),
    },
    {
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested"),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_desk1"),
    },
    darkHorse,
    {
      name: "SongBoom™",
      completed: () => SongBoom.song() === "Total Eclipse of Your Meat",
      do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
    },
    {
      name: "Gaze at the Stars",
      completed: () => have($effect`That's Just Cloud-Talk, Man`),
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
    },
    {
      name: "Acquire Necessary Items",
      completed: () => currentMcd() > 0,
      // prettier-ignore
      acquire: [
        { item: $item`pantogram pants`,         get: () => getPantogramPants() },
        { item: $item`battery (AAA)`,           get: () => harvestBatteries() },
        { item: $item`battery (lantern)`,       get: () => create($item`battery (lantern)`) },
        { item: $item`occult jelly donut`,      get: () => create($item`occult jelly donut`) },
        { item: $item`Brutal brogues`,          get: () => cliExecute("bastille bbq brutalist catapult") },
     // { item: $item`cop dollar`,              get: () => cliExecute("Detective Solver") },
        { item: $item`cuppa Loyal tea`,         get: () => cliExecute("teatree loyal") },
        { item: $item`green mana`,              get: () => cliExecute("cheat forest") },
        { item: $item`wrench`,                  get: () => cliExecute("cheat wrench") },
        { item: $item`Yeg's Motel hand soap`,   get: () => cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`) },
        { item: $item`"DRINK ME" potion`,       get: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2") },
        { item: $item`your cowboy boots`,       get: () => visitUrl("place.php?whichplace=town_right&action=townright_ltt") },
        { item: $item`flimsy hardwood scraps`,  get: () => visitUrl("shop.php?whichshop=lathe") },
        { item: $item`weeping willow wand`,     get: () => create($item`weeping willow wand`) },
        { item: $item`detuned radio` },             // -270 meat
        { item: $item`sombrero-mounted sparkler` }, // -450 meat
        { item: $item`toy accordion` },             // -135 meat
      ],
      do: () => changeMcd(10),
      post: () => checkAvailable($item`sombrero-mounted sparkler`),
    },
    {
      name: "Use Bird-a-Day calendar",
      completed: () => have($skill`Seek out a Bird`),
      do: () => use($item`Bird-a-Day calendar`),
    },
    {
      name: "Vote",
      completed: () => have($item`"I Voted!" sticker`),
      do: () => vote(),
    },
    {
      name: "Scavenge Daycare",
      completed: () => get("_daycareGymScavenges") > 0,
      do: () => scavengeDaycare(),
    },
    {
      name: "Borrow Time",
      completed: () => get("_borrowedTimeUsed"),
      acquire: [{ item: $item`borrowed time`, get: () => create($item`borrowed time`) }],
      do: () => use($item`borrowed time`),
    },
  ],
};

const defaultOutfit = {
  hat: $item`Daylight Shavings Helmet`,
  back: $item`protonic accelerator pack`,
  shirt: $item`Jurassic Parka`,
  weapon: $item`Fourth of May Cosplay Saber`,
  offhand: $item`familiar scrapbook`,
  pants: $item`designer sweatpants`,
  acc1: $item`hewn moon-rune spoon`,
  acc2: $item`Powerful Glove`,
  acc3: $item`Kremlin's Greatest Briefcase`,
};

export const CoilWire: Quest<Task> = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: "Setup & Heal",
      completed: () => get("_hotTubSoaks") > 0,
      prepare: () => cliExecute("parka kachungasaur"),
      do: () => cliExecute("hottub"),
      effects: [
        $effect`Feeling Excited`,
        $effect`Feeling Peaceful`,
        $effect`Inscrutable Gaze`,
        $effect`Spirit of Peppermint`,
        $effect`Triple-Sized`,
        $effect`Uncucumbered`,
      ],
      outfit: defaultOutfit,
    },
    {
      name: "Wanderer Sweep",
      completed: () => get("_banderRunaways") > 0,
      do: $location`Noob Cave`,
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(MacroList.Runaway),
    },
    {
      name: "Reminisce 1",
      completed: () => monstersReminisced().includes($monster`pterodactyl`),
      do: () => reminisce($monster`pterodactyl`),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(MacroList.Runaway),
    },
    {
      name: "Ninja Costume",
      after: ["Reminisce 1"],
      completed: () => have($item`li'l ninja costume`),
      choices: { 297: 3 }, // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      outfit: () => {
        return {
          back: $item`protonic accelerator pack`,
          acc3: $item`Lil' Doctor™ bag`,
          familiar: selectBestFamiliar(AdvReq.NoAttack),
        };
      },
      combat: new CombatStrategy().macro(MacroList.EnvyNostalgia),
    },
    {
      name: "Stocking Mimic Candy",
      after: ["Ninja Costume"],
      completed: () => get("_bagOfCandy"),
      prepare: () => visitUrl("questlog.php?which=1"),
      do: () => {
        const ghostZone = get("ghostLocation");
        if (!ghostZone) throw `Failed to get protonic ghost notice!`;
        adv1(ghostZone, -1);
      },
      post: () => equip($slot`familiar`, $item`none`),
      outfit: {
        back: $item`protonic accelerator pack`,
        acc3: defaultOutfit.acc3,
        famequip: $item`none`,
        familiar: $familiar`Stocking Mimic`,
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Reminisce 2",
      completed: () => monstersReminisced().includes($monster`cocktail shrimp`),
      do: () => reminisce($monster`cocktail shrimp`),
      post: () => DNALab.hybridize(),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(
        new Macro()
          .item($item`DNA extraction syringe`)
          .runaway()
          .abort()
      ),
    },
    {
      name: "Sausage Goblin",
      after: ["Reminisce 2"],
      completed: () => get("_sausageFights") > 0,
      prepare: () => cliExecute("retrocape heck thrill"),
      do: $location`Noob Cave`,
      outfit: () => {
        return {
          back: $item`unwrapped knock-off retro superhero cape`,
          offhand: $item`Kramco Sausage-o-Matic™`,
          familiar: selectBestFamiliar(AdvReq.NoAttack),
        };
      },
      combat: new CombatStrategy().macro(MacroList.EnvyNostalgia),
    },
    {
      name: "Voter Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") > 0,
      do: $location`Noob Cave`,
      outfit: () => {
        return {
          offhand: defaultOutfit.offhand,
          acc3: $item`"I Voted!" sticker`,
          familiar: selectBestFamiliar(),
        };
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Novelty Tropical Skeleton",
      completed: () => get("_saberForceUses") > 0,
      prepare: () => {
        useFamiliar($familiar`Crimbo Shrub`);
        if (!get("_shrubDecorated")) {
          visitUrl(`inv_use.php?pwd=&whichitem=${toInt($item`box of old Crimbo decorations`)}`);
          visitUrl(`choice.php?whichchoice=999&pwd=&option=1&topper=2&lights=5&garland=3&gift=2`);
        }
      },
      do: () => mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`),
      post: () => {
        checkEffect($effect`Everything Looks Red`);
        $items`cherry, grapefruit, lemon, strawberry`.forEach((fruit) => checkAvailable(fruit));
      },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        acc3: defaultOutfit.acc3,
        familiar: $familiar`Crimbo Shrub`,
      },
      combat: new CombatStrategy().macro(MacroList.Default),
    },
    {
      name: "Mana Burn",
      completed: () => get("libramSummons") > 0,
      do: () => spendAllMpOnLibrams(),
    },
    {
      name: "Coil Wire",
      completed: () => CommunityService.CoilWire.isDone(),
      prepare: () => {
        cliExecute("parka ghostasaurus");
        cliExecute("retrocape heck thrill");
      },
      do: () => CommunityService.CoilWire.do(),
      effects: [
        myClass() === $class`Sauceror`
          ? $effect`[1458]Blood Sugar Sauce Magic`
          : $effect`[1457]Blood Sugar Sauce Magic`,
      ],
      outfit: {
        hat: $item`Iunion Crown`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`wrench, industrial fire extinguisher`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`hewn moon-rune spoon`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
      },
    },
  ],
};
