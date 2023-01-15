import { Args, CombatResources, Engine, getTasks } from "grimoire-kolmafia";
import { print, setAutoAttack } from "kolmafia";
import { CommunityService, get, sinceKolmafiaRevision } from "libram";
import { isReadyToContinue, prepAndAscendIfNecessary, prepareToAscend } from "./ascend";
import { DefaultCombat } from "./combat";
import { config } from "./config";
import { CoilWire } from "./quests/coilWire";
import { CombatFrequencyQuest } from "./quests/combatFrequency";
import { DonateQuest } from "./quests/donate";
import { FamiliarWeightQuest } from "./quests/familiarWeight";
import { HotResistQuest } from "./quests/hotResist";
import { ItemDropQuest } from "./quests/itemDrop";
import { getHowManySausagesToEat, Leveling } from "./quests/leveling";
import { SpellDamageQuest } from "./quests/spellDamage";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./quests/stats";
import { WeaponDamageQuest } from "./quests/weaponDamage";

export function main(command = ""): void {
  sinceKolmafiaRevision(27054);

  Args.fill(config, command);
  if (config.help) {
    Args.showHelp(config);
    return;
  }

  if (config.test) {
    switch (config.test.toLowerCase()) {
      case "kramco":
        print(`We can eat ${getHowManySausagesToEat()} sausages.`);
        return;
      case "macro":
        print("Default macro:");
        print(DefaultCombat.compile(new CombatResources(), undefined, undefined).toString());
        return;
      default:
        print(`Unknown test ${config.test}`);
        return;
    }
  }

  const toCheck = {
    main_clan: { prop: config.main_clan, return: true },
    side_clan: { prop: config.side_clan, return: true },
    stillsuit: { prop: config.stillsuit, return: false },
  };
  for (const name of Object.keys(toCheck)) {
    const key = name as keyof typeof toCheck;
    if (toCheck[key].prop === "") {
      print(`seventyhccs_${name} property not set`, toCheck[key].return ? "red" : "orange");
      if (toCheck[key].return) return;
    }
  }

  if (config.prep) {
    prepareToAscend();
    return;
  }

  if (!isReadyToContinue(config.nofites, config.novote)) return;
  prepAndAscendIfNecessary();
  setAutoAttack(0);

  const engine = new Engine(
    getTasks([
      CoilWire,
      Leveling,
      MuscleQuest,
      MoxieQuest,
      HPQuest,
      SpellDamageQuest,
      WeaponDamageQuest,
      CombatFrequencyQuest,
      HotResistQuest,
      FamiliarWeightQuest,
      ItemDropQuest,
      MysticalityQuest,
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
