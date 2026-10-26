import { musculosDe } from './sugestoes'
import { resumoTecnica } from './tecnica'
import type { ExercicioTreino, Treino } from './types'

export const rotuloTreino = (treino: Treino, indice: number) =>
  treino.rotulo ?? String.fromCharCode(65 + indice)

export const formatarVezes = (vezes: number) => vezes.toLocaleString('pt-BR')

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
