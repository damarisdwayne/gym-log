import type { ExerciseEntry, SeriesMode, WorkoutSet } from '@/types'

export const SERIES_MODES: {
  value: SeriesMode
  label: string
  hint: string
}[] = [
  {
    value: 'constant',
    label: 'Carga fixa',
    hint: 'Mesmo peso e mesmas reps em todas as séries',
  },
  {
    value: 'progression',
    label: 'Progressão de carga',
    hint: 'Mantém as reps e aumenta o peso a cada série',
  },
  {
    value: 'pyramid',
    label: 'Pirâmide crescente',
    hint: 'Aumenta o peso e reduz as reps a cada série',
  },
]

export const MODE_LABEL: Record<SeriesMode, string> = {
  constant: 'Carga fixa',
  progression: 'Progressão',
  pyramid: 'Pirâmide',
}

export type GeneratorConfig = {
  mode: SeriesMode
  count: number
  reps: number
  weight: number
  weightStep: number
  repsStep: number
}

export const DEFAULT_GENERATOR: GeneratorConfig = {
  mode: 'constant',
  count: 4,
  reps: 12,
  weight: 20,
  weightStep: 5,
  repsStep: 2,
}

export const buildSets = ({
  mode,
  count,
  reps,
  weight,
  weightStep,
  repsStep,
}: GeneratorConfig): WorkoutSet[] =>
  Array.from({ length: Math.max(1, count) }, (_, index) => {
    if (mode === 'constant') return { reps, weight }
    if (mode === 'progression')
      return { reps, weight: round(weight + weightStep * index) }
    return {
      reps: Math.max(1, reps - repsStep * index),
      weight: round(weight + weightStep * index),
    }
  })

export const detectMode = (sets: WorkoutSet[]): SeriesMode => {
  if (sets.length < 2) return 'constant'
  const sameWeight = sets.every((set) => set.weight === sets[0].weight)
  if (sameWeight) return 'constant'
  const sameReps = sets.every((set) => set.reps === sets[0].reps)
  return sameReps ? 'progression' : 'pyramid'
}

export const totalVolume = (sets: WorkoutSet[]) =>
  round(sets.reduce((sum, set) => sum + set.reps * set.weight, 0))

export const topWeight = (sets: WorkoutSet[]) =>
  sets.reduce((max, set) => Math.max(max, set.weight), 0)

export const totalReps = (sets: WorkoutSet[]) =>
  sets.reduce((sum, set) => sum + set.reps, 0)

export const exerciseVolume = (entry: ExerciseEntry) => totalVolume(entry.sets)

export const round = (value: number) => Math.round(value * 100) / 100

export const formatWeight = (value: number) =>
  `${value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} kg`
