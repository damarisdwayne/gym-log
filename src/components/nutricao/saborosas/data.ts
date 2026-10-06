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
]
