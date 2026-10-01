import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const DOCES_PRATICOS: ReceitaBase[] = [
  {
    id: 'bombom-morango-ninho',
    nome: 'Bombom de morango com Ninho',
    secao: 'doces-praticos',
    pagina: 153,
    macros: macros(68, 3.2, 13.7, 0.6),
    rende: '3 unidades',
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 banana prata',
          '1½ cs de leite em pó desnatado',
          '1 cs de cacau em pó 100%',
          'Adoçante',
          '3 morangos médios',
        ],
      },
    ],
    passos: [
      'Amasse a banana e mexa na panela em fogo baixo até virar uma pastinha (sem ressecar).',
      'Fora do fogo, misture o leite em pó, o cacau e o adoçante até virar massa.',
      'Envolva os morangos como brigadeiro e passe no leite em pó.',
      'Geladeira por 1 h.',
    ],
  },
  {
    id: 'mousse-abacate',
    nome: 'Mousse de abacate',
    secao: 'doces-praticos',
    pagina: 155,
    macros: macros(511, 8, 80.9, 18.2),
    preparo: ['sem-fogo'],
    vegana: true,
    ingredientes: [
      {
        itens: ['100 g de abacate', '30 g de cacau em pó', '5 cs de melado'],
      },
    ],
    passos: [
      'Amasse bem o abacate e misture o cacau e o melado até ficar consistente.',
      'Geladeira por no mínimo 1 h. Se quiser, lascas de chocolate 70% por cima.',
    ],
  },
  {
    id: 'mini-panquecas-banana',
    nome: 'Mini panquecas de banana',
    secao: 'doces-praticos',
    pagina: 157,
    macros: macros(265, 12.2, 41.3, 7.4),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo',
          '½ banana',
          '1 cs de farinha de aveia',
          'Canela e adoçante',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '½ banana congelada',
          '½ iogurte (ou 3 cs)',
          'Canela e adoçante',
        ],
      },
    ],
    passos: [
      'Misture a massa e vá colocando porções de 1 cs na frigideira.',
      'Tampe por 15 s, vire e deixe mais 10 s. Sempre em fogo baixo e tampado.',
      'Cubra as panquequinhas com o recheio.',
    ],
  },
  {
    id: 'paozinho-banana-recheado',
    nome: 'Pãozinho de banana recheado',
    secao: 'doces-praticos',
    pagina: 159,
    macros: macros(293, 13.4, 41.1, 9.1),
    preparo: ['microondas', 'fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '½ banana',
          '2 cs de farelo de aveia',
          '1 cs de leite de coco',
          '1 ovo',
          'Canela e adoçante a gosto',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '½ banana gelada',
          '½ iogurte natural',
          'Canela e adoçante',
        ],
      },
    ],
    passos: [
      'Misture a massa, com o fermento por último. Micro-ondas por 3 min.',
      'Amasse a banana com o iogurte, a canela e o adoçante.',
      'Doure o pãozinho na frigideira, corte ao meio e recheie.',
    ],
  },
  {
    id: 'brownie-fitness',
    nome: 'Brownie fitness',
    secao: 'doces-praticos',
    pagina: 161,
    macros: macros(266, 7.9, 21.6, 17.6),
    rende: '6 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '3 ovos',
          '¾ xícara de farinha de coco',
          '¾ xícara de açúcar mascavo',
          '¼ xícara de cacau sem açúcar',
          '1 cs de fermento',
          '1 barra de chocolate 60% cacau ou mais',
          '1 cs de óleo de coco',
        ],
      },
    ],
    passos: [
      'Derreta o óleo de coco com o chocolate e reserve.',
      'Bata os ovos com o açúcar até espumar. Junte o cacau, a farinha e o chocolate derretido.',
      'Misture o fermento por último.',
      'Asse em forma com papel manteiga em forno preaquecido a 180°.',
    ],
  },
  {
    id: 'brigadeiro-fit-coco',
    nome: 'Brigadeiro fit com coco',
    secao: 'doces-praticos',
    pagina: 163,
    macros: macros(98, 2.1, 4.1, 7.9),
    rende: '10 docinhos',
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 caixa de creme de leite light',
          '1 cs de cacau em pó 100%',
          '2 ovos',
          '1 cs de manteiga',
          '50 g de chocolate 100% cacau',
          '3 cs de adoçante',
          '2 cs de coco ralado',
        ],
      },
    ],
    passos: [
      'Leve tudo à panela em fogo baixo, mexendo até dar ponto de brigadeiro.',
      'Espere esfriar e leve à geladeira até firmar.',
      'Faça bolinhas, passe no coco ralado e volte à geladeira por 40 min.',
    ],
  },
  {
    id: 'mousse-maracuja',
    nome: 'Mousse fit de maracujá',
    secao: 'doces-praticos',
    pagina: 165,
    macros: macros(196, 11.2, 27.9, 3.8),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '2 iogurtes gregos light zero',
          '100 ml de leite desnatado',
          '50 ml de suco de maracujá',
        ],
      },
    ],
    passos: ['Bata tudo num copo grande com o mixer até ficar cremoso.'],
  },
  {
    id: 'morango-ninho-trufado',
    nome: 'Morango com Ninho trufado',
    secao: 'doces-praticos',
    pagina: 167,
    macros: macros(386, 10.3, 26.8, 27.6),
    rende: '2 porções',
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '100 g de morango',
          '300 ml de leite de coco',
          '1 cs de óleo de coco',
          '100 g de chocolate 70% cacau',
          '5 cs de leite em pó desnatado',
          '2 cs de coco ralado',
        ],
      },
    ],
    passos: [
      'Coloque os morangos picados no fundo.',
      'Na frigideira, 200 ml de leite de coco, o óleo de coco e o chocolate, mexendo até engrossar. Despeje sobre o morango e leve à geladeira por 10 min.',
      'Na panela, 100 ml de leite de coco, o leite em pó, o coco ralado e stevia, em fogo médio até engrossar. Cubra o chocolate e geladeira por mais 10 min.',
      'Polvilhe coco ralado e chocolate.',
    ],
  },
  {
    id: 'pudim-chia',
    nome: 'Pudim de chia vegano',
    secao: 'doce-vegano',
    pagina: 170,
    macros: macros(509, 11.4, 54.5, 28.9),
    preparo: ['sem-fogo'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '4 cs de chia',
          '200 ml de água',
          '10 g de goji berry',
          '½ banana',
          '12 g de coco ralado',
          '1 cs de granola',
          '1 cs de pasta de amendoim',
        ],
      },
    ],
    passos: [
      'Misture a água e a chia até ficar homogêneo e leve à geladeira por 2 h (vira um gel).',
      'Finalize com banana amassada, granola, goji, coco ralado e pasta de amendoim.',
    ],
    dica: 'Dura até 3 dias na geladeira.',
  },
]
