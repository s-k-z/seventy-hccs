import {
  availableAmount,
  chew,
  choiceFollowsFight,
  cliExecute,
  containsText,
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
  $phyla,
  $skill,
  $slot,
  ChateauMantegna,
  Clan,
  get,
  have,
  Macro,
  set,
} from "libram";
import { adventure, MacroList, mapMonster } from "./combat";
import { BRICKO_TARGET_ITEM, FAX_AND_SLIME_CLAN } from "./config";
import { fightWitchess, spendAllMpOnLibrams } from "./iotms";
import {
  acquireEffect,
  checkAvailable,
  checkEffect,
  tryUse,
  voterMonsterNow,
  withEquipment,
} from "./lib";
import { equipOutfit, Quest } from "./quests";

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
const lavaCo = $location`LavaCo Lamp Factory`;
const loveTunnel = $location`The Tunnel of L.O.V.E.`;
const neverendingParty = $location`The Neverending Party`;
const noobCave = $location`Noob Cave`;
const skeletonStore = $location`The Skeleton Store`;
const slimeTube = $location`The Slime Tube`;
const snojo = $location`The X-32-F Combat Training Snowman`;
const statelyPleasureDome = $location`The Stately Pleasure Dome`;
const toxicTeacups = $location`The Toxic Teacups`;
const upscaleDistrict = $location`Gingerbread Upscale Retail District`;
const velvetGoldMine = $location`The Velvet / Gold Mine`;

// Structure events in the form of: [ if(check()<max) run(); ]
// Events are prioritized in order from top to bottom
interface eventData {
  max: number;
  current(): number;
  run(): void;
}

