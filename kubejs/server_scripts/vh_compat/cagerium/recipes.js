onEvent('recipes', event => {

    // Cage Piece
    event.shaped('ispawner:cage_piece', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ispawner:cage_dust',
        B: 'the_vault:black_chromatic_steel_ingot'
    }).id('ispawner:cage_piece');

    // Survival Spawner
    event.shaped('ispawner:survival_spawner', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'the_vault:black_chromatic_steel_ingot',
        B: 'ispawner:cage_piece',
        C: 'the_vault:echo_pog'
    }).id('ispawner:survival_spawner');

    // Cagerium Cage
    event.shaped('cagerium:cage', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'the_vault:wutodic_silver_ingot',
        B: 'cagerium:ominous_skull',
        C: 'the_vault:chromatic_steel_block'
    }).id('cagerium:cage');

    // Cagerium Terrarium
    event.shaped('cagerium:terrarium', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: '#forge:glass',
        B: 'the_vault:vault_meat_block',
        C: 'cagerium:binding_wood_plate'
    }).id('cagerium:terrarium');

    // Cagerium Plate
    event.shaped('cagerium:plate', [
        '   ',
        'ABA',
        '   '
    ], {
        A: 'minecraft:air',
        B: 'cagerium:binding_gemstone',
        C: 'the_vault:black_chromatic_steel_block'
    }).id('cagerium:plate');

    // Cagerium Ominous Skull
    event.shaped('cagerium:ominous_skull', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:wutodic_mass',
        C: 'the_vault:black_chromatic_steel_ingot',
        D: 'minecraft:wither_skeleton_skull',
        E: 'the_vault:extraordinary_larimar'
    }).id('cagerium:ominous_skull');

    // Cagerium Wood Binding Plate
    event.shaped('cagerium:binding_wood_plate', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:driftwood',
        C: 'the_vault:perfect_larimar',
        D: 'the_vault:driftwood',
        E: 'the_vault:chromatic_steel_ingot'
    }).id('cagerium:binding_wood_plate');

    // Cagerium Binding Gemstone
    event.shaped('cagerium:binding_gemstone', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'the_vault:wutodic_mass',
        B: 'the_vault:extraordinary_larimar',
        C: 'the_vault:echo_pog'
    }).id('cagerium:binding_gemstone');

    // Cagerium Burning Upgrade
    event.shaped('cagerium:burning_upgrade', [
        '   ',
        ' B ',
        'ACA'
    ], {
        A: 'the_vault:extraordinary_larimar',
        B: 'minecraft:flint_and_steel',
        C: 'the_vault:black_chromatic_steel_ingot'
    }).id('cagerium:burning_upgrade');

    // Cagerium Skeleton Key
    event.shaped('cagerium:skeleton_key', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'the_vault:perfect_larimar',
        B: 'the_vault:vault_diamond',
        C: 'the_vault:mystery_egg'
    }).id('cagerium:skeleton_key');

});
