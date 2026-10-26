import type { ExercicioTreino, Treino } from '../meu-treino'

export type OrigemModelo = 'pk' | 'natflix' | 'tay'

type ExercicioBruto = Omit<ExercicioTreino, 'id' | 'foco' | 'auxiliares'>

export type TreinoBruto = Omit<Treino, 'id' | 'exercicios'> & {
  exercicios: ExercicioBruto[]
}

type ModeloBase = {
  id: string
  origem: OrigemModelo
  grupo: string
  titulo: string
  arquivo?: string
  cronograma?: string[][]
}

export type ModeloBruto = ModeloBase & { treinos: TreinoBruto[] }

export type Modelo = ModeloBase & { treinos: Treino[] }
