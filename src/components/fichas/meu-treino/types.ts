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
  conjugadoComProximo?: boolean
}

export type Treino = {
  id: string
  rotulo?: string
  nome: string
  vezesPorSemana?: number
  exercicios: ExercicioTreino[]
}

export type DiasDivisao = 3 | 4 | 5 | 6

export type FocoDivisao = 'geral' | 'quadriceps' | 'gluteo'

export type Divisao = {
  dias: DiasDivisao
  foco: FocoDivisao
  semana?: number
}
