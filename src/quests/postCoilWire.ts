import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  autosell,
  cliExecute,
  create,
  eat,
  mpCost,
  sweetSynthesis,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  Clan,
  DNALab,
  get,
  have,
  Macro,
} from "libram";
import { config } from "../config";
import { acquireEffect, checkEffect, haveItemOrEffect, tuple, wishEffect } from "../lib";

const buffs = [
  $effect`Broad-Spectrum Vaccine`,
  $effect`Favored by Lyle`,
  $effect`Grumpy and Ornery`,
  $effect`Hustlin'`,
  $effect`Mental A-cue-ity`,
  $effect`Pisces in the Skyces`,
  $effect`Sigils of Yeg`,
  $effect`Starry-Eyed`,
  $effect`Total Protonic Reversal`,
  $effect`Warlock, Warstock, and Warbarrel`,
  $effect`items.enh`,
  $effect`meat.enh`,
  // Beach comb
  $effect`Cold as Nice`,
  $effect`A Brush with Grossness`,
  $effect`Do I Know You From Somewhere?`,
  $effect`Does It Have a Skull In There??`,
  $effect`Hot-Headed`,
  $effect`Lack of Body-Building`,
  $effect`Oiled, Slick`,
  $effect`Pomp & Circumsands`,
  $effect`Resting Beach Face`,
  $effect`We're All Made of Starfish`,
  $effect`You Learned Something Maybe!`,
  // Skills
  $effect`Big`, // 15 mp
  $effect`Blessing of the Bird`, // 10 mp
  $effect`Blessing of your favorite Bird`, // 50 mp
  $effect`Blood Bubble`,
  $effect`Carol of the Bulls`, // 30 mp
  $effect`Carol of the Hells`, // 30 mp
  $effect`Carol of the Thrills`, // 30 mp
  $effect`Feeling Excited`,
  $effect`Feeling Peaceful`,
  $effect`Frenzied, Bloody`,
  $effect`Inscrutable Gaze`, // 10 mp
  $effect`Ruthlessly Efficient`, // 10 mp
  $effect`Singer's Faithful Ocelot`, // 15 mp
  $effect`Sauce Monocle`, // 20 mp
  $effect`Triple-Sized`,
  // Class skills
  $effect`Astral Shell`, // 10 mp
  $effect`Elemental Saucesphere`, // 10 mp
  $effect`Ghostly Shell`, // 6 mp
  $effect`Springy Fusilli`, // 10 mp
  // Song(s)
  $effect`Ode to Booze`, // 50 mp
  $effect`Polka of Plenty`, // 7 mp
  // Dread Song
  $effect`Song of Sauce`, // 100 mp
  // Batteries
  $effect`AAA-Charged`, // +30 MP
  $effect`Lantern-Charged`, // +70 MP
];

const postNanorhino = [
  $effect`A Girl Named Sue`,
  $effect`Billiards Belligerence`,
  $effect`Fidoxene`,
  $effect`Human-Elf Hybrid`,
  $effect`Human-Fish Hybrid`,
  $effect`Human-Machine Hybrid`,
  $effect`Loyal Tea`,
  $effect`Over-Familiar With Dactyls`,
  $effect`Puzzle Champ`,
  $effect`Shrimpin' Ain't Easy`,
  $effect`You Can Really Taste the Dormouse`,
  // Skills
  $effect`Blood Bond`,
  // Class skills
  $effect`Empathy`,
  $effect`Leash of Linguini`,
];

