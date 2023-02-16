import { CombatStrategy, OutfitSpec, Quest, Task } from "grimoire-kolmafia";
import {
  adv1,
  cliExecute,
  create,
  Effect,
  equip,
  getWorkshed,
  Item,
  itemAmount,
  mpCost,
  myMaxmp,
  myMp,
  retrieveItem,
  runChoice,
  Skill,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  AutumnAton,
  Clan,
  CommunityService,
  CrimboShrub,
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
import { checkAvailable, voterMonsterNow } from "../lib";
import { AdvReq, darkHorse, refreshGhost, runTest, selectBestFamiliar } from "./shared";

const questHandlers = new Map([
  ["questM23Meatsmith", "shop.php?whichshop=meatsmith&action=talk"],
  ["questM24Doc", "shop.php?whichshop=doc&action=talk"],
  ["questM25Armorer", "shop.php?whichshop=armory&action=talk"],
]);

const defaultOutfit: OutfitSpec = {
  hat: $item`Daylight Shavings Helmet`,
  back: $item`protonic accelerator pack`,
  shirt: $item`Jurassic Parka`,
  weapon: $item`Fourth of May Cosplay Saber`,
  offhand: $item`familiar scrapbook`,
  pants: $item`designer sweatpants`,
  acc1: $item`hewn moon-rune spoon`,
  acc2: $item`Powerful Glove`,
  acc3: $item`Kremlin's Greatest Briefcase`,
  modes: { parka: "dilophosaur" },
};

function acquire(k: Effect | Item | Skill, callBack: () => void): Task {
  return {
    name: `Acquire ${k.name}`,
    completed: () => have(k),
    do: callBack,
  };
}

export const CoilWire: Quest<Task> = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
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
      completed: () => Array.from(questHandlers).every(([key]) => get(key) !== "unstarted"),
      do: () => {
        for (const [key, url] of questHandlers) {
          if (get(key) === "unstarted") {
            visitUrl(url);
            runChoice(1);
          }
        }
      },
    },
    {
      name: "Communism!",
      completed: () => get("_communismUsed"),
      do: () => useSkill($skill`Communism!`), // +1 meat
    },
    {
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested"),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_desk1"), // +1000 meat
    },
    darkHorse(),
    {
      name: "SongBoom™",
      completed: () => SongBoom.song() === "Total Eclipse of Your Meat",
      do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
    },
    {
      name: "Become an Insectologist",
      completed: () => have($skill`Insectologist`),
      choices: { 1494: 2 },
      do: () => use($item`S.I.T. Course Completion Certificate`),
    },
    // prettier-ignore
    ...(
      [
        [$effect`The Odour of Magick`, () => use($item`natural magick candle`)],
        [$item`"I Voted!" sticker`,    () => vote()],
        [$item`pantogram pants`,       () => getPantogramPants()],
        [$item`battery (AAA)`,         () => harvestBatteries()],
        [$item`battery (lantern)`,     () => create($item`battery (lantern)`)],
        [$item`box of Familiar Jacks`, () => create($item`box of Familiar Jacks`)],
        [$item`occult jelly donut`,    () => create($item`occult jelly donut`)],
        [$item`Brutal brogues`,        () => cliExecute("bastille bbq brutalist catapult")],
        [$item`cuppa Loyal tea`,       () => cliExecute("teatree loyal")],
        [$item`green mana`,            () => cliExecute("cheat forest")],
        [$item`wrench`,                () => cliExecute("cheat wrench")],
        [$item`Yeg's Motel hand soap`, () => cliExecute(`cargo item ${$item`Yeg's Motel hand soap`}`)],
        [$item`gold detective badge`,  () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct")],
        [$item`your cowboy boots`,     () => visitUrl("place.php?whichplace=town_right&action=townright_ltt")],
        [$item`weeping willow wand`,   () => { visitUrl("shop.php?whichshop=lathe"); create($item`weeping willow wand`); }],
        [$item`toy accordion`,         () => retrieveItem($item`toy accordion`)], // -135 meat
        [$skill`Seek out a Bird`,      () => use($item`Bird-a-Day calendar`)],
      ] as [Effect | Item | Skill, () => void][]
    ).map(([a, b]) => acquire(a,b)),
    {
      name: "Acquire Sombrero",
      completed: () => have($item`sombrero-mounted sparkler`),
      prepare: () => Clan.join(config.main_clan),
      do: () => {
        retrieveItem($item`sombrero-mounted sparkler`); // -450 meat
        checkAvailable($item`sombrero-mounted sparkler`);
      },
    },
    {
      name: "Gaze at the Stars",
      completed: () => have($effect`That's Just Cloud-Talk, Man`) || get("_campAwaySmileBuffs") > 0,
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
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
    {
      name: "Setup & Heal",
      completed: () => get("_hotTubSoaks") > 0,
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
      name: "Use energy blobs",
      completed: () => !have($item`psychokinetic energy blob`) || (myMaxmp() - myMp()) / 30 < 1,
      do: () => {
        const blob = $item`psychokinetic energy blob`;
        use(Math.min(itemAmount(blob), Math.floor((myMaxmp() - myMp()) / 30)), blob);
      },
    },
    {
      name: "Install Workshed",
      completed: () => getWorkshed() === $item`Little Geneticist DNA-Splicing Lab`,
      do: () => use($item`Little Geneticist DNA-Splicing Lab`),
    },
    {
      name: "Wanderer Sweep",
      completed: () => get("_speakeasyFreeFights") >= 1,
      do: $location`An Unusually Quiet Barroom Brawl`,
      post: () => {
        if (get("_speakeasyFreeFights") < 1) throw `Didn't increment oliver place fights?`;
      },
      outfit: () => selectBestFamiliar(),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Curse of Weaksauce`)
          .skill($skill`Micrometeorite`)
          .item($item`Time-Spinner`)
          .skill($skill`Sing Along`)
          .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
          .attack()
          .repeat()
      ),
    },
    {
      name: "Reminisce pterodactyl",
      completed: () => monstersReminisced().includes($monster`pterodactyl`),
      do: () => reminisce($monster`pterodactyl`),
      post: () => {
        if (!monstersReminisced().includes($monster`pterodactyl`)) throw `Failed to reminisce?`;
      },
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: RunawayCombat,
    },
    {
      name: "Ninja Costume",
      completed: () => have($item`li'l ninja costume`),
      choices: { 297: 3 }, // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      post: () => refreshGhost(),
      outfit: () => ({
        back: $item`protonic accelerator pack`,
        shirt: $item`Jurassic Parka`,
        ...selectBestFamiliar(AdvReq.NoAttack),
        modes: { parka: "dilophosaur" },
      }),
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
      completed: () => get("_bagOfCandy"),
      do: () => {
        const ghostZone = get("ghostLocation");
        if (!ghostZone) throw `Failed to get protonic ghost notice`;
        adv1(ghostZone, -1);
      },
      post: () => {
        visitUrl("questlog.php?which=1");
        equip($slot`familiar`, $item`none`);
      },
      outfit: {
        back: $item`protonic accelerator pack`,
        familiar: $familiar`Stocking Mimic`,
        famequip: $item`none`,
      },
      combat: DefaultCombat,
    },
    {
      name: "Get Crimbo Shrub decorations",
      completed: () => have($item`box of old Crimbo decorations`),
      do: () => useFamiliar($familiar`Crimbo Shrub`),
    },
    {
      name: "Decorate Crimbo Shrub",
      completed: () => get("_shrubDecorated"),
      do: () => CrimboShrub.decorate("Mysticality", "Sleaze Damage", "Blocking", "Red Ray"),
    },
    {
      name: "Reminisce cocktail shrimp",
      completed: () =>
        DNALab.isHybridized() ||
        get("_saberForceUses") > 0 ||
        monstersReminisced().includes($monster`cocktail shrimp`),
      do: () => reminisce($monster`cocktail shrimp`),
      post: () => {
        DNALab.makeTonic();
        DNALab.hybridize();
      },
      outfit: { weapon: $item`Fourth of May Cosplay Saber`, familiar: $familiar`Crimbo Shrub` },
      combat: new CombatStrategy()
        .ccs(
          `item ${$item`DNA extraction syringe`}
          skill ${$skill`Open a Big Red Present`}
          twiddle your thumbs
          skill ${$skill`Use the Force`}`,
          $monster`cocktail shrimp`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Sausage Goblin",
      completed: () => get("_sausageFights") > 0,
      do: $location`Noob Cave`,
      outfit: () => ({
        back: $item`unwrapped knock-off retro superhero cape`,
        offhand: $item`Kramco Sausage-o-Matic™`,
        ...selectBestFamiliar(),
        modes: { retrocape: ["heck", "thrill"] },
      }),
      combat: DefaultCombat,
    },
    {
      name: "Voter Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") >= 1,
      do: $location`Noob Cave`,
      outfit: () => ({
        offhand: defaultOutfit.offhand,
        acc3: $item`"I Voted!" sticker`,
        ...selectBestFamiliar(),
      }),
      combat: DefaultCombat,
    },
    {
      name: "Send autumn-aton",
      completed: () => !AutumnAton.available(),
      do: () => AutumnAton.sendTo($location`The Sleazy Back Alley`),
    },
    {
      name: "Coil Wire",
      completed: () => CommunityService.CoilWire.isDone(),
      prepare: spendAllMpOnLibrams,
      do: () => runTest(CommunityService.CoilWire),
      effects: [$effect`[1458]Blood Sugar Sauce Magic`], // 1457 for other classes
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
        modes: { parka: "ghostasaurus", retrocape: ["heck", "thrill"] },
      },
    },
  ],
};
