let vanillaStandardCompressed = [
    'cobbled_deepslate_1',
    'cobbled_deepslate_2',
    'deepslate_1',
    'deepslate_2',
    'honeycomb_block_1',
    'nether_bricks_1',
    'glowstone_1',
    'nether_wart_block_1',
    'shroomlight_1',
    'shroomlight_2',
    'warped_wart_block_1',
    'warped_wart_block_2',
    'soul_soil_1',
    'soul_soil_2',
    'sponge_1',
    'sponge_2',
    'tuff_1',
    'tuff_2',
    'calcite_1',
    'calcite_2',
    'amethyst_block_1',
    'amethyst_block_2',
    'slime_block_1',
    "lime_concrete_powder_1",
    "black_concrete_powder_1",
    "red_concrete_powder_1",
    "green_concrete_powder_1",
    "yellow_concrete_powder_1",
    "light_blue_concrete_powder_1",
    "magenta_concrete_powder_1",
    "orange_concrete_powder_1",
    "white_concrete_powder_1",
    "brown_concrete_powder_1",
    "blue_concrete_powder_1",
    "purple_concrete_powder_1",
    "cyan_concrete_powder_1",
    "light_gray_concrete_powder_1",
    "gray_concrete_powder_1",
    "pink_concrete_powder_1",
    "lime_concrete_powder_2",
    "black_concrete_powder_2",
    "red_concrete_powder_2",
    "green_concrete_powder_2",
    "yellow_concrete_powder_2",
    "light_blue_concrete_powder_2",
    "magenta_concrete_powder_2",
    "orange_concrete_powder_2",
    "white_concrete_powder_2",
    "brown_concrete_powder_2",
    "blue_concrete_powder_2",
    "purple_concrete_powder_2",
    "cyan_concrete_powder_2",
    "light_gray_concrete_powder_2",
    "gray_concrete_powder_2",
    "pink_concrete_powder_2",
    "blackstone_1",
    "blackstone_2",
    "moss_block_1",
    "moss_block_2"
]

let botaniaCompressed = [
    "white_petal_block_1",
    "orange_petal_block_1",
    "magenta_petal_block_1",
    "light_blue_petal_block_1",
    "yellow_petal_block_1",
    "lime_petal_block_1",
    "pink_petal_block_1",
    "gray_petal_block_1",
    "light_gray_petal_block_1",
    "cyan_petal_block_1",
    "purple_petal_block_1",
    "blue_petal_block_1",
    "brown_petal_block_1",
    "green_petal_block_1",
    "red_petal_block_1",
    "black_petal_block_1",
    "livingrock_1",
    "livingrock_2",
    "livingwood_1",
    "livingwood_2"
]



onEvent('block.registry', event => {
    vanillaStandardCompressed.forEach(block => {
        let splitId = block.split("_")
        var integerOfCompression = 0;
        for (var i = 0; i < splitId.length; i++) {
            if (splitId[i] == "1" || splitId[i] == "2") {
                integerOfCompression = parseInt(splitId[i])
                continue;
            }
            splitId[i] = splitId[i][0].toUpperCase() + splitId[i].substr(1);
        }
        let finalizedDisplayName = `${integerOfCompression}x Compressed ${splitId.join(' ').slice(0, -2)}`;

        event.create(`minecraft:${block}`).tagBlock('minecraft:mineable/pickaxe').displayName(finalizedDisplayName)
    })

    botaniaCompressed.forEach(block => {
        let splitId = block.split("_")
        var integerOfCompression = 0;
        for (var i = 0; i < splitId.length; i++) {
            if (splitId[i] == "1" || splitId[i] == "2") {
                integerOfCompression = parseInt(splitId[i])
                continue;
            }
            splitId[i] = splitId[i][0].toUpperCase() + splitId[i].substr(1);
        }
        let finalizedDisplayName = `${integerOfCompression}x Compressed ${splitId.join(' ').slice(0, -2)}`;

        event.create(`botania:${block}`).tagBlock('minecraft:mineable/pickaxe').displayName(finalizedDisplayName)
    })
})