import {
  Location,
  Monster,
  mpCost,
  myTurncount,
  runCombat,
  toInt,
  toUrl,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $effect, $item, $monster, $skill, get, Macro } from "libram";

const amateurNinja = $monster`amateur ninja`.id;
const noveltySkeleton = $monster`novelty tropical skeleton`.id;
const mastiff = $monster`toothless mastiff bitch`.id;
const gentrifier = $monster`gingerbread gentrifier`.id;
const toxicBeastie = $monster`toxic beastie`.id;
const LOVEnforcer = $monster`LOV Enforcer`.id;
const LOVEngineer = $monster`LOV Engineer`.id;
const DMTSquare = $monster`Performer of Actions`.id;
const DMTCircle = $monster`Thinker of Thoughts`.id;
const motherSlime = $monster`Mother Slime`.id;

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
  $monster`toothless mastiff bitch`,
  // reminisced monsters
  $monster`cocktail shrimp`,
  $monster`mutant circuit-soldering elf`,
  $monster`pterodactyl`,
  // gingerbread city
  $monster`gingerbread finance bro`,
  $monster`gingerbread gentrifier`,
  $monster`gingerbread tech bro`,
  // tunnel of L.O.V.E.
  $monster`LOV Enforcer`,
  $monster`LOV Engineer`,
  $monster`LOV Equivocator`,
  // witchess
  $monster`Witchess Pawn`,
  $monster`Witchess Knight`,
  $monster`Witchess Bishop`,
  $monster`Witchess Rook`,
  $monster`Witchess Ox`,
  $monster`Witchess King`,
  $monster`Witchess Witch`,
  $monster`Witchess Queen`,
  // more free combats
  $monster`Eldritch Tentacle`,
  $monster`Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl`,
  $monster`God Lobster`,
  $monster`X-32-F Combat Training Snowman`,
  // BRICKOS
  $monster`BRICKO ooze`,
  $monster`BRICKO bat`,
  $monster`BRICKO oyster`,
  $monster`BRICKO turtle`,
  $monster`BRICKO elephant`,
  $monster`BRICKO octopus`,
  $monster`BRICKO python`,
  // voter monsters
  $monster`angry ghost`,
  $monster`annoyed snake`,
  $monster`government bureaucrat`,
  $monster`slime blob`,
  $monster`terrible mutant`,
  // deep machine tunnels
  $monster`Performer of Actions`,
  $monster`Thinker of Thoughts`,
  // neverending party
  $monster`biker`,
  $monster`burnout`,
  $monster`jock`,
  $monster`party girl`,
  $monster`"plain" girl`,
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
  .if_(
    `monsterid ${motherSlime}`,
    Macro.trySkill($skill`KGB tranquilizer dart`).skill($skill`Snokebomb`)
  )
  .trySkill($skill`Throw Latte on Opponent`)
  .trySkill($skill`KGB tranquilizer dart`)
  .trySkill($skill`Reflex Hammer`)
  .trySkill($skill`Bowl a Curveball`)
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
  // eslint-disable-next-line libram/verify-constants
  .if_(`!haseffect ${$effect`Everything Looks Yellow`}`, Macro.trySkill($skill`Spit jurassic acid`))
  .trySkill($skill`Chest X-Ray`)
  .trySkill($skill`Shattering Punch`)
  .trySkill($skill`Gingerbread Mob Hit`)
  .trySkill($skill`Shocking Lick`)
  .abort();

const SingAndKill = new Macro()
  .skill($skill`Sing Along`)
  .step(Pride)
  .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
  .attack()
  .repeat();
const DefaultMacro = new Macro()
  .if_(`monsterid ${toxicBeastie}`, Backup)
  .if_(`monsterid ${toxicBeastie}`, Macro.skill($skill`Summon Love Gnats`).step(FreeInstaKill))
  .if_(`monsterid ${amateurNinja}`, FreeInstaKill)
  .if_(
    `monsterid ${noveltySkeleton}`,
    Macro.trySkill($skill`Open a Big Red Present`).skill($skill`Use the Force`)
  )
  .if_(`monsterid ${mastiff}`, Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`))
  .if_(notAllowList, TryBanish)
  .if_(`hasskill ${toInt($skill`Shoot Ghost`)}`, Ghost)
  .skill($skill`Curse of Weaksauce`)
  .skill($skill`Micrometeorite`)
  .item($item`Time-Spinner`)
  .if_(
    `hasskill ${toInt($skill`lecture on relativity`)}`,
    Macro.skill($skill`lecture on relativity`).skill($skill`Saucy Salve`)
  )
  .if_(
    `hasskill ${toInt($skill`Bowl Straight Up`)} && !haseffect ${toInt(
      $effect`Cosmic Ball in the Air`
    )}`,
    Macro.skill($skill`Bowl Straight Up`)
  )
  .step(SingAndKill);

export const MacroList = {
  Default: DefaultMacro,
  Fast: SingAndKill,
  StenchFreeFight: new Macro()
    .if_(`monsterid ${toxicBeastie}`, Backup)
    .if_(`monsterid ${toxicBeastie}`, Macro.abort())
    .if_(`monsterhpabove 300`, Macro.skill($skill`Curse of Weaksauce`))
    .if_(`monsterhpabove 300`, Macro.skill($skill`Sing Along`))
    .skill($skill`Garbage Nova`),

  EnvyNostalgia: new Macro()
    .skill($skill`Feel Envy`)
    .skill($skill`Feel Nostalgic`)
    .step(DefaultMacro),

  Runaway: new Macro().runaway().abort(),

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

  BatFormRunaway: new Macro().trySkill($skill`Become a Bat`).runaway(),
  LatteGulpRunaway: new Macro().trySkill($skill`Gulp Latte`).runaway(),

  MeteorForce: new Macro().skill($skill`Meteor Shower`).skill($skill`Use the Force`),
  FoamForce: new Macro()
    .skill($skill`Fire Extinguisher: Foam Yourself`)
    .skill($skill`Use the Force`),
};

export function mapMonster(location: Location, monster: Monster): void {
  if (get("_monstersMapped") >= 3) throw "Trying to map too many monsters";
  if (!get("mappingMonsters")) useSkill($skill`Map the Monsters`);
  const expectedTurnCount = myTurncount();
  let mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = visitUrl(toUrl(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/)) runCombat();
    if (myTurncount() > expectedTurnCount) throw "Wasted a turn somehow mapping monsters?";
  }
  visitUrl(`choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=${monster.id}`);
  runCombat();
  if (get("mappingMonsters")) throw "Failed to unset map the monsters?";
}
