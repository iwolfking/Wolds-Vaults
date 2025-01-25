onEvent('recipes', event => {


    //this takes care of tenos' and velara's woods and logs that are shared
    const godLog = [
      'tenos', 'velara'
    ]

      godLog.forEach(log => {
        event.shapeless(
          Item.of('the_vault:' + log + '_planks', 4), 
          [['the_vault:' + log + '_log','the_vault:' + log + '_stripped_log']]
        )
        event.shapeless(
          Item.of('the_vault:' + log + '_vertical_planks', 1), 
          ['the_vault:' + log + '_planks']
        )
        event.shapeless(
         Item.of('the_vault:' + log + '_planks', 1), 
          ['the_vault:' + log + '_vertical_planks']
        )
      })


      //this takes care of all the god blocks that they all share, so the smooth bricks, bricks, chiseled bricks, and gemmed blocks (probably the section most prone to being changed later on)
      const allGod = [
        'tenos','velara','idona','wendarr'
      ];
      
      allGod.forEach(god => {
        event.shaped(
          Item.of('the_vault:' + god + '_light_smooth_brick', 32),
         [
            'AAA',
            'ABA',
            'AAA'
         ],
          {
            A: 'minecraft:stone',
            B: 'the_vault:vault_ingot'
          }
        )

       event.shaped(
          Item.of('the_vault:' + god + '_gem_block', 8),
         [
            'AAA',
            'ABA',
            'AAA'
        ],
         {
            A: 'the_vault:' + god + '_dark_smooth_brick',
            B: 'minecraft:glowstone_dust'
          }
        )

        event.shaped(
          Item.of('the_vault:' + god + '_gem_block', 8),
         [
            'AAA',
            'ABA',
            'AAA'
        ],
         {
            A: 'the_vault:' + god + '_light_smooth_brick',
            B: 'minecraft:glowstone_dust'
          }
        )

        event.shaped(
          Item.of('the_vault:' + god + '_dark_smooth_brick', 32),
         [
            'AAA',
            'ABA',
            'AAA'
         ],
          {
            A: 'minecraft:deepslate',
            B: 'the_vault:vault_ingot'
          }
        )

        event.shaped(
          Item.of('the_vault:' + god + '_brick', 4),
         [
            'AA',
            'AA'
         ],
          {
            A: ['the_vault:' + god + '_light_smooth_brick', 'the_vault:' + god + '_dark_smooth_brick']
          }
        )

        event.shaped(
          Item.of('the_vault:' + god + '_brick_chiseled', 4),
         [
            'AA',
            'AA'
         ],
          {
            A: 'the_vault:' + god + '_brick'
          }
        )
      })

      //wendarr leftover blocks
      event.shaped(
        Item.of('the_vault:wendarr_jewel_glass', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:glass',
          B: 'the_vault:topaz_block'
        }
      )

      event.shaped(
        Item.of('the_vault:wendarr_jewel_block', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: ['the_vault:wendarr_light_smooth_brick','the_vault:wendarr_dark_smooth_brick'],
          B: 'the_vault:topaz_block'
        }
      )

      event.shaped(
        Item.of('the_vault:wendarr_jewel_glass_pane', 16),
        [
          'AAA',
          'AAA'
        ],
        {
          A: 'the_vault:wendarr_jewel_glass'
        }
      )

      //tenos remaining blocks
      event.shaped(
        Item.of('the_vault:tenos_bookshelf_empty', 1),
        [
          'AAA',
          ' A ',
          'AAA'
        ],
        {
          A: 'the_vault:tenos_planks'
        }
      )

      event.shaped(
        Item.of('the_vault:tenos_bookshelf', 1),
        [
          'AAA',
          'BBB',
          'AAA'
        ],
        {
          A: 'the_vault:tenos_planks',
          B: 'minecraft:book'
        }
      )

      event.shaped(
        Item.of('the_vault:tenos_log', 32),
        [
          'ABA',
          'BAB',
          'ABA'
        ],
        {
          A: '#minecraft:logs',
          B: 'the_vault:gem_larimar'
        }
      )

      //velaras many remaining blocks
      event.shaped(
        Item.of('the_vault:velara_mossy_block', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: ['the_vault:velara_dark_smooth_brick','the_vault:velara_light_smooth_brick'],
          B: ['minecraft:vine','minecraft:moss_block']
        }
      )

      event.shaped(
        Item.of('the_vault:velara_planks_stairs', 8),
        [
          'A  ',
          'AA ',
          'AAA'
        ],
        {
          A: 'the_vault:velara_planks'
        }
      )

      event.shaped(
        Item.of('the_vault:velara_planks_slab', 6),
        [
          'AAA'
        ],
        {
          A: 'the_vault:velara_planks'
        }
      )

      event.shaped(
        Item.of('the_vault:velara_leaves', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: '#minecraft:leaves',
          B: ['the_vault:velara_dark_smooth_brick','the_vault:velara_light_smooth_brick']
        }
      )

      event.shaped(
        Item.of('the_vault:velara_vine', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:vine',
          B: ['the_vault:velara_dark_smooth_brick','the_vault:velara_light_smooth_brick']
        }
      )

      event.shaped(
        Item.of('the_vault:velara_bush', 8),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: '#minecraft:leaves',
          B: ['the_vault:velara_dark_smooth_brick','the_vault:velara_light_smooth_brick'],
          C: 'minecraft:flowering_azalea'
        }
      )

      event.shaped(
        Item.of('the_vault:velara_mossy_log', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'the_vault:velara_log',
          B: 'the_vault:velara_mossy_block'
        }
      )

      event.shaped(
        Item.of('the_vault:velara_mossy_blooming_log', 8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'the_vault:velara_log',
          B: 'the_vault:velara_leaves'
        }
      )

      event.shaped(
        Item.of('the_vault:velara_log', 32),
        [
          'ABA',
          'BAB',
          'ABA'
        ],
        {
          A: '#minecraft:logs',
          B: 'the_vault:gem_alexandrite'
        }
      )
} )