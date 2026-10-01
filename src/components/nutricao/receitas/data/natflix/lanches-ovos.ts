import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const LANCHES_OVOS: ReceitaBase[] = [
  {
    id: 'ovo-pao-rucula',
    nome: 'Ovo com pão e rúcula',
    secao: 'lanches',
    pagina: 30,
    macros: macros(247, 13, 13, 16),
    preparo: ['airfryer', 'fogao'],
    ingredientes: [
      {
        itens: [
          '2 ovos',
          '5 folhas de rúcula',
          '1 fatia de pão de forma',
          'Azeite',
          'Sal',
        ],
      },
    ],
    passos: [
      'Deixe o pão na airfryer por 10 min.',
      'Frite os ovos numa frigideira, mantendo a gema mole.',
      'Monte: fio de azeite no pão torrado, rúcula e os ovos por cima. Finalize com uma pitada de sal.',
    ],
  },
  {
    id: 'tapiovo',
    nome: 'Tapiovo',
    secao: 'lanches',
    pagina: 36,
    macros: macros(414, 23.4, 28.3, 23.2),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 ovos (ou 1 ovo e 1 clara)',
          '3 cs de tapioca',
          '1 cs de parmesão ralado',
          'Sal',
          '30 g de muçarela para o recheio',
        ],
      },
    ],
    passos: [
      'Unte a frigideira, coloque a tapioca primeiro e leve ao fogo BAIXO.',
      'Bata os ovos e jogue por cima da tapioca, coloque a muçarela e tampe.',
      'Espere dourar e firmar, feche a panqueca e deixe mais um pouco tampada até o queijo derreter.',
    ],
  },
  {
    id: 'tapioca-invertida',
    nome: 'Tapioca invertida',
    secao: 'lanches',
    pagina: 38,
    macros: macros(706, 51.5, 28, 43.3),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Recheio',
        itens: [
          '100 g de frango desfiado',
          '1 cs de creme de ricota',
          'Temperos',
          '1 cs de azeite',
        ],
      },
      {
        titulo: 'Massa',
        itens: [
          'Manteiga para untar',
          '2 ovos',
          '40 g de queijo muçarela ou coalho',
          '3 cs de tapioca',
          '1 cs de queijo parmesão ralado',
        ],
      },
    ],
    passos: [
      'Misture o frango, o creme de ricota, os temperos e o azeite. O recheio é a gosto, não precisa ser de frango.',
      'Unte a frigideira com manteiga e coloque o queijo. Por cima do queijo, a tapioca e um pouco de parmesão.',
      'Quebre os dois ovos por cima (e mais queijo, se quiser).',
      'Deixe tampado em fogo baixo até cozinhar a parte de cima.',
      'Adicione o recheio, dobre e deixe mais um minuto no fogo.',
    ],
  },
  {
    id: 'panquequeijo',
    nome: 'Panqueca de queijo (panquequeijo)',
    secao: 'lanches',
    pagina: 40,
    macros: macros(393, 27.2, 21.9, 21.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 claras',
          '1 ovo inteiro',
          '5 g de tapioca (½ cs)',
          '15 g de farelo de aveia (1½ cs)',
          '30 g de requeijão tablete',
          '10 g de creme de queijo minas (1 cs)',
          'Sal e orégano',
        ],
      },
    ],
    passos: [
      'Misture as claras, o ovo, a tapioca, o farelo de aveia e o sal.',
      'Leve à frigideira untada até dourar.',
      'Coloque o requeijão e o creme de queijo por cima, tampe e deixe derreter. Finalize com orégano.',
    ],
  },
  {
    id: 'omelete-recheado',
    nome: 'Omelete recheado',
    secao: 'lanches',
    pagina: 42,
    macros: macros(416, 41.3, 2, 26.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 ovos inteiros',
          '80 g de queijo muçarela light',
          '1 cs cheia de creme de ricota (30 g)',
          '1 cs de parmesão ralado (10 g)',
          'Cebola e cebolinha',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Bata tudo com um garfo e coloque na frigideira untada em fogo baixo, tampada, até dourar embaixo.',
      'Vire e coloque mais creme de ricota e muçarela por cima.',
      'Feche a massa, tampe de novo em fogo baixo e espere o recheio derreter.',
    ],
  },
  {
    id: 'queijo-quente',
    nome: 'Queijo quente',
    secao: 'lanches',
    pagina: 46,
    macros: macros(243, 20.3, 3.4, 16.5),
    preparo: ['microondas', 'fogao'],
    ingredientes: [
      {
        itens: [
          '1 ovo e 1 clara',
          '30 g de requeijão',
          '30 g de queijo muçarela',
          'Sal e orégano',
        ],
      },
    ],
    passos: [
      'Misture o ovo, a clara e o requeijão e leve ao micro-ondas numa forma comprida por 2 min.',
      'Corte no meio e recheie com a muçarela.',
      'Leve à frigideira tampada em fogo baixo até dourar ou o queijo derreter.',
    ],
  },
  {
    id: 'ovo-mexido-queijo-minas',
    nome: 'Ovo mexido com queijo minas',
    secao: 'lanches',
    pagina: 48,
    macros: macros(513, 34, 5.8, 40),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '4 ovos inteiros',
          '4 cs de óleo de coco',
          'Cebola, coentro e cebolinha',
          '30 g de queijo minas light picadinho',
          '30 g de creme de queijo minas',
        ],
      },
    ],
    passos: [
      'Unte a frigideira com óleo de coco e vá misturando item por item.',
    ],
  },
  {
    id: 'crepeoca-pao-de-queijo',
    nome: 'Crepeoca de pão de queijo',
    secao: 'lanches',
    pagina: 54,
    macros: macros(410, 27.2, 21.9, 23.7),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo e 1 clara',
          '1 cs de tapioca',
          '1 cs de polvilho azedo',
          '1 cs de requeijão light',
          '½ cs de parmesão ralado',
          '1 cc de fermento',
          'Sal a gosto',
        ],
      },
      {
        titulo: 'Recheio',
        itens: ['30 g de queijo muçarela', '1 cs de requeijão'],
      },
    ],
    passos: [
      'Misture a massa, deixando o fermento por último.',
      'Coloque na frigideira, tampe e espere dourar dos dois lados.',
      'Coloque o recheio, feche e tampe de novo até derreter.',
    ],
    dica: 'Uma crepioca que vira pão de queijo — foi o vício da Nat por muito tempo.',
  },
  {
    id: 'tapioca-queijo-forno',
    nome: 'Tapioca de queijo no forno',
    secao: 'lanches',
    pagina: 58,
    macros: macros(413, 25.5, 20.7, 25),
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '2 ovos',
          '1 cs de tapioca',
          '1 cc de fermento',
          '10 g de parmesão ralado',
          '40 g de queijo muçarela (ou outro)',
        ],
      },
    ],
    passos: [
      'Misture tudo, menos a muçarela e o parmesão.',
      'Coloque num recipiente, cubra com a muçarela e jogue o parmesão por cima.',
      'Leve ao forno por 20 a 25 min.',
    ],
  },
]
