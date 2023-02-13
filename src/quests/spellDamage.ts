import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute, create, equip, retrieveItem, use, useSkill, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $monster,
  $skill,
  $slot,
  Clan,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { config } from "../config";
import { checkAvailable, haveItemOrEffect } from "../lib";
import { deepDarkVisions, innerElf, runTest } from "./shared";

export const SpellDamageQuest: Quest<Task> = {
  name: "Make Sausage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Install Dynamic Range",
      completed: () => get("hasRange"),
      do: () => {
        const range = $item`Dramatic™ range`;
        retrieveItem(range); // -900 meat
        use(range);
      },
    },
    {
      name: "Cook cordial of concentration",
      completed: () => have($item`cordial of concentration`),
      do: () => {
        useSkill($skill`Advanced Saucecrafting`); // 10 mp
        create($item`cordial of concentration`);
      },
    },
    innerElf(),
    deepDarkVisions(),
    {
      name: "Cowrruption",
      completed: () => haveItemOrEffect($item`corrupted marrow`),
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
      outfit: { weapon: $item`Fourth of May Cosplay Saber`, familiar: $familiar`Machine Elf` },
      combat: new CombatStrategy()
        .ccs(
          `skill ${$skill`Meteor Shower`}
          twiddle your thumbs
          skill ${$skill`Use the Force`}`,
          $monster`ungulith`
        )
        .macro(Macro.abort()),
    },
    {
      name: "Spell Damage Test",
      completed: () => CommunityService.SpellDamage.isDone(),
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
        acc1: $item`Powerful Glove`,
        acc2: $item`battle broom`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $items`Abracandalabra, unbreakable umbrella`,
        familiar: $familiar`Left-Hand Man`,
        modes: { umbrella: "constantly twirling" },
      },
    },
  ],
};
