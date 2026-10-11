import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { ExercicioItem } from './exercicio-item'
import type { ExercicioTreino } from './types'

type ListaExerciciosProps = {
  exercicios: ExercicioTreino[]
  onEditar: (exercicio: ExercicioTreino) => void
  onMover: (deId: string, paraId: string) => void
}

export const ListaExercicios = ({ exercicios, onEditar, onMover }: ListaExerciciosProps) => {
  const sensores = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const soltar = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return
    onMover(String(active.id), String(over.id))
  }

  return (
    <DndContext sensors={sensores} collisionDetection={closestCenter} onDragEnd={soltar}>
      <SortableContext items={exercicios} strategy={verticalListSortingStrategy}>
        <ol className="flex flex-col divide-y divide-border/60">
          {exercicios.map((exercicio, posicao) => (
            <ExercicioItem
              key={exercicio.id}
              posicao={posicao + 1}
              exercicio={exercicio}
              onEditar={onEditar}
            />
          ))}
        </ol>
      </SortableContext>
    </DndContext>
  )
}
