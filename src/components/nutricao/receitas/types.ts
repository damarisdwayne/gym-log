import type { Macros } from '../plano'

export type Tipo = 'salgada' | 'doce' | 'agridoce'

export type SecaoId =
  | 'frango'
  | 'carne'
  | 'lanches'
  | 'vegetarianas'
  | 'legumes'
  | 'whey'
  | 'amendoim'
  | 'dri'
  | 'bolos'
  | 'doces-praticos'
  | 'doce-vegano'
  | 'agridoces'

export type Preparo = 'forno' | 'airfryer' | 'microondas' | 'fogao' | 'sem-fogo'

export type MacrosReceita = Macros & {
  calorias: number
}

export type GrupoIngredientes = {
  titulo?: string
  itens: string[]
}

export type Receita = {
  id: string
  nome: string
  secao: SecaoId
  pagina: number
  macros: MacrosReceita
  rende?: string
  preparo: Preparo[]
  vegana?: boolean
  ingredientes: GrupoIngredientes[]
  passos: string[]
  dica?: string
}

export type Secao = {
  id: SecaoId
  titulo: string
  tipo: Tipo
}
