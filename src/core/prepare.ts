import {
  create,
  eat,
  mpCost,
  myHp,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  soulsauceCost,
  useSkill,
} from "kolmafia";
import { $item, $skill, get, have } from "libram";
import { BRICKO_COST, BRICKO_TARGET_ITEM, config } from "../config";
import { castBestLibram, useDroppedItems } from "../iotms";

export function prepareAll() {
  if (myHp() / myMaxhp() < 0.3) useSkill($skill`Cannelloni Cocoon`);

  const maxMPGains = (myMaxmp() - myMp()) / 15;
  const maxSoulFoodCasts = mySoulsauce() / soulsauceCost($skill`Soul Food`);
  const soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
  if (soulFoodCasts > 0) useSkill(soulFoodCasts, $skill`Soul Food`);

  while (
    have($item`magical sausage casing`) &&
    (get("_sausagesMade") + 1) * 111 < myMeat() - config.MEAT_SAFE_LIMIT &&
    myMaxmp() - myMp() > 1000 &&
    myMaxmp() - mpCost($skill`Summon BRICKOs`) > config.MP_SAFE_LIMIT &&
    get("_sausagesEaten") < 23
  ) {
    create($item`magical sausage`);
    eat($item`magical sausage`);
  }

  while (myMp() - mpCost($skill`Summon BRICKOs`) > config.MP_SAFE_LIMIT) {
    castBestLibram();
  }

  // TODO: figure out how to fit this in
  useDroppedItems();

  while (have($item`BRICKO eye brick`) && have($item`BRICKO brick`, BRICKO_COST)) {
    create(BRICKO_TARGET_ITEM);
  }

  if (have($item`burning newspaper`)) create($item`burning paper crane`);
}
