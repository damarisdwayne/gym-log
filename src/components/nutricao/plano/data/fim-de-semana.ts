import type { Dieta } from '../types'
import {
  ALMOCO,
  CAFE_COM_IOGURTE,
  cafeComBanana,
  cafeDaManha,
  hamburguer,
  jantar,
  macros,
  PIZZA_DE_FRANGO,
  WHEY_DUX,
} from './refeicoes'
import { porcao } from './trocas'

const JANTAR_FIM_DE_SEMANA = jantar([
  hamburguer(100, 407, macros(46.4, 23.2, 14.2)),
  PIZZA_DE_FRANGO,
])

export const DIETA_SAB: Dieta = {
  id: 'sab',
  titulo: 'Sábado',
  dias: [6],
  calorias: 1293,
  macros: macros(161.3, 92.3, 33.1),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-sab.pdf',
  tamanho: '45 KB',
  refeicoes: [
    cafeDaManha([cafeComBanana(WHEY_DUX, 390, macros(27.8, 55.9, 7.3)), CAFE_COM_IOGURTE]),
    {
      id: 'almoco',
      nome: 'Almoço',
      atalho: 'Almoço',
      emoji: '🥩',
      opcoes: [
        {
          id: 'almoco-maminha',
          titulo: 'Opção 1',
          calorias: 496,
          macros: macros(87.1, 13.2, 11.7),
          alimentos: [
            {
              ...porcao(
                'Maminha assada recheada (cebola, pimentão, tomate, calabresa e pimenta-do-reino)',
                '3 fatias médias',
                '330 g',
              ),
              substituicoes: [porcao('Costela assada', '2 pedaços grandes', '120 g')],
            },
            porcao('Soda italiana de morango (Projeto Verão)', '1 porção', '223 ml'),
          ],
        },
      ],
    },
    JANTAR_FIM_DE_SEMANA,
  ],
}

export const DIETA_DOM: Dieta = {
  id: 'dom',
  titulo: 'Domingo',
  dias: [0],
  calorias: 1195,
  macros: macros(107.7, 110.8, 36.4),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-dom.pdf',
  tamanho: '44 KB',
  refeicoes: [
    cafeDaManha([
      {
        id: 'cafe-pao-de-queijo',
        titulo: 'Opção 1',
        calorias: 271,
        macros: macros(8.5, 36.1, 10.9),
        alimentos: [porcao('Pão de queijo', '4 unidades médias', '100 g')],
      },
    ]),
    ALMOCO,
    JANTAR_FIM_DE_SEMANA,
  ],
}
