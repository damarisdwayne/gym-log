import { ALMOCO, CAFE_DA_MANHA } from './refeicoes-manha'
import { JANTAR, LANCHE_DA_TARDE } from './refeicoes-tarde'
import type { Plano } from './types'

export const PLANO: Plano = {
  prescritoEm: '02/06/2026',
  nutricionista: 'Naiara Alves Gualberto',
  foco: 'Saúde e diminuir gordura',
  calorias: 1579,
  macros: { proteinas: 114, carboidratos: 170, lipideos: 52 },
  arquivo: '/fichas/nutricao/plano-alimentar.pdf',
  refeicoes: [CAFE_DA_MANHA, ALMOCO, LANCHE_DA_TARDE, JANTAR],
}
