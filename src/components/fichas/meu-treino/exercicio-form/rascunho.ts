import { createId } from '@/lib/utils'
import type { Musculos } from '../musculos'
import { musculosDe, sugerirMusculos } from '../sugestoes'
import type { TecnicaExercicio } from '../tecnica'
import type { ExercicioTreino } from '../types'
import { opcional } from '../utils'

const SERIES_PADRAO = 3

export type Rascunho = {
  chave: string
  id?: string
  nome: string
  series: string
  reps: string
  descanso: string
  obs: string
  tecnica?: TecnicaExercicio
  musculos?: Musculos
}

export const rascunhoDe = (exercicio?: ExercicioTreino): Rascunho => ({
  chave: exercicio?.id ?? createId(),
  id: exercicio?.id,
  nome: exercicio?.nome ?? '',
  series: String(exercicio?.series ?? SERIES_PADRAO),
  reps: exercicio?.reps ?? '',
  descanso: exercicio?.descanso ?? '',
  obs: exercicio?.obs ?? '',
  tecnica: exercicio?.tecnica,
  musculos: exercicio && musculosDe(exercicio),
})

export const musculosDoRascunho = (rascunho: Rascunho) => rascunho.musculos ?? sugerirMusculos(rascunho.nome)

export const numeroSeries = (rascunho: Rascunho) => Number.parseInt(rascunho.series, 10)

export const rascunhoValido = (rascunho: Rascunho) => Boolean(rascunho.nome.trim()) && numeroSeries(rascunho) > 0

export const montarExercicio = (rascunho: Rascunho, conjugadoComProximo: boolean): ExercicioTreino => ({
  id: rascunho.id ?? rascunho.chave,
  nome: rascunho.nome.trim(),
  series: numeroSeries(rascunho),
  reps: opcional(rascunho.reps),
  descanso: opcional(rascunho.descanso),
  obs: opcional(rascunho.obs),
  ...musculosDoRascunho(rascunho),
  tecnica: rascunho.tecnica,
  conjugadoComProximo: conjugadoComProximo || undefined,
})
