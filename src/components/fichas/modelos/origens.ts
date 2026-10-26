import type { Divisao } from '../meu-treino'
import type { Modelo, OrigemModelo } from './types'

export const ORIGENS: { id: OrigemModelo; nome: string; descricao: string }[] = [
  { id: 'pk', nome: 'Treinador PK', descricao: 'Divisão em 5 treinos · 8–12 repetições' },
  { id: 'natflix', nome: 'Natflix', descricao: 'Hipertrofia avançado e intermediário, mês a mês, e treino em casa' },
  { id: 'tay', nome: 'Tay Training', descricao: 'Academia 4x ou 5x e casa 5x, mês a mês' },
]

const GRUPO_CASA = 'casa'

export const rotuloGrupo = ({ origem, grupo }: Modelo) => {
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

export const paraAtivar = (modelo: Modelo, divisao?: Divisao) => ({
  ...modelo,
  titulo: tituloCompleto(modelo),
  divisao,
})