export const events: Record<string, eventData> = {
  protonicGhost: {
    max: 1,
    current() {
      return get("ghostLocation") === null || get("lastCopyableMonster") !== $monster`pterodactyl`
        ? this.max
        : 0;
    },
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const ghostLoc2 = get("ghostLocation");
      adventure(ghostLoc2!, MacroList.FreeFight);
      checkAvailable($item`Friendliness Beverage`);
      use($item`Friendliness Beverage`);
    },
  },

  innerElf: {
    max: 0,
    current() {
      return myLevel() < 13 || have($effect`Inner Elf`) ? this.max : -1;
    },
    run: () => {
      familiar($familiar`Machine Elf`);
      Clan.with(FAX_AND_SLIME_CLAN, () => adventure(slimeTube, MacroList.MotherSlime));
      checkEffect($effect`Inner Elf`);
    },
  },

  backupCamera: {
    max: 11,
    current() {
      return get("lastCopyableMonster") !== $monster`sausage goblin`
        ? this.max
        : get("_backUpUses");
    },
    run: () => {
      equip($slot`acc3`, $item`backup camera`);
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    },
  },

  ungulith: {
    max: 0,
    current: () => availableAmount($item`corrupted marrow`) - 1,
    run: () => {
      const fax = $item`photocopied monster`;
      const faxMon = $monster`Ungulith`;
      if (!have(fax)) Clan.with(FAX_AND_SLIME_CLAN, () => cliExecute("fax receive"));
      if (!containsText(visitUrl(`desc_item.php?whichitem=${fax.descid}`), `${faxMon}`)) {
        throw `Failed to retrieve fax of ${faxMon}`;
      }
      equip($slot`off-hand`, $item`tiny black hole`);
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      MacroList.PickpocketFreeRun.setAutoAttack();
      visitUrl(`inv_use.php?pwd=&whichitem=${toInt(fax)}`);
      checkAvailable($item`corrupted marrow`);
    },
  },

  latteCarrot: {
    max: 0,
    current() {
      return get("latteUnlocks").includes("carrot") ? this.max : -1;
    },
    run: () => {
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      checkEffect($effect`Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.PickpocketFreeRun);
    },
  },

  chateauPainting: {
    max: 0,
    current() {
      return get("_chateauMonsterFought") ? this.max : -1;
    },
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      const monster = ChateauMantegna.paintingMonster();
      if (!monster) throw `Empty Chateau painting?`;
      const carols = $phyla`beast, bug, constellation, elf, goblin, humanoid`;
      if (carols.includes(monster.phylum)) {
        equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
        familiar($familiar`Ghost of Crimbo Carols`);
        MacroList.Banish.setAutoAttack();
      } else {
        checkEffect($effect`Ode to Booze`);
        familiar($familiar`Frumious Bandersnatch`);
        MacroList.PickpocketFreeRun.setAutoAttack();
      }
      ChateauMantegna.fightPainting();
      if (!get("_chateauMonsterFought")) throw "Error: Chateau not properly flagged";
      if (get("ghostLocation") === null) throw `Failed to get protonic ghost message?`;
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

  loveTunnel: {
    max: 3,
    current() {
      return get("_loveTunnelUsed") ? this.max : 0;
    },
    run: () => {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if (handlingChoice()) throw "Stuck in LOV?";
      checkEffect($effect`Open Heart Surgery`);
      $items`LOV Elixir #3,LOV Elixir #6,LOV Epaulettes`.forEach((r) => checkAvailable(r));
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
      ].forEach((multiplier) => checkEffect(multiplier));
      if (!have($item`LOV Epaulettes`)) throw `Missing ${$item`LOV Epaulettes`}`;
      equip($slot`back`, $item`LOV Epaulettes`);
      withEquipment(
        () => use($item`a ten-percent bonus`),
        [[$slot`off-hand`, $item`familiar scrapbook`]]
      );
    },
  },

  upscaleDistrictKill: {
    max: 1,
    current() {
      return have($effect`Whole Latte Love`) ? this.max : availableAmount($item`sprinkles`) - 54;
    },
    run: () => {
      familiar($familiar`Chocolate Lab`);
      withEquipment(
        () => adventure(upscaleDistrict, MacroList.Sprinkles),
        [
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
      adventure(upscaleDistrict, MacroList.PickpocketFreeRun);
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
      adventure(civicCenter, MacroList.PickpocketFreeRun);
      if (this.current() === this.max) {
        if (!have($item`gingerbread cigarette`, 5)) {
          throw `Failed to obtain ${$item`gingerbread cigarette`}`;
        }
      }
    },
  },

  witchessRook: {
    max: 0,
    current: () => haveEffect($effect`Sweetbreads Flambé`) - 1,
    run: () => {
      acquireEffect($effect`Ur-Kel's Aria of Annoyance`);
      equipOutfit(Quest.Leveling);
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
      if (!get("snojoSetting")) visitUrl("place.php?whichplace=snojo&action=snojo_controller");
      if (handlingChoice()) throw `Stuck in Snojo?`;
      selectBestFamiliar();
      adventure(snojo, MacroList.FreeFight);
    },
  },

  bricko: {
    max: 3,
    current() {
      return !have(BRICKO_TARGET_ITEM) ? this.max : get("_brickoFights");
    },
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
    current() {
      return get("_eldritchHorrorEvoked") ? this.max : 0;
    },
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      useSkill($skill`Evoke Eldritch Horror`);
      if (myHp() < 30) {
        // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned, I guess this is enough?
        cliExecute("hottub");
      }
    },
  },

  gingerbreadCig: {
    max: 5,
    current() {
      return this.max - availableAmount($item`gingerbread cigarette`);
    },
    run: () => {
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(upscaleDistrict, MacroList.FreeFight);
    },
  },

  vote: {
    max: 1,
    current() {
      return voterMonsterNow() ? get("_voteFreeFights") : this.max;
    },
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
      if (events.godLobster.current() === events.godLobster.max - 1) {
        set(`choiceAdventure1310`, 2); // Receive a boon instead of equipment
      }
      familiar($familiar`God Lobster`);
      MacroList.FreeFight.setAutoAttack();
      visitUrl("main.php?fightgodlobster=1");
      if (choiceFollowsFight()) runChoice(-1);
      if (!have($effect`Silence of the God Lobster`)) {
        if (events.godLobster.current() === events.godLobster.max) {
          throw `Failed to get ${$effect`Silence of the God Lobster`}`;
        } else if (availableAmount($item`God Lobster's Ring`) > 0) {
          equip($slot`familiar`, $item`God Lobster's Ring`);
        } else if (availableAmount($item`God Lobster's Scepter`) > 0) {
          equip($slot`familiar`, $item`God Lobster's Scepter`);
        }
      }
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
    max: 17,
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
    current() {
      return get("_gingerbreadMobHitUsed") ? this.max : 0;
    },
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
  hipster: () => {
    if (!get("_ironicMoustache")) {
      familiar($familiar`Mini-Hipster`);
      equip($slot`familiar`, $item`none`);
      adventure(noobCave, MacroList.FreeFight);
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`ironic moustache`);
      cliExecute(`fold ${$item`chiptune guitar`}`);
    }
  },

  mimic: () => {
    if (!get("_bagOfCandy")) {
      familiar($familiar`Stocking Mimic`);
      equip($slot`familiar`, $item`none`);
      const ghostLoc1 = get("ghostLocation");
      if (!ghostLoc1) throw `Failed to get protonic ghost notice`;
      adventure(ghostLoc1, MacroList.FreeFight);
      equip($slot`familiar`, $item`none`);
      checkAvailable($item`bag of many confections`);
    }
  },

  tropicalSkeleton: () => {
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
      $items`cherry,grapefruit,lemon,strawberry`.forEach((fruit) => checkAvailable(fruit));
    }
  },

  nanobrainy: () => {
    if (!get("_gingerbreadClockAdvanced")) adventure(civicCenter, Macro.abort());
    if (!have($effect`Nanobrainy`)) {
      equip($slot`back`, $item`vampyric cloake`);
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      familiar($familiar`Nanorhino`);
      adventure(upscaleDistrict, MacroList.Nanobrainy);
      checkEffect($effect`Nanobrainy`);
    }
  },

  lavaCo: () => {
    while (!have($effect`Meteor Showered`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`acc2`, $item`Lil' Doctor™ bag`);
      equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const banished = get("banishedMonsters");
      const macro =
        banished.includes($monster`factory overseer (male)`.name) ||
        banished.includes($monster`factory worker (male)`.name) ||
        banished.includes($monster`lava golem`.name)
          ? MacroList.LavaCoFactory2
          : MacroList.LavaCoFactory1;
      adventure(lavaCo, macro);
    }
  },

  velvetGoldMine: () => {
    while (!have($effect`Meteor Showered`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`acc2`, $item`Lil' Doctor™ bag`);
      equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const banished = get("banishedMonsters");
      const macro =
        banished.includes($monster`healing crystal golem`.name) ||
        banished.includes($monster`mine overseer (male)`.name) ||
        banished.includes($monster`mine worker (male)`.name)
          ? MacroList.VelvetGoldMine2
          : MacroList.VelvetGoldMine1;
      adventure(velvetGoldMine, macro);
    }
  },

  mistform: () => {
    if (!have($effect`Misty Form`)) {
      equip($item`vampyric cloake`);
      useSkill($skill`The Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.MistForm);
      checkEffect($effect`Misty Form`);
    }
  },

  meteorShower: () => {
    tryUse($item`tiny bottle of absinthe`);
    if (
      have($effect`absinthe minded`) &&
      !have($effect`Meteor Showered`) &&
      !have($item`disintegrating spiky collar`)
    ) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      mapMonster(
        statelyPleasureDome,
        $monster`toothless mastiff bitch`,
        MacroList.MeteorShowerForce
      );
      checkAvailable($item`disintegrating spiky collar`);
      checkEffect($effect`Meteor Showered`);
    }
    tryUse($item`disintegrating spiky collar`);
    if (!have($effect`Meteor Showered`)) {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      adventure(direWarren, MacroList.MeteorShowerForce);
      checkEffect($effect`Meteor Showered`);
    }
  },

  batform: () => {
    if (!have($effect`Bat-Adjacent Form`)) {
      equip($item`vampyric cloake`);
      useSkill($skill`The Ode to Booze`);
      familiar($familiar`Frumious Bandersnatch`);
      adventure(direWarren, MacroList.BatForm);
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
    //[$familiar`Rockin' Robin`, "mp"],
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
    !have($effect`absinthe minded`)
  ) {
    familiar($familiar`Green Pixie`);
  } else if (
    !have($item`rope`) &&
    !have($item`burning newspaper`) &&
    !have($item`burning paper crane`) &&
    get("garbageFireProgress") + getRemainingFreeFights() >= 30
  ) {
    familiar($familiar`Garbage Fire`);
    /*} else if (
    !have($item`robin's egg`) &&
    !have($effect`Egged On`) &&
    get("rockinRobinProgress") + getRemainingFreeFights() >= 30
  ) {
    familiar($familiar`Rockin' Robin`);*/
  } else if (flag === FamiliarFlag.ToxicTeacups && get("_hipsterAdv") < 7) {
    familiar($familiar`Artistic Goth Kid`);
  } else {
    familiar($familiar`Machine Elf`);
  }
}
