import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const AMENDOIM: ReceitaBase[] = [
  {
    id: 'panqueca-banana',
    nome: 'Panqueca de banana',
    secao: 'amendoim',
    pagina: 116,
    macros: macros(327, 15.4, 28.5, 18.3),
    preparo: ['fogao', 'microondas'],
    ingredientes: [
      {
        itens: [
          '1 ovo inteiro',
          '1 cs de farelo de aveia',
          '1 cs de farinha de coco',
          'Canela a gosto',
          '60 g de banana',
          '1 cs de pasta de amendoim',
        ],
      },
    ],
    passos: [
      'Misture o ovo, o farelo de aveia e a farinha de coco e asse na frigideira em fogo médio, virando até tostar.',
      'Recheio: amasse a banana, aqueça no micro-ondas e misture com a pasta de amendoim e canela.',
    ],
    dica: 'Dá muita saciedade.',
  },
  {
    id: 'mingau',
    nome: 'Mingau',
    secao: 'amendoim',
    pagina: 118,
    macros: macros(540, 25.5, 57.6, 20.5),
    preparo: ['fogao', 'microondas'],
    ingredientes: [
      {
        itens: [
          '200 ml de leite desnatado',
          '1 cs de farinha de coco',
          '1 cs de farelo de aveia',
          '30 g de pasta de amendoim',
          '20 g de leite em pó Molico',
          'Canela a gosto',
          '1 banana',
          'Stevia',
          '1 pitada de essência de baunilha',
        ],
      },
    ],
    passos: [
      'Na panela, coloque o leite, o farelo de aveia, a farinha de coco, o leite em pó e a canela. Fogo BAIXO, mexendo sem parar.',
      'Derreta a banana no micro-ondas e junte com a pasta de amendoim, a stevia e a baunilha.',
      'Mexa até engrossar, sempre em fogo baixo.',
      'Cubra com o que quiser: leite em pó, whey de baunilha, canela, pasta de amendoim.',
    ],
  },
  {
    id: 'mousse-abacaxi-chocolate',
    nome: 'Mousse de abacaxi com chocolate fit',
    secao: 'amendoim',
    pagina: 120,
    macros: macros(335, 7.2, 40.8, 20.2),
    rende: '3 porções',
    preparo: ['fogao'],
    ingredientes: [
      { titulo: '1ª camada (fundo)', itens: ['2 cs de pasta de amendoim'] },
      {
        titulo: '2ª camada (mousse de abacaxi)',
        itens: [
          '100 ml de leite de coco',
          '2 cs de leite em pó',
          '3 rodelas de abacaxi',
          'Stevia',
        ],
      },
      { titulo: '3ª camada', itens: ['Pedaços de abacaxi'] },
      {
        titulo: '4ª camada',
        itens: [
          '30 g de chocolate 70% cacau',
          '1 cs de manteiga',
          '1 cs de coco ralado para polvilhar',
        ],
      },
    ],
    passos: [
      'Bata os ingredientes do mousse e leve à panela em fogo baixo, mexendo até engrossar (uns 20 min).',
      'Monte: pasta de amendoim, mousse, pedaços de abacaxi.',
      'Derreta o chocolate com a manteiga, cubra e polvilhe coco ralado.',
    ],
  },
  {
    id: 'muffin-chocolate-fit',
    nome: 'Muffin de chocolate fit',
    secao: 'amendoim',
    pagina: 122,
    macros: macros(201, 8.6, 12.9, 12.7),
    rende: '8 porções',
    preparo: ['forno', 'fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '3 ovos',
          '2 cs de farinha de coco',
          '2 cs de leite de coco',
          '1 cs de cacau em pó 100%',
          '1 cs de aveia em flocos',
          '1 cs de óleo de coco',
          '1 cs de açúcar de coco',
          '1 cs de stevia',
          '1 cc de fermento',
          '2 cs de pasta de amendoim',
          '4 cs de leite em pó desnatado',
        ],
      },
      {
        titulo: 'Calda',
        itens: [
          '100 g de chocolate 80% cacau',
          '2 cs de leite de coco',
          '2 cs de leite em pó',
        ],
      },
    ],
    passos: [
      'Misture tudo, com o fermento por último. Asse em forminhas por cerca de 20 min.',
      'Derreta o chocolate em banho-maria com o leite de coco.',
      'Cubra os bolinhos com a calda e polvilhe leite em pó.',
    ],
  },
  {
    id: 'biscoito-coco-fit',
    nome: 'Biscoito de coco fit',
    secao: 'amendoim',
    pagina: 124,
    macros: macros(447, 14.3, 31.2, 29.5),
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '1 ovo',
          '4 cs de farinha de coco',
          '1 cs de mel',
          '1 cs de pasta de amendoim',
          '1 cs de coco ralado',
          '1 cc de fermento',
        ],
      },
    ],
    passos: [
      'Misture tudo e faça bolinhas.',
      'Arrume numa forma untada, amasse com o garfo e asse por 20 a 25 min ou até dourar.',
    ],
  },
  {
    id: 'bombom-recheado-fit',
    nome: 'Bombom recheado fit',
    secao: 'amendoim',
    pagina: 126,
    macros: macros(344, 8.8, 22, 24),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '40 g de chocolate 70% cacau',
          '1 cs de pasta de amendoim',
        ],
      },
    ],
    passos: [
      'Derreta o chocolate, espalhe metade na forminha e leve ao congelador por 20 min.',
      'Coloque a pasta de amendoim e cubra com o resto do chocolate.',
      'Congelador por 2 h. Dá pra fazer um grande ou vários pequenos.',
    ],
  },
  {
    id: 'bolo-banana-canela',
    nome: 'Bolo de banana com canela',
    secao: 'amendoim',
    pagina: 128,
    macros: macros(296, 12.5, 34.4, 13.6),
    rende: '4 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '3 ovos',
          '2 bananas',
          '2 cs de farinha de aveia',
          '2 cs de pasta de amendoim',
          '2 cs de farinha de amendoim',
          '½ cs de cacau em pó',
          '1 cs de mel',
          'Stevia a gosto',
          '1 cc de essência de baunilha',
          'Canela a gosto',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Calda',
        itens: [
          '1 banana',
          '100 g de iogurte',
          '1 cc de essência de baunilha',
          'Stevia e canela',
        ],
      },
    ],
    passos: [
      'Misture a massa, com o fermento por último.',
      'Asse em forma untada por cerca de 25 min.',
      'Calda: amasse a banana e misture com o resto. Cubra o bolo morno.',
    ],
  },
]
