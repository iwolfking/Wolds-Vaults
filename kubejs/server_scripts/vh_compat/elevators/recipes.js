onEvent('recipes', event => {

    const dye = {
        "white_dye": "white",
        "red_dye": "red",
        "lime_dye": "lime",
        "light_gray_dye": "light_gray",
        "gray_dye": "gray",
        "black_dye": "black",
        "orange_dye": "orange",
        "yellow_dye": "yellow",
        "cyan_dye": "cyan",
        "purple_dye": "purple",
        "green_dye": "green",
        "blue_dye": "blue",
        "brown_dye": "brown",
        "pink_dye": "pink",
        "light_blue_dye": "light_blue",
        "magenta_dye": "magenta"
    };

    for (const [dyeId, dyeName] of Object.entries(dye)) {

        // Shapeless Elevator
        event.shapeless(`elevatorid:elevator_${dyeName}`, [
            '#elevatorid:elevators',
            `minecraft:${dyeId}`
        ]).id(`elevatorid:${dyeName}_elevator`);

        // Shaped Elevator
        event.shaped(`elevatorid:elevator_${dyeName}`, [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'the_vault:magic_silk',
            B: `minecraft:${dyeName}_wool`,
            C: `minecraft:${dyeName}_wool`,
            D: 'the_vault:perfect_larimar',
            E: `minecraft:${dyeName}_wool`
        }).id(`elevatorid:shaped_${dyeName}_elevator`);
    }

});
