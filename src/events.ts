import {
  availableAmount,
  chew,
  cliExecute,
  equip,
  handlingChoice,
  haveEffect,
  myHp,
  myLevel,
  runChoice,
  toInt,
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
  $stat,
  Clan,
  get,
  have,
  Macro,
} from "libram";
import { adventure, adventureUrl, MacroList, mapMonster } from "./combat";
import { BRICKO_TARGET_ITEM, FAX_AND_SLIME_CLAN } from "./config";
import { fightWitchess, spendAllMpOnLibrams } from "./iotms";
import { checkAvailable, checkEffect, tryUse, voterMonsterNow, withEquipment } from "./lib";
import { prep, Quest } from "./quests";

export const enum FamiliarFlag {
  Default,
  NoAttack,
  ToxicTeacups,
}

// Locations
const civicCenter = $location`Gingerbread Civic Center`;
const deepMachineTunnels = $location`The Deep Machine Tunnels`;
const direWarren = $location`The Dire Warren`;
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

// Structure events in the form of: [ if(check()<max) run(); ]
// Events are prioritized in order from top to bottom
interface eventData {
  max: number;
  current: () => number;
  run(): void;
}

export const events: Record<string, eventData> = {
  protonicGhost: {
    max: 1,
    current: () => (get("ghostLocation") ? 0 : 1),
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const ghostLoc = get("ghostLocation");
      if (!ghostLoc) throw `No ghost location found?`;
      adventure(ghostLoc, MacroList.FreeFight);
    },
  },

  backupCamera: {
    max: 11,
    current: () =>
      get("lastCopyableMonster") !== $monster`sausage goblin` ? 11 : get("_backUpUses"),
    run: () => {
      equip($slot`acc3`, $item`backup camera`);
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  latteCarrot: {
    max: 0,
    current: () => (get("latteUnlocks").includes("carrot") ? 0 : -1),
    run: () => {
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.Runaway);
    },
  },

  ghostCarol: {
    max: 0,
    current: () =>
      [
        $effect`All I Want For Crimbo Is Stuff`,
        $effect`Crimbo Wrapping`,
        $effect`Do You Crush What I Crush?`,
        $effect`Holiday Yoked`,
        $effect`Let It Snow/Boil/Stink/Frighten/Grease`,
      ].reduce((sum, carol) => sum + haveEffect(carol), 0) - 1,
    run: () => {
      equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
      familiar($familiar`Ghost of Crimbo Carols`);
      adventure(direWarren, MacroList.Banish);
      checkEffect($effect`Do You Crush What I Crush?`);
    },
  },

  loveTunnel: {
    max: 3,
    current: () => (get("_loveTunnelUsed") ? 3 : 0),
    run: () => {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if (handlingChoice()) throw "Stuck in LOV?";
      checkEffect($effect`Open Heart Surgery`);
      $items`LOV Elixir #3, LOV Elixir #6, LOV Epaulettes`.forEach((l) => checkAvailable(l, 1));
      use($item`LOV Elixir #3`);
      use($item`LOV Elixir #6`);
      equip($slot`back`, $item`LOV Epaulettes`);
    },
  },

  tenPercentBonus: {
    max: 0,
    current: () => 0 - availableAmount($item`a ten-percent bonus`),
    run: () => {
      [
        $effect`That's Just Cloud-Talk, Man`,
        $effect`Inscrutable Gaze`,
        $effect`Synthesis: Learning`,
      ].forEach(checkEffect);
      checkAvailable($item`LOV Epaulettes`);
      equip($slot`back`, $item`LOV Epaulettes`);
      withEquipment(
        () => use($item`a ten-percent bonus`),
        [[$slot`off-hand`, $item`familiar scrapbook`]]
      );
    },
  },

  upscaleDistrictKill: {
    max: 1,
    current: () => (have($effect`Whole Latte Love`) ? 1 : availableAmount($item`sprinkles`) - 54),
    run: () => {
      familiar($familiar`Chocolate Lab`);
      withEquipment(
        () => adventure(upscaleDistrict, MacroList.Sprinkles),
        [
          [$slot`back`, $item`protonic accelerator pack`],
          [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
          [$slot`off-hand`, have($item`rope`) ? $item`rope` : $item`familiar scrapbook`],
          [$slot`acc1`, $item`hewn moon-rune spoon`],
          [$slot`acc2`, $item`Brutal brogues`],
          [$slot`acc3`, $item`Lil' Doctor™ bag`],
        ]
      );
      checkAvailable($item`sprinkles`, 55);
    },
  },

  upscaleDistrictRunaway: {
    max: 0,
    current: () => haveEffect($effect`Whole Latte Love`) - 1,
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
    max: 0,
    current: () => get("_gingerbreadCityTurns") - 15,
    run() {
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(civicCenter, MacroList.Runaway);
      const cig = $item`gingerbread cigarette`;
      if (get("_gingerbreadCityTurns") === 15 && !have(cig)) throw `Failed to obtain ${cig}`;
    },
  },

  witchessRook: {
    max: 0,
    current: () => haveEffect($effect`Sweetbreads Flambé`) - 1,
    run: () => {
      prep(Quest.Leveling);
      selectBestFamiliar();
      fightWitchess($monster`Witchess Rook`, MacroList.FreeFight);
      checkAvailable($item`Greek fire`);
      use($item`Greek fire`);
    },
  },

  snojo: {
    max: 10,
    current: () => get("_snojoFreeFights"),
    run: () => {
      if (!get("snojoSetting") !== $stat`Muscle`) {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(1);
      }
      selectBestFamiliar();
      adventure(snojo, MacroList.FreeFight);
    },
  },

  bricko: {
    max: 3,
    current: () => (!have(BRICKO_TARGET_ITEM) ? 3 : get("_brickoFights")),
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      use(BRICKO_TARGET_ITEM);
    },
  },

  witchessWitch: {
    max: 0,
    current: () => availableAmount($item`battle broom`) - 1,
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess Witch`, MacroList.WitchessWitch);
      equip($slot`acc2`, $item`battle broom`);
    },
  },

  eldritch: {
    max: 1,
    current: () => (get("_eldritchHorrorEvoked") ? 1 : 0),
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      useSkill($skill`Evoke Eldritch Horror`);
      // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned
      if (myHp() < 30) cliExecute("hottub");
    },
  },

  gingerbreadCig: {
    max: 5,
    current: () => 5 - availableAmount($item`gingerbread cigarette`),
    run: () => {
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(upscaleDistrict, MacroList.FreeFight);
    },
  },

  digitize: {
    max: 1,
    current: () => get("_sourceTerminalDigitizeMonsterCount"),
    run: () => {
      equip($slot`back`, $item`unwrapped knock-off retro superhero cape`);
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  ninjaCostume: {
    max: 1,
    current: () => availableAmount($item`li'l ninja costume`),
    run: () => {
      equip($slot`acc1`, $item`Lil' Doctor™ bag`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      mapMonster(haikuDungeon, $monster`amateur ninja`, MacroList.FreeFight);
      checkAvailable($item`li'l ninja costume`);
    },
  },

  vote: {
    max: 1,
    current: () => (voterMonsterNow() ? get("_voteFreeFights") : 1),
    run: () => {
      selectBestFamiliar();
      withEquipment(
        () => adventure(toxicTeacups, MacroList.FreeFight),
        [[$slot`acc3`, $item`"I Voted!" sticker`]]
      );
    },
  },

  godLobster: {
    max: 3,
    current: () => get("_godLobsterFights"),
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
    max: 0,
    current: () => availableAmount($item`dented scepter`) - 1,
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess King`, MacroList.FreeFight);
    },
  },

  witchess: {
    max: 5,
    current: () => get("_witchessFights"),
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster`Witchess Queen`, MacroList.WitchessQueen);
    },
  },

  dmtSquare: {
    max: 0,
    current: () => haveEffect($effect`Joy`) + availableAmount($item`abstraction: action`) - 1,
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable($item`abstraction: action`);
    },
  },

  dmtCircle: {
    max: 0,
    current: () => haveEffect($effect`Joy`) - 1,
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable($item`abstraction: joy`);
      chew($item`abstraction: joy`);
    },
  },

  dmt: {
    max: 5,
    current: () => get("_machineTunnelsAdv"),
    run: () => {
      familiar($familiar`Machine Elf`);
      adventure(deepMachineTunnels, MacroList.FreeFight);
    },
  },

  lecture: {
    max: 16,
    current: () => get("_pocketProfessorLectures"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      familiar($familiar`Pocket Professor`);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  nep: {
    max: 10,
    current: () => get("_neverendingPartyFreeTurns"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      equip($slot`acc3`, $item`Beach Comb`);
      selectBestFamiliar();
      adventure(neverendingParty, MacroList.FreeFight);
    },
  },

  chestXRay: {
    max: 3,
    current: () => get("_chestXRayUsed"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      equip($slot`acc1`, $item`Lil' Doctor™ bag`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  shatterPunch: {
    max: 3,
    current: () => get("_shatteringPunchUsed"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  mobHit: {
    max: 1,
    current: () => (get("_gingerbreadMobHitUsed") ? 1 : 0),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  // TODO: Get a shocking lick charge, maybe?
  shockingLick: {
    max: 0,
    current: () => 0 - get("shockingLickCharges"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  latteRefills: {
    max: 0,
    current: () => get("_latteRefillsUsed") - 3,
    run: () => {
      checkEffect($effect`Ode to Booze`);
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      if (get("_latteDrinkUsed")) cliExecute("latte refill pumpkin cinnamon carrot");
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.LatteGulpRunaway);
    },
  },
} as const;

export function getRemainingFreeFights(): number {
  return Object.values(events).reduce(
    (sum, { max, current }) => sum + Math.max(max - Math.max(current(), 0), 0),
    0
  );
}

// Not all of the combats are going to occur while leveling, the rest can go here
export const oneOffEvents = {
  hipster: (): void => {
    if (!get("_ironicMoustache")) {
      familiar($familiar`Mini-Hipster`);
      equip($slot`familiar`, $item`none`);
      withEquipment(
        () => adventure(noobCave, MacroList.FreeFight),
        [[$slot`off-hand`, $item`Kramco Sausage-o-Matic™`]]
      );
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`ironic moustache`);
      cliExecute(`fold ${$item`chiptune guitar`}`);
    }
  },

  mimic: (): void => {
    if (!get("_bagOfCandy")) {
      familiar($familiar`Stocking Mimic`);
      equip($slot`familiar`, $item`none`);
      const ghostLoc = get("ghostLocation");
      if (!ghostLoc) throw `Failed to get protonic ghost notice`;
      adventure(ghostLoc, MacroList.FreeFight);
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`bag of many confections`);
    }
  },

  tropicalSkeleton: (): void => {
    if (!have($effect`Everything Looks Red`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      familiar($familiar`Crimbo Shrub`);
      if (!get("_shrubDecorated")) {
        visitUrl(
          `inv_use.php?pwd=&which=99&whichitem=${toInt($item`box of old Crimbo decorations`)}`
        );
        visitUrl(`choice.php?whichchoice=999&pwd=&option=1&topper=2&lights=5&garland=3&gift=2`);
      }
      mapMonster(skeletonStore, $monster`novelty tropical skeleton`, MacroList.TropicalSkeleton);
      checkEffect($effect`Everything Looks Red`);
      $items`cherry, grapefruit, lemon, strawberry`.forEach((fruit) => checkAvailable(fruit));
    }
  },

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
      // TODO: Handle Mother is Busy Right Now case
      Clan.with(FAX_AND_SLIME_CLAN, () => adventure(slimeTube, MacroList.MotherSlime));
      checkEffect($effect`Inner Elf`);
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
    useFamiliar($familiar`Machine Elf`);
    adventureUrl(`inv_use.php?pwd=&whichitem=${toInt(fax)}`, MacroList.MeteorForce);
    checkAvailable($item`corrupted marrow`);
  },

  foamYourself: (): void => {
    if (!have($effect`Fireproof Foam Suit`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`off-hand`, $item`industrial fire extinguisher`);
      useFamiliar($familiar`Machine Elf`);
      adventure(direWarren, MacroList.FoamForce);
      checkEffect($effect`Fireproof Foam Suit`);
    }
  },

  meteorPleasureDome: (): void => {
    if (!have($effect`Meteor Showered`)) {
      tryUse($item`tiny bottle of absinthe`);
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      useFamiliar($familiar`Machine Elf`);
      if (
        have($effect`Absinthe-Minded`) &&
        !have($item`disintegrating spiky collar`) &&
        !have($effect`Man's Worst Enemy`)
      ) {
        mapMonster(statelyPleasureDome, $monster`toothless mastiff bitch`, MacroList.MeteorForce);
        checkAvailable($item`disintegrating spiky collar`);
        use($item`disintegrating spiky collar`);
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
};

function familiar(fam: Familiar) {
  useFamiliar(fam);
  const costume = new Map([
    [$familiar`Green Pixie`, "mp"],
    [$familiar`Machine Elf`, "meat"],
    [$familiar`Melodramedary`, "myst"],
    [$familiar`Pocket Professor`, "hp"],
    [$familiar`Shorter-Order Cook`, "item"],
  ]).get(fam);
  if (costume && !get("_mummeryMods").includes(`${fam}`)) cliExecute(`mummery ${costume}`);
}

function selectBestFamiliar(flag: FamiliarFlag = FamiliarFlag.Default) {
  if (!have($effect`Spit Upon`)) {
    familiar($familiar`Melodramedary`);
  } else if (
    flag === FamiliarFlag.Default &&
    !have($item`short stack of pancakes`) &&
    !have($effect`Shortly Stacked`)
  ) {
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
    !have($item`burning paper crane`) &&
    get("garbageFireProgress") + getRemainingFreeFights() >= 30
  ) {
    familiar($familiar`Garbage Fire`);
  } else if (flag === FamiliarFlag.ToxicTeacups && get("_hipsterAdv") < 7) {
    familiar($familiar`Artistic Goth Kid`);
  } else {
    familiar($familiar`Machine Elf`);
  }
}
