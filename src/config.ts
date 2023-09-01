import { Args } from "grimoire-kolmafia";

export const config = Args.create("seventyhccs", "Automate 1/70 Community Service.", {
  nofites: Args.flag({ help: "Skip warning for unspent pvp fites.", setting: "", default: false }),
  noprompt: Args.flag({ help: "Skip prompt before ascending.", setting: "", default: false }),
  novote: Args.flag({ help: "Skip guaranteed vote wanderer check.", setting: "", default: false }),
  prep: Args.flag({ help: "Install chateau, eudora, and garden.", setting: "", default: false }),
  // preferences
  main_clan: Args.string({ help: "Clan with a fully stocked VIP lounge", default: "" }),
  side_clan: Args.string({ help: "Clan with a Mother Slime and Ungulith", default: "" }),
  skills_to_perm: Args.skills({ help: "A list of skills to perm by name or id number" }),
  // hidden preferences
  MEAT_SAFE_LIMIT: Args.number({
    default: 2000,
    help: "Don't spend meat on sausages below this value",
    hidden: true,
    setting: "",
  }),
  MP_SAFE_LIMIT: Args.number({
    default: 500,
    help: "Don't spend MP on librams below this value unless right before a full MP refill",
    hidden: true,
    setting: "",
  }),
});
