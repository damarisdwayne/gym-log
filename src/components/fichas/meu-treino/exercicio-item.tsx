import { ChevronRight } from 'lucide-react'
import type { ExercicioTreino } from './types'
import { resumoExercicio } from './utils'

type ExercicioItemProps = {
  posicao: number
  exercicio: ExercicioTreino
  onEditar: (exercicio: ExercicioTreino) => void
}

export const ExercicioItem = ({ posicao, exercicio, onEditar }: ExercicioItemProps) => (
  <li>
    <button
      type="button"
      onClick={() => onEditar(exercicio)}
      className="flex w-full items-center gap-3 rounded-lg px-1 py-2.5 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
        {posicao}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-medium leading-snug">{exercicio.nome}</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {resumoExercicio(exercicio)}
        </span>
        {exercicio.obs && <span className="text-xs italic text-accent">{exercicio.obs}</span>}
      </span>
      <ChevronRight className="ml-auto size-4 shrink-0 text-muted-foreground" />
    </button>
  </li>
)
