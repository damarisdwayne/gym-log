export type ExercicioTreino = {
  id: string
  nome: string
  series: number
  reps?: string
  descanso?: string
  obs?: string
}

export type Treino = {
  id: string
  nome: string
  exercicios: ExercicioTreino[]
}
