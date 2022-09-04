import { Args, CombatResources, Engine, getTasks } from "grimoire-kolmafia";
import { getAutoAttack, print, setAutoAttack } from "kolmafia";
import { get, sinceKolmafiaRevision } from "libram";
import { isReadyToContinue, prepAndAscendIfNecessary } from "./ascend";
import { batfellow } from "./batfellow";
import { DefaultCombat } from "./combat";
import { config } from "./config";
import { CoilWire, PreCoilWire } from "./quests/coilWire";
import { CombatFrequencyQuest } from "./quests/combatFrequency";
import { DonateQuest } from "./quests/donate";
import { FamWeightQuest } from "./quests/familiarWeight";
import { HotResistQuest } from "./quests/hotResist";
import { ItemDropQuest } from "./quests/itemDrop";
import { Leveling } from "./quests/leveling";
import { PostCoilWire } from "./quests/postCoilWire";
import { SpellDamageQuest } from "./quests/spellDamage";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./quests/stats";
import { WeaponDamageQuest } from "./quests/weaponDamage";

// TODO:
// Double check crit for vintner
// Check missed effects/outfits/tasks
// Implement prepare.ts

/* Resources:
    Deck Cards:
      Wrench
      Green Mana
      Christmas Card (Elf) *
    DNA:
      Construct
      Elf
      Fish
      Pirate or... ? *
    Locket Reminiscences:
      Pterodactyl
      Cocktail Shrimp
    Mapped Monsters:
      amateur ninja
      novelty tropical skeleton
      toothless mastiff bitch
    Tome Summons:
      Borrowed Time
      Occult Jelly Donut
      Box of Familiar Jacks *
    Wishes:
      All is Forgiven
      Sparkly!
      Witch Breaded
*/

export function main(command = ""): void {
  sinceKolmafiaRevision(26718);
  if (getAutoAttack() !== 0) setAutoAttack(0);

  const numberologyNeed = 3;
  if (get("skillLevel144") < numberologyNeed) {
    print(`Numberology skill level too low (${get("skillLevel144")}/${numberologyNeed})`, "red");
    return;
  }

  Args.fill(config, command);
  if (config.help) {
    Args.showHelp(config);
    return;
  }
  if (config.test) {
    print("Default macro:");
    print(DefaultCombat.compile(new CombatResources(), undefined, undefined).toString());
    return;
  }
  if (config.batfellow) {
    batfellow();
    return;
  }
  const configCheck = new Map<string, boolean>([
    [config.main_clan, true],
    [config.side_clan, true],
    [config.stillsuit, false],
  ]);
  for (const [name, shouldReturn] of configCheck) {
    if (name === "") {
      print(`${name} property not set`, shouldReturn ? "red" : "orange");
      if (shouldReturn) return;
    }
  }
  if (!isReadyToContinue(config.nofites, config.novote)) return;

  prepAndAscendIfNecessary();

  const tasks = getTasks([
    PreCoilWire,
    CoilWire,
    PostCoilWire,
    Leveling,
    MuscleQuest,
    MoxieQuest,
    HPQuest,
    SpellDamageQuest,
    WeaponDamageQuest,
    CombatFrequencyQuest,
    HotResistQuest,
    FamWeightQuest,
    ItemDropQuest,
    MysticalityQuest,
    DonateQuest,
  ]);

  const engine = new Engine(tasks);
  engine.propertyManager.setChoices({
    1340: 2, // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
    1387: 3, // Using the Force: (1) banish (2) find friends (3) force item drops
  });

  while (!get("kingLiberated")) {
    const task = engine.getNextTask();
    if (!task) throw `No available tasks?`;
    engine.execute(task);
  }
}
