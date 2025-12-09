let removedOutputsLTL = [
    'littlelogistics:chunk_loader_barge',
    'littlelogistics:chunk_loader_car'
];
onEvent("recipes", event => {
    removedOutputsLTL.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('littlelogistics:rapid_hopper'),
        [
            'DHD',
            ' R '
        ], {
        D: 'woldvaults:chromatic_gold_ingot',
        H: 'minecraft:hopper',
        R: 'minecraft:redstone_block'
    }).id('littlelogistics:rapid_hopper')

    event.shaped(Item.of('littlelogistics:conductors_wrench'),
        [
            '  C',
            ' ID',
            'I  '
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'minecraft:red_dye',
        C: 'littlelogistics:spring'
    }).id('littlelogistics:conductors_wrench')

    event.shaped(Item.of('littlelogistics:barge'),
        [
            ' L ',
            'SCS',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: 'the_vault:driftwood_planks',
        C: 'minecraft:chest',
        L: 'the_vault:perfect_larimar'
    }).id('littlelogistics:barge')

    event.shaped(Item.of('littlelogistics:fishing_barge'),
        [
            ' L ',
            'SCS',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: 'minecraft:fishing_rod',
        C: 'littlelogistics:barge',
        L: 'the_vault:perfect_larimar'
    }).id('littlelogistics:fishing_barge')

    event.shaped(Item.of('littlelogistics:fluid_barge'),
        [
            ' L ',
            'SCS',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: 'minecraft:glass',
        C: 'littlelogistics:barge',
        L: 'the_vault:perfect_larimar'
    }).id('littlelogistics:fluid_barge')

    event.shaped(Item.of('littlelogistics:seater_barge'),
        [
            ' L ',
            'SCS',
            'III'
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        S: '#minecraft:wooden_stairs',
        C: 'littlelogistics:barge',
        L: 'the_vault:perfect_larimar'
    }).id('littlelogistics:seater_barge')

    event.shaped(Item.of('littlelogistics:tug'),
        [
            ' I ',
            'SFS',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: 'minecraft:piston',
        F: 'minecraft:blast_furnace'
    }).id('littlelogistics:tug')

    event.shaped(Item.of('littlelogistics:energy_tug'),
        [
            ' I ',
            'SFS',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: 'minecraft:piston',
        F: 'littlelogistics:vessel_charger'
    }).id('littlelogistics:energy_tug')

    event.shaped(Item.of('littlelogistics:spring', 6),
        [
            '   ',
            'SNS',
            'NSN'
        ], {
        N: 'the_vault:chromatic_iron_nugget',
        S: 'minecraft:string'
    }).id('littlelogistics:spring')

    event.shaped(Item.of('littlelogistics:tug_route'),
        [
            ' R ',
            'LTL',
            ' R '
        ], {
        R: 'minecraft:redstone',
        L: 'the_vault:perfect_larimar',
        T: 'littlelogistics:transmitter_component'
    }).id('littlelogistics:tug_route')

    event.shaped(Item.of('littlelogistics:locomotive_route'),
        [
            ' R ',
            'LTL',
            ' R '
        ], {
        R: 'minecraft:redstone',
        L: 'the_vault:perfect_larimar',
        T: 'littlelogistics:transmitter_component'
    }).id('littlelogistics:locomotive_route')

    event.shaped(Item.of('littlelogistics:seater_car'),
        [
            '   ',
            'DDD',
            'I I'
        ], {
        D: 'the_vault:driftwood_planks',
        I: 'the_vault:chromatic_steel_ingot'
    }).id('littlelogistics:seater_car')

    event.shaped(Item.of('littlelogistics:steam_locomotive'),
        [
            ' I ',
            'PFP',
            'ICI'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston',
        C: 'littlelogistics:seater_car',
        F: 'minecraft:blast_furnace'
    }).id('littlelogistics:steam_locomotive')

    event.shaped(Item.of('littlelogistics:energy_locomotive'),
        [
            ' I ',
            'PFP',
            'ICI'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston',
        C: 'littlelogistics:seater_car',
        F: 'littlelogistics:vessel_charger'
    }).id('littlelogistics:energy_locomotive')

    event.shaped(Item.of('littlelogistics:receiver_component', 8),
        [
            ' E ',
            ' R ',
            ' S '
        ], {
        E: 'minecraft:ender_eye',
        R: 'the_vault:perfect_larimar',
        S: 'minecraft:stone_slab'
    }).id('littlelogistics:receiver_component')

    event.shaped(Item.of('littlelogistics:transmitter_component', 4),
        [
            ' E ',
            ' R ',
            ' S '
        ], {
        E: 'minecraft:ender_pearl',
        R: 'the_vault:perfect_larimar',
        S: 'minecraft:stone_slab'
    }).id('littlelogistics:transmitter_component')

    event.shaped(Item.of('littlelogistics:creative_capacitor'),
        [
            ' E ',
            'ERE',
            ' S '
        ], {
        E: 'woldvaults:wold_star_chunk',
        R: 'the_vault:extraordinary_black_opal',
        S: 'minecraft:polished_deepslate_slab'
    }).id('littlelogistics:creative_capacitor')

    event.shaped(Item.of('littlelogistics:vessel_charger'),
        [
            ' E ',
            'XRX',
            'LRL'
        ], {
        E: 'woldvaults:chromatic_gold_ingot',
        R: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:redstone_block',
        X: 'the_vault:perfect_larimar'
    }).id('littlelogistics:vessel_charger')

    event.shaped(Item.of('littlelogistics:fluid_hopper'),
        [
            '   ',
            'GHG',
            'EGE'
        ], {
        G: 'minecraft:glass',
        H: 'minecraft:hopper',
        E: 'the_vault:vault_diamond'
    }).id('littlelogistics:fluid_hopper')

})