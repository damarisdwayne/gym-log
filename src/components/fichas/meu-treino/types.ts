import type { MusculoSalvo } from './musculos'
import type { TecnicaExercicio } from './tecnica'

export type ExercicioTreino = {
  id: string
  nome: string
  series: number
  reps?: string
  descanso?: string
  obs?: string
  foco?: MusculoSalvo[]
  auxiliares?: MusculoSalvo[]
  tecnica?: TecnicaExercicio
}

export type Treino = {
  id: string
  nome: string
  vezesPorSemana?: number
  exercicios: ExercicioTreino[]
}
