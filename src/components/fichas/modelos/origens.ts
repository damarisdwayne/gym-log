import type { Divisao } from '../meu-treino'
import type { Modelo, OrigemModelo, SelecaoVariante } from './types'
import { resolverModelo, rotuloVariante, varianteDe } from './variantes'

export const ORIGENS: { id: OrigemModelo; nome: string; descricao: string }[] = [
  { id: 'pk', nome: 'Treinador PK', descricao: 'Divisão em 5 treinos · 8–12 repetições' },
  { id: 'natflix', nome: 'Natflix', descricao: 'Hipertrofia avançado e intermediário, mês a mês, e treino em casa' },
  { id: 'tay', nome: 'Tay Training', descricao: 'Academia 4x ou 5x e casa 5x, mês a mês' },
  { id: 'glow', nome: 'Glow · Isa Personal', descricao: 'Iniciante a avançado, express, full body, casa e isolados' },
]

const GRUPO_CASA = 'casa'

export const rotuloGrupo = ({ origem, grupo, grupoLabel }: Modelo) => {
  if (grupoLabel) return grupoLabel
  if (origem === 'pk') return undefined
  return grupo === GRUPO_CASA ? 'Treino em casa' : `Mês ${Number(grupo.slice(-2))}`
}

export const tituloCompleto = (modelo: Modelo) => {
  const origem = ORIGENS.find(({ id }) => id === modelo.origem)?.nome
  if (modelo.origem === 'pk') return origem ?? modelo.titulo
  if (modelo.grupo === GRUPO_CASA) return `${origem} · ${modelo.titulo}`
  return [origem, rotuloGrupo(modelo), modelo.titulo].filter(Boolean).join(' · ')
}

export const agruparPorGrupo = (modelos: Modelo[]) =>
  modelos.reduce<Map<string, Modelo[]>>((grupos, modelo) => {
    grupos.set(modelo.grupo, [...(grupos.get(modelo.grupo) ?? []), modelo])
    return grupos
  }, new Map())

export const paraAtivar = (modelo: Modelo, divisao?: Divisao, selecao?: SelecaoVariante | string) => {
  const variante = varianteDe(modelo, selecao)
  return {
    ...resolverModelo(modelo, variante?.chave),
    titulo: [tituloCompleto(modelo), rotuloVariante(modelo, variante)].filter(Boolean).join(' · '),
    divisao,
    variante: variante?.chave,
  }
}
