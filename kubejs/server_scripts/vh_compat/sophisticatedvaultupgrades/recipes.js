onEvent("recipes", event => {

    event.shaped(Item.of('sophisticatedbackpacks:recycler_upgrade'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:vault_diamond_block',
        O: 'woldsvaults:vault_salvager',
        B: 'the_vault:black_chromatic_steel_ingot',
        P: 'woldvaults:pog_prism',
        U: 'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedvaultstorage:sophisticatedbackpacks/recycler_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:recycler_upgrade_advanced'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:vault_diamond_block',
        O: 'compressium:vault_essence_block_1',
        B: 'the_vault:black_chromatic_steel_ingot',
        P: 'woldvaults:pog_prism',
        U: 'sophisticatedbackpacks:recycler_upgrade'
    }).id('sophisticatedvaultstorage:sophisticatedbackpacks/recycler_upgrade_advanced')

    event.shaped(Item.of('sophisticatedbackpacks:diffuser_upgrade'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:vault_diamond_block',
        O: 'the_vault:vault_harvester',
        B: 'the_vault:black_chromatic_steel_ingot',
        P: 'woldsvaults:extraordinary_pog_prism',
        U: 'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedvaultstorage:sophisticatedbackpacks/diffuser_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:diffuser_upgrade_advanced'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:wutodic_mass',
        O: 'the_vault:black_chromatic_steel_block',
        B: 'the_vault:echo_pog',
        P: 'woldsvaults:extraordinary_pog_prism',
        U: 'sophisticatedbackpacks:diffuser_upgrade'
    }).id('sophisticatedvaultstorage:sophisticatedbackpacks/diffuser_upgrade_advanced')

    event.shaped(Item.of('sophisticatedbackpacks:activator_upgrade'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:magic_silk_block',
        O: 'the_vault:blank_key',
        B: 'woldvaults:pog_prism',
        P: 'the_vault:extraordinary_black_opal',
        U: 'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedvaultstorage:sophisticatedbackpacks/activator_upgrade')

    event.shaped(Item.of('sophisticatedstorage:recycler_upgrade'),
        [
            'XOX',
            'BUB',
            'XPX'
        ], {
        X: 'the_vault:magic_silk_block',
        O: 'woldsvaults:vault_salvager',
        B: 'the_vault:chromatic_steel_block',
        P: 'woldvaults:pog_prism',
        U: 'sophisticatedstorage:upgrade_base'
    }).id('sophisticatedvaultstorage:sophisticatedstorage/recycler_upgrade')

})