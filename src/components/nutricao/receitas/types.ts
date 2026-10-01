import type { Macros } from '../plano'

export type Tipo = 'salgada' | 'doce' | 'agridoce'

export type EbookId = 'natflix' | 'bella'

export type SecaoId =
  | 'frango'
  | 'carne'
  | 'atum'
  | 'lanches'
  | 'vegetarianas'
  | 'legumes'
  | 'whey'
  | 'amendoim'
  | 'dri'
  | 'bolos'
  | 'mingaus'
  | 'gelados'
  | 'shakes'
  | 'doces-praticos'
  | 'doce-vegano'
  | 'combinacoes'
  | 'agridoces'

export type Preparo = 'forno' | 'airfryer' | 'microondas' | 'fogao' | 'sem-fogo'

export type MacrosReceita = Macros & {
  calorias: number
}

export type GrupoIngredientes = {
  titulo?: string
  itens: string[]
}

export type ReceitaBase = {
  id: string
  nome: string
  secao: SecaoId
  pagina: number
  macros: MacrosReceita
  rende?: string
  preparo: Preparo[]
  vegana?: boolean
  semFoto?: boolean
  ingredientes: GrupoIngredientes[]
  passos: string[]
  dica?: string
}

export type Receita = ReceitaBase & {
  ebook: EbookId
}

export type Secao = {
  id: SecaoId
  titulo: string
  tipo: Tipo
  emoji: string
}

export type Ebook = {
  id: EbookId
  titulo: string
  autora: string
  arquivo: string
}
