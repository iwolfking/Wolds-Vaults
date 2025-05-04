/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

var dye = {
  "white_dye": "white",
  "red_dye": "red",
  "lime_dye": "lime",
  "light_gray_dye": "light_gray",
  "gray_dye": "gray",
  "black_dye": "black",
  "orange_dye": "orange",
  "yellow_dye": "yellow",
  "cyan_dye": "cyan",
  "purple_dye": "purple",
  "green_dye": "green",
  "blue_dye": "blue",
  "brown_dye": "brown",
  "pink_dye": "pink",
  "light_blue_dye": "light_blue",
  "magenta_dye": "magenta"
};

for dyeId, dyeName in dye {
  craftingTable.addShapeless("elevatorid_" + dyeName + "_elevator", <item:elevatorid:elevator_${dyeName}>, [
    <tag:items:elevatorid:elevators>, <item:minecraft:${dyeId}>
  ]);

    craftingTable.addShaped("shaped_elevatorid_" + dyeName + "_elevator", <item:elevatorid:elevator_${dyeName}>, [
    [<item:the_vault:magic_silk>, <item:minecraft:${dyeName}_wool>, <item:the_vault:magic_silk>],
    [<item:minecraft:${dyeName}_wool>, <item:the_vault:perfect_larimar>, <item:minecraft:${dyeName}_wool>],
    [<item:the_vault:magic_silk>, <item:minecraft:${dyeName}_wool>, <item:the_vault:magic_silk>]
  ]);
}