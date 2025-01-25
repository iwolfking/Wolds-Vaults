onEvent("recipes", event => {
    event.shapeless(Item.of('ae2:calculation_processor_press'), ['the_vault:crystal_budding', 'minecraft:paper'])
    event.shapeless(Item.of('ae2:engineering_processor_press'), ['the_vault:crystal_budding', 'minecraft:emerald'])
    event.shapeless(Item.of('ae2:logic_progressor_press'), ['the_vault:crystal_budding', 'minecraft:diamond'])
    event.shapeless(Item.of('ae2:silicon_press'), ['the_vault:crystal_budding', '#forge:silicon'])
})