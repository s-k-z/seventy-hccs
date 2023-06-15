import { CombatStrategy } from "grimoire-kolmafia";
import {
  handlingChoice,
  Location,
  Monster,
  mpCost,
  myFamiliar,
  myTurncount,
  runChoice,
  runCombat,
  toUrl,
  useSkill,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import { $item, $monster, $skill, get, getModifier, Macro } from "libram";
import { assert } from "./lib";

export const notAllowList = [
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
  $monster`X-32-F Combat Training Snowman`,
  $monster`Eldritch Tentacle`,
  $monster`Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl`,
  $monster`piranha plant`,
  $monster`God Lobster`,
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
  // Hipster Wanderers
  $monster`angry bassist`,
  $monster`blue-haired girl`,
  $monster`evil ex-girlfriend`,
  $monster`peeved roommate`,
  $monster`random scenester`,
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
  $monster`Perceiver of Sensations`,
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
  // shadow rifts
  $monster`shadow bat`,
  $monster`shadow cow`,
  $monster`shadow devil`,
  $monster`shadow guy`,
  $monster`shadow hexagon`,
  $monster`shadow orb`,
  $monster`shadow prism`,
  $monster`shadow slab`,
  $monster`shadow snake`,
  $monster`shadow spider`,
  $monster`shadow stalk`,
  $monster`shadow tree`,
  // Boss(es)
  $monster`Mother Slime`,
]
  .map((m: Monster): string => `!monsterid ${m.id}`)
  .join(` && `);

export const DefaultMacro = (): Macro => {
  const Fast = Macro.skill($skill`Sing Along`)
    .item($item`Time-Spinner`)
    .skill($skill`Micrometeorite`)
    .attack()
    .repeat();

  const Slow = Macro.skill($skill`Curse of Weaksauce`)
    .item($item`Time-Spinner`)
    .skill($skill`Micrometeorite`)
    .skill($skill`Sing Along`)
    .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
    .attack()
    .repeat();

  return myFamiliar().physicalDamage || myFamiliar().elementalDamage ? Fast : Slow;
};

export const DefaultCombat = new CombatStrategy()
  .startingMacro(Macro.if_(notAllowList, Macro.abort()))
  .macro(
    Macro.if_(
      $skill`Shoot Ghost`,
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
  .macro(Macro.attack().repeat(), $monster`LOV Enforcer`)
  .macro(Macro.skill($skill`Candyblast`).repeat(), $monster`LOV Engineer`)
  .macro(
    Macro.trySkill($skill`KGB tranquilizer dart`)
      .skill($skill`Snokebomb`)
      .abort(),
    $monster`Mother Slime`
  )
  .macro(Macro.tryItem($item`abstraction: action`), $monster`Thinker of Thoughts`)
  .macro(() => {
    const weight = 20 + weightAdjustment();
    const bonus = getModifier("Familiar Damage");
    const maxShortyDamage = ((1 + weight + bonus) * 7) / 4;
    const safe = maxShortyDamage + 25;
    return Macro.skill($skill`Saucy Salve`)
      .if_(`monsterhpabove ${2 * safe}`, Macro.skill($skill`Summon Love Gnats`))
      .if_(`monsterhpabove ${safe}`, Macro.trySkill($skill`Bowl Sideways`))
      .if_(`monsterhpabove ${safe}`, Macro.skill($skill`Sing Along`))
      .trySkill($skill`Chest X-Ray`)
      .trySkill($skill`Shattering Punch`)
      .trySkill($skill`Gingerbread Mob Hit`)
      .trySkill($skill`Shocking Lick`)
      .abort();
  }, $monster`toxic beastie`)
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

export function mapMonster(location: Location, monster: Monster): void {
  const initial = get("_monstersMapped");
  assert(initial < 3, "Trying to map too many monsters");
  if (!get("mappingMonsters")) useSkill($skill`Map the Monsters`);
  const expectedTurnCount = myTurncount();
  let mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = visitUrl(toUrl(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/)) runCombat();
    assert(myTurncount() === expectedTurnCount, "Wasted a turn somehow mapping monsters?");
  }
  visitUrl(`choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=${monster.id}`);
  runCombat();
  if (handlingChoice()) runChoice(-1);
  assert(!get("mappingMonsters"), "Failed to unset map the monsters?");
  assert(get("_monstersMapped") === initial + 1, "Failed to increment map the monstesr?");
}
