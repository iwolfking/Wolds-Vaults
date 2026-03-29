let removedOutputsPC = [
    "draconicevolution:draconium_core",
    "draconicevolution:wyvern_core",
    "draconicevolution:wyvern_sword",
    "draconicevolution:draconic_sword",
    "draconicevolution:chaotic_sword",
    "draconicevolution:wyvern_bow",
    "draconicevolution:draconic_bow",
    "draconicevolution:chaotic_bow",
    "draconicevolution:draconic_staff",
    "draconicevolution:chaotic_staff",
    "draconicevolution:wyvern_chestpiece",
    "draconicevolution:draconic_chestpiece",
    "draconicevolution:chaotic_chestpiece",
    "draconicevolution:magnet",
    "draconicevolution:advanced_magnet",

];
onEvent("recipes", event => {
    removedOutputsPC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('draconicevolution:draconium_core'),
        [
            'STS',
            'TRT',
            'STS',
        ], {
            S: '#forge:ingots/draconium',
            T: 'the_vault:black_chromatic_steel_ingot',
            R: 'woldsvaults:pog_prism',
        })
    event.shaped(Item.of('draconicevolution:wyvern_core'),
        [
            'STS',
            'TRT',
            'STS',
        ], {
            S: 'the_vault:echoing_ingot',
            T: 'draconicevolution:wyvern_core',
            R: 'woldsvaults:extraordinary_pog_prism',
        })
   })
