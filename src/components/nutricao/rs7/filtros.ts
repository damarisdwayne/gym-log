import { normalizar, ORDENACAO, type Ordem } from '../shared/receita'
import { nivelDe } from './constants'
import type { NivelId, ReceitaRS7, RefeicaoId, TagRS7 } from './types'

export type RefeicaoFiltro = 'todas' | RefeicaoId

export type NivelFiltro = 'todos' | NivelId

export type CriteriosRS7 = {
  busca: string
  refeicao: RefeicaoFiltro
  nivel: NivelFiltro
  tags: TagRS7[]
  ordem: Ordem
}

const textoBusca = (receita: ReceitaRS7) =>
  normalizar(`${receita.nome} ${receita.ingredientes.map((item) => item.nome).join(' ')}`)

export const filtrarRS7 = (
  receitas: ReceitaRS7[],
  { busca, refeicao, nivel, tags, ordem }: CriteriosRS7,
) => {
  const termo = normalizar(busca.trim())

  return receitas
    .filter((receita) => refeicao === 'todas' || receita.refeicao === refeicao)
    .filter((receita) => nivel === 'todos' || nivelDe(receita.macros.calorias) === nivel)
    .filter((receita) => tags.every((tag) => receita.tags.includes(tag)))
    .filter((receita) => !termo || textoBusca(receita).includes(termo))
    .sort(ORDENACAO[ordem])
}

const REFEICAO_POR_HORA: [number, RefeicaoId][] = [
  [10, 'cafe'],
  [14, 'almoco'],
  [18, 'lanche'],
  [21, 'jantar'],
  [24, 'ceia'],
]

export const refeicaoAgora = (data = new Date()): RefeicaoId =>
  REFEICAO_POR_HORA.find(([ate]) => data.getHours() < ate)?.[1] ?? 'ceia'
