import {
  adv1,
  choiceFollowsFight,
  getAutoAttack,
  handlingChoice,
  inMultiFight,
  mpCost,
  myTurncount,
  runChoice,
  runCombat,
  setAutoAttack,
  toInt,
  toUrl,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $item, $location, $monster, $skill, get, Macro, Witchess } from "libram";

const amateurNinja = $monster`amateur ninja`.id;
const noveltySkeleton = $monster`novelty tropical skeleton`.id;
const mastiff = $monster`toothless mastiff bitch`.id;
const gentrifier = $monster`gingerbread gentrifier`.id;
const toxicBeastie = $monster`toxic beastie`.id;
const LOVEnforcer = $monster`LOV Enforcer`.id;
const LOVEngineer = $monster`LOV Engineer`.id;
const DMTSquare = $monster`Performer of Actions`.id;
const DMTCircle = $monster`Thinker of Thoughts`.id;

const retailDistrict = $location`Gingerbread Upscale Retail District`.id;

const notAllowList = [
  $monster`sausage goblin`,
  // protonic ghosts
  $monster`boneless blobghost`,
  $monster`Emily Koops, a spooky lime`,
  $monster`The ghost of Ebenoozer Screege`,
  $monster`The ghost of Jim Unfortunato`,
  $monster`The ghost of Lord Montague Spookyraven`,
  $monster`the ghost of Monsieur Baguelle`,
  $monster`the ghost of Oily McBindle`,
  $monster`The ghost of Richard Cockingham`,
  $monster`The ghost of Sam McGee`,
  $monster`The ghost of Vanillica "Trashblossom" Gorton`,
  $monster`The ghost of Waldo the Carpathian`,
  $monster`The Headless Horseman`,
  $monster`The Icewoman`,
  // mapped monsters
  $monster`amateur ninja`,
  $monster`novelty tropical skeleton`,
  // gingerbread city
  $monster`gingerbread finance bro`,
  $monster`gingerbread gentrifier`,
  $monster`gingerbread tech bro`,
  // witchess
  $monster`Witchess Pawn`,
  $monster`Witchess Knight`,
  $monster`Witchess Bishop`,
  $monster`Witchess Rook`,
  $monster`Witchess Ox`,
  $monster`Witchess King`,
  $monster`Witchess Witch`,
  $monster`Witchess Queen`,
  // snojo
  $monster`X-32-F Combat Training Snowman`,
  // BRICKOS
  $monster`BRICKO ooze`,
  $monster`BRICKO bat`,
  $monster`BRICKO oyster`,
  $monster`BRICKO turtle`,
  $monster`BRICKO elephant`,
  $monster`BRICKO octopus`,
  $monster`BRICKO python`,
  // eldritch
  $monster`Eldritch Tentacle`,
  // god lobster
  $monster`God Lobster`,
  // voter monsters
  $monster`angry ghost`,
  $monster`annoyed snake`,
  $monster`government bureaucrat`,
  $monster`slime blob`,
  $monster`terrible mutant`,
  // dmt monsters
  $monster`Performer of Actions`,
  $monster`Thinker of Thoughts`,
  // neverending partygoers
  $monster`biker`,
  $monster`burnout`,
  $monster`jock`,
  $monster`party girl`,
  $monster`"plain" girl`,
  // a boss
  $monster`Mother Slime`,
  // toxic teacups
  $monster`toxic beastie`,
  $monster`Black Crayon Slime`,
]
  .map((m: Monster): string => `!monsterid ${m.id}`)
  .join(` && `);

const Ghost = new Macro()
  .skill($skill`Summon Love Gnats`)
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

const Replace = new Macro().skill($skill`Macrometeorite`);
const Backup = new Macro().if_(
  `hasskill ${toInt($skill`Back-Up to your Last Enemy`)}`,
  Macro.skill($skill`Back-Up to your Last Enemy`).skill($skill`Saucy Salve`)
);
const Pride = new Macro().if_(
  // Turbo used a flag to cast pride
  `hasskill ${toInt($skill`Turbo`)}`,
  Macro.trySkill($skill`Feel Pride`)
);

const FreeInstaKill = new Macro()
  .skill($skill`Sing Along`)
  .step(Pride)
  .trySkill($skill`Chest X-Ray`)
  .trySkill($skill`Shattering Punch`)
  .trySkill($skill`Gingerbread Mob Hit`)
  .trySkill($skill`Shocking Lick`)
  .abort();

const CigKill = new Macro()
  .skill($skill`Sing Along`)
  .step(Pride)
  .tryItem($item`gingerbread cigarette`)
  .abort();

const SingAndKill = new Macro()
  .skill($skill`Sing Along`)
  .step(Pride)
  .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
  .attack()
  .repeat();
