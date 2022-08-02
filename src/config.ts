import { getProperty } from "kolmafia";
import { $item } from "libram";

// Unfortunately don't have a clan with everything needed, so going to rely on a second clan for a prepped fax machine and slimetube
// Optional FORTUNE_TELLER_FRIEND must be a character in MAIN_CLAN
export const MAIN_CLAN = getProperty("seventyhccs_main_clan");
export const FAX_AND_SLIME_CLAN = getProperty("seventyhccs_side_clan");
export const FORTUNE_TELLER_FRIEND = getProperty("seventyhccs_fortune_friend");
export const STILLSUIT_FAMILIAR = getProperty("seventyhccs_stillsuit_target");
// Define which BRICKO fight to use by changing BRICKO_TARGET_ITEM
export const BRICKO_TARGET_ITEM = $item`BRICKO bat`;
export const BRICKOS_PER_FIGHT =
  new Map([
    [$item`BRICKO ooze`, 2],
    [$item`BRICKO bat`, 5],
    [$item`BRICKO oyster`, 8],
    [$item`BRICKO turtle`, 11],
    [$item`BRICKO elephant`, 23],
    [$item`BRICKO octopus`, 37],
    [$item`BRICKO python`, 69],
  ]).get(BRICKO_TARGET_ITEM) ?? 9999;
// Don't spend meat on sausages below this value
export const MEAT_SAFE_LIMIT = 2000;
// Don't spend MP on librams below this value unless right before a full MP refill
export const MP_SAFE_LIMIT = 500;
