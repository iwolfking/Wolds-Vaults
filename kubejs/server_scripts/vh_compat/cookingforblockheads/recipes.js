onEvent('recipes', event => {

    event.shaped('cookingforblockheads:sink', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        A: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:terracotta',
        D: Item.of('the_vault:infinite_water_bucket') // keeps the bucket in the recipe
    }).id('cookingforblockheads:sink');

});
