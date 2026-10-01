import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const WHEY: ReceitaBase[] = [
  {
    id: 'bolo-cenoura-chocolate',
    nome: 'Bolo de cenoura com chocolate fitness',
    secao: 'whey',
    pagina: 94,
    macros: macros(240, 12.6, 20.6, 13.3),
    rende: '4 porções',
    preparo: ['microondas'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '2 ovos',
          '1 cenoura (100 g)',
          '3 cs de farinha de aveia',
          '1 cs de mel',
          '2 cs de óleo de coco ou manteiga',
          '1 cs de adoçante',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Calda',
        itens: [
          '1 cs de cacau em pó 100%',
          '1 cs de mel',
          '1 cs de whey de chocolate',
          '1 cs de pasta de amendoim',
          '½ cs de adoçante (opcional)',
        ],
      },
    ],
    passos: [
      'Bata a massa no liquidificador. Misture o fermento com a colher, sem bater.',
      'Micro-ondas por 3 min.',
      'Misture a calda com a colher e jogue por cima do bolinho.',
    ],
  },
  {
    id: 'panqueca-banana-nutella',
    nome: 'Panqueca de banana com Nutella',
    secao: 'whey',
    pagina: 96,
    macros: macros(829, 57.3, 79.6, 31.3),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '2 ovos inteiros (pode juntar clara para mais proteína)',
          '10 g de cacau em pó',
          '30 g de aveia em flocos',
          '20 g de farelo de aveia (ou tapioca)',
          '½ banana',
          '10 g de leite Ninho',
          '½ scoop de whey de chocolate (opcional)',
          'Canela e adoçante a gosto',
          '1 cc rasa de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '1 scoop de whey de chocolate',
          '20 g de leite Ninho',
          '20 g de Nutella',
        ],
      },
    ],
    passos: [
      'Misture a massa e, por último, o fermento.',
      'Despeje numa frigideira untada, SEMPRE em fogo baixo e tampada.',
      'Quando firmar, vire e deixe o outro lado cozinhar, ainda tampada.',
      'Recheio: brigadeiro fake (whey + Ninho + água até ficar molinho) e banana. Feche e cubra com a Nutella.',
    ],
    dica: 'Ajuste as quantidades de acordo com a sua dieta.',
  },
  {
    id: 'muffin-banana-calda-chocolate',
    nome: 'Muffin de banana com calda de chocolate',
    secao: 'whey',
    pagina: 98,
    macros: macros(79, 6.7, 8.7, 2.2),
    rende: '7 bolinhos',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '1 ovo e 2 claras',
          '3 cs de farinha de aveia (ou farelo)',
          '1 cs de cacau em pó 100%',
          '1 banana',
          'Canela e adoçante a gosto',
          '1 cc de fermento',
          '1 scoop de whey de chocolate',
        ],
      },
    ],
    passos: [
      'Misture tudo, deixando o fermento por último.',
      'Asse em forminhas de silicone por cerca de 30 min ou até dourar.',
      'Cubra com calda de whey de chocolate com água.',
    ],
  },
  {
    id: 'smoothie-proteico',
    nome: 'Smoothie proteico',
    secao: 'whey',
    pagina: 100,
    macros: macros(285, 26.2, 24.3, 9.7),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '50 g de banana',
          '200 ml de leite normal ou vegetal',
          '1 scoop de whey de coco (ou outro)',
        ],
      },
    ],
    passos: [
      'Congele a banana (em temperatura ambiente também funciona).',
      'Bata a fruta, o leite e o whey no liquidificador até ficar homogêneo.',
    ],
    dica: 'Deixe frutas cortadinhas no congelador para ter sempre à mão.',
  },
  {
    id: 'brownie-frigideira',
    nome: 'Brownie de frigideira fitness',
    secao: 'whey',
    pagina: 102,
    macros: macros(356, 43, 25.5, 11.4),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo e 1 clara',
          '1 cs de farelo de aveia',
          '1 cs de cacau em pó 100%',
          '1 cs de açúcar mascavo (ou adoçante)',
          '1 cs de whey de baunilha (ou 1 cs de leite em pó)',
        ],
      },
      {
        titulo: 'Cobertura',
        itens: ['½ scoop de whey de chocolate com água'],
      },
    ],
    passos: [
      'Misture a massa e coloque na frigideira untada em FOGO BAIXO e TAMPADA.',
      'Quando a parte de cima ficar menos mole, feche como tapioca — tem que ficar molinho no meio.',
      'Deixe mais um pouco tampada e cubra com a calda.',
    ],
  },
  {
    id: 'bolinho-proteico-morango',
    nome: 'Bolinho proteico de morango',
    secao: 'whey',
    pagina: 104,
    macros: macros(334, 28.4, 19.5, 15.6),
    rende: '2 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo batido',
          '30 g de farinha de aveia',
          '1 cs de stevia (ou outro adoçante)',
          '1 pitada de sal',
          '35 g de leite de coco',
          '1 cs de azeite',
          '1 cc de essência de baunilha',
          '100 g de morango picado',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '2 scoops de whey de morango',
          '1 cs de leite em pó desnatado',
          '10 g de coco ralado',
        ],
      },
    ],
    passos: [
      'Misture a massa e asse por cerca de 20 min ou até dourar por fora.',
      'Recheio: whey de morango + leite em pó + água. Finalize com coco ralado.',
    ],
    dica: 'Sem whey: bata morango com leite em pó e um pouco de água até virar calda.',
  },
  {
    id: 'sobremesa-3-camadas',
    nome: 'Sobremesa de 3 camadas',
    secao: 'whey',
    pagina: 106,
    macros: macros(346, 38.1, 30.4, 13.1),
    rende: '2 porções',
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        titulo: 'Camada 1 (mousse de coco)',
        itens: [
          '50 g de leite de coco',
          '10 g de coco ralado',
          '10 g de farinha de coco',
          '10 g de leite em pó',
          '5 g de açúcar de coco',
          'Stevia',
        ],
      },
      {
        titulo: 'Camada 2 (palha italiana)',
        itens: [
          '1 cs de aveia em flocos',
          '1 cc de cacau em pó 100%',
          '4 cs de leite em pó desnatado',
          'Stevia',
          '1 cc de açúcar de coco',
          '1 cc de óleo de coco',
          '6 cs de água',
        ],
      },
      {
        titulo: 'Camada 3',
        itens: [
          '1 scoop de whey (coco ou cookie)',
          '1 cs de leite em pó',
          'Água até virar calda',
        ],
      },
    ],
    passos: [
      'Misture os ingredientes de cada camada separadamente.',
      'Monte em camadas e polvilhe leite em pó por cima.',
      'Leve à geladeira por 30 min.',
    ],
  },
  {
    id: 'creminho-whey',
    nome: 'Creminho de whey',
    secao: 'whey',
    pagina: 108,
    macros: macros(384, 66, 11.7, 8.7),
    preparo: ['sem-fogo'],
    ingredientes: [{ itens: ['3 scoops de whey', 'Água'] }],
    passos: [
      'Numa tigela, coloque o whey e vá adicionando água aos poucos até ficar cremoso.',
      'Muito líquido? Mais whey. Muito grosso? Mais água.',
    ],
    dica: 'Funciona com qualquer sabor — o da foto é de chocolate.',
  },
  {
    id: 'chocolate-quente-proteico',
    nome: 'Chocolate quente proteico',
    secao: 'whey',
    pagina: 110,
    macros: macros(70, 12.6, 1.5, 1.2),
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '100 ml de água',
          '1 cs de café solúvel',
          '½ cs de cacau em pó',
          '1 cs de proteína vegana de cacau',
        ],
      },
    ],
    passos: ['Esquente a água e misture tudo numa caneca.'],
  },
  {
    id: 'brigadeiro-fake',
    nome: 'Brigadeiro fake',
    secao: 'whey',
    pagina: 112,
    macros: macros(190, 24.1, 11.1, 5.7),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: ['1 scoop de whey de chocolate', '15 g de leite Ninho', 'Água'],
      },
    ],
    passos: [
      'Misture o whey e o Ninho e vá adicionando água até ficar grossinho.',
    ],
  },
]
