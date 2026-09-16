
onEvent("recipes", event => {

    let colors = ['white', 'orange', 'magenta', 'light_blue', 'blue', 'brown', 'red', 'green', 'cyan', 'black', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'purple']

    let potTypes = ['terracotta', 'concrete', 'glazed_terracotta']

    colors.forEach(color => {
        potTypes.forEach(type => {
            event.remove({ 'output': `botanypotstiers:elite_${color}_${type}_botany_pot` })
            event.remove({ 'output': `botanypotstiers:elite_${color}_${type}_hopper_botany_pot` })
            event.remove({ 'output': `botanypotstiers:ultra_${color}_${type}_botany_pot` })
            event.remove({ 'output': `botanypotstiers:ultra_${color}_${type}_hopper_botany_pot` })
            event.remove({ 'output': `botanypotstiers:creative_${color}_${type}_botany_pot` })
            event.remove({ 'output': `botanypotstiers:creative_${color}_${type}_hopper_botany_pot` })
            event.shapeless(Item.of(`botanypotstiers:elite_${color}_${type}_botany_pot`), [`botanypotstiers:elite_${color}_${type}_hopper_botany_pot`])
            event.shapeless(Item.of(`botanypotstiers:elite_${color}_${type}_hopper_botany_pot`), [`botanypotstiers:elite_${color}_${type}_botany_pot`])
            event.shapeless(Item.of(`botanypotstiers:ultra_${color}_${type}_botany_pot`), [`botanypotstiers:ultra_${color}_${type}_hopper_botany_pot`])
            event.shapeless(Item.of(`botanypotstiers:ultra_${color}_${type}_hopper_botany_pot`), [`botanypotstiers:ultra_${color}_${type}_botany_pot`])
            event.shapeless(Item.of(`botanypotstiers:creative_${color}_${type}_botany_pot`), [`botanypotstiers:creative_${color}_${type}_hopper_botany_pot`])
            event.shapeless(Item.of(`botanypotstiers:creative_${color}_${type}_hopper_botany_pot`), [`botanypotstiers:creative_${color}_${type}_botany_pot`])
            event.shaped(Item.of(`botanypotstiers:elite_${color}_${type}_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XGX'
                ], {
                P: `botanypots:${color}_${type}_botany_pot`,
                G: 'woldsvaults:pog_prism',
                I: 'the_vault:black_chromatic_steel_ingot',
                X: 'the_vault:packed_vault_meat_block'
            })

            event.shaped(Item.of(`botanypotstiers:ultra_${color}_${type}_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XLX'
                ], {
                P: `botanypotstiers:elite_${color}_${type}_botany_pot`,
                G: 'the_vault:echo_pog',
                I: 'the_vault:infused_eternal_soul',
                X: 'the_vault:chromatic_steel_block',
                L: 'the_vault:extraordinary_black_opal'
            })

            event.shaped(Item.of(`botanypotstiers:creative_${color}_${type}_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XGX'
                ], {
                P: `botanypotstiers:ultra_${color}_${type}_botany_pot`,
                G: 'woldsvaults:wold_star_chunk',
                I: 'the_vault:echo_pog',
                X: 'the_vault:black_chromatic_steel_block'
            })


            event.shaped(Item.of(`botanypotstiers:elite_${color}_${type}_hopper_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XGX'
                ], {
                P: `botanypots:${color}_${type}_hopper_botany_pot`,
                G: 'woldsvaults:pog_prism',
                I: 'the_vault:black_chromatic_steel_ingot',
                X: 'the_vault:packed_vault_meat_block'
            })

            event.shaped(Item.of(`botanypotstiers:ultra_${color}_${type}_hopper_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XLX'
                ], {
                P: `botanypotstiers:elite_${color}_${type}_hopper_botany_pot`,
                G: 'the_vault:echo_pog',
                I: 'the_vault:infused_eternal_soul',
                X: 'the_vault:chromatic_steel_block',
                L: 'the_vault:extraordinary_black_opal'
            })

            event.shaped(Item.of(`botanypotstiers:creative_${color}_${type}_hopper_botany_pot`),
                [
                    'XGX',
                    'IPI',
                    'XGX'
                ], {
                P: `botanypotstiers:ultra_${color}_${type}_hopper_botany_pot`,
                G: 'woldsvaults:wold_star_chunk',
                I: 'the_vault:echo_pog',
                X: 'the_vault:black_chromatic_steel_block'
            })
        })
    })

    event.remove({ 'output': `botanypotstiers:elite_terracotta_botany_pot` })
    event.remove({ 'output': `botanypotstiers:elite_terracotta_hopper_botany_pot` })
    event.remove({ 'output': `botanypotstiers:ultra_terracotta_botany_pot` })
    event.remove({ 'output': `botanypotstiers:ultra_terracotta_hopper_botany_pot` })
    event.remove({ 'output': `botanypotstiers:creative_terracotta_botany_pot` })
    event.remove({ 'output': `botanypotstiers:creative_terracotta_hopper_botany_pot` })
    event.shapeless('botanypotstiers:elite_terracotta_botany_pot', ['botanypotstiers:elite_terracotta_hopper_botany_pot'])
    event.shapeless('botanypotstiers:ultra_terracotta_botany_pot', ['botanypotstiers:ultra_terracotta_hopper_botany_pot'])
    event.shapeless('botanypotstiers:creative_terracotta_botany_pot', ['botanypotstiers:creative_terracotta_hopper_botany_pot'])
    event.shapeless('botanypotstiers:elite_terracotta_hopper_botany_pot', ['botanypotstiers:elite_terracotta_botany_pot'])
    event.shapeless('botanypotstiers:ultra_terracotta_hopper_botany_pot', ['botanypotstiers:ultra_terracotta_botany_pot'])
    event.shapeless('botanypotstiers:creative_terracotta_hopper_botany_pot', ['botanypotstiers:creative_terracotta_botany_pot'])
    event.shaped(Item.of('botanypotstiers:elite_terracotta_botany_pot'),
        [
            'XGX',
            'IPI',
            'XGX'
        ], {
        P: 'botanypots:terracotta_hopper_botany_pot',
        G: 'woldsvaults:pog_prism',
        I: 'the_vault:black_chromatic_steel_ingot',
        X: 'the_vault:packed_vault_meat_block'
    })

    event.shaped(Item.of('botanypotstiers:ultra_terracotta_botany_pot'),
        [
            'XGX',
            'IPI',
            'XLX'
        ], {
        P: 'botanypotstiers:elite_terracotta_hopper_botany_pot',
        G: 'the_vault:echo_pog',
        I: 'the_vault:infused_eternal_soul',
        X: 'the_vault:chromatic_steel_block',
        L: 'the_vault:extraordinary_black_opal'
    })

    event.shaped(Item.of('botanypotstiers:creative_terracotta_botany_pot'),
        [
            'XGX',
            'IPI',
            'XGX'
        ], {
        P: 'botanypotstiers:ultra_terracotta_hopper_botany_pot',
        G: 'woldsvaults:wold_star_chunk',
        I: 'the_vault:echo_pog',
        X: 'the_vault:black_chromatic_steel_block'
    })

    event.shaped(Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot'),
        [
            'XGX',
            'IPI',
            'XGX'
        ], {
        P: 'botanypots:terracotta_hopper_botany_pot',
        G: 'woldsvaults:pog_prism',
        I: 'the_vault:black_chromatic_steel_ingot',
        X: 'the_vault:packed_vault_meat_block'
    })

    event.shaped(Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot'),
        [
            'XGX',
            'IPI',
            'XLX'
        ], {
        P: 'botanypotstiers:elite_terracotta_hopper_botany_pot',
        G: 'woldsvaults:pog_prism',
        I: 'the_vault:infused_eternal_soul',
        X: 'the_vault:chromatic_steel_block',
        L: 'the_vault:extraordinary_black_opal'
    })

    event.shaped(Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot'),
        [
            'XGX',
            'IPI',
            'XGX'
        ], {
        P: 'botanypotstiers:ultra_terracotta_hopper_botany_pot',
        G: 'woldsvaults:wold_star_chunk',
        I: 'the_vault:echo_pog',
        X: 'the_vault:black_chromatic_steel_block'
    })

})