# Seventy-HCCS

_A 70-turn Hardcore Community Service script for Kingdom of Loathing_

This script requires a large swath of Mr. Store items and permed skills which are too exhaustive to list here. Two clans are relied upon due to my lack of a private clan with a complete set of fully unlocked clan VIP items, unused fax machine and prepped Slimetube.

Currently it is untested and without expectations that it will work as intended.

## To Install

Run this command in the graphical CLI:

```
svn checkout https://github.com/s-k-z/seventy-hccs/branches/master/KoLmafia
```

## Requirements before Ascending

1. [Ungulith](https://kol.coldfront.net/thekolwiki/index.php/Ungulith) in a side clan fax machine
2. [Mother Slime](https://kol.coldfront.net/thekolwiki/index.php/Showdown) ready in the side clan Slimetube
3. Access to a fully stocked clan [VIP Lounge](https://kol.coldfront.net/thekolwiki/index.php/VIP_Lounge)
4. [Tiny black hole](https://kol.coldfront.net/thekolwiki/index.php/Tiny_black_hole) recipe unlocked from the [April Shower](https://kol.coldfront.net/thekolwiki/index.php/April_Shower)
5. All 11 beach heads unlocked for the [Beach Comb](https://kol.coldfront.net/thekolwiki/index.php/Beach_Comb)
6. A 50% Item drop and 100% Weapon damage favorite bird from the [Bird-a-Day calendar](https://kol.coldfront.net/thekolwiki/index.php/Bird-a-Day_calendar)
7. [Chateau Mantegna](https://kol.coldfront.net/thekolwiki/index.php/Chateau_Mantegna) containing:
   - a painting of a [Pterodactyl](https://kol.coldfront.net/thekolwiki/index.php/Pterodactyl)
   - ceiling fan
   - foreign language tapes
   - a piggy bank
8. [Diabolic pizza cube](https://kol.coldfront.net/thekolwiki/index.php/Diabolic_pizza_cube) installed into your workshed
9. [Gingerbread City fully upgraded](https://kol.coldfront.net/thekolwiki/index.php/Civic_Planning_Office) with access to the Upscale Retail District, Sewers, Digital Clock and Thickened Walls
10. A [Gold detective badge](https://kol.coldfront.net/thekolwiki/index.php/Gold_detective_badge) purchased from the [11th Precinct](https://kol.coldfront.net/thekolwiki/index.php/The_Precinct)
11. At least 196 bronze deliveries for the [Guzzlr tablet](https://kol.coldfront.net/thekolwiki/index.php/Guzzlr_tablet)
12. An [Ice house](https://kol.coldfront.net/thekolwiki/index.php/Ice_house) containing a [Perceiver of Sensations](https://kol.coldfront.net/thekolwiki/index.php/Perceiver_of_Sensations)
13. [Your cowboy boots](https://kol.coldfront.net/thekolwiki/index.php/Your_cowboy_boots) from the LT&T Office with nicksilver spurs and mountain lion skin applied (item drops and moxie stats)
14. A [Peppermint patch](https://kol.coldfront.net/thekolwiki/index.php/A_Peppermint_Patch) growing in your garden
15. [Source Terminal](https://kol.coldfront.net/thekolwiki/index.php/Source_Terminal) full upgraded
16. [Spacegate Vaccination Machine](https://kol.coldfront.net/thekolwiki/index.php/Spacegate_Vaccination_Machine) with the Rainbow Vaccine unlocked
17. All 150 [Witchess puzzles](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Puzzles) completed

## Requirements in Valhalla

1. Astral Statuette from Pet Heaven
2. Sauceror class
3. Wallaby moon sign

---

## To run the script

1. Ensure you have KoLMafia r20807 or later [available here](https://ci.kolmafia.us/view/all/job/Kolmafia/lastSuccessfulBuild/)
2. Ensure you have Java Runtime Environment 11 or later [available here](https://adoptopenjdk.net/). (Oracle JRE 8 was not sufficient in my testing)
3. Ensure **seventy_hccs.ccs** exists in the the KoLMafia ccs folder
4. Set properties in kolmafia to appropriate values:

   - seventyhccs_main_clan - Must be a name of a clan with a fully stocked VIP lounge
   - seventyhccs_side_clan - Must be a name of a clan with a fax machine and slimetube
   - seventyhccs_fortune_friend - Optional character name in main clan that will respond to fortune teller requests

5. Run the script file named **seventy-hccs.js** using KoLMafia

## Building from source

Please refer to [kol-js-starter](https://github.com/docrostov/kol-js-starter) on how to get started.
