import type { EbookId, Receita, ReceitaBase } from '../types'
import { BELLA } from './bella'
import { NATFLIX } from './natflix'

const doEbook = (ebook: EbookId, receitas: ReceitaBase[]): Receita[] =>
  receitas
    .map((receita) => ({ ...receita, ebook }))
    .sort((a, b) => a.pagina - b.pagina)

export const RECEITAS: Receita[] = [
  ...doEbook('natflix', NATFLIX),
  ...doEbook('bella', BELLA),
]
