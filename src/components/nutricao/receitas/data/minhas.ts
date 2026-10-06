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
]
