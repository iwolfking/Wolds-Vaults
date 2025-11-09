onEvent('recipes', event => {

    // Stonecutter recipe
    event.stonecutting('darkutils:blank_plate', 'the_vault:chromatic_iron_ingot').id('darkutils:blank_plate');

    // Vector Plate (outputs 4)
    event.shaped(Item.of('darkutils:vector_plate', 4), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:blank_plate',
        B: 'the_vault:gem_larimar',
        C: 'the_vault:magic_silk'
    }).id('darkutils:vector_plate');

    // Vector Plate Fast (outputs 6)
    event.shaped(Item.of('darkutils:vector_plate_fast', 6), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:vector_plate',
        B: 'the_vault:perfect_larimar',
        C: 'the_vault:magic_silk'
    }).id('darkutils:vector_plate_fast');

    // Vector Plate Extreme (outputs 6)
    event.shaped(Item.of('darkutils:vector_plate_extreme', 6), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:vector_plate_fast',
        B: 'the_vault:extraordinary_larimar',
        C: 'the_vault:magic_silk'
    }).id('darkutils:vector_plate_extreme');

    // Vector Plate Ultra (outputs 4)
    event.shaped(Item.of('darkutils:vector_plate_ultra', 4), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:vector_plate_extreme',
        B: 'the_vault:perfect_echo_gem',
        C: 'the_vault:gem_pog'
    }).id('darkutils:vector_plate_ultra');

    // Damage Plate
    event.shaped('darkutils:damage_plate', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:blank_plate',
        B: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:gem_pog'
    }).id('darkutils:damage_plate');

    // Damage Plate Player
    event.shaped('darkutils:damage_plate_player', [
        '   ',
        ' B ',
        'ADA'
    ], {
        A: 'darkutils:blank_plate',
        B: 'the_vault:echo_pog',
        D: 'darkutils:damage_plate'
    }).id('darkutils:damage_plate_player');

});