const DefaultMacro = new Macro()
  .if_(`hasskill ${toInt($skill`Shoot Ghost`)}`, Ghost)
  .if_(`monsterid ${toxicBeastie}`, Backup)
  .if_(`monsterid ${toxicBeastie}`, Macro.skill($skill`Summon Love Gnats`).step(FreeInstaKill))
  .if_(`monsterid ${amateurNinja}`, FreeInstaKill)
  .if_(
    `monsterid ${noveltySkeleton}`,
    Macro.trySkill($skill`Open a Big Red Present`).skill($skill`Use the Force`)
  )
  .if_(`monsterid ${mastiff}`, Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`))
  .if_(`snarfblat ${retailDistrict}`, CigKill)
  .if_(notAllowList, TryBanish)
  .trySkill($skill`Digitize`)
  .trySkill($skill`%fn, spit on me!`)
  .skill($skill`Curse of Weaksauce`)
  .skill($skill`Micrometeorite`)
  .item($item`Time-Spinner`)
  .if_(
    `hasskill ${toInt($skill`lecture on relativity`)}`,
    Macro.skill($skill`lecture on relativity`).skill($skill`Saucy Salve`)
  )
  .step(SingAndKill);

export const MacroList = {
  FreeFight: DefaultMacro,
  FastFreeFight: SingAndKill,
  StenchFreeFight: new Macro()
    .if_(`monsterid ${toxicBeastie}`, Backup)
    .if_(`monsterid ${toxicBeastie}`, Macro.abort())
    .if_(`monsterhpabove 250`, Macro.skill($skill`Curse of Weaksauce`))
    .skill($skill`Garbage Nova`),

  // Just runaway on its own causes a null pointer exception?
  Runaway: new Macro().trySkill($skill`Saucy Salve`).step("runaway"),

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
    .if_(notAllowList, Macro.abort())
    .if_(`!monsterid ${DMTSquare}`, Replace)
    .skill($skill`Feel Envy`)
    .step(DefaultMacro),
  DMTCircle: new Macro()
    .if_(notAllowList, Macro.abort())
    .if_(`!monsterid ${DMTCircle}`, Replace)
    .tryItem($item`abstraction: action`)
    .step(DefaultMacro),

  MotherSlime: new Macro()
    .if_(notAllowList, Macro.abort())
    .trySkill($skill`KGB tranquilizer dart`)
    .skill($skill`Snokebomb`),

  BatFormRunaway: new Macro().trySkill($skill`Become a Bat`).step("runaway"),
  LatteGulpRunaway: new Macro().trySkill($skill`Gulp Latte`).step("runaway"),

  MeteorForce: new Macro().skill($skill`Meteor Shower`).skill($skill`Use the Force`),
  FoamForce: new Macro()
    .skill($skill`Fire Extinguisher: Foam Yourself`)
    .skill($skill`Use the Force`),
};

// Replace Libram's adventureMacro functionality for now with kolmafia-js 1.0.11
export function adventure(loc: Location, macro: Macro): void {
  if (getAutoAttack() !== 0) setAutoAttack(0);
  adv1(loc, 0, macro.toString());
  while (inMultiFight()) runCombat(macro.toString());
  if (choiceFollowsFight()) visitUrl("choice.php");
  if (handlingChoice()) runChoice(-1);
}

export function adventureUrl(url: string, macro: Macro): void {
  if (getAutoAttack() !== 0) setAutoAttack(0);
  visitUrl(url);
  runCombat(macro.toString());
  if (choiceFollowsFight()) visitUrl("choice.php");
  if (handlingChoice()) runChoice(-1);
}

export function mapMonster(location: Location, monster: Monster, macro: Macro): void {
  if (getAutoAttack() !== 0) setAutoAttack(0);
  if (get("_monstersMapped") >= 3) throw "Trying to map too many monsters";
  if (!get("mappingMonsters")) useSkill($skill`Map the Monsters`);
  const expectedTurnCount = myTurncount();
  let mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = visitUrl(toUrl(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/)) runCombat(macro.toString());
    if (myTurncount() > expectedTurnCount) throw "Wasted a turn somehow mapping monsters?";
  }
  visitUrl(`choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=${monster.id}`);
  runCombat(macro.toString());
  if (choiceFollowsFight()) visitUrl("choice.php");
  if (handlingChoice()) runChoice(-1);
  if (get("mappingMonsters")) throw "Failed to unset map the monsters?";
}

export function fightWitchess(piece: Monster, macro: Macro): void {
  macro.setAutoAttack();
  Witchess.fightPiece(piece);
  if (choiceFollowsFight()) visitUrl("choice.php");
  if (handlingChoice()) runChoice(-1);
}
