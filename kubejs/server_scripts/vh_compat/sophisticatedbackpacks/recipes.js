onEvent('recipes', event => {

    // --- Standard Shaped Recipes ---

    // Basic Backpack
    event.shaped('sophisticatedbackpacks:backpack', [
        'SDS',
        'PMP',
        'SDS'
    ], {
        S: 'minecraft:shulker_shell',
        D: 'the_vault:vault_diamond',
        P: 'the_vault:perfect_larimar',
        M: 'the_vault:magic_silk_block'
    }).id('sophisticatedbackpacks:backpack');

    // Upgrade Base
    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'CVC',
        'PMP',
        'CVC'
    ], {
        C: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:vault_essence',
        P: 'the_vault:perfect_larimar',
        M: 'the_vault:magic_silk_block'
    }).id('sophisticatedbackpacks:upgrade_base');

    // Stack Upgrades
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'CVC',
        'PBP',
        'CVC'
    ], {
        C: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:vault_diamond',
        P: 'the_vault:perfect_larimar',
        B: 'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_1');

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'CVC',
        'PBP',
        'CVC'
    ], {
        C: 'the_vault:chromatic_iron_block',
        V: 'the_vault:vault_diamond',
        P: 'the_vault:extraordinary_larimar',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_1'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_2');

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'CEC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:gem_pog',
        P: 'the_vault:extraordinary_larimar',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_2'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_3');

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
        'CBC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:black_chromatic_steel_ingot',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_3',
        P: 'the_vault:extraordinary_larimar',
        E: 'the_vault:vault_diamond_block'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_4');

    // Refill Upgrade
    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        'SMS',
        'CPC',
        'RVR'
    ], {
        S: 'the_vault:magic_silk',
        M: 'the_vault:gem_pog',
        C: 'the_vault:chromatic_steel_ingot',
        P: 'sophisticatedbackpacks:upgrade_base',
        R: 'minecraft:redstone_block',
        V: 'the_vault:vault_diamond_block'
    }).id('sophisticatedbackpacks:refill_upgrade');

    // Void Upgrade
    event.shaped('sophisticatedbackpacks:void_upgrade', [
        'CDC',
        'BVB',
        'CVC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        D: 'the_vault:gem_echo',
        B: 'sophisticatedbackpacks:upgrade_base',
        V: 'the_vault:vault_diamond'
    }).id('sophisticatedbackpacks:void_upgrade');

    // Advanced Void Upgrade
    event.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
        'CBC',
        'BVB',
        'RDR'
    ], {
        C: 'the_vault:black_chromatic_steel_ingot',
        B: 'sophisticatedbackpacks:void_upgrade',
        V: 'the_vault:chromatic_steel_block',
        D: 'the_vault:gem_echo',
        R: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:advanced_void_upgrade');

    // Feeding Upgrade
    event.shaped('sophisticatedbackpacks:feeding_upgrade', [
        'CMC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        M: 'minecraft:golden_carrot',
        P: 'sophisticatedbackpacks:upgrade_base',
        B: 'the_vault:chromatic_steel_ingot',
        E: 'minecraft:golden_apple'
    }).id('sophisticatedbackpacks:feeding_upgrade');

    // Advanced Feeding Upgrade
    event.shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
        'CMC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        M: 'the_vault:vault_diamond',
        P: 'sophisticatedbackpacks:feeding_upgrade',
        B: 'the_vault:chromatic_steel_ingot',
        E: 'minecraft:gold_block'
    }).id('sophisticatedbackpacks:advanced_feeding_upgrade');

    // Pickup Upgrade
    event.shaped('sophisticatedbackpacks:pickup_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        P: 'sophisticatedbackpacks:upgrade_base',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'the_vault:magic_silk',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:pickup_upgrade');

    // Advanced Pickup Upgrade
    event.shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:chromatic_steel_ingot',
        H: 'the_vault:vault_diamond',
        P: 'sophisticatedbackpacks:pickup_upgrade',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:gold_block',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:advanced_pickup_upgrade');

    // Filter Upgrade
    event.shaped('sophisticatedbackpacks:filter_upgrade', [
        'CMC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:perfect_larimar',
        M: 'the_vault:magic_silk',
        P: 'sophisticatedbackpacks:upgrade_base',
        B: 'the_vault:perfect_larimar',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:filter_upgrade');

    // Advanced Filter Upgrade
    event.shaped('sophisticatedbackpacks:advanced_filter_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:chromatic_steel_ingot',
        H: 'the_vault:vault_diamond',
        P: 'sophisticatedbackpacks:filter_upgrade',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:gold_block',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:advanced_filter_upgrade');

    // Restock Upgrade
    event.shaped('sophisticatedbackpacks:restock_upgrade', [
        'CEC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:chromatic_iron_block',
        E: 'the_vault:gem_echo',
        P: 'sophisticatedbackpacks:upgrade_base',
        B: 'the_vault:magic_silk'
    }).id('sophisticatedbackpacks:restock_upgrade');

    // Advanced Restock Upgrade
    event.shaped('sophisticatedbackpacks:advanced_restock_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:chromatic_steel_ingot',
        H: 'the_vault:vault_diamond',
        P: 'sophisticatedbackpacks:restock_upgrade',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:gold_block',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:advanced_restock_upgrade');

    // Deposit Upgrade
    event.shaped('sophisticatedbackpacks:deposit_upgrade', [
        'CEC',
        'PBP',
        'CEC'
    ], {
        C: 'the_vault:chromatic_iron_block',
        E: 'the_vault:black_chromatic_steel_ingot',
        P: 'sophisticatedbackpacks:upgrade_base',
        B: 'the_vault:magic_silk'
    }).id('sophisticatedbackpacks:deposit_upgrade');

    // Advanced Deposit Upgrade
    event.shaped('sophisticatedbackpacks:advanced_deposit_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:chromatic_steel_ingot',
        H: 'the_vault:vault_diamond',
        P: 'sophisticatedbackpacks:deposit_upgrade',
        B: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:gold_block',
        E: 'minecraft:redstone_block'
    }).id('sophisticatedbackpacks:advanced_deposit_upgrade');

    // Advanced Refill Upgrade
    event.shaped('sophisticatedbackpacks:advanced_refill_upgrade', [
        'DHD',
        'PBP',
        'CEC'
    ], {
        D: 'the_vault:chromatic_steel_ingot',
        H: 'the_vault:vault_diamond_block',
        P: 'sophisticatedbackpacks:refill_upgrade',
        B: 'sophisticatedbackpacks:refill_upgrade',
        C: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:chromatic_steel_ingot'
    }).id('sophisticatedbackpacks:advanced_refill_upgrade');

    // --- Backpack Upgrade Recipes ---
    // These require event.custom() because of the SophisticatedBackpacks upgrade type

    function backpackUpgrade(id, pattern, key, result) {
        event.custom({
            type: 'sophisticatedbackpacks:backpack_upgrade',
            pattern: pattern,
            key: key,
            result: { item: result }
        }).id(id);
    }

    // Iron Backpack
    backpackUpgrade('sophisticatedbackpacks:iron_backpack', 
        ['ILI','PBP','MSM'], 
        {
            I: {item: 'the_vault:vault_diamond'},
            L: {item: 'the_vault:vault_diamond_block'},
            P: {item: 'the_vault:extraordinary_larimar'},
            M: {item: 'the_vault:magic_silk_block'},
            S: {item: 'the_vault:magic_silk'},
            B: {item: 'sophisticatedbackpacks:backpack'}
        },
        'sophisticatedbackpacks:iron_backpack'
    );

    // Gold Backpack
    backpackUpgrade('sophisticatedbackpacks:gold_backpack', 
        ['ILI','PBP','MSM'], 
        {
            I: {item: 'the_vault:vault_diamond'},
            L: {item: 'the_vault:gem_pog'},
            P: {item: 'the_vault:extraordinary_larimar'},
            M: {item: 'the_vault:magic_silk_block'},
            S: {item: 'the_vault:magic_silk'},
            B: {item: 'sophisticatedbackpacks:iron_backpack'}
        },
        'sophisticatedbackpacks:gold_backpack'
    );

    // Diamond Backpack
    backpackUpgrade('sophisticatedbackpacks:diamond_backpack', 
        ['IXI','PBP','MSM'], 
        {
            I: {item: 'the_vault:vault_diamond'},
            X: {item: 'the_vault:pog_prism'},
            P: {item: 'woldsvaults:chroma_core'},
            M: {item: 'woldsvaults:prismatic_fiber'},
            S: {item: 'the_vault:magic_silk_block'},
            B: {item: 'sophisticatedbackpacks:gold_backpack'}
        },
        'sophisticatedbackpacks:diamond_backpack'
    );

    // Netherite Backpack
    backpackUpgrade('sophisticatedbackpacks:netherite_backpack', 
        ['ILI','PBP','SMS'], 
        {
            I: {item: 'the_vault:magic_silk_block'},
            L: {item: 'the_vault:vault_diamond_block'},
            P: {item: 'woldsvaults:chroma_core'},
            S: {item: 'woldsvaults:prismatic_fiber'},
            M: {item: 'the_vault:echo_pog'},
            B: {item: 'sophisticatedbackpacks:diamond_backpack'}
        },
        'sophisticatedbackpacks:netherite_backpack'
    );

});
