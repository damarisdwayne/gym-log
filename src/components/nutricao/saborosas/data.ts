import type { ReceitaSaborosa } from './types'

export const RECEITAS_SABOROSAS: ReceitaSaborosa[] = [
  {
    id: 'contrafile-creme-de-alho',
    nome: 'Contrafilé com creme de alho e batatas rústicas',
    link: 'https://www.instagram.com/p/C0Cvv3Nu23e/',
    autor: '@gisele.receitas',
    preparo: ['airfryer', 'fogao'],
    ingredientes: [
      {
        itens: [
          '4 batatas grandes',
          'Temperos: páprica defumada, alho e cebola em pó, sal, chimichurri e azeite',
          '400 g de contrafilé',
        ],
      },
      {
        titulo: 'Molho de alho',
        itens: [
          '1 caixinha de creme de leite',
          '3 colheres de requeijão',
          '2 dentes de alho',
          '½ xícara de queijo ralado',
          '½ xícara de salsinha',
          'Sal',
        ],
      },
    ],
    passos: [
      'Corte as batatas em gomos com casca e tempere com páprica defumada, alho e cebola em pó, sal, chimichurri e azeite.',
      'Asse na airfryer a 200 °C por 25 a 30 min, mexendo na metade, até dourar.',
      'Corte o contrafilé em tiras, tempere com sal e sele numa frigideira bem quente com um fio de azeite.',
      'Bata no liquidificador o creme de leite, o requeijão, o alho, o queijo ralado, a salsinha e uma pitada de sal.',
      'Despeje o molho sobre a carne, aqueça por 2 a 3 min em fogo baixo e sirva com as batatas.',
    ],
    dica: 'Créditos da @sosdicasdalore. O post não traz o modo de preparo por escrito, então os passos foram montados a partir dos ingredientes — confira no vídeo.',
  },
  {
    id: 'batata-frita-manteiga-de-alho',
    nome: 'Batata frita com manteiga de alho',
    link: 'https://www.instagram.com/p/CzUhSvHrK54/',
    autor: '@danichoma',
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: ['4 batatas asterix', '2 colheres de amido de milho', 'Óleo para fritar'],
      },
      {
        titulo: 'Manteiga de alho',
        itens: [
          '2 colheres de manteiga',
          '2 dentes de alho picados',
          '2 colheres de queijo parmesão',
          '1 colher de cheiro-verde',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Corte as batatas em palitos e deixe 30 min na água gelada.',
      'Cozinhe por 5 min, escorra e seque bem.',
      'Envolva os palitos nas 2 colheres de amido.',
      'Frite em óleo quente, em fogo alto, até dourar.',
      'Derreta a manteiga com o alho, desligue o fogo e misture o parmesão, o cheiro-verde e o sal. Jogue por cima das batatas.',
    ],
    dica: 'O post só lista os ingredientes da manteiga de alho, então o último passo foi montado a partir deles — confira no vídeo.',
  },
  {
    id: 'palitinho-batata-queijo',
    nome: 'Palitinho de batata com queijo',
    link: 'https://www.instagram.com/p/C0mmDmcuy4x/',
    autor: '@_receitas_faceis_',
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 batatas grandes',
          '½ colher de sal',
          '1 colher de chá de alho em pó',
          'Salsinha a gosto',
          '100 g de queijo muçarela',
          '5 colheres de amido de milho',
          'Óleo para fritar',
        ],
      },
    ],
    passos: [
      'Cozinhe as batatas até ficarem bem macias, escorra e amasse ainda quentes.',
      'Junte o sal, o alho em pó, a salsinha e a muçarela ralada e misture.',
      'Acrescente o amido aos poucos até formar uma massa que não grude nas mãos.',
      'Modele palitos e frite em óleo quente até dourar.',
    ],
    dica: 'Créditos da @danichoma. O post deixa o passo a passo só no vídeo, então os passos foram montados a partir dos ingredientes — confira lá.',
  },
  {
    id: 'cookie-recheado-creme-de-avela',
    nome: 'Cookie recheado com creme de avelã',
    link: 'https://www.instagram.com/p/Dc_vl2KBVHb/',
    autor: '@mahperezz',
    preparo: ['airfryer', 'forno'],
    rende: '2 cookies',
    ingredientes: [
      {
        itens: [
          '2 colheres de sopa de manteiga com sal derretida (30 g)',
          '3 colheres de sopa de açúcar refinado (36 g)',
          '1 colher de sopa de leite',
          '1 colher de chá de essência de baunilha (opcional)',
          '6 colheres de sopa de farinha de trigo (50 g)',
          '1 colher de café bem rasa de fermento químico',
          'Gotas de chocolate a gosto (ou pedaços de barra)',
          'Creme de avelã a gosto, para o recheio',
        ],
      },
    ],
    passos: [
      'Congele colheradas de creme de avelã.',
      'Misture o açúcar com a manteiga derretida. Junte o leite e a baunilha e misture de novo.',
      'Acrescente a farinha e o fermento e mexa até dar o ponto. Finalize com as gotas de chocolate.',
      'Recheie com o creme de avelã congelado e leve ao congelador por 15 min.',
      'Asse na airfryer a 170 °C por 10 min ou no forno pré-aquecido a 180 °C por 15 min.',
    ],
    dica: 'O tempo muda conforme a airfryer, então fique de olho. Espere esfriar um pouco antes de comer: é aí que ele chega no ponto, crocante por fora e macio por dentro.',
  },
  {
    id: 'cookie-de-travessa',
    nome: 'Cookie de travessa',
    link: 'https://www.instagram.com/p/DW7W4HAjU9B/',
    autor: '@arthurpaek',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '230 g de manteiga',
          '60 g de açúcar mascavo',
          '200 g de açúcar',
          '2 ovos',
          '420 g de farinha de trigo',
          '1 colher de chá de sal',
          '300 g de chocolate ao leite picado',
          '300 g de creme de avelã, em porções congeladas',
          '1 colher de chá de bicarbonato',
        ],
      },
    ],
    passos: [
      'Numa tigela, misture a manteiga, os açúcares e o sal.',
      'Adicione os ovos e depois a farinha, o bicarbonato e o chocolate picado.',
      'Faça bolinhas com a massa, recheie cada uma com uma porção de creme de avelã congelado e arrume lado a lado numa travessa.',
      'Asse por 25 min.',
      'Se quiser, sirva com sorvete.',
    ],
    dica: 'O post não diz a temperatura. 180 °C em forno pré-aquecido é o padrão pra cookies.',
  },
]
