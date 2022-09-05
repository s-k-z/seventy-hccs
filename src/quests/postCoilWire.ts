import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  autosell,
  cliExecute,
  create,
  eat,
  mpCost,
  retrieveItem,
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
import {
  acquireEffect,
  checkEffect,
  haveItemOrEffect,
  itemToEffect,
  tuple,
  wishEffect,
} from "../lib";

const buffs = [
  $effect`Broad-Spectrum Vaccine`,
  $effect`Favored by Lyle`,
  $effect`Grumpy and Ornery`,
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
  $effect`Triple-Sized`,
  // Class skills
  $effect`Astral Shell`, // 10 mp
  $effect`Elemental Saucesphere`, // 10 mp
  $effect`Ghostly Shell`, // 6 mp
  $effect`Springy Fusilli`, // 10 mp
  // Song(s)
  $effect`Ode to Booze`, // 50 mp
  $effect`Polka of Plenty`, // 7 mp
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
  $effect`Hustlin'`,
  $effect`Loyal Tea`,
  $effect`Mental A-cue-ity`,
  $effect`Puzzle Champ`,
  $effect`You Can Really Taste the Dormouse`,
  // Skills
  $effect`Blood Bond`,
  // Class skills
  $effect`Empathy`,
  $effect`Leash of Linguini`,
];

export const PostCoilWire: Quest<Task> = {
  name: "Post-Coil Wire",
  tasks: [
    {
      name: "Buff",
      completed: () => buffs.every((b) => have(b)),
      do: () => buffs.every((b) => acquireEffect(b)),
    },
    {
      name: "Eat a donut",
      completed: () => !have($item`occult jelly donut`),
      do: () => eat($item`occult jelly donut`),
    },
    {
      name: "Open MayDay package",
      completed: () => !have($item`MayDay™ supply package`),
      do: () => {
        use($item`MayDay™ supply package`);
        if (have($item`space blanket`)) autosell(1, $item`space blanket`); // +5000 meat
      },
    },
    {
      name: "Configure KGB",
      completed: () => get("_kgbClicksUsed") > 0,
      do: () => cliExecute("Briefcase e spell spooky -combat"),
    },
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
      name: "Summon Items",
      completed: () => have($effect`Pisces in the Skyces`),
      do: () => {
        // prettier-ignore
        [
          $skill`Advanced Cocktailcrafting`,   // 10 mp
          $skill`Advanced Saucecrafting`,      // 10 mp
          $skill`Chubby and Plump`,            // 50 mp
          $skill`Perfect Freeze`,              // 5 mp
          $skill`Prevent Scurvy and Sobriety`, // 50 mp
          $skill`Summon Alice's Army Cards`,   // 5 mp
        ].forEach((skill) => useSkill(skill)); // 130 mp
        acquireEffect($effect`Pisces in the Skyces`);
      },
    },
    {
      name: "Cook Sauce Potions",
      after: ["Dynamic Range", "Summon Items"],
      completed: () => have($effect`Mystically Oiled`),
      do: () => {
        retrieveItem($item`soda water`); // -63 meat
        [
          $item`cordial of concentration`,
          $item`oil of expertise`,
          $item`philter of phorce`,
          $item`ointment of the occult`,
          $item`eyedrops of the ermine`,
        ].forEach((saucePotion) => {
          if (!have(saucePotion) && !have(itemToEffect(saucePotion))) create(saucePotion);
        });
        acquireEffect($effect`Mystically Oiled`);
      },
    },
    {
      name: "Wanderer Sweep",
      completed: () => haveItemOrEffect($item`Gene Tonic: Construct`),
      do: $location`Noob Cave`,
      post: () => DNALab.makeTonic(),
      effects: $effects`Ode to Booze`,
      outfit: { familiar: $familiar`Frumious Bandersnatch` },
      combat: new CombatStrategy().macro(Macro.item($item`DNA extraction syringe`).runaway()),
    },
    {
      name: "Christmas Card",
      completed: () => get("_deckCardsSeen").includes("Christmas Card"),
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
      outfit: {
        familiar: $familiar`Frumious Bandersnatch`,
      },
      combat: new CombatStrategy().startingMacro(Macro.abort()),
    },
    {
      name: "Nanobrainy",
      after: ["Advance Clock"],
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
      name: "DRINK ME",
      after: ["Nanobrainy"],
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
    },
    {
      name: "Buff More",
      after: ["Nanobrainy", "DRINK ME"],
      completed: () => postNanorhino.every((f) => have(f)),
      do: () => {
        $effects`All Is Forgiven, Sparkly!, Witch Breaded`.forEach(wishEffect);
        cliExecute("saber familiar");
        postNanorhino.forEach((f) => acquireEffect(f));
      },
    },
    {
      name: "Drink Speakeasy",
      completed: () => $effects`[1701]Hip to the Jive, In a Lather`.every((e) => have(e)),
      prepare: () => Clan.join(config.main_clan),
      do: () => $effects`[1701]Hip to the Jive, In a Lather`.forEach(acquireEffect), // 5 drunk, -5500 meat
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
      after: ["Summon Items"],
      completed: () => have($effect`Synthesis: Smart`),
      do: () => sweetSynthesis($item`Chubby and Plump bar`, $item`bag of many confections`),
    },
  ],
};
