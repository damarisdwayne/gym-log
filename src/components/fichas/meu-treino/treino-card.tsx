import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Pencil, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { AlcaArrastar } from './alca-arrastar'
import { ListaExercicios } from './lista-exercicios'
import type { ExercicioTreino, Treino } from './types'
import { rotuloTreino } from './utils'
import { VezesBadge } from './vezes-badge'

type TreinoCardProps = {
  indice: number
  treino: Treino
  onEditar: () => void
  onExercicio: (exercicio?: ExercicioTreino) => void
  onMoverExercicio: (deId: string, paraId: string) => void
}

export const TreinoCard = ({
  indice,
  treino,
  onEditar,
  onExercicio,
  onMoverExercicio,
}: TreinoCardProps) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: treino.id })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn('relative', isDragging && 'z-10 rounded-xl shadow-lg ring-1 ring-primary/40')}
    >
      <Collapsible
        title={`${rotuloTreino(treino, indice)} · ${treino.nome}`}
        leading={
          <AlcaArrastar
            rotulo={treino.nome}
            attributes={attributes}
            listeners={listeners}
            setActivatorNodeRef={setActivatorNodeRef}
            className="-my-2 -ml-2 -mr-1"
          />
        }
        meta={
          <>
            <VezesBadge vezes={treino.vezesPorSemana} />
            <Badge>{treino.exercicios.length} exercícios</Badge>
          </>
        }
      >
        <div className="flex flex-col gap-3">
          {treino.exercicios.length > 0 && (
            <ListaExercicios
              exercicios={treino.exercicios}
              onEditar={onExercicio}
              onMover={onMoverExercicio}
            />
          )}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={() => onExercicio()}>
              <Plus className="size-4" />
              Adicionar exercício
            </Button>
            <Button variant="ghost" size="sm" onClick={onEditar}>
              <Pencil className="size-3.5" />
              Editar
            </Button>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}
