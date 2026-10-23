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

type OrigemRS7 =
  | { pagina: number; link?: undefined; autor?: undefined }
  | { pagina?: undefined; link: string; autor: string }

export type ReceitaRS7 = OrigemRS7 & {
  id: string
  nome: string
  descricao: string
  refeicao: RefeicaoId
  macros: MacrosReceita
  minutos: number
  porcoes: number
  dificuldade: string
  tags: TagRS7[]
  ingredientes: IngredienteRS7[]
  passos: string[]
  dica: string
}
