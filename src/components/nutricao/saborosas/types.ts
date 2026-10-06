import type { GrupoIngredientes, MacrosReceita, Preparo } from '../receitas/types'

export type ReceitaSaborosa = {
  id: string
  nome: string
  link: string
  autor: string
  preparo: Preparo[]
  rende?: string
  macros?: MacrosReceita
  ingredientes: GrupoIngredientes[]
  passos: string[]
  dica?: string
}
