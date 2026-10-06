import type { ExercicioTreino } from './types'

export const letraTreino = (indice: number) => String.fromCharCode(65 + indice)

export const resumoExercicio = ({ series, reps, descanso }: ExercicioTreino) =>
  [reps ? `${series} × ${reps}` : `${series} séries`, descanso && `${descanso} de descanso`]
    .filter(Boolean)
    .join(' · ')

export const opcional = (valor: string) => valor.trim() || undefined
