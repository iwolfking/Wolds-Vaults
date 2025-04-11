onEvent("recipes", event => {
    let noRemoveTS = ['toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.inventory_cable_connector_framed', 'toms_storage:ts.paint_kit']
    Ingredient.of('@toms_storage').itemIds.forEach(id => {
        console.log(id)
        if (!noRemoveTS.includes(id))
            event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('toms_storage:ts.inventory_connector'),
        [
            'WRW',
            'CDC',
            'WPW'
        ], {
        W: 'the_vault:wooden_planks',
        D: 'the_vault:vault_diamond',
        C: 'the_vault:driftwood_planks',
        P: 'the_vault:gem_larimar',
        R: 'minecraft:comparator'
    })

    event.shaped(Item.of('toms_storage:ts.storage_terminal'),
        [
            'WRW',
            'CEG',
            'WRW'
        ], {
        W: 'the_vault:wooden_planks',
        E: 'the_vault:perfect_black_opal',
        C: 'the_vault:wooden_chest',
        R: 'the_vault:perfect_larimar',
        G: 'the_vault:chromatic_steel_ingot',
    })

    event.shaped(Item.of('toms_storage:ts.trim', 4),
        [
            'WCW',
            'CDC',
            'WCW'
        ], {
        W: 'the_vault:wooden_planks',
        D: 'minecraft:chest',
        C: 'the_vault:driftwood_planks'
    })

    event.shaped(Item.of('toms_storage:ts.inventory_cable', 6),
        [
            'WCW',
            'IDI',
            'WCW'
        ], {
        W: 'the_vault:driftwood',
        D: 'minecraft:chest',
        C: 'the_vault:wooden_planks',
        I: 'the_vault:chromatic_iron_ingot',
    })

    event.shaped(Item.of('toms_storage:ts.inventory_cable_connector'),
        [
            ' CW',
            'HBI',
            ' DW'
        ], {
        W: 'the_vault:wooden_planks',
        D: 'the_vault:vault_diamond',
        C: 'the_vault:vault_essence',
        I: 'the_vault:chromatic_steel_ingot',
        H: 'toms_storage:ts.inventory_cable',
        B: 'minecraft:chest'
    })

    event.shaped(Item.of('toms_storage:ts.inventory_cable_connector_filtered'),
        [
            ' C ',
            'IDI',
            ' C '
        ], {
        D: 'toms_storage:ts.inventory_cable_connector',
        C: 'the_vault:vault_essence',
        I: 'the_vault:magic_silk_block',
    })

    event.shaped(Item.of('toms_storage:ts.inventory_proxy'),
        [
            'WCW',
            'CDC',
            'WCW'
        ], {
        W: 'the_vault:wooden_planks',
        D: 'minecraft:chest',
        C: 'the_vault:driftwood',
    })

    event.shaped(Item.of('toms_storage:ts.crafting_terminal'),
        [
            'WXW',
            'CDC',
            'WCW'
        ], {
        W: 'the_vault:black_chromatic_steel_ingot',
        D: 'toms_storage:ts.storage_terminal',
        C: 'the_vault:vault_diamond',
        X: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('toms_storage:ts.inventory_hopper_basic'),
        [
            ' C ',
            'IDI',
            ' H '
        ], {
        D: 'toms_storage:ts.inventory_cable',
        C: 'the_vault:vault_essence',
        I: 'the_vault:chromatic_steel_ingot',
        H: 'minecraft:hopper'
    })

    event.shaped(Item.of('toms_storage:ts.level_emitter'),
        [
            ' C ',
            'IDI',
            ' H '
        ], {
        D: 'toms_storage:ts.inventory_cable',
        C: 'minecraft:redstone_torch',
        I: 'the_vault:gem_larimar',
        H: 'minecraft:comparator'
    })

    event.shaped(Item.of('toms_storage:ts.wireless_terminal'),
        [
            'BCB',
            'SDI',
            'BHB'
        ], {
        D: 'the_vault:gem_pog',
        C: 'the_vault:perfect_painite',
        I: 'the_vault:extraordinary_larimar',
        H: 'the_vault:vault_diamond',
        B: 'the_vault:chromatic_steel_ingot',
        S: 'minecraft:spyglass'
    })
    event.smithing('toms_storage:ts.adv_wireless_terminal', 'toms_storage:ts.wireless_terminal', 'the_vault:echo_pog')
})