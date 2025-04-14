let removedOutputsME = [
    'create_mechanical_extruder:mechanical_extruder'
];
onEvent("recipes", event => {
    removedOutputsME.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('create_mechanical_extruder:mechanical_extruder'),
        [
            ' P ',
            'GEG',
            ' X '
        ], {
        P: 'create:shaft',
        G: '#forge:glass',
        X: 'the_vault:pog_prism',
        E: 'create:andesite_casing'
    })
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:obsidian'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('quark:blaze_lantern')
    event.recipes.createMechanicalExtruderExtruding(Item.of('the_vault:vault_stone'), [Fluid.of('the_vault:void_liquid'), Fluid.of('minecraft:lava')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:deepslate'), [Fluid.of('minecraft:lava'), Item.of('minecraft:packed_ice')]).withCatalyst('minecraft:magma_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:crimsite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:redstone_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:lapis_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'), [Fluid.of('minecraft:lava'), Fluid.of('create:honey')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:gold_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:scoria'), [Fluid.of('minecraft:lava'), Fluid.of('create:chocolate')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:veridium'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:emerald_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'), [Item.of('minecraft:diorite'), Item.of('minecraft:cobblestone')]).withCatalyst('the_vault:chromatic_steel_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:granite'), [Item.of('minecraft:diorite'), Item.of('minecraft:quartz_block')]).withCatalyst('the_vault:chromatic_steel_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite'), [Item.of('minecraft:cobblestone'), Item.of('minecraft:quartz_block')]).withCatalyst('the_vault:chromatic_steel_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:tuff'), [Item.of('minecraft:cobblestone'), Item.of('minecraft:white_concrete')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('ae2:sky_stone_block'), [Fluid.of('minecraft:lava'), Fluid.of('auxiliaryblocks:gray_water')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:terracotta'), [Fluid.of('auxiliaryblocks:orange_water'), Fluid.of('auxiliaryblocks:gray_water')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:sandstone'), [Fluid.of('auxiliaryblocks:yellow_water'), Fluid.of('minecraft:lava')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:red_sandstone'), [Fluid.of('auxiliaryblocks:yellow_water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:red_wool')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:prismarine'), [Fluid.of('auxiliaryblocks:light_blue_water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:conduit')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:end_stone'), [Fluid.of('the_vault:void_liquid'), Fluid.of('auxiliaryblocks:white_water')]).withCatalyst('the_vault:chromatic_gold_block')
    
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:limestone'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:calcite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:jasper'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:quartz_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:shale'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:clay')
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:permafrost'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:blue_ice')
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:myalite'), [Fluid.of('the_vault:void_liquid'), Fluid.of('auxiliaryblocks:purple_water')]).withCatalyst('the_vault:chromatic_gold_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('quark:dusky_myalite'), [Fluid.of('the_vault:void_liquid'), Fluid.of('auxiliaryblocks:gray_water')]).withCatalyst('the_vault:chromatic_gold_block')
})