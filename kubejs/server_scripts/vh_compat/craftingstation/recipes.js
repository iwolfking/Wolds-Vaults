if (Platform.isLoaded('craftingstation')) {
    let removedOutputsCS = [
        'craftingstation:crafting_station',
        'craftingstation:crafting_station_slab',
    ];
    
    onEvent("recipes", event => {
        removedOutputsCS.forEach(id => {
            event.remove({ 'output': `${id}` })
        })

        event.shaped(Item.of('craftingstation:crafting_station'),
            [
                'PPP',
                'PTP',
                'PXP'
            ], {
            P: 'the_vault:wooden_planks',
            X: 'the_vault:extraordinary_larimar',
            T: 'minecraft:crafting_table'
        })

        event.shaped(Item.of('craftingstation:crafting_station_slab'),
            [
                'PPP',
                'PTP',
                'PXP'
            ], {
            P: 'the_vault:wooden_planks',
            X: 'the_vault:extraordinary_larimar',
            T: '#minecraft:wooden_slabs'
        })

    })
}