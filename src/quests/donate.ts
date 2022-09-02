import { Quest, Task } from "grimoire-kolmafia";
import { Familiar, haveFamiliar, itemAmount, toFamiliar } from "kolmafia";
import { $familiar, $item, CommunityService, get } from "libram";
import { batfellow } from "../batfellow";
import { config } from "../config";

export const DonateQuest: Quest<Task> = {
  name: "Donate Your Body to Science",
  completed: () => get("kingLiberated"),
  tasks: [
    {
      name: "Batfellow Comic",
      completed: () => itemAmount($item`Batfellow comic`) > 0,
      do: () => batfellow(),
      outfit: () => {
        const stillSuitFam = toFamiliar(config.stillsuit);
        const myFams = Familiar.all().filter(
          (f) => !f.attributes.includes("pokefam") && haveFamiliar(f) && f !== stillSuitFam
        );
        const randomFam = myFams[Math.floor(Math.random() * myFams.length)];
        if (!randomFam || randomFam === $familiar`none` || !haveFamiliar(randomFam)) {
          throw "Failed to select a valid familiar?";
        }
        return { familiar: randomFam };
      },
    },
    {
      name: "Donate",
      after: ["Batfellow Comic"],
      completed: () => get("kingLiberated"),
      do: () => CommunityService.donate(),
    },
  ],
};
