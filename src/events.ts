import {
  changeMcd,
  chew,
  cliExecute,
  elementalResistance,
  equip,
  handlingChoice,
  haveEquipped,
  itemAmount,
  myFamiliar,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMp,
  runChoice,
  toInt,
  totalFreeRests,
  toUrl,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $element,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  $stat,
  Clan,
  get,
  have,
  Macro,
  set,
  SourceTerminal,
} from "libram";
import { adventure, adventureUrl, fightWitchess, MacroList, mapMonster } from "./combat";
import { BRICKO_TARGET_ITEM, FAX_AND_SLIME_CLAN, MP_SAFE_LIMIT } from "./config";
import { spendAllMpOnLibrams } from "./iotms";
import {
  checkAvailable,
  checkEffect,
  isHolidayWandererDay,
  itemToEffect,
  tryUse,
  voterMonsterNow,
  withEquipment,
} from "./lib";
import { prep, Quest } from "./quests";

export const enum FamiliarFlag {
  Default,
  NoAttack,
  ToxicTeacups,
  Wine,
}

// Locations
const civicCenter = $location`Gingerbread Civic Center`;
const deepMachineTunnels = $location`The Deep Machine Tunnels`;
const direWarren = $location`The Dire Warren`;
const deepDarkJungle = $location`The Deep Dark Jungle`;
const haikuDungeon = $location`The Haiku Dungeon`;
const loveTunnel = $location`The Tunnel of L.O.V.E.`;
const neverendingParty = $location`The Neverending Party`;
const noobCave = $location`Noob Cave`;
const skeletonStore = $location`The Skeleton Store`;
const slimeTube = $location`The Slime Tube`;
const snojo = $location`The X-32-F Combat Training Snowman`;
const statelyPleasureDome = $location`The Stately Pleasure Dome`;
const toxicTeacups = $location`The Toxic Teacups`;
const upscaleDistrict = $location`Gingerbread Upscale Retail District`;

// Events are prioritized in order from top to bottom
interface eventData {
  ready(): boolean;
  run(): void;
}

export const preCoilEvents: Record<string, eventData> = {
  holidayCheck: {
    ready: () => isHolidayWandererDay() && get("_banderRunaways") < 1,
    run: (): void => {
      familiar($familiar`Pair of Stomping Boots`);
      if (haveEquipped($item`Kramco Sausage-o-Matic™`)) throw `Should not have Kramco equipped yet`;
      adventure(noobCave, MacroList.Runaway);
      if (get("_banderRunaways") < 1) throw `Failed to increment _banderRunaways`;
    },
  },

  ninjaCostume: {
    ready: () => !have($item`li'l ninja costume`),
    run: (): void => {
      equip($slot`back`, $item`protonic accelerator pack`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      withEquipment(
        () => mapMonster(haikuDungeon, $monster`amateur ninja`, MacroList.FreeFight),
        [[$slot`acc3`, $item`Lil' Doctor™ bag`]]
      );
      checkAvailable($item`li'l ninja costume`);
    },
  },

  mimic: {
    ready: () => !get("_bagOfCandy"),
    run: (): void => {
      equip($slot`back`, $item`protonic accelerator pack`);
      familiar($familiar`Stocking Mimic`);
      equip($slot`familiar`, $item`none`);
      visitUrl("questlog.php?which=1"); // check quest log protonic ghost location
      const ghostLoc = get("ghostLocation");
      if (!ghostLoc) throw `Failed to get protonic ghost notice`;
      adventure(ghostLoc, MacroList.FreeFight);
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`bag of many confections`);
      const blob = $item`psychokinetic energy blob`;
      use(Math.min(itemAmount(blob), Math.floor(myMaxmp() - myMp()) / 30), blob);
    },
  },

  hipster: {
    ready: () => !get("_ironicMoustache"),
    run: (): void => {
      cliExecute("retrocape heck thrill");
      familiar($familiar`Mini-Hipster`);
      equip($slot`familiar`, $item`none`);
      if (get("_sourceTerminalDigitizeUses") < 1) SourceTerminal.educate($skill`Digitize`);
      withEquipment(
        () => adventure(noobCave, MacroList.FreeFight),
        [[$slot`off-hand`, $item`Kramco Sausage-o-Matic™`]]
      );
      if (get("_sourceTerminalDigitizeUses") > 0) {
        SourceTerminal.educate($skill`Compress`);
        SourceTerminal.educate($skill`Extract`);
      } else throw `Failed to cast digitize?`;
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`ironic moustache`);
    },
  },

  vote: {
    ready: () => voterMonsterNow() && get("_voteFreeFights") < 1,
    run: () => {
      selectBestFamiliar();
      withEquipment(
        () => adventure(noobCave, MacroList.FreeFight),
        [[$slot`acc3`, $item`"I Voted!" sticker`]]
      );
    },
  },

  tropicalSkeleton: {
    ready: () => !have($effect`Everything Looks Red`),
    run: (): void => {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      familiar($familiar`Crimbo Shrub`);
      // Decorate Crimbo Shrub with LED Mandala, Jack-O-Lantern Lights, Popcorn Strands, and Big Red-Wrapped Presents
      if (!get("_shrubDecorated")) {
        const decorations = toInt($item`box of old Crimbo decorations`);
        visitUrl(`inv_use.php?pwd=&which=99&whichitem=${decorations}`);
        visitUrl(`choice.php?whichchoice=999&pwd=&option=1&topper=2&lights=5&garland=3&gift=2`);
      }
      mapMonster(skeletonStore, $monster`novelty tropical skeleton`, MacroList.FreeFight);
      checkEffect($effect`Everything Looks Red`);
      $items`cherry, grapefruit, lemon, strawberry`.forEach((fruit) => checkAvailable(fruit));
    },
  },
};

