import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  cliExecute,
  create,
  elementalResistance,
  equip,
  myHp,
  myMaxhp,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $element,
  $familiar,
  $item,
  $items,
  $monster,
  $skill,
  $slot,
  Clan,
  CommunityService,
  have,
  Macro,
} from "libram";
import { config } from "../config";
import { assert, haveItemOrEffect } from "../lib";
import { innerElf, runTest } from "./shared";

function safeHpLimit(): number {
  const resist = 1 - elementalResistance($element`spooky`) / 100;
  assert(resist > 0, `invalid resist value ${resist} calculated`);
  const maxMultiplier = 4;
  return myMaxhp() * maxMultiplier * resist;
}

export const SpellDamageQuest: Quest<Task> = {
  name: "Make Sausage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Cook cordial of concentration",
      completed: () => have($item`cordial of concentration`),
      do: () => create($item`cordial of concentration`), // -63 meat
      post: () => assert($item`cordial of concentration`),
    },
    innerElf(),
    {
      name: "Deep Dark Visions",
      ready: () => myMaxhp() > 500,
      completed: () => have($effect`Visions of the Deep Dark Deeps`),
      do: () => {
        assert(myMaxhp() > safeHpLimit(), "Not enough HP for deep dark visions");
        if (myHp() < myMaxhp()) useSkill(Math.ceil(myMaxhp() / myHp()), $skill`Cannelloni Cocoon`);
        assert(myHp() > safeHpLimit(), "Failed to heal enough for Deep Dark Visions?");
        useSkill($skill`Deep Dark Visions`);
      },
      post: () => {
        assert($effect`Visions of the Deep Dark Deeps`);
        useSkill(Math.ceil(myMaxhp() / myHp()), $skill`Cannelloni Cocoon`);
      },
      outfit: {
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`burning paper crane, unbreakable umbrella`,
        pants: $item`pantogram pants`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`tiny stillsuit`,
        familiar: $familiar`Exotic Parrot`,
        modes: { parka: "ghostasaurus", retrocape: ["vampire", "hold"] },
      },
    },
    {
      name: "Cowrruption",
      completed: () => haveItemOrEffect($item`corrupted marrow`),
      prepare: () => {
        const fax = $item`photocopied monster`;
        const faxMon = $monster`ungulith`;
        if (!have(fax)) Clan.with(config.side_clan, () => cliExecute("fax receive"));
        assert(
          visitUrl(`desc_item.php?whichitem=${fax.descid}`).includes(`${faxMon}`),
          `Failed to retrieve fax of ${faxMon}`
        );
      },
      do: () => use($item`photocopied monster`),
      post: () => {
        assert($item`corrupted marrow`);
        assert($effect`Meteor Showered`);
      },
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
      name: "Create Sugar Chapeau",
      completed: () => have($item`sugar chapeau`),
      prepare: () => useSkill($skill`Summon Sugar Sheets`),
      do: () => create($item`sugar chapeau`),
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
        $effect`Grumpy and Ornery`,
        $effect`Human-Elf Hybrid`,
        $effect`Imported Strength`,
        $effect`Inner Elf`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Mental A-cue-ity`,
        $effect`Meteor Showered`,
        $effect`Nanobrainy`,
        $effect`Pisces in the Skyces`,
        $effect`Pointy Wizard Beard`,
        $effect`Ready to Survive`,
        $effect`Sigils of Yeg`,
        $effect`Song of Sauce`,
        $effect`Sparkly!`,
        $effect`Spirit of Garlic`,
        $effect`Spit Upon`,
        $effect`The Magic of LOV`,
        $effect`Toxic Vengeance`,
        $effect`Visions of the Deep Dark Deeps`,
        $effect`Warlock, Warstock, and Warbarrel`,
        $effect`We're All Made of Starfish`,
        $effect`Witch Breaded`,
      ],
      outfit: {
        hat: $item`sugar chapeau`,
        weapon: $item`wrench`,
        offhand: $item`weeping willow wand`,
        pants: $item`pantogram pants`,
        acc1: $item`Powerful Glove`,
        acc2: $item`battle broom`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $items`Abracandalabra, astral statuette`,
        familiar: $familiar`Left-Hand Man`,
      },
    },
  ],
};
