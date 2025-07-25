/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

import mods.jei.JEI;

// JEI.addDescription(<item:fluxnetworks:flux_dust>,["right click raw chromatic iron with obsidian"]);

craftingTable.addShaped("flux_flux_dust", <item:fluxnetworks:flux_dust>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:redstone>]
]);

craftingTable.addShaped("flux_flux_core", <item:fluxnetworks:flux_core> *2, [
    [<item:fluxnetworks:flux_dust>, <item:the_vault:gem_larimar>, <item:fluxnetworks:flux_dust>],
    [<item:minecraft:obsidian>, <item:the_vault:vault_diamond>, <item:minecraft:obsidian>],
    [<item:fluxnetworks:flux_dust>, <item:the_vault:gem_larimar>, <item:fluxnetworks:flux_dust>]
]);

craftingTable.addShaped("flux_flux_block", <item:fluxnetworks:flux_block>, [
    [<item:the_vault:gem_larimar>, <item:fluxnetworks:flux_core>, <item:the_vault:gem_larimar>],
    [<item:fluxnetworks:flux_core>, <item:the_vault:vault_diamond>, <item:fluxnetworks:flux_core>],
    [<item:the_vault:gem_larimar>, <item:fluxnetworks:flux_core>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("flux_flux_point", <item:fluxnetworks:flux_point>, [
    [<item:fluxnetworks:flux_core>, <item:woldsvaults:chroma_core>, <item:fluxnetworks:flux_core>],
    [<item:minecraft:air>, <item:fluxnetworks:flux_block>, <item:minecraft:air>],
    [<item:fluxnetworks:flux_core>, <item:the_vault:gem_pog>, <item:fluxnetworks:flux_core>]
]);

craftingTable.addShaped("flux_flux_plug", <item:fluxnetworks:flux_plug>, [
    [<item:fluxnetworks:flux_core>, <item:the_vault:gem_pog>, <item:fluxnetworks:flux_core>],
    [<item:minecraft:air>, <item:fluxnetworks:flux_block>, <item:minecraft:air>],
    [<item:fluxnetworks:flux_core>, <item:woldsvaults:chroma_core>, <item:fluxnetworks:flux_core>]
]);