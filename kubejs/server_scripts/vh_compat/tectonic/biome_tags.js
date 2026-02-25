if (Platform.isLoaded('tectonic')) {
    onEvent("tags.worldgen.biome", event => {
        //Used by Create Ore Excavation
        event.add("forge:is_overworld", [
            'tectonic:lagoon',
            'tectonic:lukewarm_beach',
            'tectonic:lukewarm_cliffs',
            'tectonic:cold_beach',
            'tectonic:icy_cliffs',
            'tectonic:icy_river',
            'tectonic:badlands_spires',
            'tectonic:evergreen_forest',
            'tectonic:autumn_birch_forest',
            'tectonic:old_growth_evergreen_forest',
            'tectonic:island',
            'tectonic:coral_river',
            'tectonic:alpine_meadow',
            'tectonic:cold_plains',
            'tectonic:desert_dunes',
            'tectonic:grasslands',
            'tectonic:lantern_river',
            'tectonic:red_desert_dunes',
            'tectonic:white_cliffs',
            'tectonic:cold_cliffs',
            'tectonic:lush_river',
            'tectonic:old_growth_snowy_taiga',
            'tectonic:autumn_forest',
            'tectonic:red_desert',
            'tectonic:sandstone_cliffs',
            'tectonic:cold_river',
            'tectonic:warm_river',
            'tectonic:lukewarm_river',
            'tectonic:dripstone_river'
        ])
    })
}