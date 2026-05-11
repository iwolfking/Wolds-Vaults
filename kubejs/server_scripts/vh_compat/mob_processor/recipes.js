onEvent("recipes", event => {
    event.shaped(Item.of('mobprocessor:mob_processor'),
        [
            'TPT',
            'CDC',
            'OXO'
        ], {
        C: 'cagerium:cage',
        T: 'cagerium:terrarium',
        P: 'cagerium:plate',
        D: 'the_vault:vault_diamond_block',
        O: 'woldsvaults:chromatic_gold_block',
        X: 'woldsvaults:pogominium_ingot'
    }).id('mobprocessor:mob_processor')

    event.shaped(Item.of('mobprocessor:looting_upgrade_1'),
        [
            ' L ',
            'GSG',
            ' G '
        ], {
        L: 'the_vault:vault_diamond_block',
        G: 'woldsvaults:chromatic_gold_ingot',
        S: 'the_vault:extraordinary_larimar'
    }).id('mobprocessor:looting_upgrade_1')

    event.shaped(Item.of('mobprocessor:looting_upgrade_2'),
        [
            ' L ',
            'GSG',
            ' G '
        ], {
        L: 'the_vault:gem_pog',
        G: 'the_vault:vault_diamond_block',
        S: 'mobprocessor:looting_upgrade_1'
    }).id('mobprocessor:looting_upgrade_2')

    event.shaped(Item.of('mobprocessor:looting_upgrade_3'),
        [
            ' L ',
            'GSG',
            ' G '
        ], {
        L: 'the_vault:echo_pog',
        G: 'the_vault:black_chromatic_steel_block',
        S: 'mobprocessor:looting_upgrade_2'
    }).id('mobprocessor:looting_upgrade_3')

    event.shaped(Item.of('mobprocessor:speed_upgrade_1'),
        [
            'ELE',
            'LSL',
            'ELE'
        ], {
        L: 'the_vault:extraordinary_larimar',
        E: 'woldsvaults:vault_essence_block',
        S: 'minecraft:clock'
    }).id('mobprocessor:speed_upgrade_1')

    event.shaped(Item.of('mobprocessor:speed_upgrade_2'),
        [
            ' L ',
            'ESE',
            ' L '
        ], {
        L: 'the_vault:gem_pog',
        E: 'the_vault:vault_diamond_block',
        S: 'mobprocessor:speed_upgrade_1'
    }).id('mobprocessor:speed_upgrade_2')

    event.shaped(Item.of('mobprocessor:speed_upgrade_3'),
        [
            ' L ',
            'ESE',
            ' L '
        ], {
        L: 'woldsvaults:pog_prism',
        E: 'woldsvaults:chromatic_gold_block',
        S: 'mobprocessor:speed_upgrade_2'
    }).id('mobprocessor:speed_upgrade_3')

    event.shaped(Item.of('mobprocessor:storage_upgrade_1'),
        [
            ' C ',
            'IMI',
            ' I '
        ], {
        C: 'minecraft:chest',
        M: 'the_vault:extraordinary_larimar',
        I: 'the_vault:chromatic_steel_block'
    }).id('mobprocessor:storage_upgrade_1')

    event.shaped(Item.of('mobprocessor:storage_upgrade_2'),
        [
            ' C ',
            'IMI',
            ' C '
        ], {
        C: 'woldsvaults:pog_prism',
        M: 'mobprocessor:storage_upgrade_1',
        I: 'the_vault:wutodic_mass'
    }).id('mobprocessor:storage_upgrade_2')

    event.shaped(Item.of('mobprocessor:storage_upgrade_3'),
        [
            ' C ',
            'IMI',
            ' C '
        ], {
        C: 'the_vault:echo_pog',
        M: 'mobprocessor:storage_upgrade_2',
        I: 'the_vault:black_chromatic_steel_block'
    }).id('mobprocessor:storage_upgrade_3')

     event.shaped(Item.of('mobprocessor:player_kill_upgrade'),
        [
            ' C ',
            'IMI',
            ' I '
        ], {
        C: 'minecraft:wither_skeleton_skull',
        M: 'the_vault:echo_pog',
        I: 'minecraft:diamond_sword'
    }).id('mobprocessor:player_kill_upgrade')
})