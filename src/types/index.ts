export type SeriesMode = 'constant' | 'progression' | 'pyramid'

export type WorkoutSet = {
  reps: number
  weight: number
}

export type ExerciseEntry = {
  id: string
  name: string
  mode: SeriesMode
  sets: WorkoutSet[]
  note?: string
}

export type Session = {
  date: string
  exercises: ExerciseEntry[]
}

export type SessionMap = Record<string, ExerciseEntry[]>
