import { cliExecute, sweetSynthesis, use, useSkill } from "kolmafia";
import { $effect, $item, $skill, have } from "libram";
import { checkAvailable } from "./lib";

// Lazy deterministic sweet synthesis
/*
export function synthesize() {
  const synthesis = {
    collection: $effect`Synthesis: Collection`,
    learning: $effect`Synthesis: Learning`,
    smart: $effect`Synthesis: Smart`,
  };

  if (!have(synthesis.collection)) {
    cliExecute("garden pick");
    checkAvailable($item`peppermint sprout`, 3);
    use(1, $item`peppermint sprout`);
    sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
    if (!have(synthesis.collection)) {
      throw `Failed to obtain ${synthesis.collection}`;
    }
  }

  if (!have(synthesis.learning)) {
    checkAvailable($item`bag of many confections`);
    checkAvailable($item`licorice boa`);
    sweetSynthesis($item`bag of many confections`, $item`licorice boa`);
    if (!have(synthesis.learning)) {
      throw `Failed to obtain ${synthesis.learning}`;
    }
  }

  if (!have(synthesis.smart)) {
    useSkill($skill`Summon Sugar Sheets`);
    if (!have) useSkill($skill`Chubby and Plump`);
    cliExecute(`make ${$item`sugar shilelagh`}`);
    sweetSynthesis($item`sugar shilelagh`, $item`Chubby and Plump bar`);
    if (!have(synthesis.smart)) {
      throw `Failed to obtain ${synthesis.smart}`;
    }
  }
}
*/
