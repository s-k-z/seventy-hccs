import { CombatStrategy } from "grimoire-kolmafia";
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
import { $item, $monster, $skill, get, Macro } from "libram";

const notAllowList = [
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
  // $monster`amateur ninja`,
  // $monster`novelty tropical skeleton`,
  // $monster`toothless mastiff bitch`,

  // reminisced monsters
  // $monster`cocktail shrimp`,
  // $monster`pterodactyl`,

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
  $monster`sausage goblin`,
  $monster`Eldritch Tentacle`,
  $monster`Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl`,
  $monster`God Lobster`,
  $monster`X-32-F Combat Training Snowman`,
  // Goth Kid Wanderers
  $monster`Black Crayon Beast`,
  $monster`Black Crayon Beetle`,
  $monster`Black Crayon Constellation`,
  $monster`Black Crayon Crimbo Elf`,
  $monster`Black Crayon Demon`,
  $monster`Black Crayon Elemental`,
  $monster`Black Crayon Fish`,
  $monster`Black Crayon Flower`,
  $monster`Black Crayon Frat Orc`,
  $monster`Black Crayon Goblin`,
  $monster`Black Crayon Golem`,
  $monster`Black Crayon Hippy`,
  $monster`Black Crayon Hobo`,
  $monster`Black Crayon Man`,
  $monster`Black Crayon Manloid`,
  $monster`Black Crayon Mer-kin`,
  $monster`Black Crayon Penguin`,
  $monster`Black Crayon Pirate`,
  $monster`Black Crayon Shambling Monstrosity`,
  $monster`Black Crayon Slime`,
  $monster`Black Crayon Spiraling Shape`,
  $monster`Black Crayon Undead Thing`,
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
  // Boss(es)
  $monster`Mother Slime`,
]
  .map((m: Monster): string => `!monsterid ${m.id}`)
  .join(` && `);

const Backup = Macro.if_(
  `hasskill ${toInt($skill`Back-Up to your Last Enemy`)}`,
  Macro.skill($skill`Back-Up to your Last Enemy`).skill($skill`Saucy Salve`)
);

// Turbo used a flag to cast pride
const Pride = Macro.if_(`hasskill ${toInt($skill`Turbo`)}`, Macro.trySkill($skill`Feel Pride`));

const FreeInstaKill = Macro.skill($skill`Sing Along`)
  .step(Pride)
  .trySkill($skill`Chest X-Ray`)
  .trySkill($skill`Shattering Punch`)
  .trySkill($skill`Gingerbread Mob Hit`)
  .trySkill($skill`Shocking Lick`)
  .abort();

const SingAndKill = Macro.skill($skill`Sing Along`)
  .step(Pride)
  .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
  .attack()
  .repeat();

const DefaultMacro = Macro.skill($skill`Curse of Weaksauce`)
  .skill($skill`Micrometeorite`)
  .item($item`Time-Spinner`)
  .if_(
    `hasskill ${toInt($skill`lecture on relativity`)}`,
    Macro.skill($skill`lecture on relativity`).skill($skill`Saucy Salve`)
  )
  .step(SingAndKill);

export const DefaultCombat = new CombatStrategy()
  .startingMacro(Macro.if_(notAllowList, Macro.abort()))
  .macro(
    Macro.if_(
      `hasskill ${toInt($skill`Shoot Ghost`)}`,
      Macro.skill($skill`Summon Love Gnats`)
        .skill($skill`Sing Along`)
        .skill($skill`Shoot Ghost`)
        .skill($skill`Shoot Ghost`)
        .skill($skill`Shoot Ghost`)
        .skill($skill`Trap Ghost`)
        .abort()
    ),
    [
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
    ]
  )
  .macro(
    Macro.skill($skill`Sing Along`)
      .trySkill($skill`Chest X-Ray`)
      .trySkill($skill`Shattering Punch`)
      .trySkill($skill`Gingerbread Mob Hit`)
      .trySkill($skill`Shocking Lick`)
      .abort(),
    [
      $monster`gingerbread finance bro`,
      $monster`gingerbread gentrifier`,
      $monster`gingerbread tech bro`,
    ]
  )
  .macro(Macro.attack().repeat(), $monster`LOV Enforcer`)
  .macro(Macro.skill($skill`Candyblast`).repeat(), $monster`LOV Engineer`)
  .macro(
    Macro.trySkill($skill`KGB tranquilizer dart`)
      .skill($skill`Snokebomb`)
      .abort(),
    $monster`Mother Slime`
  )
  .macro(
    Backup.if_(
      `monsterid ${$monster`toxic beastie`.id}`,
      Macro.skill($skill`Summon Love Gnats`).step(FreeInstaKill)
    ),
    $monster`toxic beastie`
  )
  .macro(
    Macro.item($item`Time-Spinner`)
      .attack()
      .repeat(),
    $monster`Witchess Queen`
  )
  .macro(
    Macro.skill($skill`Curse of Weaksauce`)
      .skill($skill`Sing Along`)
      .attack()
      .repeat(),
    $monster`Witchess Witch`
  )
  .macro(DefaultMacro);

export const DMT1Combat = new CombatStrategy().macro(
  Macro.if_(notAllowList, Macro.abort())
    .if_(`!monsterid ${$monster`Performer of Actions`.id}`, Macro.skill($skill`Macrometeorite`))
    .skill($skill`Feel Envy`)
    .step(DefaultMacro)
);

export const DMT2Combat = new CombatStrategy().macro(
  Macro.if_(notAllowList, Macro.abort())
    .if_(`!monsterid ${$monster`Thinker of Thoughts`}`, Macro.skill($skill`Macrometeorite`))
    .tryItem($item`abstraction: action`)
    .step(DefaultMacro)
);

export const MeteorForceCombat = new CombatStrategy().macro(
  Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
);
export const FoamForceCombat = new CombatStrategy().macro(
  Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`)
);

export const StenchCombat = new CombatStrategy().macro(
  Macro.if_(`monsterid ${$monster`toxic beastie`.id}`, Backup)
    .if_(`monsterid ${$monster`toxic beastie`.id}`, Macro.abort())
    .if_(`monsterhpabove 300`, Macro.skill($skill`Curse of Weaksauce`))
    .if_(`monsterhpabove 300`, Macro.skill($skill`Sing Along`))
    .skill($skill`Garbage Nova`)
);

export const RunawayCombat = new CombatStrategy().macro(Macro.runaway());

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
