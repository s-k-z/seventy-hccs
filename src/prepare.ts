import {
  create,
  eat,
  haveEffect,
  mpCost,
  myHp,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  soulsauceCost,
  use,
  useSkill,
} from "kolmafia";
import { $item, $skill, get, have } from "libram";
import { config } from "./config";
import { castBestLibram } from "./iotms";
import { effectDuration, itemToEffect } from "./lib";

function getHowManySausages(): number {
  if (myMaxmp() - mpCost($skill`Summon BRICKOs`) < config.MP_SAFE_LIMIT) return 0;

  const offset = get("_sausagesMade");
  if (offset >= 23) return 0;

  const costsOfNext = [...Array(24).keys()].map((k) => k * 111).splice(1);
  const mpRefills = (myMaxmp() - myMp()) / 999;
  let toEat = 0;
  let totalCost = 0;
  while (toEat < mpRefills && toEat + offset < costsOfNext.length) {
    totalCost += costsOfNext[toEat + offset];
    if (myMeat() - totalCost < config.MEAT_SAFE_LIMIT) break;
    toEat++;
  }

  return toEat;
}

export function prepareAll() {
  if (myHp() / myMaxhp() < 0.3) useSkill($skill`Cannelloni Cocoon`);

  const maxMPGains = (myMaxmp() - myMp()) / 15;
  const maxSoulFoodCasts = mySoulsauce() / soulsauceCost($skill`Soul Food`);
  const soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
  if (soulFoodCasts > 0) useSkill(soulFoodCasts, $skill`Soul Food`);

  const sausages = getHowManySausages();
  if (sausages > 0) {
    create(sausages, $item`magical sausage`);
    eat(sausages, $item`magical sausage`);
  }

  while (myMp() - mpCost($skill`Summon BRICKOs`) > config.MP_SAFE_LIMIT) {
    castBestLibram();
  }

  const potions = new Map([
    [$item`green candy heart`, 1],
    [$item`pulled yellow taffy`, 1],
    [$item`pulled violet taffy`, 50],
    [$item`resolution: be feistier`, 1],
    [$item`resolution: be happier`, 1],
    [$item`resolution: be kinder`, 1],
    [$item`resolution: be luckier`, 1],
    [$item`resolution: be smarter`, 1],
    [$item`resolution: be wealthier`, 1],
    [$item`short stack of pancakes`, 1],
  ]);
  for (const [potion, limit] of potions) {
    const toUse = Math.ceil((limit - haveEffect(itemToEffect(potion))) / effectDuration(potion));
    if (have(potion) && toUse > 0) use(toUse, potion);
  }

  if (have($item`burning newspaper`)) create($item`burning paper crane`);
}
