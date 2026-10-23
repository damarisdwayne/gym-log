import type { ExercicioTreino } from './types'
import { resumoExercicio, resumoMusculos } from './utils'

type ExercicioResumoProps = {
  posicao: number
  exercicio: ExercicioTreino
}

export const ExercicioResumo = ({ posicao, exercicio }: ExercicioResumoProps) => {
  const musculos = resumoMusculos(exercicio)

  return (
    <>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
        {posicao}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-medium leading-snug">{exercicio.nome}</span>
        <span className="text-xs tabular-nums text-muted-foreground">{resumoExercicio(exercicio)}</span>
        {musculos && <span className="text-xs text-primary">{musculos}</span>}
        {exercicio.obs && <span className="text-xs italic text-accent">{exercicio.obs}</span>}
      </span>
    </>
  )
}