export const levelingEvents: Record<string, eventData> = {
  protonicGhost: {
    ready: () => get("ghostLocation") !== null,
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const ghostLoc = get("ghostLocation");
      if (!ghostLoc) throw `No ghost location found?`;
      adventure(ghostLoc, MacroList.FreeFight);
    },
  },

  ghostCarol: {
    ready: () =>
      ![
        $effect`All I Want For Crimbo Is Stuff`,
        $effect`Crimbo Wrapping`,
        $effect`Do You Crush What I Crush?`,
        $effect`Holiday Yoked`,
        $effect`Let It Snow/Boil/Stink/Frighten/Grease`,
      ].some((carol) => have(carol)),
    run: () => {
      familiar($familiar`Ghost of Crimbo Carols`);
      withEquipment(
        () => adventure(direWarren, MacroList.Banish),
        [[$slot`acc3`, $item`Kremlin's Greatest Briefcase`]]
      );
      checkEffect($effect`Do You Crush What I Crush?`);
    },
  },

  loveTunnel: {
    ready: () => !get("_loveTunnelUsed"),
    run: () => {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if (handlingChoice()) throw "Stuck in LOV?";
      checkEffect($effect`Open Heart Surgery`);
      $items`LOV Elixir #3, LOV Elixir #6, LOV Epaulettes`.forEach((l) => checkAvailable(l));
      use($item`LOV Elixir #3`);
      use($item`LOV Elixir #6`);
      equip($slot`back`, $item`LOV Epaulettes`);
    },
  },

  tenPercentBonus: {
    ready: () => have($item`a ten-percent bonus`),
    run: () => {
      [
        $effect`That's Just Cloud-Talk, Man`,
        $effect`Inscrutable Gaze`,
        $effect`Synthesis: Learning`,
      ].forEach(checkEffect);
      checkAvailable($item`LOV Epaulettes`);
      equip($slot`back`, $item`LOV Epaulettes`);
      equip($slot`off-hand`, $item`familiar scrapbook`);
      use($item`a ten-percent bonus`);
    },
  },

  chateau: {
    ready: () => myLevel() >= 8 && get("timesRested") < totalFreeRests(),
    run: () => {
      equip($slot`back`, $item`LOV Epaulettes`);
      equip($slot`off-hand`, $item`familiar scrapbook`);
      while (get("timesRested") < totalFreeRests()) {
        visitUrl("place.php?whichplace=chateau&action=chateau_restlabelfree");
      }
    },
  },

  witchessRook: {
    ready: () => !have($effect`Sweetbreads Flambé`),
    run: () => {
      prep(Quest.LevelingML);
      selectBestFamiliar();
      fightWitchess($monster`Witchess Rook`, MacroList.FreeFight);
      checkAvailable($item`Greek fire`);
      use($item`Greek fire`);
    },
  },

  upscaleDistrictKill: {
    ready: () => !have($effect`Whole Latte Love`) && !have($item`sprinkles`, 55),
    run: () => {
      familiar($familiar`Chocolate Lab`);
      const rope = $item`rope`;
      const crane = $item`burning paper crane`;
      const offhand = have(rope) ? rope : have(crane) ? crane : $item`familiar scrapbook`;
      withEquipment(
        () => adventure(upscaleDistrict, MacroList.Sprinkles),
        [
          [$slot`back`, $item`protonic accelerator pack`],
          [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
          [$slot`off-hand`, offhand],
          [$slot`acc1`, $item`hewn moon-rune spoon`],
          [$slot`acc2`, $item`Brutal brogues`],
          [$slot`acc3`, $item`Lil' Doctor™ bag`],
        ]
      );
      checkAvailable($item`sprinkles`, 55);
    },
  },

  upscaleDistrictRunaway: {
    ready: () => !have($effect`Whole Latte Love`),
    run: () => {
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(upscaleDistrict, MacroList.Runaway);
      const latte = $item`gingerbread spice latte`;
      if (have(latte)) {
        use(latte);
        checkAvailable($item`sprinkles`, 5);
      } else if (get("_gingerbreadCityTurns") > 5) {
        throw `Failed to obtain ${latte}`;
      }
    },
  },

  civicCenterRunaway: {
    ready: () => get("_gingerbreadCityTurns") < 15,
    run() {
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(civicCenter, MacroList.Runaway);
      const cig = $item`gingerbread cigarette`;
      if (get("_gingerbreadCityTurns") === 15 && !have(cig)) throw `Failed to obtain ${cig}`;
    },
  },

  snojo: {
    ready: () => get("_snojoFreeFights") < 10,
    run: () => {
      if (!get("snojoSetting") !== $stat`Muscle`) {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(1);
      }
      selectBestFamiliar();
      adventure(snojo, myFamiliar().combat ? MacroList.FastFreeFight : MacroList.FreeFight);
    },
  },

  bricko: {
    ready: () => have(BRICKO_TARGET_ITEM) && get("_brickoFights") < 3,
    run: () => {
      selectBestFamiliar();
      (myFamiliar().combat ? MacroList.FastFreeFight : MacroList.FreeFight).setAutoAttack();
      use(BRICKO_TARGET_ITEM);
    },
  },

  witchessWitch: {
    ready: () => !have($item`battle broom`),
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess Witch`, MacroList.WitchessWitch);
      equip($slot`acc2`, $item`battle broom`);
    },
  },

  eldritch: {
    ready: () => !get("_eldritchHorrorEvoked"),
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      useSkill($skill`Evoke Eldritch Horror`);
      // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned
      if (myHp() / myMaxhp() < 0.5) useSkill($skill`Cannelloni Cocoon`);
    },
  },

  gingerbreadCig: {
    ready: () => have($item`gingerbread cigarette`),
    run: () => {
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(upscaleDistrict, MacroList.FreeFight);
    },
  },

  godLobster: {
    ready: () => get("_godLobsterFights") < 3,
    run: () => {
      familiar($familiar`God Lobster`);
      MacroList.FreeFight.setAutoAttack();
      visitUrl("main.php?fightgodlobster=1");
      visitUrl("choice.php");
      if (handlingChoice()) runChoice(get("_godLobsterFights") < 3 ? 1 : 2);
      const ring = $item`God Lobster's Ring`;
      const scepter = $item`God Lobster's Scepter`;
      if (have(ring)) equip($slot`familiar`, ring);
      else if (have(scepter)) equip($slot`familiar`, scepter);
    },
  },

  witchessKing: {
    ready: () => !have($item`dented scepter`),
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess King`, MacroList.FreeFight);
    },
  },

  witchess: {
    ready: () => get("_witchessFights") < 5,
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess Queen`, MacroList.WitchessQueen);
    },
  },

  digitize: {
    ready: () => get("_sourceTerminalDigitizeMonsterCount") < 1,
    run: () => {
      // Turbo used a flag to cast pride
      SourceTerminal.educate($skill`Turbo`);
      const shirt = $item`makeshift garbage shirt`;
      if (!have(shirt)) cliExecute(`fold ${shirt}`);
      equip($slot`shirt`, shirt);
      equip($slot`back`, $item`unwrapped knock-off retro superhero cape`);
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  vote: {
    ready: () => voterMonsterNow() && get("_voteFreeFights") < 1,
    run: () => {
      selectBestFamiliar();
      withEquipment(
        () => adventure(toxicTeacups, MacroList.FreeFight),
        [[$slot`acc3`, $item`"I Voted!" sticker`]]
      );
    },
  },

  holidayWanderer: {
    ready: () => isHolidayWandererDay() && deepDarkJungle.combatQueue.length < 1,
    run: () => {
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(deepDarkJungle, MacroList.Runaway);
    },
  },

  dmtSquare: {
    ready: () => !have($effect`Joy`) && !have($item`abstraction: action`),
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable($item`abstraction: action`);
    },
  },

  dmtCircle: {
    ready: () => !have($effect`Joy`),
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable($item`abstraction: joy`);
      chew($item`abstraction: joy`);
    },
  },

  dmt: {
    ready: () => get("_machineTunnelsAdv") < 5,
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.FreeFight);
    },
  },

  chestXRay: {
    ready: () => get("_chestXRayUsed") < 3,
    run: () => {
      equip($slot`acc1`, $item`Lil' Doctor™ bag`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  shatterPunch: {
    ready: () => get("_shatteringPunchUsed") < 3,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  mobHit: {
    ready: () => !get("_gingerbreadMobHitUsed"),
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  shockingLick: {
    ready: () => get("shockingLickCharges") > 0,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  lecture: {
    ready: () => get("_pocketProfessorLectures") < 1,
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      familiar($familiar`Pocket Professor`);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  backupCamera: {
    ready: () => get("lastCopyableMonster") === $monster`sausage goblin` && get("_backUpUses") < 7,
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      equip($slot`acc3`, $item`backup camera`);
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  deepDark: {
    ready: () => !have($effect`Visions of the Deep Dark Deeps`),
    run: () => {
      prep(Quest.DeepDark);
      const resist = 1 - elementalResistance($element`spooky`) / 100;
      if (resist <= 0) throw `invalid resist value ${resist} calculated?`;
      const maxMultiplier = 4;
      const needed = myMaxhp() * maxMultiplier * resist;
      if (myMaxhp() < 500 || myMaxhp() < needed) throw `Not enough HP for deep dark visions`;
      if (myHp() < needed) cliExecute(`cast * ${$skill`Cannelloni Cocoon`}`);
      if (myHp() < needed) throw `Failed to heal enough for Deep Dark Visions?`;
      useSkill($skill`Deep Dark Visions`);
      while (myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
    },
  },

  vintnerBackup: {
    ready: () => get("lastCopyableMonster") === $monster`sausage goblin` && get("_backUpUses") < 11,
    run: () => {
      changeMcd(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);
      adventure(toxicTeacups, MacroList.StenchFreeFight);
    },
  },

  nep: {
    ready: () => get("_neverendingPartyFreeTurns") < 10,
    run: () => {
      changeMcd(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);
      const checkQuest = (): boolean => get("_questPartyFair") === "unstarted";
      if (checkQuest()) {
        visitUrl(toUrl(neverendingParty));
        const choice = ["food", "booze"].includes(get("_questPartyFairQuest")) ? 1 : 2;
        runChoice(choice);
        if (checkQuest()) throw `Failed to grab Neverending Party Quest`;
      }
      adventure(neverendingParty, MacroList.StenchFreeFight);
    },
  },

  latteRefills: {
    ready: () => get("_latteRefillsUsed") < 1,
    run: () => {
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      equip($slot`pants`, $item`Cargo Cultist Shorts`);
      if (get("_latteDrinkUsed")) cliExecute("latte refill pumpkin cinnamon vanilla");
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.LatteGulpRunaway);
    },
  },

  latteCarrot: {
    ready: () => !get("latteUnlocks").includes("carrot"),
    run: () => {
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      equip($slot`pants`, $item`Cargo Cultist Shorts`);
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.Runaway);
    },
  },

  lastLatteRefill: {
    ready: () => get("_latteRefillsUsed") < 3,
    run: () => {
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      equip($slot`pants`, $item`Cargo Cultist Shorts`);
      if (get("_latteDrinkUsed")) cliExecute("latte refill pumpkin cinnamon carrot");
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.LatteGulpRunaway);
    },
  },
} as const;

export function hasRemainingFreeFights(): boolean {
  return Object.values(levelingEvents).some((event) => event.ready());
}

// Not all of the combats are going to occur while leveling, the rest can go here
export const oneOffEvents = {
  nanobrainy: (): void => {
    if (!get("_gingerbreadClockAdvanced")) adventure(civicCenter, Macro.abort());
    if (!have($effect`Nanobrainy`) && get("_nanorhinoCharge") > 99) {
      equip($slot`back`, $item`vampyric cloake`);
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      familiar($familiar`Nanorhino`);
      adventure(upscaleDistrict, MacroList.Nanobrainy);
      checkEffect($effect`Nanobrainy`);
    }
  },

  innerElf: (): void => {
    if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
      familiar($familiar`Machine Elf`);
      const prev = get("lastCopyableMonster");
      // TODO: Handle Mother is Busy Right Now case
      Clan.with(FAX_AND_SLIME_CLAN, () => adventure(slimeTube, MacroList.MotherSlime));
      checkEffect($effect`Inner Elf`);
      if (prev && get("lastCopyableMonster") === $monster`Mother Slime`) {
        set("lastCopyableMonster", prev); // Need the property to be more accurate sometimes
      }
    }
  },

  meteorUngulith: (): void => {
    const fax = $item`photocopied monster`;
    const faxMon = $monster`ungulith`;
    if (!have(fax)) Clan.with(FAX_AND_SLIME_CLAN, () => cliExecute("fax receive"));
    if (!visitUrl(`desc_item.php?whichitem=${fax.descid}`).includes(`${faxMon}`)) {
      throw `Failed to retrieve fax of ${faxMon}`;
    }
    equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
    familiar($familiar`Machine Elf`);
    adventureUrl(`inv_use.php?pwd=&whichitem=${toInt(fax)}`, MacroList.MeteorForce);
    checkAvailable($item`corrupted marrow`);
  },

  foamYourself: (): void => {
    if (!have($effect`Fireproof Foam Suit`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`off-hand`, $item`industrial fire extinguisher`);
      familiar($familiar`Machine Elf`);
      adventure(direWarren, MacroList.FoamForce);
      checkEffect($effect`Fireproof Foam Suit`);
    }
  },

  meteorShower: (): void => {
    if (!have($effect`Meteor Showered`)) {
      tryUse($item`tiny bottle of absinthe`);
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      familiar($familiar`Machine Elf`);
      const collar = $item`disintegrating spiky collar`;
      if (have($effect`Absinthe-Minded`) && !have(collar) && !have(itemToEffect(collar))) {
        mapMonster(statelyPleasureDome, $monster`toothless mastiff bitch`, MacroList.FreeFight);
        checkAvailable(collar);
        use(collar);
      } else {
        adventure(direWarren, MacroList.MeteorForce);
      }
      checkEffect($effect`Meteor Showered`);
    }
  },

  batform: (): void => {
    if (!have($effect`Bat-Adjacent Form`)) {
      equip($slot`back`, $item`vampyric cloake`);
      useSkill($skill`The Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.BatFormRunaway);
      checkEffect($effect`Bat-Adjacent Form`);
    }
  },
} as const;

function familiar(fam: Familiar) {
  useFamiliar(fam);
  const costume = new Map([
    [$familiar`Machine Elf`, "mp"],
    [$familiar`Pocket Professor`, "hp"],
    [$familiar`Rockin' Robin`, "myst"],
  ]).get(fam);
  if (fam === $familiar`Machine Elf`) {
    while (myHp() < myMaxhp() && myMp() > MP_SAFE_LIMIT) useSkill($skill`Cannelloni Cocoon`);
  }
  if (costume && !get("_mummeryMods").includes(`${fam}`)) cliExecute(`mummery ${costume}`);
}

function selectBestFamiliar(flag: FamiliarFlag = FamiliarFlag.Default) {
  if (
    flag === FamiliarFlag.Wine &&
    !have($item`1950 Vampire Vintner wine`) &&
    !have($effect`Wine-Befouled`)
  ) {
    familiar($familiar`Vampire Vintner`);
  } else if (flag === FamiliarFlag.ToxicTeacups && get("_hipsterAdv") < 7) {
    familiar($familiar`Artistic Goth Kid`);
  } else if (!have($item`robin's egg`)) {
    familiar($familiar`Rockin' Robin`);
  } else if (flag === FamiliarFlag.Default && !have($item`short stick of butter`)) {
    familiar($familiar`Shorter-Order Cook`);
  } else if (
    flag === FamiliarFlag.Default &&
    !have($item`tiny bottle of absinthe`) &&
    !have($effect`Absinthe-Minded`)
  ) {
    familiar($familiar`Green Pixie`);
  } else if (
    !have($item`rope`) &&
    !have($item`burning newspaper`) &&
    !have($item`burning paper crane`)
  ) {
    familiar($familiar`Garbage Fire`);
  } else {
    familiar($familiar`Machine Elf`);
  }
}
