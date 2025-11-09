// scripts made by Douwsky (converted to KubeJS)
// for Iskall85's Vaulthunters

onEvent('recipes', event => {
  const colors = {
    red_corundum: 'red',
    orange_corundum: 'orange',
    yellow_corundum: 'yellow',
    green_corundum: 'green',
    blue_corundum: 'blue',
    indigo_corundum: 'indigo',
    violet_corundum: 'violet',
    white_corundum: 'white',
    black_corundum: 'black'
  }

  // Smithing recipe
  event.custom({
    type: 'minecraft:smithing',
    base: { item: 'quark:pickarang' },
    addition: { item: 'the_vault:black_chromatic_steel_ingot' },
    result: { item: 'quark:flamerang' }
  }).id('quark:flamerang')

  // Shaped recipes
  event.shaped('quark:pickarang', [
    'ADP',
    '  D',
    '  A'
  ], {
    A: 'the_vault:vault_diamond',
    D: 'the_vault:driftwood',
    P: 'the_vault:pog_prism'
  }).id('quark:pickarang')

  event.shaped('quark:ender_watcher', [
    'ARA',
    'RER',
    'ORO'
  ], {
    A: 'the_vault:vault_diamond',
    R: 'minecraft:redstone_block',
    E: 'minecraft:ender_eye',
    O: 'minecraft:obsidian'
  }).id('quark:ender_watcher')

  event.shaped(Item.of('quark:grate', 4)
    .withNBT({
      RepairCost: 0,
      display: { Name: '{"text":"Harry\'s special"}' }
    }),
    [
      '   ',
      'NNN',
      'NNN'
    ],
    {
      N: 'the_vault:chromatic_iron_nugget'
    }
  ).id('quark:grate')

  event.shaped('quark:blank_rune', [
    'SSS',
    'EEE',
    'SSS'
  ], {
    S: 'minecraft:stone',
    E: 'the_vault:vault_essence'
  }).id('quark:blank_rune')

  // Shapeless recipes
  event.shapeless(Item.of('minecraft:carrot', 9), ['quark:carrot_crate'])
    .id('quark:uncraft_carrot_crate')

  // Color loop recipes
  for (const [colorId, colorName] of Object.entries(colors)) {
    event.shapeless(`quark:${colorId}`, [
      `quark:${colorId}_cluster`,
      `quark:${colorId}_cluster`,
      `quark:${colorId}_cluster`,
      `quark:${colorId}_cluster`
    ]).id(`quark:${colorName}_corundum`)

    event.shapeless(`quark:${colorId}_pane`, [
      `quark:${colorId}`, `quark:${colorId}`, `quark:${colorId}`,
      `quark:${colorId}`, `quark:${colorId}`, `quark:${colorId}`
    ]).id(`quark:${colorId}_sheet`)

    event.shapeless(`quark:waxed_${colorId}`, [
      `quark:${colorId}`,
      'minecraft:honeycomb'
    ]).id(`quark:waxed_${colorId}`)
  }
})
