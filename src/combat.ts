import {
  adv1,
  choiceFollowsFight,
  inMultiFight,
  myHash,
  runCombat,
  runChoice,
  toInt,
  toUrl,
  useSkill,
  visitUrl,
  myTurncount,
  setAutoAttack,
} from "kolmafia";
import { $effect, $item, $location, $monster, $skill, get, Macro } from "libram";

const amateurNinja = $monster`amateur ninja`.id;
const gentrifier = $monster`gingerbread gentrifier`.id;
const toxicBeastie = $monster`toxic beastie`.id;
const ungulith = $monster`Ungulith`.id;
const LOVEnforcer = $monster`LOV Enforcer`.id;
const LOVEngineer = $monster`LOV Engineer`.id;
const DMTSquareMon = $monster`Performer of Actions`.id;
const DMTCircleMon = $monster`Thinker of Thoughts`.id;
const factoryOverseerF = $monster`factory overseer (female)`.id;
const factoryWorkerF = $monster`factory worker (female)`.id;
const mineWorkerF = $monster`mine worker (female)`.id;
const mineWorkerM = $monster`mine worker (male)`.id;

const retailDistrict = toUrl($location`Gingerbread Upscale Retail District`).split("=")[1];

const EnvyNostalgia = new Macro().trySkill($skill`Feel Envy`).trySkill($skill`Feel Nostalgic`);

const GhostMacro = new Macro()
  .skill($skill`Summon Love Gnats`)
  // kind of a hack but the plan is to always runaway before the second ghost
  .if_(`haseffect ${toInt($effect`Ode to Booze`)}`, EnvyNostalgia)
  .skill($skill`Sing Along`)
  .skill($skill`Shoot Ghost`)
  .skill($skill`Shoot Ghost`)
  .skill($skill`Shoot Ghost`)
  .skill($skill`Trap Ghost`)
  .abort();

const TryBanish = new Macro() // Reserve Snokebomb for Mother Slime
  .trySkill($skill`Throw Latte on Opponent`)
  .trySkill($skill`KGB tranquilizer dart`)
  .trySkill($skill`Reflex Hammer`)
  .trySkill($skill`Feel Hatred`)
  .abort();

const Replace = new Macro()
  //.trySkill($skill`CHEAT CODE: Replace Enemy`)
  //.if_(`!hasskill ${toInt($skill`CHEAT CODE: Replace Enemy`)}`, Macro
  .skill($skill`Macrometeor`);
const MeteorShowerForce = new Macro().skill($skill`Meteor Shower`).skill($skill`Use the Force`);

const FreeInstaKill = new Macro()
  .skill($skill`Sing Along`)
  .trySkill($skill`Chest X-Ray`)
  .trySkill($skill`Shattering Punch`)
  .trySkill($skill`Gingerbread Mob Hit`)
  .abort();

const CigKill = new Macro()
  .skill($skill`Sing Along`)
  .tryItem($item`gingerbread cigarette`)
  .abort();

const DefaultMacro = new Macro()
  .if_(`hasskill ${toInt($skill`Shoot Ghost`)}`, GhostMacro)
  .if_(
    `monsterid ${toxicBeastie}`,
    Macro.trySkill($skill`Back-Up to your Last Enemy`).skill($skill`Summon Love Mosquito`)
  )
  .if_(`monsterid ${amateurNinja} || monsterid ${toxicBeastie}`, FreeInstaKill)
  .if_(`snarfblat ${retailDistrict}`, CigKill)
  .trySkill($skill`Digitize`)
  .trySkill($skill`spit on me!`)
  .if_(`hasskill ${toInt($skill`Turbo`)}`, Macro.trySkill($skill`Feel Pride`)) // Turbo used a flag to cast pride
  .skill($skill`Curse of Weaksauce`)
  .skill($skill`Micrometeorite`)
  .if_(`!hascombatitem ${toInt($item`blue rocket`)}`, Macro.item($item`Time-Spinner`))
  .if_(
    `hascombatitem ${toInt($item`blue rocket`)}`,
    Macro.item($item`Time-Spinner`, $item`blue rocket`)
  )
  .if_(
    `hasskill ${toInt($skill`lecture on relativity`)}`,
    Macro.skill($skill`lecture on relativity`).skill($skill`Saucy Salve`)
  )
  .skill($skill`Sing Along`)
  .skill($skill`Candyblast`)
  .repeat();

