let removedOutputsHNN = [
    'hostilenetworks:deep_learner',
    'hostilenetworks:blank_data_model',
    'hostilenetworks:sim_chamber',
    'hostilenetworks:loot_fabricator',
    'hostilenetworks:empty_prediction'
];
onEvent("recipes", event => {
    removedOutputsHNN.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    let vanillaMobTypes = [
        'zombie',
        'creeper',
        'blaze',
        'bee',
        'chicken',
        'cod',
        'cow',
        'drowned',
        'elder_guardian',
        'enderman',
        'evoker',
        'ghast',
        'glow_squid',
        'guardian',
        'hoglin',
        'magma_cube',
        'mooshroom',
        'phantom',
        'pig',
        'polar_bear',
        'rabbit',
        'sheep',
        'shulker',
        'skeleton',
        'slime',
        'spider',
        'squid',
        'vindicator',
        'witch',
        'wither_skeleton',
        'zombified_piglin',
        'dolphin',
        'tropical_fish',
        'salmon',
        'ravager',
        'pufferfish'
    ]

    let thermalMobTypes = ['blizz', 'blitz', 'basalz']

    let quarkMobTypes = ['wraith', 'frog', 'toretoise']

    let cloudStorageMobTypes = ['bloviator', 'badloon']

    let cageriumMobTypes = ['wither', 'ender_dragon', 'iron_golem']

    let tropicraftMobTypes = ['iguana']

    let alexsMobsTypes = ['flutter']

    // event.shaped(Item.of('hostilenetworks:deep_learner'),
    //     [
    //         'PRP',
    //         'RTR',
    //         'PXP'
    //     ], {
    //     P: 'the_vault:chromatic_steel_ingot',
    //     R: 'the_vault:vault_essence',
    //     X: 'the_vault:perfect_black_opal',
    //     T: '#forge:glass_panes'
    // })

    event.shaped(Item.of('hostilenetworks:blank_data_model'),
        [
            'PRP',
            'XTX',
            'PIP'
        ], {
        P: 'the_vault:perfect_larimar',
        R: 'the_vault:carbon',
        X: 'the_vault:vault_essence',
        I: 'the_vault:chromatic_gold_ingot',
        T: 'minecraft:smooth_stone'
    })

    event.shaped(Item.of('hostilenetworks:sim_chamber'),
        [
            'BGB',
            'POP',
            'LRL'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        G: '#forge:glass_panes',
        P: 'the_vault:extraordinary_larimar',
        O: 'minecraft:obsidian',
        L: 'the_vault:wutodic_silver_block',
        R: 'minecraft:comparator'
    })

    event.shaped(Item.of('hostilenetworks:loot_fabricator'),
        [
            ' G ',
            'POP',
            'LRL'
        ], {
        G: 'the_vault:extraordinary_black_opal',
        P: 'the_vault:vault_diamond_block',
        O: 'minecraft:obsidian',
        L: 'the_vault:chromatic_gold_block',
        R: 'minecraft:comparator'
    })

    vanillaMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: 'the_vault:vault_diamond'
        })

        
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`)
        })
    })

    thermalMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:thermal/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `thermal:${mob}_spawn_egg`,
            M: 'the_vault:vault_diamond'
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:thermal/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `thermal:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:thermal/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:thermal/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `thermal:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:thermal/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:thermal/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `thermal:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:thermal/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:thermal/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `thermal:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:thermal/${mob}"}}`)
        })
    })

    quarkMobTypes.forEach(mob => {

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:quark/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `quark:${mob}_spawn_egg`,
            M: 'the_vault:vault_diamond'
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:quark/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `quark:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:quark/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:quark/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `quark:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:quark/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:quark/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `quark:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:quark/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:quark/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `quark:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:quark/${mob}"}}`)
        })
    })

    cageriumMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: 'the_vault:vault_diamond'
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`)
        })
    })

    cloudStorageMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:cloudstorage/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cloudstorage:spawn_egg_${mob}`,
            M: 'the_vault:vault_diamond'
        })

        
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:cloudstorage/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cloudstorage:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:cloudstorage/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:cloudstorage/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cloudstorage:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:cloudstorage/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:cloudstorage/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cloudstorage:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:cloudstorage/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:cloudstorage/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cloudstorage:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:cloudstorage/${mob}"}}`)
        })
    })

    tropicraftMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:tropicraft/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `tropicraft:${mob}_spawn_egg`,
            M: 'the_vault:vault_diamond'
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:tropicraft/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `tropicraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:tropicraft/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:tropicraft/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `tropicraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:tropicraft/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:tropicraft/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `tropicraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:tropicraft/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:tropicraft/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `tropicraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:tropicraft/${mob}"}}`)
        })
    })


    alexsMobsTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:alexsmobs/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `alexsmobs:spawn_egg_${mob}`,
            M: 'the_vault:vault_diamond'
        })

    
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:alexsmobs/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `alexsmobs:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:alexsmobs/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:alexsmobs/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `alexsmobs:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:alexsmobs/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:alexsmobs/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `alexsmobs:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:alexsmobs/${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:alexsmobs/${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `alexsmobs:spawn_egg_${mob}`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:alexsmobs/${mob}"}}`)
        })
    })

    event.shapeless('16x hostilenetworks:empty_prediction', ['4x #forge:glass_panes', 'minecraft:lapis_lazuli', 'the_vault:chromatic_iron_ingot'])



})