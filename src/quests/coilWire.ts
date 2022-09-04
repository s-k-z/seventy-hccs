import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  adv1,
  changeMcd,
  cliExecute,
  create,
  equip,
  Item,
  itemAmount,
  mpCost,
  myClass,
  retrieveItem,
  Skill,
  toFamiliar,
  toInt,
  use,
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
import { DefaultCombat, mapMonster, RunawayCombat } from "../combat";
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

// prettier-ignore
const questHandlers = new Map([
  ["questM23Meatsmith", "shop.php?whichshop=meatsmith&action=talk"],
  ["questM24Doc",       "shop.php?whichshop=doc&action=talk"],
  ["questM25Armorer",   "shop.php?whichshop=armory&action=talk"],
]);

// prettier-ignore
const toAcquire = new Map<Item | Skill, () => void>([
  [$skill`Seek out a Bird`,          () => use($item`Bird-a-Day calendar`) ],
  [$item`"I Voted!" sticker`,        () => vote() ],
  [$item`pantogram pants`,           () => getPantogramPants() ],
  [$item`battery (AAA)`,             () => harvestBatteries() ],
  [$item`battery (lantern)`,         () => create($item`battery (lantern)`) ],
  [$item`occult jelly donut`,        () => create($item`occult jelly donut`) ],
  [$item`Brutal brogues`,            () => cliExecute("bastille bbq brutalist catapult") ],
  [$item`cuppa Loyal tea`,           () => cliExecute("teatree loyal") ],
  [$item`green mana`,                () => cliExecute("cheat forest") ],
  [$item`wrench`,                    () => cliExecute("cheat wrench") ],
  [$item`Yeg's Motel hand soap`,     () => cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`) ],
  [$item`"DRINK ME" potion`,         () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2") ],
  [$item`gold detective badge`,      () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct") ],
  [$item`your cowboy boots`,         () => visitUrl("place.php?whichplace=town_right&action=townright_ltt") ],
  [$item`flimsy hardwood scraps`,    () => visitUrl("shop.php?whichshop=lathe") ],
  [$item`weeping willow wand`,       () => create($item`weeping willow wand`) ],
  [$item`detuned radio`,             () => retrieveItem($item`detuned radio`) ],             // -270 meat
  [$item`sombrero-mounted sparkler`, () => retrieveItem($item`sombrero-mounted sparkler`) ], // -450 meat
  [$item`toy accordion`,             () => retrieveItem($item`toy accordion`) ],             // -135 meat
]);

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
      name: "Talk to quest NPCs",
      completed: () => Array.from(questHandlers).every(([key]) => get(key) === "started"),
      choices: { 1059: 1, 1064: 1, 1065: 1 },
      do: () =>
        Array.from(questHandlers).forEach(([key, url]) => {
          if (get(key) === "unstarted") visitUrl(url);
        }),
    },
    {
      name: "Light a candle",
      completed: () => !have($item`natural magick candle`),
      do: () => use($item`natural magick candle`),
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
      completed: () => Array.from(toAcquire).every(([a]) => have(a)),
      do: () => {
        for (const [want, acquire] of toAcquire) if (!have(want)) acquire();
        checkAvailable($item`sombrero-mounted sparkler`);
        changeMcd(10);
      },
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
      prepare: () => cliExecute("parka dilophosaur"),
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
      combat: RunawayCombat,
    },
    {
      name: "Reminisce 1",
      completed: () => monstersReminisced().includes($monster`pterodactyl`),
      do: () => reminisce($monster`pterodactyl`),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: RunawayCombat,
    },
    {
      name: "Ninja Costume",
      after: ["Reminisce 1"],
      completed: () => have($item`li'l ninja costume`),
      prepare: () => cliExecute("parka dilophosaur"),
      choices: { 297: 3 }, // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      outfit: () => {
        return {
          back: $item`protonic accelerator pack`,
          shirt: $item`Jurassic Parka`,
          familiar: selectBestFamiliar(AdvReq.NoAttack),
        };
      },
      combat: new CombatStrategy()
        .macro(
          Macro.skill($skill`Feel Nostalgic`)
            .skill($skill`Sing Along`)
            .skill($skill`Spit jurassic acid`),
          $monster`amateur ninja`
        )
        .macro(Macro.abort()),
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
        famequip: $item`none`,
        familiar: $familiar`Stocking Mimic`,
      },
      combat: DefaultCombat,
    },
    {
      name: "Reminisce 2",
      completed: () => monstersReminisced().includes($monster`cocktail shrimp`),
      do: () => reminisce($monster`cocktail shrimp`),
      post: () => DNALab.hybridize(),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(Macro.item($item`DNA extraction syringe`).runaway()),
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
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Curse of Weaksauce`)
          .item($item`Time-Spinner`)
          .skill($skill`Feel Envy`)
          .skill($skill`Feel Nostalgic`)
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
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
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Curse of Weaksauce`)
          .item($item`Time-Spinner`)
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
    },
    {
      name: "Novelty Tropical Skeleton",
      completed: () => get("_saberForceUses") > 0,
      prepare: () => {
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
      combat: new CombatStrategy()
        .macro(
          Macro.skill($skill`Open a Big Red Present`).skill($skill`Use the Force`),
          $monster`novelty tropical skeleton`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Coil Wire",
      completed: () => CommunityService.CoilWire.isDone(),
      prepare: () => {
        spendAllMpOnLibrams();
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
