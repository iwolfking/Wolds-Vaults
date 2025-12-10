onEvent("recipes", event => {
    event.shapeless('3x quark:limestone', ['minecraft:stone', 'minecraft:andesite', 'minecraft:diorite'])
    event.shapeless('3x quark:jasper', ['minecraft:granite', 'minecraft:stone', 'minecraft:diorite'])
    event.shapeless('3x quark:shale', ['minecraft:clay', 'minecraft:stone', 'minecraft:andesite'])
    event.shapeless('3x quark:myalite', ['minecraft:end_stone', 'minecraft:purple_concrete_powder', 'minecraft:purpur_block'])
    
    event.shapeless('3x quark:permafrost', ['minecraft:stone', 'minecraft:andesite', 'minecraft:packed_ice'])
    event.shapeless('3x quark:dusky_myalite', ['minecraft:obsidian', 'quark:myalite', 'quark:myalite'])

    event.shapeless('quark:red_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_bomignite'])
    event.shapeless('quark:orange_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_ashium'])
    event.shapeless('quark:yellow_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_sparkletine'])
    event.shapeless('quark:green_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_tubium'])
    event.shapeless('quark:blue_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_petzanite'])
    event.shapeless('quark:indigo_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_xenium'])
    event.shapeless('quark:violet_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_gorginite'])
    event.shapeless('quark:white_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_upaline'])
    event.shapeless('quark:black_corundum', ['the_vault:topaz_block', 'woldsvaults:gem_reagent_iskallium'])

    event.smelting('quark:myalite_crystal', 'quark:myalite')
})