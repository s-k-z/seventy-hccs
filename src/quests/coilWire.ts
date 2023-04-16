import { CombatStrategy, OutfitSpec, Quest, Task } from "grimoire-kolmafia";
import {
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  Effect,
  getWorkshed,
  Item,
  itemAmount,
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
  AutumnAton,
  Clan,
  CombatLoversLocket,
  CommunityService,
  CrimboShrub,
  DNALab,
  get,
  have,
  Macro,
  SongBoom,
} from "libram";
import { DefaultCombat, mapMonster } from "../combat";
import { config } from "../config";
import {
  getPantogramPants,
  harvestBatteries,
  scavengeDaycare,
  spendAllMpOnLibrams,
  vote,
} from "../iotms";
import { assert, voterMonsterNow } from "../lib";
import { AdvReq, darkHorse, runTest, selectBestFamiliar } from "./shared";

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
    post: () => assert(k),
  };
}

let smashedBarrels = false;

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
      name: "Smash Barrels",
      completed: () => smashedBarrels,
      do: () => {
        const page = visitUrl("barrel.php");
        if (!page.includes("The Barrel Full of Barrels")) throw `Failed to load barrel page`;
        const regexp =
          /<div class="ex">(?!<div class="mimic">!<\/div>)<a class="spot" href="(choice.php\?whichchoice=1099&pwd=[a-f0-9]+&option=1&slot=\d+)"><img title="A barrel"/g;
        for (let match; (match = regexp.exec(page)); null) {
          const url = match[1];
          visitUrl(url);
        }
        smashedBarrels = true;
      },
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(Macro.abort()),
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
      post: () => assert($skill`Insectologist`),
    },
    // prettier-ignore
    ...(
      [
        [$effect`The Odour of Magick`, () => use($item`natural magick candle`)],
        [$item`"I Voted!" sticker`,    () => vote()],
        [$item`pantogram pants`,       () => getPantogramPants()],
        [$item`battery (AAA)`,         () => harvestBatteries()],
        [$item`battery (AA)`,          () => create($item`battery (AA)`)],
        [$item`box of Familiar Jacks`, () => create($item`box of Familiar Jacks`)],
        [$item`cold-filtered water`,   () => create($item`cold-filtered water`)],
        [$item`Brutal brogues`,        () => cliExecute("bastille bbq brutalist catapult")],
        [$item`cuppa Loyal tea`,       () => cliExecute("teatree loyal")],
        [$item`green mana`,            () => cliExecute("cheat forest")],
        [$item`groveling gravel`,      () => cliExecute("garden pick")],
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
        assert($item`sombrero-mounted sparkler`);
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
      post: () => assert(get("_daycareGymScavenges") > 0, "Failed to scavenge"),
    },
    {
      name: "Borrow Time",
      completed: () => get("_borrowedTimeUsed"),
      acquire: [{ item: $item`borrowed time`, get: () => create($item`borrowed time`) }],
      do: () => use($item`borrowed time`),
      post: () => assert(get("_borrowedTimeUsed"), "Failed to borrow time"),
    },
    {
      name: "Setup & Heal",
      completed: () => get("_hotTubSoaks") > 0,
      do: () => cliExecute("hottub"),
      effects: [
        $effect`Feeling Excited`,
        $effect`Feeling Peaceful`,
        $effect`Inscrutable Gaze`,
        $effect`Spirit of Garlic`,
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
      name: "MCD On",
      completed: () => currentMcd() > 0,
      do: () => changeMcd(11),
    },
    {
      name: "Reminisce pterodactyl",
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`pterodactyl`),
      do: () => CombatLoversLocket.reminisce($monster`pterodactyl`),
      post: () => {
        assert(
          CombatLoversLocket.monstersReminisced().includes($monster`pterodactyl`),
          "Failed to reminisce pterodactyl?"
        );
      },
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      combat: new CombatStrategy().macro(Macro.runaway()),
    },
    {
      name: "Ninja Costume",
      completed: () => have($item`li'l ninja costume`),
      choices: { 297: 3 }, // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      post: () => {
        visitUrl("questlog.php?which=1");
        assert(!!get("ghostLocation"), `Failed to get protonic ghost notice`);
        assert($item`Friendliness Beverage`);
        assert($item`li'l ninja costume`);
      },
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
      name: "Protonic Ghost",
      completed: () => !get("ghostLocation"),
      do: () => get("ghostLocation"),
      post: () => {
        visitUrl("questlog.php?which=1");
        assert(!get("ghostLocation"), "Still have a ghost location");
      },
      outfit: () => ({
        back: $item`protonic accelerator pack`,
        ...selectBestFamiliar(AdvReq.NoAttack),
      }),
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
        CombatLoversLocket.monstersReminisced().includes($monster`cocktail shrimp`),
      do: () => CombatLoversLocket.reminisce($monster`cocktail shrimp`),
      post: () => {
        assert($item`shrimp cocktail`);
        assert(
          CombatLoversLocket.monstersReminisced().includes($monster`cocktail shrimp`),
          "Failed to reminisce cocktail shrimp?"
        );
        assert(get("_saberForceUses") > 0, "Failed to increment force uses");
        DNALab.hybridize();
        assert(DNALab.isHybridized(), "Failed to hybridize");
      },
      outfit: { weapon: $item`Fourth of May Cosplay Saber`, familiar: $familiar`Crimbo Shrub` },
      combat: new CombatStrategy()
        .ccs(
          `item ${$item`DNA extraction syringe`}
          skill ${$skill`Open a Big Red Present`}
          twiddle your thumbs
          skill ${$skill`Use the Force`}`,
          $monster`cocktail shrimp` // + 2000 meat
        )
        .macro(Macro.abort()),
    },
    {
      name: "Sausage Goblin",
      completed: () => get("_sausageFights") > 0,
      do: $location`Noob Cave`,
      post: () => assert(get("_sausageFights") > 0, "Didn't increment sausage counter?"),
      outfit: () => ({
        back: $item`unwrapped knock-off retro superhero cape`,
        offhand: $item`Kramco Sausage-o-Matic™`,
        ...selectBestFamiliar(),
        modes: { retrocape: ["heck", "thrill"] },
      }),
      combat: DefaultCombat,
    },
    {
      name: "Voting Booth Monster",
      ready: () => voterMonsterNow(),
      completed: () => get("_voteFreeFights") > 0,
      do: $location`Noob Cave`,
      post: () => assert(get("_voteFreeFights") > 0, "Didn't increment vote counter?"),
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
      do: (): void => {
        AutumnAton.sendTo($location`The Sleazy Back Alley`);
      },
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