export const MacroList = {
  FreeFight: DefaultMacro,

  PickpocketFreeRun: new Macro().if_(`monsterid ${ungulith}`, "pickpocket").step("runaway"),

  Banish: TryBanish,

  Nanobrainy: new Macro()
    .skill($skill`Entangling Noodles`)
    .trySkill($skill`Giant Growth`)
    .trySkill($skill`Become a Wolf`)
    .step(TryBanish),

  Sprinkles: new Macro()
    .if_(`monsterid ${gentrifier}`, Replace)
    .skill($skill`Meteor Shower`)
    .step(FreeInstaKill),

  TropicalSkeleton: new Macro()
    .trySkill($skill`Open a Big Red Present`)
    .skill($skill`Use the Force`),

  TunnelOfLOV: new Macro()
    .if_(`monsterid ${LOVEnforcer}`, Macro.attack().repeat())
    .if_(`monsterid ${LOVEngineer}`, Macro.skill($skill`Candyblast`).repeat())
    .step(DefaultMacro),

  WitchessQueen: new Macro()
    .item($item`Time-Spinner`)
    .attack()
    .repeat(),
  WitchessWitch: new Macro()
    .skill($skill`Curse of Weaksauce`)
    .skill($skill`Sing Along`)
    .attack()
    .repeat(),

  DMTSquare: new Macro()
    .if_(`!monsterid ${DMTSquareMon}`, Replace)
    .skill($skill`Feel Envy`)
    .step(DefaultMacro),
  DMTCircle: new Macro()
    .if_(`!monsterid ${DMTCircleMon}`, Replace)
    .tryItem($item`abstraction: action`)
    .step(DefaultMacro),

  MotherSlime: new Macro().trySkill($skill`KGB tranquilizer dart`).skill($skill`Snokebomb`),

  LavaCoFactory1: new Macro()
    .if_(`!monsterid ${factoryWorkerF} && !monsterid ${factoryOverseerF}`, TryBanish)
    .step(MeteorShowerForce),
  LavaCoFactory2: new Macro()
    .if_(`!monsterid ${factoryWorkerF} && !monsterid ${factoryOverseerF}`, Replace)
    .step(MeteorShowerForce),
  VelvetGoldMine1: new Macro()
    .if_(`!monsterid ${mineWorkerF} && !monsterid ${mineWorkerM}`, TryBanish)
    .step(MeteorShowerForce),
  VelvetGoldMine2: new Macro()
    .if_(`!monsterid ${mineWorkerF} && !monsterid ${mineWorkerM}`, Replace)
    .step(MeteorShowerForce),

  MistForm: new Macro().trySkill($skill`Become a Cloud of Mist`).step(TryBanish),
  BatForm: new Macro().trySkill($skill`Become a Bat`).step(TryBanish),

  LatteGulpRunaway: new Macro().trySkill($skill`Gulp Latte`).step("runaway"),

  MeteorShowerForce: MeteorShowerForce,
};

// Replace Libram's adventureMacro functionality for now with kolmafia-js 1.0.11
export function adventure(loc: Location, macro: Macro): void {
  setAutoAttack(0);
  adv1(loc, 0, macro.toString());
  while (inMultiFight()) runCombat(macro.toString());
  if (choiceFollowsFight()) visitUrl("choice.php");
}

export function mapMonster(location: Location, monster: Monster, macro: Macro) {
  if (get("_monstersMapped") < 3) {
    if (!get("mappingMonsters")) {
      useSkill($skill`Map the Monsters`);
      if (!get("mappingMonsters")) throw "Failed to cast map the monsters?";
    }
    const expectedTurnCount = myTurncount();
    let mapPage = visitUrl(toUrl(location));
    while (!mapPage.includes("Leading Yourself Right to Them")) {
      mapPage = visitUrl(toUrl(location));
      if (myTurncount() > expectedTurnCount) {
        throw "Failed to encounter map monster page and wasted a turn somehow?";
      }
    }
    visitUrl(
      `choice.php?pwd=${myHash()}&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=${monster.id}`
    );
    runCombat(macro.toString());
    if (choiceFollowsFight()) runChoice(-1);
  } else {
    throw "Trying to map too many monsters in one day";
  }
}
