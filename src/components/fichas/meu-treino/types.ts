import type { Musculo } from './musculos'

export type ExercicioTreino = {
  id: string
  nome: string
  series: number
  reps?: string
  descanso?: string
  obs?: string
  foco?: Musculo[]
  auxiliares?: Musculo[]
}

export type Treino = {
  id: string
  nome: string
  vezesPorSemana?: number
  exercicios: ExercicioTreino[]
}
