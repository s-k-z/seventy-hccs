import {
  adv1,
  availableAmount,
  chew,
  choiceFollowsFight,
  cliExecute,
  containsText,
  equip,
  handlingChoice,
  haveEffect,
  haveEquipped,
  itemAmount,
  myHash,
  myHp,
  myLevel,
  print,
  runChoice,
  setAutoAttack,
  toEffect,
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
  $stat,
  adventureMacro,
  adventureMacroAuto,
  ChateauMantegna,
  get,
  have,
  Macro,
} from "libram";
import { MacroList, mapMonster } from "./combat";
import { BRICKO_TARGET_ITEM, FAX_AND_SLIME_CLAN, MAIN_CLAN } from "./config";
import { fightWitchess, spendAllMpOnLibrams } from "./iotms";
import {
  acquireEffect,
  checkAvailable,
  checkEffect,
  setPropertyInt,
  voterMonsterNow,
  whitelist,
} from "./lib";
import { equipOutfit, equipRetroCapeMystStats, Quest } from "./quests";

export enum FamiliarFlag {
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
      return get("ghostLocation") === null || get("feelNostalgicMonster") !== $monster`pterodactyl`
        ? this.max
        : 0;
    },
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      selectBestFamiliar(FamiliarFlag.NoAttack);
      const ghostLoc2 = get("ghostLocation");
      adventureMacroAuto(ghostLoc2!, MacroList.FreeFight);
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
      whitelist(FAX_AND_SLIME_CLAN);
      useFamiliar($familiar`Machine Elf`);
      print(`${MacroList.MotherSlime}`);
      print("Attempting to go to the slime tube");
      setAutoAttack(0);
      adventureMacro(slimeTube, MacroList.MotherSlime);
      whitelist(MAIN_CLAN);
      if (!have($effect`Inner Elf`)) {
        throw "Error: somehow failed to obtain Inner Elf?";
      }
    },
  },

  ungulith: {
    max: 0,
    current: () => availableAmount($item`corrupted marrow`) - 1,
    run: () => {
      if (!have($item`photocopied monster`)) {
        whitelist(FAX_AND_SLIME_CLAN);
        cliExecute("fax receive");
      }
      const faxMon = $monster`Ungulith`;
      whitelist(MAIN_CLAN);
      if (
        !containsText(
          visitUrl(`desc_item.php?whichitem=${$item`photocopied monster`.descid}`),
          `${faxMon}`
        )
      ) {
        throw `Failed to retrieve fax of ${faxMon}`;
      }
      equip($slot`off-hand`, $item`tiny black hole`);
      checkEffect($effect`Ode to Booze`);
      useFamiliar($familiar`Frumious Bandersnatch`);
      MacroList.PickpocketFreeRun.setAutoAttack();
      visitUrl(`inv_use.php?pwd=${myHash()}&whichitem=${toInt($item`photocopied monster`)}`);
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
      useFamiliar($familiar`Frumious Bandersnatch`);
      adventureMacroAuto(direWarren, MacroList.PickpocketFreeRun);
    },
  },

  chateauPainting: {
    max: 0,
    current() {
      return get("_chateauMonsterFought") ? this.max : -1;
    },
    run: () => {
      equip($slot`back`, $item`protonic accelerator pack`);
      const phylum = ChateauMantegna.paintingMonster()!.phylum;
      const carols = $phyla`beast, bug, constellation, elf, goblin, humanoid`;
      if (carols.includes(phylum)) {
        equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
        useFamiliar($familiar`Ghost of Crimbo Carols`);
        MacroList.Banish.setAutoAttack();
      } else {
        checkEffect($effect`Ode to Booze`);
        useFamiliar($familiar`Frumious Bandersnatch`);
        MacroList.PickpocketFreeRun.setAutoAttack();
      }
      ChateauMantegna.fightPainting();
      if (!get("_chateauMonsterFought")) {
        throw "Error: Chateau painted not properly marked as fought.";
      }
    },
  },

  ghostCarol: {
    max: 0,
    current: () => haveEffect($effect`Do You Crush What I Crush?`) - 1,
    run: () => {
      equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
      useFamiliar($familiar`Ghost of Crimbo Carols`);
      adventureMacro(direWarren, MacroList.Banish);
      checkEffect($effect`Do You Crush What I Crush?`);
    },
  },

  digitize: {
    max: 1,
    current: () => get("_sourceTerminalDigitizeMonsterCount"),
    run: () => {
      equipRetroCapeMystStats();
      selectBestFamiliar(FamiliarFlag.Default);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
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
      adventureMacroAuto(loveTunnel, MacroList.TunnelOfLOV);
      if (handlingChoice()) {
        throw "Stuck in LOV?";
      }
      checkEffect($effect`Open Heart Surgery`);
      checkAvailable($item`LOV Elixir #3`);
      use($item`LOV Elixir #3`);
      checkAvailable($item`LOV Elixir #6`);
      use($item`LOV Elixir #6`);
      checkAvailable($item`LOV Epaulettes`);
      equip($slot`back`, $item`LOV Epaulettes`);
    },
  },

  tenPercentBonus: {
    max: 0,
    current: () => 0 - availableAmount($item`a ten-percent bonus`),
    run: () => {
      checkEffect($effect`That's Just Cloud-Talk, Man`);
      checkEffect($effect`Inscrutable Gaze`);
      checkEffect($effect`Synthesis: Learning`);
      if (!haveEquipped($item`LOV Epaulettes`)) {
        throw `Error: ${$item`LOV Epaulettes`} not equipped`;
      }
      use($item`a ten-percent bonus`);
    },
  },

  upscaleDistrictKill: {
    max: 1,
    current() {
      return have($effect`Whole Latte Love`) ? this.max : availableAmount($item`sprinkles`) - 54;
    },
    run: () => {
      equipOutfit(Quest.Sprinkles);
      useFamiliar($familiar`Chocolate Lab`);
      adventureMacro(upscaleDistrict, MacroList.Sprinkles);
      equipOutfit(Quest.Leveling);
      checkAvailable($item`sprinkles`, 55);
    },
  },

  upscaleDistrictRunaway: {
    max: 0,
    current: () => haveEffect($effect`Whole Latte Love`) - 1,
    run: () => {
      checkEffect($effect`Ode to Booze`);
      useFamiliar($familiar`Frumious Bandersnatch`);
      adventureMacroAuto(upscaleDistrict, MacroList.PickpocketFreeRun);
      if (have($item`gingerbread spice latte`)) {
        use($item`gingerbread spice latte`);
        checkAvailable($item`sprinkles`, 5);
      } else if (get("_gingerbreadCityTurns") > 5) {
        throw `Failed to obtain ${$item`gingerbread spice latte`}`;
      }
    },
  },

  civicCenterRunaway: {
    max: 0,
    current: () => get("_gingerbreadCityTurns") - 15,
    run() {
      checkEffect($effect`Ode to Booze`);
      useFamiliar($familiar`Frumious Bandersnatch`);
      adventureMacroAuto(civicCenter, MacroList.PickpocketFreeRun);
      if (this.current() === this.max) {
        if (!have($item`gingerbread cigarette`, 5)) {
          throw `Failed to obtain ${$item`gingerbread cigarette`}`;
        }
      }
    },
  },

  witchessRook: {
    max: 0,
    current: () => haveEffect(toEffect("Sweetbreads Flambé")) - 1,
    run: () => {
      acquireEffect($effect`Ur-Kel's Aria of Annoyance`);
      equipOutfit(Quest.Leveling);
      selectBestFamiliar(FamiliarFlag.Default);
      fightWitchess($monster`Witchess Rook`, MacroList.FreeFight);
      checkAvailable($item`Greek fire`);
      use($item`Greek fire`);
    },
  },

  snojo: {
    max: 10,
    current: () => get("_snojoFreeFights"),
    run: () => {
      if (get("snojoSetting").toLowerCase() !== `${$stat`Muscle`}`.toLowerCase()) {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        // (1) muscle (2) mysticality (3) moxie (4) tournament (6) leave
        runChoice(1); // Don't want snojo to gain -50% myst debuffing bodyparts
      }
      selectBestFamiliar(FamiliarFlag.Default);
      adventureMacroAuto(snojo, MacroList.FreeFight);
    },
  },

  bricko: {
    max: 3,
    current() {
      return !have(BRICKO_TARGET_ITEM) ? this.max : get("_brickoFights");
    },
    run: () => {
      selectBestFamiliar(FamiliarFlag.Default);
      MacroList.FreeFight.setAutoAttack();
      use(BRICKO_TARGET_ITEM);
    },
  },

  witchessWitch: {
    max: 0,
    current: () => availableAmount($item`battle broom`) - 1,
    run: () => {
      selectBestFamiliar(FamiliarFlag.Default);
      fightWitchess($monster`Witchess Witch`, MacroList.WitchessWitch);
      equip($slot`acc1`, $item`battle broom`);
    },
  },

  eldritch: {
    max: 1,
    current() {
      return get("_eldritchHorrorEvoked") ? this.max : 0;
    },
    run: () => {
      selectBestFamiliar(FamiliarFlag.Default);
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
      adventureMacroAuto(upscaleDistrict, MacroList.FreeFight);
    },
  },

  vote: {
    max: 1,
    current() {
      return voterMonsterNow() ? get("_voteFreeFights") : this.max;
    },
    run: () => {
      equip($slot`acc3`, $item`"I Voted!" sticker`);
      selectBestFamiliar(FamiliarFlag.Default);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  godLobster: {
    max: 3,
    current: () => get("_godLobsterFights"),
    run: () => {
      if (events.godLobster.current() === events.godLobster.max - 1) {
        setPropertyInt(`choiceAdventure1310`, 2); // Receive a boon instead of equipment
      }
      useFamiliar($familiar`God Lobster`);
      MacroList.FreeFight.setAutoAttack();
      visitUrl("main.php?fightgodlobster=1");
      if (choiceFollowsFight()) {
        runChoice(-1);
      }
      if (!have($effect`Silence of the God Lobster`)) {
        if (events.godLobster.current() === events.godLobster.max) {
          throw `Failed to get ${$effect`Silence of the God Lobster`}`;
        } else if (itemAmount($item`God Lobster's Ring`) > 0) {
          equip($slot`familiar`, $item`God Lobster's Ring`);
        } else if (itemAmount($item`God Lobster's Scepter`) > 0) {
          equip($slot`familiar`, $item`God Lobster's Scepter`);
        }
      }
    },
  },

  witchessKing: {
    max: 0,
    current: () => availableAmount($item`dented scepter`) - 1,
    run: () => {
      selectBestFamiliar(FamiliarFlag.Default);
      fightWitchess($monster`Witchess King`, MacroList.FreeFight);
    },
  },

  witchess: {
    max: 5,
    current: () => get("_witchessFights"),
    run: () => {
      selectBestFamiliar(FamiliarFlag.Default);
      fightWitchess($monster`Witchess Queen`, MacroList.WitchessQueen);
    },
  },

  dmtSquare: {
    max: 0,
    current: () => haveEffect($effect`Joy`) + availableAmount($item`abstraction: action`) - 1,
    run: () => {
      useFamiliar($familiar`Machine Elf`);
      adventureMacro(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable($item`abstraction: action`);
    },
  },

  dmtCircle: {
    max: 0,
    current: () => haveEffect($effect`Joy`) - 1,
    run: () => {
      useFamiliar($familiar`Machine Elf`);
      adventureMacro(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable($item`abstraction: joy`);
      chew($item`abstraction: joy`);
    },
  },

  dmt: {
    max: 5,
    current: () => get("_machineTunnelsAdv"),
    run: () => {
      useFamiliar($familiar`Machine Elf`);
      adventureMacroAuto(deepMachineTunnels, MacroList.FreeFight);
    },
  },

  lecture: {
    max: 17,
    current: () => get("_pocketProfessorLectures"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      useFamiliar($familiar`Pocket Professor`);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  backupCamera: {
    max: 11,
    current: () => get("_backUpUses"),
    run: () => {
      equip($slot`acc3`, $item`backup camera`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  nep: {
    max: 10,
    current: () => get("_neverendingPartyFreeTurns"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      equip($slot`acc3`, $item`Beach Comb`);
      selectBestFamiliar(FamiliarFlag.Default);
      adventureMacroAuto(neverendingParty, MacroList.FreeFight);
    },
  },

  chestXRay: {
    max: 3,
    current: () => get("_chestXRayUsed"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  shatterPunch: {
    max: 3,
    current: () => get("_shatteringPunchUsed"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
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
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  shockingLick: {
    max: 0,
    current: () => 0 - get("shockingLickCharges"),
    run: () => {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventureMacroAuto(toxicTeacups, MacroList.FreeFight);
    },
  },

  latteRefills: {
    max: 0,
    current: () => get("_latteRefillsUsed") - 3,
    run: () => {
      checkEffect($effect`Ode to Booze`);
      equip($slot`off-hand`, $item`latte lovers member's mug`);
      if (get("_latteDrinkUsed")) {
        cliExecute("latte refill pumpkin cinnamon carrot");
      }
      useFamiliar($familiar`Frumious Bandersnatch`);
      adventureMacroAuto(direWarren, MacroList.LatteGulpRunaway);
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
interface oneOffEventData {
  run(): void;
}

export const oneOffEvents: Record<string, oneOffEventData> = {
  hipster: {
    run: () => {
      if (!get("_ironicMoustache")) {
        useFamiliar($familiar`Mini-Hipster`);
        adventureMacroAuto(noobCave, MacroList.FreeFight);
        equip($slot`familiar`, $item`none`);
        checkAvailable($item`ironic moustache`);
        cliExecute(`fold ${$item`chiptune guitar`}`);
      }
    },
  },

  mimic: {
    run: () => {
      if (!get("_bagOfCandy")) {
        useFamiliar($familiar`Stocking Mimic`);
        const ghostLoc1 = get("ghostLocation");
        adventureMacroAuto(ghostLoc1!, MacroList.FreeFight);
        equip($slot`familiar`, $item`none`);
        checkAvailable($item`bag of many confections`);
      }
    },
  },

  tropicalSkeleton: {
    run: () => {
      if (!have($effect`Everything Looks Red`)) {
        equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
        useFamiliar($familiar`Crimbo Shrub`);
        if (!get("_shrubDecorated")) {
          visitUrl(
            `inv_use.php?pwd=${myHash()}&which=99&whichitem=${toInt(
              $item`box of old Crimbo decorations`
            )}`
          );
          visitUrl(
            `choice.php?whichchoice=999&pwd=${myHash()}&option=1&topper=2&lights=5&garland=3&gift=2`
          );
        }
        mapMonster(skeletonStore, $monster`novelty tropical skeleton`, MacroList.TropicalSkeleton);
        if (!have($effect`Everything Looks Red`)) {
          throw `Failed to cast ${$skill`Open a Big Red Present`}?`;
        }
        $items`cherry,grapefruit,lemon,strawberry`.forEach((fruit) => checkAvailable(fruit));
      }
    },
  },

  nanobrainy: {
    run: () => {
      if (!get("_gingerbreadClockAdvanced")) {
        adv1(civicCenter, -1, (a, b, c) => {
          return Macro.abort().toString();
        });
      }
      if (!have($effect`Nanobrainy`)) {
        equip($slot`back`, $item`vampyric cloake`);
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        useFamiliar($familiar`Nanorhino`);
        adventureMacro(upscaleDistrict, MacroList.Nanobrainy);
      }
    },
  },

  lavaCo: {
    run: () => {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`acc2`, $item`Lil' Doctor™ bag`);
      equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
      // TODO: Fix this junk
      setAutoAttack(0);
      if (!have($effect`Meteor Showered`)) {
        adventureMacro(lavaCo, MacroList.LavaCoFactory1);
      }
      const lavaCoBanish = get("banishedMonsters");
      if (lavaCoBanish.includes("lava golem") || lavaCoBanish.includes("factory overseer")) {
        adventureMacro(lavaCo, MacroList.LavaCoFactory2);
      }
      if (choiceFollowsFight()) {
        runChoice(-1);
      }
    },
  },

  velvetGoldMine: {
    run: () => {
      equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
      equip($slot`acc2`, $item`Lil' Doctor™ bag`);
      equip($slot`acc3`, $item`Kremlin's Greatest Briefcase`);
      // TODO: Fix this junk
      setAutoAttack(0);
      if (!have($effect`Meteor Showered`)) {
        adventureMacro(velvetGoldMine, MacroList.VelvetGoldMine1);
      }
      const velvetBanish = get("banishedMonsters");
      if (
        velvetBanish.includes("healing crystal golem") ||
        velvetBanish.includes("mine overseer")
      ) {
        adventureMacro(velvetGoldMine, MacroList.VelvetGoldMine2);
      }
      if (choiceFollowsFight()) {
        runChoice(-1);
      }
    },
  },

  mistform: {
    run: () => {
      if (!have($effect`Misty Form`)) {
        equip($item`vampyric cloake`);
        useSkill($skill`The Ode to Booze`);
        useFamiliar($familiar`Frumious Bandersnatch`);
        adventureMacro(direWarren, MacroList.MistForm);
      }
    },
  },

  wormwood: {
    run: () => {
      if (!have($effect`Man's Worst Enemy`)) {
        if (!have($item`disintegrating spiky collar`)) {
          if (have($effect`absinthe minded`) || have($item`tiny bottle of absinthe`)) {
            equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
            acquireEffect($effect`absinthe minded`);
            mapMonster(
              statelyPleasureDome,
              $monster`toothless mastiff bitch`,
              MacroList.ToothlessMastiff
            );
            checkAvailable($item`disintegrating spiky collar`);
          } else {
            throw "Get 5 lbs without the wormwood";
          }
        }
        use($item`disintegrating spiky collar`);
      }
    },
  },

  batform: {
    run: () => {
      if (!have($effect`Bat-Adjacent Form`)) {
        equip($item`vampyric cloake`);
        useSkill($skill`The Ode to Booze`);
        useFamiliar($familiar`Frumious Bandersnatch`);
        adventureMacro(direWarren, MacroList.BatForm);
      }
    },
  },
};

function selectBestFamiliar(flag: FamiliarFlag) {
  if (!have($effect`Spit Upon`)) {
    useFamiliar($familiar`Melodramedary`);
  } else if (
    flag !== FamiliarFlag.NoAttack &&
    !have($item`short stack of pancakes`) &&
    !have($effect`Shortly Stacked`)
  ) {
    useFamiliar($familiar`Shorter-Order Cook`);
  } else if (
    flag !== FamiliarFlag.NoAttack &&
    !have($item`tiny bottle of absinthe`) &&
    !have($effect`absinthe minded`)
  ) {
    useFamiliar($familiar`Green Pixie`);
  } else if (
    !have($item`rope`) &&
    !have($item`burning newspaper`) &&
    !have($item`burning paper crane`) &&
    get("garbageFireProgress") + getRemainingFreeFights() >= 30
  ) {
    useFamiliar($familiar`Garbage Fire`);
    /*} else if (
    !have($item`robin's egg`) &&
    !have($effect`Egged On`) &&
    get("rockinRobinProgress") + getRemainingFreeFights() >= 30
  ) {
    useFamiliar($familiar`Rockin' Robin`);*/
  } else if (flag === FamiliarFlag.ToxicTeacups && get("_hipsterAdv") < 7) {
    useFamiliar($familiar`Artistic Goth Kid`);
  } else {
    useFamiliar($familiar`Machine Elf`);
  }
}
