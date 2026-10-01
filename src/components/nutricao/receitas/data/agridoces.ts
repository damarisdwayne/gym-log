import type { Receita } from '../types'
import { macros } from './utils'

export const AGRIDOCES: Receita[] = [
  {
    id: 'pao-banana-pasta-amendoim',
    nome: 'Pão com banana e pasta de amendoim',
    secao: 'agridoces',
    pagina: 173,
    macros: macros(328, 14.1, 31.9, 17),
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '1 fatia de pão integral',
          '½ banana madura',
          '2 cs de pasta de amendoim',
          'Canela a gosto',
        ],
      },
    ],
    passos: [
      'Torre o pão no forno, sanduicheira ou airfryer.',
      'Passe a pasta de amendoim, cubra com a banana em rodelas e finalize com canela.',
    ],
  },
  {
    id: 'pipoca-agridoce',
    nome: 'Pipoca agridoce',
    secao: 'agridoces',
    pagina: 175,
    macros: macros(422, 5.5, 48, 23.1),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 cs de óleo de coco',
          '70 g de milho (≈ 5 cs)',
          '2 cs de água',
          '1 pitada de açúcar e 1 de sal',
          '1 cs de manteiga',
        ],
      },
    ],
    passos: [
      'Coloque tudo na pipoqueira, menos a manteiga, e espere começar a estourar.',
      'Junte a manteiga, feche e vá girando até estourar tudo.',
      'Finalize com mais um pouco de sal e açúcar.',
    ],
  },
  {
    id: 'enroladinho',
    nome: 'Enroladinho de banana com presunto',
    secao: 'agridoces',
    pagina: 177,
    macros: macros(307, 15.1, 36.7, 12.1),
    rende: '6 porções',
    preparo: ['fogao', 'forno'],
    ingredientes: [
      { itens: ['6 bananas', '12 fatias de presunto'] },
      {
        titulo: 'Molho',
        itens: [
          '1 cebola',
          '1 cs de manteiga',
          '500 ml de leite',
          '2 cs de maisena',
          '50 g de queijo muçarela',
          '50 g de queijo gorgonzola',
          '50 g de parmesão',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Doure a cebola na manteiga, junte o leite e a maisena e mexa até ferver e engrossar. Vá juntando os queijos até o ponto e acerte o sal.',
      'Enrole cada banana em 2 fatias de presunto e arrume lado a lado numa travessa.',
      'Cubra com bastante molho, salpique parmesão e leve ao forno.',
    ],
  },
]
