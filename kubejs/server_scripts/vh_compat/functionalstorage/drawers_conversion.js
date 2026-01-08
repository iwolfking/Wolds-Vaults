onEvent("recipes", event => {
    let drawerTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped'];

    event.shaped(Item.of(`functionalstorage:compacting_drawer`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_iron_ingot',
        X: 'the_vault:perfect_larimar',
        I: 'woldsvaults:vault_diamond_nugget',
        D: 'storagedrawers:compacting_drawers_3'
    }).id('functionalstorage:compacting_drawer_conversion')

    event.shaped(Item.of(`functionalstorage:storage_controller`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_iron_ingot',
        X: 'the_vault:perfect_larimar',
        I: 'the_vault:chromatic_steel_ingot',
        D: 'storagedrawers:controller'
    }).id('functionalstorage:storage_controller_conversion')

    drawerTypes.forEach((type) => {
        event.shapeless(`functionalstorage:${type}_1`, [`storagedrawers:${type}_full_drawers_1`, 'the_vault:vault_essence']).id(`functionalstorage:${type}_drawer_conversion_1`)
        event.shapeless(`functionalstorage:${type}_2`, [`storagedrawers:${type}_full_drawers_2`, 'the_vault:vault_essence']).id(`functionalstorage:${type}_drawer_conversion_2`)
        event.shapeless(`functionalstorage:${type}_4`, [`storagedrawers:${type}_full_drawers_4`, 'the_vault:vault_essence']).id(`functionalstorage:${type}_drawer_conversion_4`)
    })

    event.shapeless('functionalstorage:fluid_1', ['fluiddrawerslegacy:fluiddrawer', 'the_vault:vault_essence']).id('functionalstorage:fluid_drawer_conversion_1');

    event.shaped(Item.of(`functionalstorage:controller_extension`),
        [
            'BOB',
            'XGX',
            'BXB'
        ], {
        B: 'the_vault:polished_vault_stone',
        O: 'woldsvaults:vault_diamond_nugget',
        X: 'the_vault:chromatic_iron_ingot',
        G: 'storagedrawers:controller_slave'
    }).id('functionalstorage:controller_extension_conversion')

    event.shaped(Item.of(`functionalstorage:copper_upgrade`),
        [
            'ccc',
            'SDS',
            'ccc'
        ], {
        c: 'minecraft:copper_ingot',
        S: 'the_vault:vault_essence',
        D: 'storagedrawers:iron_storage_upgrade'
    }).id('functionalstorage:copper_upgrade_conversion')

    event.shaped(Item.of(`functionalstorage:gold_upgrade`),
        [
            'cSc',
            'SDS',
            'cSc'
        ], {
        c: 'woldsvaults:chromatic_gold_ingot',
        S: 'the_vault:perfect_larimar',
        D: 'storagedrawers:gold_storage_upgrade',
    }).id('functionalstorage:gold_upgrade_conversion')

    event.shaped(Item.of(`functionalstorage:diamond_upgrade`),
        [
            'ccc',
            'SDS',
            'ccc'
        ], {
        c: 'the_vault:vault_diamond',
        S: 'the_vault:perfect_larimar',
        D: 'storagedrawers:diamond_storage_upgrade'
    }).id('functionalstorage:diamond_upgrade_conversion')

    event.shaped(Item.of(`functionalstorage:netherite_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'minecraft:netherite_ingot',
        C: 'the_vault:vault_diamond',
        S: 'the_vault:vault_essence',
        D: 'storagedrawers:emerald_storage_upgrade'
    }).id('functionalstorage:netherite_upgrade_conversion')

    event.shapeless('functionalstorage:iron_downgrade', ['storagedrawers:one_stack_upgrade']).id('functionalstorage:iron_downgrade_conversion');
    event.shapeless('functionalstorage:configuration_tool', ['storagedrawers:drawer_key', 'storagedrawers:quantify_key', 'storagedrawers:shroud_key']).id('functionalstorage:configuration_tool_conversion');

    event.shaped(Item.of(`functionalstorage:void_upgrade`),
        [
            'OOO',
            'BDB',
            'OOO'
        ], {
        O: 'the_vault:vault_essence',
        B: 'the_vault:chromatic_iron_ingot',
        D: 'storagedrawers:void_upgrade'
    }).id('functionalstorage:void_upgrade_conversion')
})