export const PostCoilWire: Quest<Task> = {
  name: "Post-Coil Wire",
  completed: () => get("csServicesPerformed").includes(","),
  tasks: [
    {
      name: "Summon Alice's Army",
      completed: () => get("grimoire3Summons") > 0,
      do: () => useSkill($skill`Summon Alice's Army Cards`), // 5 mp
    },
    {
      name: "Buff",
      completed: () => buffs.every((b) => have(b)),
      do: () => buffs.every((b) => acquireEffect(b)),
    },
    {
      name: "Eat a donut",
      completed: () => have($effect`Filled with Magic`),
      do: () => eat($item`occult jelly donut`),
    },
    {
      name: "Get cracker",
      completed: () => have($item`cracker`),
      do: () => use($item`box of Familiar Jacks`),
      outfit: { familiar: $familiar`Exotic Parrot` },
    },
    {
      name: "Open MayDay package",
      completed: () => have($effect`Ready to Survive`),
      do: () => use($item`MayDay™ supply package`),
    },
    {
      name: "Sell space blanket",
      completed: () => !have($item`space blanket`),
      do: () => autosell(1, $item`space blanket`), // +5000 meat
    },
    {
      name: "Configure KGB",
      completed: () => get("_kgbClicksUsed") > 0,
      do: () => cliExecute("Briefcase e spell spooky -combat"),
    },
    {
      name: "Wanderer Sweep",
      completed: () => haveItemOrEffect($item`Gene Tonic: Construct`),
      do: $location`Noob Cave`,
      post: () => {
        if (get("lastCopyableMonster") === $monster`crate`) DNALab.makeTonic();
      },
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy()
        .macro(Macro.item($item`DNA extraction syringe`), $monster`crate`)
        .macro(Macro.runaway()),
    },
    {
      name: "Christmas Card",
      completed: () =>
        haveItemOrEffect($item`Gene Tonic: Elf`) ||
        get("_deckCardsSeen").includes("Christmas Card"),
      do: () => cliExecute("cheat christmas card"),
      post: () => DNALab.makeTonic(),
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy()
        .startingMacro(Macro.item($item`DNA extraction syringe`))
        .macro(
          Macro.skill($skill`Curse of Weaksauce`)
            .skill($skill`Micrometeorite`)
            .item($item`Time-Spinner`)
            .skill($skill`Sing Along`)
            .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
            .attack()
            .repeat(),
          $monster`Black Crayon Crimbo Elf`
        )
        .macro(Macro.runaway()),
    },
    {
      name: "Advance Clock",
      completed: () => get("_gingerbreadClockAdvanced"),
      choices: { 1215: 1 }, // Setting the Clock: (1) set the clock forward 5 turns (2) skip
      do: $location`Gingerbread Civic Center`,
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().startingMacro(Macro.abort()),
    },
    {
      name: "Nanobrainy",
      completed: () => have($effect`Nanobrainy`),
      do: $location`Gingerbread Upscale Retail District`,
      post: () => checkEffect($effect`Nanobrainy`),
      outfit: {
        back: $item`vampyric cloake`,
        offhand: $item`latte lovers member's mug`,
        familiar: $familiar`Nanorhino`,
      },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Entangling Noodles`)
          .trySkill($skill`Giant Growth`)
          .trySkill($skill`Become a Wolf`)
          .trySkill($skill`Throw Latte on Opponent`)
          .trySkill($skill`KGB tranquilizer dart`)
          .trySkill($skill`Reflex Hammer`)
          .trySkill($skill`Bowl a Curveball`)
          .trySkill($skill`Feel Hatred`)
          .abort()
      ),
    },
    {
      name: "Buff More",
      completed: () => postNanorhino.every((f) => have(f)),
      do: () => {
        $effects`All Is Forgiven, Sparkly!, Witch Breaded`.forEach(wishEffect);
        cliExecute("saber familiar");
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        postNanorhino.forEach((f) => acquireEffect(f));
      },
    },
    {
      name: "Drink Speakeasy",
      completed: () => $effects`[1701]Hip to the Jive, In a Lather`.every((e) => have(e)),
      prepare: () => Clan.join(config.main_clan),
      do: () => $effects`[1701]Hip to the Jive, In a Lather`.forEach(acquireEffect), // 5 drunk, -5500 meat
      post: () => visitUrl("place.php?whichplace=speakeasy&action=olivers_pooltable"), // +75 meat
      effects: $effects`Ode to Booze`,
    },
    {
      name: "Synthesize Learning",
      completed: () => have($effect`Synthesis: Learning`),
      do: () => {
        cliExecute("garden pick");
        const peppermints = tuple($item`peppermint patty`, $item`peppermint twist`);
        for (const p of peppermints) if (!have(p)) create(p);
        sweetSynthesis(...peppermints);
      },
    },
    {
      name: "Synthesize Smart",
      completed: () => have($effect`Synthesis: Smart`),
      do: () => {
        useSkill($skill`Chubby and Plump`); // 50 mp
        sweetSynthesis($item`Chubby and Plump bar`, $item`bag of many confections`);
      },
    },
  ],
};
