
onEvent("recipes", event => {
    let removedOutputsCOGN = [
        'experienceobelisk:cognitive_flux'
    ];
    removedOutputsCOGN.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('experienceobelisk:cognitive_alloy'),
        [
            ' C ',
            'CIC',
            ' C '
        ], {
        C: 'experienceobelisk:cognitive_amalgam',
        I: 'the_vault:chromatic_steel_ingot'

    }).id('experienceobelisk:cognitive_alloy')

    event.shaped(Item.of('experienceobelisk:cognitive_crystal'),
        [
            ' C ',
            'CIC',
            ' C '
        ], {
        C: 'experienceobelisk:cognitive_amalgam',
        I: 'the_vault:vault_diamond'

    }).id('experienceobelisk:cognitive_crystal')

    event.shaped(Item.of('experienceobelisk:astute_assembly'),
        [
            'CG ',
            'CIC',
            ' GC'
        ], {
        C: 'experienceobelisk:cognitive_amalgam',
        I: 'the_vault:vault_diamond',
        G: 'woldsvaults:chromatic_gold_ingot'

    }).id('experienceobelisk:astute_assembly')

    event.shapeless('experienceobelisk:cognitive_flux', ['the_vault:eternal_soul', 'minecraft:lapis_lazuli', 'the_vault:gem_larimar']).id('experienceobelisk:cognitive_flux')



})