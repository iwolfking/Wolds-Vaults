// scripts made by alterNERDtive
// Converted to KubeJS 1.18.2 for Vault Hunters

onEvent('recipes', event => {

    const gems = [
        'ashium',
        'bomignite',
        'gorginite',
        'iskallium',
        'petzanite',
        'sparkletine',
        'tubium',
        'upaline',
        'xenium'
    ];

    gems.forEach(gem => {
        event.smithing('the_vault:key_' + gem, 'the_vault:blank_key', 'the_vault:cluster_' + gem)
            .id('the_vault:key_' + gem + '_smithing');
    });

});
