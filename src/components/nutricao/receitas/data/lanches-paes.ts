import type { Receita } from '../types'
import { macros } from './utils'

export const LANCHES_PAES: Receita[] = [
  {
    id: 'pao-de-queijo-fitness',
    nome: 'Pão de queijo fitness',
    secao: 'lanches',
    pagina: 32,
    macros: macros(105, 5.7, 10.7, 4.3),
    rende: '6 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '1 ovo',
          '3 cs de tapioca',
          '2 cs de polvilho doce ou azedo',
          '2 cs de cottage',
          '1 cs de creme de ricota',
          '3 fatias finas de queijo muçarela em pedaços',
          '1 cs de parmesão ralado',
          'Sal a gosto',
          '1 cc de fermento',
        ],
      },
    ],
    passos: [
      'Misture tudo, deixando o fermento por último.',
      'Despeje em forminhas e asse por cerca de 20 min ou até dourar em cima.',
    ],
  },
  {
    id: 'pao-low-carb-queijo',
    nome: 'Pão low carb de queijo',
    secao: 'lanches',
    pagina: 34,
    macros: macros(177, 12.7, 2.5, 13.2),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '1 ovo',
          '1 cs de requeijão light',
          '1 cs de parmesão ralado (opcional)',
          'Orégano (opcional)',
          'Sal e fermento a gosto',
        ],
      },
    ],
    passos: [
      'Misture tudo num copo com formato de bolinho, com o fermento por último.',
      'Micro-ondas por 2:30 a 3 min.',
      'Desenforme, corte em fatias e toste. Recheie com o que gostar.',
    ],
  },
  {
    id: 'pao-low-carb',
    nome: 'Pão low carb',
    secao: 'lanches',
    pagina: 44,
    macros: macros(268, 12.8, 6, 18.5),
    rende: '4 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '90 g de parmesão ralado',
          '6 cs de água',
          '2 xícaras de farinha de amêndoas (ou a que preferir)',
          '6 ovos',
          '2 cc de fermento em pó',
        ],
      },
    ],
    passos: [
      'Bata no liquidificador a farinha, os ovos, a água e metade do parmesão.',
      'Acrescente o resto do queijo e o fermento, misturando com uma colher.',
      'Asse em forno preaquecido a 180° por 20 a 30 min.',
    ],
  },
  {
    id: 'paozinho-aveia',
    nome: 'Pãozinho de aveia',
    secao: 'lanches',
    pagina: 50,
    macros: macros(412, 19.2, 19.4, 28.4),
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '3 ovos',
          '4 cs de farelo de aveia ou farinha de amêndoas',
          '2 cs de parmesão ralado',
          '1 cs de azeite',
          '1 cc de fermento',
          'Sal, orégano e alecrim a gosto',
        ],
      },
    ],
    passos: [
      'Misture a massa, unte a forma e despeje.',
      'Salpique alecrim (e mais parmesão) por cima.',
      'Leve ao forno por cerca de 25 min, até dourar em cima.',
    ],
  },
  {
    id: 'paozinho-frigideira',
    nome: 'Pãozinho de frigideira',
    secao: 'lanches',
    pagina: 52,
    macros: macros(314, 22.5, 15.8, 16.8),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 ovo e 1 clara',
          '1 cs de aveia em flocos',
          '1 cs de farelo de aveia',
          'Orégano e sal a gosto',
          '1 cc de fermento',
          '40 g de queijo muçarela',
        ],
      },
    ],
    passos: [
      'Coloque metade da massa numa frigideira pequena.',
      'Adicione o queijo (ou o recheio que quiser) e cubra com a outra metade.',
      'TAMPE em FOGO BAIXO até firmar.',
    ],
  },
  {
    id: 'paozinho-batata-doce-queijo',
    nome: 'Pãozinho de batata doce com queijo',
    secao: 'lanches',
    pagina: 56,
    macros: macros(140, 9.6, 6.5, 8.5),
    rende: '2 pãezinhos',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '50 g de batata doce cozida',
          '1 ovo',
          '1 cs de cottage',
          'Sal e orégano',
          '50 g de queijo minas frescal',
          '1 cc de fermento',
        ],
      },
    ],
    passos: [
      'Amasse a batata e misture com o ovo, o cottage, o sal, o orégano e o fermento.',
      'Encha as forminhas até a metade, coloque 25 g de queijo minas em cada uma e cubra com o resto da massa.',
      'Asse até dourar.',
    ],
  },
  {
    id: 'chips-batata-doce',
    nome: 'Chips de batata doce',
    secao: 'lanches',
    pagina: 60,
    macros: macros(634, 5.2, 112.8, 18.4),
    preparo: ['forno'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '400 g de batata doce crua',
          'Pimenta do reino e orégano a gosto',
          '1½ cs de azeite',
          'Sal grosso',
        ],
      },
    ],
    passos: [
      'Corte a batata em fatias bem fininhas e espalhe num tabuleiro.',
      'Pincele azeite e tempere com sal grosso, pimenta e orégano.',
      'Forno a 200° por 15 min.',
    ],
  },
]
