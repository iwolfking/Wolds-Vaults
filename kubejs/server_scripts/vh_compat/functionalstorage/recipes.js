let removedOutputsFSS = [
];
let functionalDrawerTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
onEvent("recipes", event => {
    removedOutputsFSS.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    functionalDrawerTypes.forEach((woodType) => {
        event.remove({ 'output': `functionalstorage:${woodType}_1` })
        event.remove({ 'output': `functionalstorage:${woodType}_2` })
        event.remove({ 'output': `functionalstorage:${woodType}_4` })
        var ingredient;
        if (woodType.equals('warped') || woodType.equals('crimson')) {
            ingredient = woodType + '_stem'
        }
        else {
            ingredient = woodType + '_log'
        }
        event.shaped(Item.of(`functionalstorage:${woodType}_1`),
            [
                'GXG',
                'XDX',
                'GXG'
            ], {
            G: 'the_vault:driftwood_planks',
            X: 'the_vault:chromatic_iron_ingot',
            D: `minecraft:${ingredient}`
        })

        event.shaped(Item.of(`functionalstorage:${woodType}_2`),
            [
                'GXG',
                'XDX',
                'GXG'
            ], {
            G: 'the_vault:driftwood_planks',
            X: 'the_vault:chromatic_iron_ingot',
            D: `minecraft:${woodType}_planks`
        })

        event.shaped(Item.of(`functionalstorage:${woodType}_4`),
            [
                'GXG',
                'XDX',
                'GXG'
            ], {
            G: 'the_vault:driftwood_planks',
            X: 'the_vault:chromatic_iron_ingot',
            D: `minecraft:${woodType}_planks`
        })
    })

    event.shaped(Item.of(`functionalstorage:framed_1`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: '#minecraft:planks'
    }).id('functionalstorage:framed_1')

    event.shaped(Item.of(`functionalstorage:framed_2`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: '#minecraft:wooden_slabs'
    }).id('functionalstorage:framed_2')

    event.shaped(Item.of(`functionalstorage:framed_4`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: '#minecraft:wooden_buttons'
    }).id('functionalstorage:framed_4')

    event.shaped(Item.of(`functionalstorage:compacting_drawer`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:extraordinary_larimar',
        I: 'the_vault:vault_diamond',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:compacting_drawer')

    event.shapeless('functionalstorage:compacting_framed_drawer', ['functionalstorage:compacting_drawer', '#minecraft:planks']).id('functionalstorage:compacting_framed_drawer')

    event.shapeless('functionalstorage:fluid_1', ['#functionalstorage:drawer', 'minecraft:bucket']).id('functionalstorage:fluid_1')
    event.shapeless('functionalstorage:fluid_2', ['functionalstorage:fluid_1']).id('functionalstorage:fluid_2')
    event.shapeless('functionalstorage:fluid_4', ['functionalstorage:fluid_2']).id('functionalstorage:fluid_4')

    event.shaped(Item.of(`functionalstorage:storage_controller`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_iron_block',
        X: 'the_vault:extraordinary_larimar',
        I: 'the_vault:black_chromatic_steel_ingot',
        D: 'the_vault:gem_pog'
    }).id('functionalstorage:storage_controller')

    event.shaped(Item.of(`functionalstorage:controller_extension`),
        [
            'BOB',
            'XGX',
            'BXB'
        ], {
        B: 'the_vault:polished_vault_stone',
        O: 'the_vault:vault_diamond',
        X: 'the_vault:chromatic_steel_ingot',
        G: '#functionalstorage:drawer'
    }).id('functionalstorage:controller_extension')

    event.shaped(Item.of(`functionalstorage:linking_tool`),
        [
            'GGD',
            'GXD',
            'GOG'
        ], {
        G: 'the_vault:magic_silk',
        O: 'the_vault:vault_diamond',
        D: 'the_vault:chromatic_gold_ingot',
        X: '#functionalstorage:drawer'
    }).id('functionalstorage:linking_tool')

    event.shaped(Item.of(`functionalstorage:copper_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'minecraft:copper_ingot',
        C: 'minecraft:copper_block',
        S: '#balm:wooden_chests',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:copper_upgrade')

    event.shaped(Item.of(`functionalstorage:gold_upgrade`),
        [
            'ccc',
            'SDS',
            'cCc'
        ], {
        c: 'the_vault:chromatic_gold_ingot',
        S: 'the_vault:perfect_larimar',
        D: 'functionalstorage:copper_upgrade',
        C: 'the_vault:chromatic_gold_block'
    }).id('functionalstorage:gold_upgrade')

    event.shaped(Item.of(`functionalstorage:diamond_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'the_vault:vault_diamond',
        C: 'the_vault:vault_diamond_block',
        S: 'the_vault:extraordinary_larimar',
        D: 'functionalstorage:gold_upgrade'
    }).id('functionalstorage:diamond_upgrade')

    event.shaped(Item.of(`functionalstorage:netherite_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'minecraft:netherite_ingot',
        C: 'the_vault:vault_diamond_block',
        S: 'the_vault:perfect_black_opal',
        D: 'functionalstorage:diamond_upgrade'
    }).id('functionalstorage:netherite_upgrade')

    event.shaped(Item.of(`functionalstorage:simple_compacting_drawer`),
        [
            'SSS',
            'SDP',
            'SIS'
        ], {
        S: 'the_vault:polished_vault_stone',
        D: '#functionalstorage:drawer',
        I: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston'
    }).id('functionalstorage:simple_compacting_drawer')

    event.shaped(Item.of(`functionalstorage:collector_upgrade`),
        [
            'SHS',
            'RDR',
            'SHS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:collector_upgrade')

    event.shaped(Item.of(`functionalstorage:puller_upgrade`),
        [
            'SHS',
            'SDS',
            'SRS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:puller_upgrade')

    event.shaped(Item.of(`functionalstorage:pusher_upgrade`),
        [
            'SRS',
            'SDS',
            'SHS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:pusher_upgrade')

    event.shaped(Item.of(`functionalstorage:void_upgrade`),
        [
            'OOO',
            'BDB',
            'OOO'
        ], {
        O: 'minecraft:obsidian',
        B: 'the_vault:gem_black_opal',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:void_upgrade')

    event.shaped(Item.of(`functionalstorage:configuration_tool`),
        [
            'GGD',
            'GXD',
            'GOG'
        ], {
        G: 'the_vault:magic_silk',
        O: 'minecraft:emerald',
        D: 'the_vault:chromatic_gold_ingot',
        X: '#functionalstorage:drawer'
    }).id('functionalstorage:configuration_tool')

    event.shaped(Item.of(`functionalstorage:ender_drawer`),
        [
            'OXO',
            'DED',
            'OXO'
        ], {
        O: 'minecraft:obsidian',
        E: 'minecraft:ender_chest',
        D: '#functionalstorage:drawer',
        X: 'the_vault:perfect_larimar'
    }).id('functionalstorage:ender_drawer')

    // event.shaped(Item.of(`functionalstorage:armory_cabinet`),
    //     [
    //         'SIS',
    //         'DRD',
    //         'SIS'
    //     ], {
    //     S: 'the_vault:polished_vault_stone',
    //     D: '#functionalstorage:drawer',
    //     I: 'the_vault:black_chromatic_steel_ingot',
    //     R: 'the_vault:chromatic_steel_block'
    // }).id('functionalstorage:armory_cabinet')

    event.remove({ 'output': `functionalstorage:armory_cabinet` })
})