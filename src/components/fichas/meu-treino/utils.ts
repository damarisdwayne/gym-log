import { musculosDe } from './sugestoes'
import { resumoTecnica } from './tecnica'
import type { ExercicioTreino } from './types'

export const letraTreino = (indice: number) => String.fromCharCode(65 + indice)

export const resumoExercicio = ({ series, reps, descanso, tecnica }: ExercicioTreino) =>
  [
    reps ? `${series} × ${reps}` : `${series} séries`,
    descanso && `${descanso} de descanso`,
    tecnica && resumoTecnica(tecnica),
  ]
    .filter(Boolean)
    .join(' · ')

export const resumoMusculos = (exercicio: ExercicioTreino) => {
  const { foco, auxiliares } = musculosDe(exercicio)
  return [foco.join(', '), auxiliares.length && `+ ${auxiliares.join(', ')}`].filter(Boolean).join(' ')
}

export const opcional = (valor: string) => valor.trim() || undefined
