import type { ReceitaMinha } from '../types'
import { macros } from './utils'

export const MINHAS: ReceitaMinha[] = [
  {
    id: 'bolinha-batata-doce-frango',
    nome: 'Bolinha de batata-doce com frango',
    secao: 'frango',
    link: 'https://www.instagram.com/p/CuscdvUuUGE/',
    autor: '@jessica.pelegrin',
    macros: macros(590, 60, 71, 13),
    macrosEstimadas: true,
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '1 xícara de batata-doce média cozida ou assada',
          '1 xícara de peito de frango desfiado ou em cubos',
          '1 ovo',
          '½ xícara de farelo de aveia',
          'Temperos a gosto',
          'Queijo para rechear (opcional)',
        ],
      },
    ],
    passos: [
      'Bata tudo no processador até virar uma massa.',
      'Faça as bolinhas e, se quiser, recheie com queijo.',
      'Leve à airfryer a 180 °C por 15 min ou até dourar.',
    ],
    dica: 'Receita original da @nutrituanyarenhart. As macros são da receita inteira, sem o queijo.',
  },
  {
    id: 'cookie-proteico-whey',
    nome: 'Cookie proteico de whey',
    secao: 'whey',
    link: 'https://www.instagram.com/p/C1C6HiMRESR/',
    autor: '@jaanathoen',
    macros: macros(223, 24, 18, 4.5),
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '1 scoop de whey de chocolate',
          '1 cs de cacau em pó',
          '1 cs de leite desnatado',
          '½ cs de mel',
          '1 quadradinho de chocolate amargo (opcional)',
        ],
      },
    ],
    passos: [
      'Misture bem todos os ingredientes, menos o chocolate amargo.',
      'Coloque a massa numa forma untada e espalhe os pedaços de chocolate amargo por cima.',
      'Leve à airfryer a 150 °C por 5 min.',
    ],
    dica: 'As macros são do cookie inteiro, já com o chocolate amargo.',
  },
  {
    id: 'toast-frango-cremoso',
    nome: 'Toast de frango cremoso',
    secao: 'lanches',
    link: 'https://www.instagram.com/p/C1VLiGcvavf/',
    autor: '@lorenafers',
    macros: macros(260, 25, 17, 10),
    macrosEstimadas: true,
    preparo: ['airfryer', 'forno'],
    ingredientes: [
      {
        itens: [
          'Pão integral',
          'Frango desfiado',
          'Queijo muçarela',
          'Creme de ricota',
          'Milho verde',
          'Orégano a gosto',
        ],
      },
    ],
    passos: [
      'Amasse o centro do pão com uma colher, formando uma cavidade.',
      'Recheie com o frango desfiado, o creme de ricota e o milho.',
      'Finalize com a muçarela e o orégano.',
      'Leve à airfryer a 200 °C por 5 min ou ao forno por 15 min.',
    ],
    dica: 'O post não traz as quantidades. As macros foram estimadas com 1 fatia de pão integral (30 g), 50 g de frango, 20 g de muçarela, 1 cs de creme de ricota e 1 cs de milho.',
  },
  {
    id: 'pastel-carne-airfryer',
    nome: 'Pastel de carne na airfryer',
    secao: 'carne',
    link: 'https://www.instagram.com/p/DVKAb9kjjT0/',
    autor: '@patriciasteniconutri',
    macros: macros(300, 21, 21, 15),
    macrosEstimadas: true,
    rende: '9 pastéis',
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '9 discos de Rap10 tradicional ou integral',
          '450 g de carne moída refogada',
          '180 g de muçarela ralada',
          'Requeijão cremoso para fechar as bordas',
        ],
      },
    ],
    passos: [
      'Recheie cada disco com cerca de 50 g de carne e 20 g de muçarela.',
      'Dobre em meia-lua, passe requeijão nas bordas e pressione para fechar.',
      'Leve à airfryer a 180 °C por 8 min.',
    ],
    dica: 'Dá pra congelar e levar direto à airfryer quando precisar. Sirva com vinagrete.',
  },
  {
    id: 'torta-cremosa-frango',
    nome: 'Torta cremosa de frango',
    secao: 'frango',
    link: 'https://www.instagram.com/p/DVZfjycjqUn/',
    autor: '@patriciasteniconutri',
    macros: macros(315, 30, 9, 18),
    preparo: ['forno', 'airfryer'],
    ingredientes: [
      {
        itens: [
          '100 g de frango desfiado pronto',
          '1 ovo',
          '1 cs de requeijão',
          '1 cs de farinha de tapioca',
          '1 colher de café de fermento em pó',
          'Tomate, milho e palmito (opcional)',
        ],
      },
    ],
    passos: [
      'Coloque todos os ingredientes numa tigela e misture bem.',
      'Despeje numa tigelinha de vidro. Dá pra multiplicar e fazer várias de uma vez.',
      'Leve ao forno por 45 min ou à airfryer por 25 min a 180 °C.',
    ],
    dica: 'Pode congelar. Para reaquecer: 7 a 10 min no micro-ondas ou 20 min na airfryer a 180 °C.',
  },
  {
    id: 'toast-ovos-cremosos',
    nome: 'Toast de ovos cremosos',
    secao: 'lanches',
    link: 'https://www.instagram.com/p/DWhjH41DqTo/',
    autor: '@patriciasteniconutri',
    macros: macros(235, 16, 15, 13),
    macrosEstimadas: true,
    rende: '2 toasts',
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '2 fatias de pão de forma integral',
          '2 ovos cozidos',
          '1 tomate sem sementes em cubinhos',
          '2 cs de cebola roxa em cubinhos',
          '1 cs cheia de requeijão light',
          'Sal e orégano a gosto',
          '2 fatias de muçarela',
        ],
      },
    ],
    passos: [
      'Amasse os ovos cozidos e misture com o tomate, a cebola roxa, o requeijão, o sal e o orégano.',
      'Espalhe o recheio sobre as fatias de pão e cubra cada uma com uma fatia de muçarela.',
      'Leve à airfryer a 200 °C por 5 a 7 min, até dourar.',
    ],
  },
  {
    id: 'coxinha-frango-crocante',
    nome: 'Coxinha de frango crocante',
    secao: 'frango',
    link: 'https://www.instagram.com/p/DYDaeWYO1Na/',
    autor: '@patriciasteniconutri',
    macros: macros(145, 15, 12, 4),
    macrosEstimadas: true,
    rende: '8 coxinhas',
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '300 g de frango desfiado e temperado',
          '450 g de batata inglesa cozida, sem casca',
          '4 fatias de muçarela (opcional)',
          'Cerca de 8 cs de farinha panko',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Prepare o frango desfiado e cozinhe a batata.',
      'Junte os dois, misture bem e acerte o sal.',
      'Modele as coxinhas recheando cada uma com meia fatia de muçarela.',
      'Empane direto na farinha panko.',
      'Leve à airfryer por 10 min a 180 °C e mais 10 min a 200 °C, até dourar.',
    ],
    dica: 'Borrife azeite antes de levar à airfryer pra ficar mais douradinha. Dá pra congelar cruas: do freezer direto pra airfryer, 20 min a 180 °C e mais 5 min a 200 °C.',
  },
]
