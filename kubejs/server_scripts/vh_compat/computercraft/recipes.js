let removedOutputsCCCC = [
];
onEvent("recipes", event => {
    removedOutputsCCCC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.replaceInput({ id: 'computercraft:computer_normal' }, 'the_vault:echo_pog', 'woldsvaults:pog_prism')




})