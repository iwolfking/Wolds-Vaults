// scripts made by Douwsky
// for Iskall85's Vaulthunters

onEvent('recipes', event => {

    event.shaped('torchmaster:feral_flare_lantern', [
        'G G',
        'CLC',
        'G G'
    ], {
        G: 'the_vault:gem_larimar',
        C: 'the_vault:chromatic_gold_ingot',
        L: 'minecraft:lantern',
        ' ': 'minecraft:air',
        '#': '#forge:glass'
    }).id('torchmaster:feral_flare_lantern');

    event.shaped('torchmaster:dreadlamp', [
        'OOO',
        'GLG',
        'OPO'
    ], {
        O: 'minecraft:obsidian',
        G: '#forge:glass',
        L: 'minecraft:redstone_lamp',
        P: 'the_vault:perfect_wutodie'
    }).id('torchmaster:dreadlamp');

    event.shaped('torchmaster:megatorch', [
        ' A ',
        'ACA',
        ' A '
    ], {
        A: 'minecraft:air',
        C: 'woldsvaults:chroma_core',
        D: 'decorative_blocks:chandelier',
        E: 'the_vault:gem_echo'
    }).id('torchmaster:megatorch');

});
