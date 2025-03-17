onEvent("recipes", event => {
    event.custom({
        "type": "occultism:crushing",
        "ingredient": {
          "item": "the_vault:chromatic_iron_ore"
        },
        "result": {
          "item": "the_vault:chromatic_iron_dust",
          "count": 2
        },
        "crushing_time": 200
      })

      event.custom({
        "type": "occultism:crushing",
        "ingredient": {
          "item": "the_vault:raw_chromatic_iron"
        },
        "result": {
          "item": "the_vault:chromatic_iron_dust",
          "count": 2
        },
        "crushing_time": 200
      })
})
