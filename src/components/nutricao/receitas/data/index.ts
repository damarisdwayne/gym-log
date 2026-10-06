import type { EbookId, Receita, ReceitaBase, ReceitaMinha } from '../types'
import { BELLA } from './bella'
import { MINHAS } from './minhas'
import { NATFLIX } from './natflix'

const doEbook = (ebook: EbookId, receitas: ReceitaBase[]): Receita[] =>
  [...receitas]
    .sort((a, b) => a.pagina - b.pagina)
    .map(({ pagina, ...receita }) => ({ ...receita, origem: { tipo: 'ebook', ebook, pagina } }))

const daInternet = (receitas: ReceitaMinha[]): Receita[] =>
  receitas.map(({ link, autor, ...receita }) => ({
    ...receita,
    origem: { tipo: 'minhas', link, autor },
  }))

export const RECEITAS: Receita[] = [
  ...doEbook('natflix', NATFLIX),
  ...doEbook('bella', BELLA),
  ...daInternet(MINHAS),
]
