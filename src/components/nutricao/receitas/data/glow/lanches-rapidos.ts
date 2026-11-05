import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

const RECHEIO_PATINHO = [
  '1 cs de requeijão light',
  '1 fatia de mussarela (17 g)',
  '100 g de carne moída (patinho magro)',
  'Mostarda a gosto',
  '1 cc de ketchup Heinz',
  'Folhas de alface',
  '1 rodela pequena de abacaxi (cerca de 30 g)',
]

export const LANCHES_RAPIDOS: ReceitaBase[] = [
  {
    id: 'tortilha-patinho-abacaxi',
    nome: 'Tortilha de patinho com abacaxi',
    secao: 'lanches',
    pagina: 23,
    macros: macros(362, 31, 27, 14),
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: ['1 tortilha Sequoia Torrijas de 15 cm (40 g)', ...RECHEIO_PATINHO],
      },
    ],
    passos: [
      'Espalhe o requeijão sobre a tortilha.',
      'Adicione a fatia de mussarela, a carne moída já cozida e a mostarda.',
      'Leve à airfryer por alguns minutos, até dourar e derreter o queijo.',
      'Retire, adicione o ketchup, a alface e o abacaxi.',
      'Dobre a tortilha ao meio e sirva quentinha.',
    ],
    dica: 'Pra variar o sabor, você pode usar frango desfiado ou atum como recheio.',
  },
  {
    id: 'cuscuz-frigideira-recheado',
    nome: 'Cuscuz de frigideira recheado',
    secao: 'lanches',
    pagina: 25,
    macros: macros(530, 33, 69, 12),
    preparo: ['fogao'],
    ingredientes: [
      { itens: ['80 g de flocão de milho hidratado com água', ...RECHEIO_PATINHO] },
    ],
    passos: [
      'Hidrate o flocão com um pouquinho de água e deixe descansar por 10 minutos.',
      'Aqueça uma frigideira antiaderente e espalhe o cuscuz hidratado, amassando com uma colher até formar um disco, como uma tapioca.',
      'Deixe dourar de um lado, vire e espalhe o recheio: requeijão, queijo, carne moída e mostarda.',
      'Dobre ao meio, deixe o queijo derreter e finalize com o ketchup, a alface e o abacaxi.',
      'Sirva ainda quente.',
    ],
    dica: 'Pra variar o sabor, você pode usar frango desfiado, atum ou até ovos mexidos como recheio. Se quiser deixar mais crocante, finalize rapidamente na airfryer.',
  },
  {
    id: 'hamburguer-caseiro-patinho',
    nome: 'Hambúrguer caseiro de patinho',
    secao: 'lanches',
    pagina: 27,
    macros: macros(379, 30, 39, 10),
    preparo: ['fogao', 'airfryer'],
    ingredientes: [
      {
        itens: [
          '100 g de carne moída (patinho magro)',
          '1 pão francês pequeno (50–60 g)',
          '1 fatia de mussarela (17 g)',
          '1 rodela de abacaxi (30 g)',
          '2 rodelas de tomate',
          '2 fatias finas de cebola roxa',
          '1 cc de ketchup Heinz',
          'Mostarda a gosto',
          'Sal e temperos naturais (alho, pimenta-do-reino, salsinha)',
        ],
      },
    ],
    passos: [
      'Modele a carne moída em formato de hambúrguer e tempere com sal e pimenta.',
      'Grelhe em frigideira antiaderente até dourar bem dos dois lados.',
      'Monte o sanduíche: pão, hambúrguer, mussarela, abacaxi, tomate, cebola roxa, ketchup e mostarda.',
      'Leve à airfryer por 2–3 minutos ou até o queijo derreter e o pão ficar crocante.',
      'Sirva quente.',
    ],
    dica: 'Quer deixar ainda mais leve? Troque o pão francês por pão integral ou wrap. E se quiser mais volume com menos carboidrato, adicione folhas de alface e um toque de limão.',
  },
]
