// scripts made by Douwsky
// Converted from CraftTweaker to KubeJS for Vault Hunters 1.18.2

onEvent('recipes', event => {

  // --- Iron Bridge Recipe ---
  event.shaped('mcwbridges:iron_bridge', [
    '   ',
    'A A',
    ' A '
  ], {
    A: '#forge:nuggets/iron'
  }).id('mcwbridges:iron_bridge')


  // --- Window Fix Recipes ---
  const materials_window_fix = {
    andesite: 'andesite',
    diorite: 'diorite',
    granite: 'granite',
    stone: 'stone',
    prismarine_bricks: 'prismarine',
    dark_prismarine: 'dark_prismarine',
    polished_blackstone: 'blackstone'
  }

  for (const [materialId, materialName] of Object.entries(materials_window_fix)) {
    // remove the original recipe
    event.remove({ id: `mcwwindows:${materialName}_window` })

    // add the fixed version
    event.shaped(Item.of(`mcwwindows:${materialName}_window`, 8), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'mcwwindows:window_base',
      B: `minecraft:${materialId}`
    }).id(`mcwwindows:${materialName}_window`)
  }

})