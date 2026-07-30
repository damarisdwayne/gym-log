import type { ExerciseEntry, SeriesMode, WorkoutSet } from '@/types'

export const MODE_LABEL: Record<SeriesMode, string> = {
  constant: 'Carga fixa',
  progression: 'Progressão',
  pyramid: 'Pirâmide',
}

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
