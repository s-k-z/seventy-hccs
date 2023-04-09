import { Args } from "grimoire-kolmafia";
import { $item } from "libram";

export const config = Args.create("seventyhccs", "Automate 1/70 Community Service.", {
  nofites: Args.flag({ help: "Skip warning for unspent pvp fites.", setting: "", default: false }),
  noprompt: Args.flag({ help: "Skip prompt before ascending.", setting: "", default: false }),
  novote: Args.flag({ help: "Skip guaranteed vote wanderer check.", setting: "", default: false }),
  prep: Args.flag({ help: "Install chateau, eudora, and garden", setting: "", default: false }),
  // preferences
  main_clan: Args.string({ help: "Clan with a fully stocked VIP lounge", default: "" }),
  side_clan: Args.string({ help: "Clan with a Mother Slime and Ungulith", default: "" }),
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

// Define which BRICKO fight to use by changing BRICKO_TARGET_ITEM
export const BRICKO_TARGET_ITEM = $item`BRICKO bat`;
export const BRICKO_COST =
  new Map([
    [$item`BRICKO ooze`, 2],
    [$item`BRICKO bat`, 5],
    [$item`BRICKO oyster`, 8],
    [$item`BRICKO turtle`, 11],
    [$item`BRICKO elephant`, 23],
    [$item`BRICKO octopus`, 37],
    [$item`BRICKO python`, 69],
  ]).get(BRICKO_TARGET_ITEM) ?? 9999;
// Define minimum BRICKOs that can drop at 234% item drop (30% guaranteed)
export const BRICKO_DROP =
  new Map([
    [$item`BRICKO ooze`, 1],
    [$item`BRICKO bat`, 2],
    [$item`BRICKO oyster`, 0],
    [$item`BRICKO turtle`, 0],
    [$item`BRICKO elephant`, 0],
    [$item`BRICKO octopus`, 3],
    [$item`BRICKO python`, 4],
  ]).get(BRICKO_TARGET_ITEM) ?? 0;
