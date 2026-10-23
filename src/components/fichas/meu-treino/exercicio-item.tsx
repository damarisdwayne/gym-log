import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ChevronRight, GripVertical } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ExercicioResumo } from './exercicio-resumo'
import type { ExercicioTreino } from './types'

type ExercicioItemProps = {
  posicao: number
  exercicio: ExercicioTreino
  onEditar: (exercicio: ExercicioTreino) => void
}

export const ExercicioItem = ({ posicao, exercicio, onEditar }: ExercicioItemProps) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: exercicio.id })

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn(
        'relative flex items-center bg-card',
        isDragging && 'z-10 rounded-lg shadow-lg ring-1 ring-primary/40',
      )}
    >
      <button
        type="button"
        ref={setActivatorNodeRef}
        aria-label={`Mover ${exercicio.nome}`}
        className="flex h-11 w-7 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:cursor-grabbing"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => onEditar(exercicio)}
        className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-1 py-2.5 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <ExercicioResumo posicao={posicao} exercicio={exercicio} />
        <ChevronRight className="ml-auto size-4 shrink-0 text-muted-foreground" />
      </button>
    </li>
  )
}
