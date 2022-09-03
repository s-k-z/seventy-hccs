import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute, equip, use, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $monster,
  $slot,
  Clan,
  CommunityService,
  have,
} from "libram";
import { MacroList } from "../combat";
import { config } from "../config";
import { checkAvailable } from "../lib";
import { deepDarkVisions, innerElf, runTest } from "./shared";

export const SpellDamageQuest: Quest<Task> = {
  name: "Make Sausage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    innerElf,
    {
      name: "Cowrruption",
      after: ["Inner Elf"],
      completed: () => have($effect`Cowrruption`),
      prepare: () => {
        const fax = $item`photocopied monster`;
        const faxMon = $monster`ungulith`;
        if (!have(fax)) Clan.with(config.side_clan, () => cliExecute("fax receive"));
        if (!visitUrl(`desc_item.php?whichitem=${fax.descid}`).includes(`${faxMon}`)) {
          throw `Failed to retrieve fax of ${faxMon}`;
        }
      },
      do: () => use($item`photocopied monster`),
      post: () => checkAvailable($item`corrupted marrow`),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Machine Elf`,
      },
      combat: new CombatStrategy().macro(MacroList.MeteorForce),
    },
    deepDarkVisions,
    {
      name: "Spell Damage Test",
      after: ["Inner Elf", "Cowrruption"],
      completed: () => CommunityService.SpellDamage.isDone(),
      prepare: () => cliExecute("umbrella spell"),
      do: () => runTest(CommunityService.SpellDamage),
      post: () => equip($slot`familiar`, $item`none`),
      effects: [
        $effect`AAA-Charged`,
        $effect`Arched Eyebrow of the Archmage`,
        $effect`Carol of the Hells`,
        $effect`Concentration`,
        $effect`Cowrruption`,
        $effect`Do You Crush What I Crush?`,
        $effect`Filled with Magic`,
        $effect`Grumpy and Ornery`,
        $effect`Human-Elf Hybrid`,
        $effect`In a Lather`,
        $effect`Inner Elf`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Lantern-Charged`,
        $effect`Mental A-cue-ity`,
        $effect`Meteor Showered`,
        $effect`Nanobrainy`,
        $effect`Pisces in the Skyces`,
        $effect`Pointy Wizard Beard`,
        $effect`Ready to Survive`,
        $effect`Sigils of Yeg`,
        $effect`Song of Sauce`,
        $effect`Sparkly!`,
        $effect`Spirit of Peppermint`,
        $effect`The Magic of LOV`,
        $effect`Toxic Vengeance`,
        $effect`Visions of the Deep Dark Deeps`,
        $effect`Warlock, Warstock, and Warbarrel`,
        $effect`We're All Made of Starfish`,
        $effect`Witch Breaded`,
      ],
      outfit: {
        weapon: $item`wrench`,
        offhand: $item`weeping willow wand`,
        pants: $item`pantogram pants`,
        acc1: $item`battle broom`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $items`Abracandalabra, unbreakable umbrella`,
        familiar: $familiar`Left-Hand Man`,
      },
    },
  ],
};
