import type { Dieta, Refeicao } from '../types'
import { ALMOCO, cafeDaManha, JANTAR_FIM_DE_SEMANA, macros } from './refeicoes'
import { porcao, TROCAS_BANANA } from './trocas'

const REFEICAO_DA_TARDE: Refeicao = {
  id: 'refeicao-da-tarde',
  nome: 'Refeição da tarde',
  atalho: 'Tarde',
  emoji: '🍌',
  opcoes: [
    {
      id: 'tarde-castanha-banana',
      titulo: 'Opção 1',
      calorias: 143,
      macros: macros(3.1, 21.1, 5.6),
      alimentos: [
        {
          ...porcao('Castanha de caju', '5 unidades', '12,5 g'),
          substituicoes: [porcao('Castanha-do-pará', '3 unidades', '12 g')],
        },
        { ...porcao('Banana', '1 unidade média', '65 g'), substituicoes: TROCAS_BANANA },
      ],
    },
  ],
}

export const DIETA_DOM: Dieta = {
  id: 'dom',
  titulo: 'Domingo',
  dias: [0],
  calorias: 1339,
  macros: macros(110.8, 132, 42),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-dom.pdf',
  tamanho: '48 KB',
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
    REFEICAO_DA_TARDE,
    JANTAR_FIM_DE_SEMANA,
  ],
}
