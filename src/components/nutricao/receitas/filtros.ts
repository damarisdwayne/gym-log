import { normalizar, ORDENACAO, type Ordem } from '../shared/receita'
import { ORIGENS, PREPAROS, SECOES } from './constants'
import type { OrigemId, Preparo, Receita, Tipo } from './types'

export type TipoFiltro = 'todas' | Tipo

export type Filtro = {
  id: string
  label: string
  emoji: string
  teste: (receita: Receita) => boolean
  exclui?: string[]
}

const textoIngredientes = (receita: Receita) =>
  receita.ingredientes
    .flatMap((grupo) => grupo.itens)
    .join(' ')
    .toLowerCase()

const contem = (padrao: RegExp) => (receita: Receita) =>
  padrao.test(textoIngredientes(receita))

const temWhey = contem(/whey/)
const temCarne = contem(/frango|patinho|presunto|carne|atum/)

export const FILTROS_INGREDIENTE: Filtro[] = [
  { id: 'frango', label: 'Frango', emoji: '🍗', teste: contem(/frango/) },
  {
    id: 'carne',
    label: 'Carne',
    emoji: '🥩',
    teste: contem(/patinho|presunto|carne/),
  },
  { id: 'atum', label: 'Atum', emoji: '🐟', teste: contem(/atum/) },
  { id: 'ovo', label: 'Ovo', emoji: '🥚', teste: contem(/\bovos?\b|claras?\b|gemas?\b/) },
  { id: 'whey', label: 'Com whey', emoji: '💪', teste: temWhey, exclui: ['sem-whey'] },
  {
    id: 'sem-whey',
    label: 'Sem whey',
    emoji: '🚫',
    teste: (receita) => !temWhey(receita),
    exclui: ['whey'],
  },
  {
    id: 'amendoim',
    label: 'Pasta de amendoim',
    emoji: '🥜',
    teste: contem(/pasta de amendoim/),
  },
  { id: 'banana', label: 'Banana', emoji: '🍌', teste: contem(/banana/) },
  { id: 'chocolate', label: 'Chocolate', emoji: '🍫', teste: contem(/chocolate|cacau|nescau/) },
  { id: 'queijo', label: 'Queijo', emoji: '🧀', teste: contem(/queijo|muçarela|parmesão|requeijão|cottage|ricota|catupiry/) },
]

export const FILTROS_DIETA: Filtro[] = [
  {
    id: 'vegetariana',
    label: 'Vegetariana',
    emoji: '🥗',
    teste: (receita) => !temCarne(receita),
  },
  {
    id: 'vegana',
    label: 'Vegana',
    emoji: '🌱',
    teste: (receita) => Boolean(receita.vegana),
  },
  {
    id: 'proteica',
    label: '20 g+ proteína',
    emoji: '🏋️',
    teste: (receita) => receita.macros.proteinas >= 20,
  },
  {
    id: 'low-carb',
    label: 'Low carb',
    emoji: '📉',
    teste: (receita) => receita.macros.carboidratos <= 10,
  },
  {
    id: 'leve',
    label: 'Até 250 kcal',
    emoji: '🪶',
    teste: (receita) => receita.macros.calorias <= 250,
  },
]

export const FILTROS_PREPARO: Filtro[] = (
  Object.entries(PREPAROS) as [Preparo, (typeof PREPAROS)[Preparo]][]
).map(([id, { label, emoji }]) => ({
  id,
  label,
  emoji,
  teste: (receita) => receita.preparo.includes(id),
}))

const origemDe = ({ origem }: Receita): OrigemId =>
  origem.tipo === 'ebook' ? origem.ebook : origem.tipo

const idFiltroOrigem = (id: OrigemId) => `ebook-${id}`

export const FILTROS_ORIGEM: Filtro[] = ORIGENS.map((origem) => ({
  id: idFiltroOrigem(origem.id),
  label: origem.titulo,
  emoji: origem.emoji,
  teste: (receita) => origemDe(receita) === origem.id,
  exclui: ORIGENS.filter(({ id }) => id !== origem.id).map(({ id }) => idFiltroOrigem(id)),
}))

export const GRUPOS_FILTRO = [
  { titulo: 'Ingredientes', filtros: FILTROS_INGREDIENTE },
  { titulo: 'Dieta', filtros: FILTROS_DIETA },
  { titulo: 'Preparo', filtros: FILTROS_PREPARO },
  { titulo: 'Origem', filtros: FILTROS_ORIGEM },
]

const TODOS_FILTROS = GRUPOS_FILTRO.flatMap((grupo) => grupo.filtros)

const FILTRO_POR_ID = new Map(TODOS_FILTROS.map((filtro) => [filtro.id, filtro]))

export const alternarFiltro = (ativos: string[], id: string) => {
  if (ativos.includes(id)) return ativos.filter((item) => item !== id)
  const exclui = FILTRO_POR_ID.get(id)?.exclui ?? []
  return [...ativos.filter((item) => !exclui.includes(item)), id]
}

type Criterios = {
  busca: string
  tipo: TipoFiltro
  ativos: string[]
  ordem: Ordem
}

export const filtrarReceitas = (
  receitas: Receita[],
  { busca, tipo, ativos, ordem }: Criterios,
) => {
  const termo = normalizar(busca.trim())
  const filtros = ativos.flatMap((id) => FILTRO_POR_ID.get(id) ?? [])

  return receitas
    .filter((receita) => tipo === 'todas' || SECOES[receita.secao].tipo === tipo)
    .filter((receita) => filtros.every((filtro) => filtro.teste(receita)))
    .filter(
      (receita) =>
        !termo ||
        normalizar(`${receita.nome} ${textoIngredientes(receita)}`).includes(termo),
    )
    .sort(ORDENACAO[ordem])
}
