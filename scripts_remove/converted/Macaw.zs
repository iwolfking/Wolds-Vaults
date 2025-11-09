/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("macaw_iron_bridge", <item:mcwbridges:iron_bridge>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<tag:items:forge:nuggets/iron>, <item:minecraft:air>, <tag:items:forge:nuggets/iron>],
    [<item:minecraft:air>, <tag:items:forge:nuggets/iron>, <item:minecraft:air>]
]);

var materials_window_fix = {
  "andesite": "andesite",
  "diorite": "diorite",
  "granite": "granite",
  "stone": "stone",
  "prismarine_bricks": "prismarine",
  "dark_prismarine": "dark_prismarine",
  "polished_blackstone": "blackstone",
};

for materialId, materialName in materials_window_fix {
craftingTable.removeByName("mcwwindows:" + materialName + "_window");
craftingTable.addShaped(materialName + "_window", <item:mcwwindows:${materialName}_window> * 8, [
    [<item:mcwwindows:window_base>, <item:mcwwindows:window_base>, <item:mcwwindows:window_base>],
    [<item:mcwwindows:window_base>, <item:minecraft:${materialId}>, <item:mcwwindows:window_base>],
    [<item:mcwwindows:window_base>, <item:mcwwindows:window_base>, <item:mcwwindows:window_base>]
]);
}