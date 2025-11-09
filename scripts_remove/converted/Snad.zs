/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

import crafttweaker.api.loot.modifier.CommonLootModifiers;

<block:snad:snad>.addLootModifier("snad",CommonLootModifiers.clearing(CommonLootModifiers.add(<item:snad:snad>)));
<block:snad:red_snad>.addLootModifier("redsnad",CommonLootModifiers.clearing(CommonLootModifiers.add(<item:snad:red_snad>)));
<block:snad:suol_snad>.addLootModifier("suolsnad",CommonLootModifiers.clearing(CommonLootModifiers.add(<item:snad:suol_snad>)));

craftingTable.addShaped("snad_snad", <item:snad:snad>, [
    [<tag:items:forge:sand/colorless>, <item:the_vault:vault_essence_1>, <tag:items:forge:sand/colorless>],
    [<item:the_vault:vault_essence_1>, <item:the_vault:extraordinary_larimar>, <item:the_vault:vault_essence_1>],
    [<tag:items:forge:sand/colorless>, <item:the_vault:vault_essence_1>, <tag:items:forge:sand/colorless>]
]);

craftingTable.addShaped("snad_red_snad", <item:snad:red_snad>, [
     [<tag:items:forge:sand/red>, <item:the_vault:vault_essence_1>, <tag:items:forge:sand/red>],
    [<item:the_vault:vault_essence_1>, <item:the_vault:extraordinary_larimar>, <item:the_vault:vault_essence_1>],
    [<tag:items:forge:sand/red>, <item:the_vault:vault_essence_1>, <tag:items:forge:sand/red>]
]);

craftingTable.addShaped("snad_soul_snad", <item:snad:suol_snad>, [
    [<item:minecraft:soul_sand>, <item:the_vault:vault_essence_1>, <item:minecraft:soul_sand>],
    [<item:the_vault:vault_essence_1>, <item:the_vault:extraordinary_larimar>, <item:the_vault:vault_essence_1>],
    [<item:minecraft:soul_sand>, <item:the_vault:vault_essence_1>, <item:minecraft:soul_sand>]
]);