import { Args, Engine, getTasks } from "grimoire-kolmafia";
import { print, setAutoAttack } from "kolmafia";
import { CommunityService, get, sinceKolmafiaRevision } from "libram";
import { isReadyToContinue, prepAndAscendIfNecessary, prepareToAscend } from "./ascend";
import { config } from "./config";
import { CoilWire } from "./quests/coilWire";
import { CombatFrequencyQuest } from "./quests/combatFrequency";
import { DonateQuest } from "./quests/donate";
import { FamiliarWeightQuest } from "./quests/familiarWeight";
import { HotResistQuest } from "./quests/hotResist";
import { ItemDropQuest } from "./quests/itemDrop";
import { Leveling } from "./quests/leveling";
import { SpellDamageQuest } from "./quests/spellDamage";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./quests/stats";
import { WeaponDamageQuest } from "./quests/weaponDamage";

export function main(command = ""): void {
  sinceKolmafiaRevision(27567);

  Args.fill(config, command);
  if (config.help) {
    Args.showHelp(config);
    return;
  }

  const toCheck = {
    main_clan: config.main_clan,
    side_clan: config.side_clan,
  };
  for (const [key, val] of Object.entries(toCheck)) {
    if (val === "") {
      print(`seventyhccs_${key} property not set`, "red");
      return;
    }
  }
  if (config.prep) {
    prepareToAscend();
    return;
  }

  if (!isReadyToContinue()) return;
  prepAndAscendIfNecessary();
  setAutoAttack(0);

  const engine = new Engine(
    getTasks([
      CoilWire,
      Leveling,
      MuscleQuest,
      MoxieQuest,
      MysticalityQuest,
      HPQuest,
      SpellDamageQuest,
      WeaponDamageQuest,
      CombatFrequencyQuest,
      HotResistQuest,
      FamiliarWeightQuest,
      ItemDropQuest,
      DonateQuest,
    ])
  );

  try {
    engine.propertyManager.setChoices({
      1340: 2, // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
      1387: 3, // Using the Force: (1) banish (2) find friends (3) force item drops
    });

    while (!get("kingLiberated")) {
      const task = engine.getNextTask();
      if (!task) throw `No available tasks?`;
      engine.execute(task);
    }
  } finally {
    CommunityService.printLog("green");
    engine.destruct();
  }
}
