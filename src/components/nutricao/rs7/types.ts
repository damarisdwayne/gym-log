import type { MacrosReceita } from '../receitas/types'

export type RefeicaoId =
  | 'cafe'
  | 'almoco'
  | 'lanche'
  | 'jantar'
  | 'ceia'
  | 'pre-treino'
  | 'pos-treino'
  | 'sobremesa'

export type TagRS7 = 'vegetariana' | 'vegana' | 'semLactose'

export type NivelId = 1 | 2 | 3 | 4

export type IngredienteRS7 = {
  nome: string
  qtd: string
}

export type ReceitaRS7 = {
  id: string
  nome: string
  descricao: string
  refeicao: RefeicaoId
  pagina: number
  macros: MacrosReceita
  minutos: number
  porcoes: number
  dificuldade: string
  tags: TagRS7[]
  ingredientes: IngredienteRS7[]
  passos: string[]
  dica: string
}
