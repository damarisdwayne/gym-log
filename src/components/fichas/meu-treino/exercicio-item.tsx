import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AlcaArrastar } from './alca-arrastar'
import { classesConjugacao, type Conjugacao } from './conjugados'
import { ExercicioResumo } from './exercicio-resumo'
import type { ExercicioTreino } from './types'

type ExercicioItemProps = {
  posicao: number
  exercicio: ExercicioTreino
  conjugacao?: Conjugacao
  onEditar: (exercicio: ExercicioTreino) => void
}

export const ExercicioItem = ({ posicao, exercicio, conjugacao, onEditar }: ExercicioItemProps) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: exercicio.id })

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn(
        'relative flex items-center bg-card',
        classesConjugacao(conjugacao),
        isDragging && 'z-10 rounded-lg shadow-lg ring-1 ring-primary/40',
      )}
    >
      <AlcaArrastar
        rotulo={exercicio.nome}
        attributes={attributes}
        listeners={listeners}
        setActivatorNodeRef={setActivatorNodeRef}
      />
      <button
        type="button"
        onClick={() => onEditar(exercicio)}
        className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-1 py-2.5 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <ExercicioResumo posicao={posicao} exercicio={exercicio} grupo={conjugacao?.rotulo} />
        <ChevronRight className="ml-auto size-4 shrink-0 text-muted-foreground" />
      </button>
    </li>
  )
}
