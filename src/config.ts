import { fileToArray } from "kolmafia";
import { $item } from "libram";

// Unfortunately don't have a clan with everything needed, so going to rely on a second clan for a prepped fax machine and slimetube
// Requires a data file with main clan name on line 1 and alternate clan on line 2
const clanData = fileToArray("seventy-hccs-clans.txt");
export const MAIN_CLAN = clanData[1];
export const FAX_AND_SLIME_CLAN = clanData[2];
export const FORTUNE_TELLER_FRIEND = clanData[3];
// Define which BRICKO fight to use by changing BRICKO_TARGET_ITEM
const brickoOptions = {
  "BRICKO ooze": 2,
  "BRICKO bat": 5,
  "BRICKO oyster": 8,
  "BRICKO turtle": 11,
  "BRICKO elephant": 23,
  "BRICKO octopus": 37,
  "BRICKO python": 69,
};
export const BRICKO_TARGET_ITEM = $item`BRICKO bat`;
export const BRICKOS_PER_FIGHT =
  brickoOptions[`${BRICKO_TARGET_ITEM}` as keyof typeof brickoOptions];
// Perhaps optimal to level at Chateau sooner rather than later
export const CHATEAU_REST_LEVEL = 8;
// Don't spend meat on sausages below this value
export const MEAT_SAFE_LIMIT = 2000;
// Don't spend MP on librams below this value unless right before a full MP refill
export const MP_SAFE_LIMIT = 500;
