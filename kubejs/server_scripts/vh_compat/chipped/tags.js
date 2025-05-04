onEvent('tags.blocks', event => {
    for (let i = 1; i <= 66; i++) {
      let id = `chipped:terracotta_${i}`
      event.add('minecraft:mineable/pickaxe', id)
      event.add('immersiveengineering:mineable/drill', id)
      event.add('mininggadgets:modificationtable', id)
      event.add('cucumber:mineable/paxel', id)
      event.add('chipped:terracotta', id)
    }
  })
  
  onEvent('tags.items', event => {
    for (let i = 1; i <= 66; i++) {
      let id = `chipped:terracotta_${i}`
      event.add('chipped:terracotta', id)
    }
  })