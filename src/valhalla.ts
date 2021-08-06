import { toInt, visitUrl } from "kolmafia";
import { $class, $item } from "libram";

export function ascend(): void {
  if (!visitUrl("charpane.php").includes("Astral Spirit")) {
    visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!visitUrl("charpane.php").includes("Astral Spirit")) throw "Error trying to ascend";
  visitUrl("afterlife.php?action=pearlygates");
  visitUrl(`afterlife.php?action=buydeli&whichitem=${toInt($item`astral six-pack`)}`);
  visitUrl(`afterlife.php?action=buyarmory&whichitem=${toInt($item`astral statuette`)}`);
  visitUrl(
    `afterlife.php?action=ascend&confirmascend=1&whichsign=2&gender=${Math.round(
      Math.random()
    )}&whichclass=${toInt($class`Sauceror`)}&whichpath=25&asctype=3&nopetok=1&noskillsok=1&pwd=`,
    true
  );
}
