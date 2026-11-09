
onEvent("recipes", event => {
    event.shaped(Item.of('create:chain_conveyor'),
        [
            'SCS',
            'CWC',
            'SCS'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        C: 'create:andesite_casing',
        W: 'create:large_cogwheel'
    }).id('create:crafting/chain_conveyor')

    event.shapeless(Item.of('create:item_hatch'), ['create:andesite_alloy', 'minecraft:iron_trapdoor', 'the_vault:gem_larimar']).id('create:crafting/item_hatch')

    event.shaped(Item.of('create:packager'),
        [
            ' C ',
            'CWC',
            'RCR'
        ], {
        C: 'the_vault:chromatic_steel_ingot',
        W: 'create:cardboard_block',
        R: 'the_vault:magic_silk_block'
    }).id('create:crafting/packager')

    event.shaped(Item.of('create:package_frogport'),
        [
            ' S ',
            'IVI',
            'LAL'
        ], {
        S: '#forge:slimeballs',
        V: 'create:item_vault',
        A: 'create:andesite_alloy',
        L: 'quark:frog_leg',
        I: 'the_vault:perfect_larimar'
    }).id('create:crafting/package_frogport')

    event.shaped(Item.of('create:stock_link'),
        [
            ' S ',
            ' V ',
            ' A '
        ], {
        S: 'create:transmitter',
        V: 'create:item_vault',
        A: 'the_vault:chromatic_steel_ingot',
    }).id('create:crafting/stock_link')

    event.shaped(Item.of('create:stock_ticker'),
        [
            ' S ',
            ' V ',
            ' A '
        ], {
        S: '#c:glass_blocks',
        V: 'create:stock_link',
        A: 'woldsvaults:chromatic_gold_ingot',
    }).id('create:crafting/stock_ticker')

    event.shaped(Item.of('create:redstone_requester'),
        [
            ' S ',
            'RVR',
            ' A '
        ], {
        S: 'woldsvaults:vault_essence_block',
        V: 'create:stock_link',
        A: 'the_vault:chromatic_steel_ingot',
        R: 'minecraft:redstone_block'
    }).id('create:crafting/redstone_requester')

     event.shaped(Item.of('create:transmitter'),
        [
            ' S ',
            'PPP',
            'ARA '
        ], {
        S: 'minecraft:lightning_rod',
        P: '#forge:plates/copper',
        A: 'the_vault:vault_essence',
        R: 'minecraft:redstone'
    }).id('create:crafting/transmitter')

    event.shaped(Item.of('create:redstone_link'),
        [
            ' S ',
            ' C '
        ], {
        S: 'create:transmitter',
        C: 'create:brass_casing'
    }).id('create:crafting/logistics/redstone_link')

    event.shaped(Item.of('create:display_link'),
        [
            ' S ',
            ' C ',
            ' P ',
        ], {
        S: 'create:transmitter',
        C: 'create:brass_casing',
        P: '#forge:plates/copper'
    }).id('create:crafting/logistics/display_link')
})