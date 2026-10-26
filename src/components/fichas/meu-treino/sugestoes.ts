import { normalizar } from '@/lib/utils'
import { SUBDIVISOES_LEGADAS, type Musculo, type MusculoLegado, type Musculos, type MusculoSalvo } from './musculos'
import { SUGESTOES } from './tabela-sugestoes'
import type { ExercicioTreino } from './types'

const compactar = (texto: string) => texto.replace(/[^a-z0-9]/g, '')

const POR_ESPECIFICIDADE = SUGESTOES.map(([chave, sugestao]) => [compactar(chave), sugestao] as const).sort(
  ([a], [b]) => b.length - a.length,
)

const sugerirParte = (parte: string) =>
  POR_ESPECIFICIDADE.find(([chave]) => compactar(parte).includes(chave))?.[1]

const unicos = (lista: Musculo[]) => [...new Set(lista)]

export const sugerirMusculos = (nome: string): Musculos => {
  const sugestoes = normalizar(nome)
    .split('+')
    .flatMap((parte) => sugerirParte(parte) ?? [])
  const foco = unicos(sugestoes.flatMap((sugestao) => sugestao.foco))
  const auxiliares = unicos(sugestoes.flatMap((sugestao) => sugestao.auxiliares)).filter(
    (musculo) => !foco.includes(musculo),
  )
  return { foco, auxiliares }
}

const ehLegado = (musculo: MusculoSalvo): musculo is MusculoLegado => musculo in SUBDIVISOES_LEGADAS

const migrarLegado = (salvos: MusculoSalvo[], sugeridos: Musculo[], todosSugeridos: Musculo[]) =>
  unicos(
    salvos.flatMap((musculo) => {
      if (!ehLegado(musculo)) return [musculo]
      const subdivisoes: readonly Musculo[] = SUBDIVISOES_LEGADAS[musculo]
      const doCampo = sugeridos.filter((item) => subdivisoes.includes(item))
      if (doCampo.length) return doCampo
      const doExercicio = todosSugeridos.filter((item) => subdivisoes.includes(item))
      return doExercicio.length ? doExercicio : subdivisoes.slice(0, 1)
    }),
  )

export const musculosDe = ({ nome, foco, auxiliares }: ExercicioTreino): Musculos => {
  const sugestao = sugerirMusculos(nome)
  if (!foco?.length) return sugestao
  const todosSugeridos = [...sugestao.foco, ...sugestao.auxiliares]
  const focoMigrado = migrarLegado(foco, sugestao.foco, todosSugeridos)
  return {
    foco: focoMigrado,
    auxiliares: migrarLegado(auxiliares ?? [], sugestao.auxiliares, todosSugeridos).filter(
      (musculo) => !focoMigrado.includes(musculo),
    ),
  }
}
