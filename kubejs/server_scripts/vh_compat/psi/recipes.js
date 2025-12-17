onEvent("recipes", event => {
    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": "the_vault:vault_essence"
        },
        "output": {
            "item": "psi:psidust"
        }
    }).id('psi:psidust')

    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_iron"
        },
        "input": {
            "item": "woldsvaults:chromatic_gold_ingot"
        },
        "output": {
            "item": "psi:psimetal"
        },
        "trick": "psi:trick_infusion"
    }).id('psi:psimetal')

    event.custom({
        "type": "psi:trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_psimetal"
        },
        "input": {
            "item": "the_vault:vault_diamond"
        },
        "output": {
            "item": "psi:psigem"
        },
        "trick": "psi:trick_greater_infusion"
    }).id('psi:psigem')

    event.custom({
        "type": "psi:dimension_trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_psimetal"
        },
        "dimension": "minecraft:the_end",
        "input": {
            "item": "the_vault:carbon"
        },
        "output": {
            "item": "psi:ebony_substance"
        },
        "trick": "psi:trick_ebony_ivory"
    }).id('psi:ebony_substance')

    event.custom({
        "type": "psi:dimension_trick_crafting",
        "cad": {
            "item": "psi:cad_assembly_psimetal"
        },
        "dimension": "minecraft:the_end",
        "input": {
            "item": "the_vault:magic_silk"
        },
        "output": {
            "item": "psi:ivory_substance"
        },
        "trick": "psi:trick_ebony_ivory"
    }).id('psi:ivory_substance')

    event.shaped(Item.of('psi:cad_assembly_iron'),
        [
            '   ',
            'III',
            'IL '
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        L: 'the_vault:perfect_larimar'
    }).id('psi:cad_assembly_iron')

    event.shaped(Item.of('psi:cad_assembly_gold'),
        [
            '   ',
            'III',
            'IL '
        ], {
        I: 'woldsvaults:chromatic_gold_ingot',
        L: 'the_vault:extraordinary_larimar'
    }).id('psi:cad_assembly_gold')

    event.shaped(Item.of('psi:cad_assembly_psimetal'),
        [
            '   ',
            'III',
            'IL '
        ], {
        I: 'psi:psimetal',
        L: 'the_vault:gem_pog'
    }).id('psi:cad_assembly_psimetal')

    event.shaped(Item.of('psi:cad_assembly_ivory_psimetal'),
        [
            '   ',
            'III',
            'IL '
        ], {
        I: 'psi:ivory_psimetal',
        L: 'woldsvaults:pog_prism'
    }).id('psi:cad_assembly_ivory')

    event.shaped(Item.of('psi:cad_assembly_ebony_psimetal'),
        [
            '   ',
            'III',
            'IL '
        ], {
        I: 'psi:ebony_psimetal',
        L: 'woldsvaults:pog_prism'
    }).id('psi:cad_assembly_ebony')

    event.shaped(Item.of('psi:cad_core_basic'),
        [
            ' I ',
            'IDI',
            ' I '
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        D: 'psi:psidust'
    }).id('psi:cad_core_basic')

    event.shaped(Item.of('psi:cad_core_overclocked'),
        [
            ' I ',
            'IDI',
            ' I '
        ], {
        I: 'psi:psimetal',
        D: 'the_vault:vault_diamond'
    }).id('psi:cad_core_overclocked')

    event.shaped(Item.of('psi:cad_core_conductive'),
        [
            ' I ',
            'IDI',
            ' I '
        ], {
        I: 'psi:psimetal',
        D: 'woldsvaults:vault_essence_block'
    }).id('psi:cad_core_conductive')

    event.shaped(Item.of('psi:cad_core_hyperclocked'),
        [
            ' G ',
            'IDI',
            ' G '
        ], {
        I: 'psi:psimetal',
        D: 'the_vault:perfect_larimar',
        G: 'psi:psigem'
    }).id('psi:cad_core_hyperclocked')

    event.shaped(Item.of('psi:cad_core_radiative'),
        [
            ' G ',
            'IDI',
            ' G '
        ], {
        I: 'psi:psimetal',
        D: 'woldsvaults:vault_essence_block',
        G: 'psi:psigem'
    }).id('psi:cad_core_radiative')

    event.shaped(Item.of('psi:cad_socket_basic'),
        [
            'DI ',
            'I  ',
            '   '
        ], {
        D: 'psi:psidust',
        I: 'the_vault:chromatic_steel_ingot'
    }).id('psi:cad_socket_basic')

    event.shaped(Item.of('psi:cad_socket_signaling'),
        [
            'DI ',
            'I  ',
            '   '
        ], {
        D: 'woldsvaults:vault_essence_block',
        I: 'psi:psimetal'
    }).id('psi:cad_socket_signaling')

    event.shaped(Item.of('psi:cad_socket_large'),
        [
            'DI ',
            'I  ',
            '   '
        ], {
        D: 'the_vault:vault_diamond',
        I: 'psi:psimetal'
    }).id('psi:cad_socket_large')

    event.shaped(Item.of('psi:cad_socket_transmissive'),
        [
            'DI ',
            'IG ',
            '   '
        ], {
        D: 'woldsvaults:vault_essence_block',
        I: 'psi:psimetal',
        G: 'psi:psigem'
    }).id('psi:cad_socket_transmissive')

    event.shaped(Item.of('psi:cad_socket_huge'),
        [
            'DI ',
            'IG ',
            '   '
        ], {
        D: 'the_vault:vault_diamond',
        I: 'psi:psimetal',
        G: 'psi:psigem'
    }).id('psi:cad_socket_huge')

    event.shaped(Item.of('psi:cad_battery_basic'),
        [
            ' I ',
            ' D ',
            ' G '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'psi:psidust',
        G: 'woldsvaults:chromatic_gold_ingot'
    }).id('psi:cad_battery_basic')

    event.shaped(Item.of('psi:cad_battery_extended'),
        [
            ' I ',
            ' D ',
            ' G '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'psi:psimetal',
        G: 'woldsvaults:chromatic_gold_ingot'
    }).id('psi:cad_assembly_extended')

    event.shaped(Item.of('psi:cad_battery_ultradense'),
        [
            ' I ',
            ' D ',
            ' G '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'psi:psigem',
        G: 'woldsvaults:chromatic_gold_ingot'
    }).id('psi:cad_battery_ultradense')

    event.shaped(Item.of('psi:cad_assembler'),
        [
            'IPI',
            'IXI',
            ' I '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_pog',
        P: 'minecraft:piston'
    }).id('psi:cad_assembler')

    event.shaped(Item.of('psi:programmer'),
        [
            'IPI',
            'IXI',
            ' I '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'woldsvaults:pog_prism',
        P: 'psi:psidust'
    }).id('psi:programmer')

})