import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { conjugacoes } from './conjugados'
import { ExercicioItem } from './exercicio-item'
import type { ExercicioTreino } from './types'
import { aoSoltar, useSensoresOrdenacao } from './use-sensores-ordenacao'

type ListaExerciciosProps = {
  exercicios: ExercicioTreino[]
  onEditar: (exercicio: ExercicioTreino) => void
  onMover: (deId: string, paraId: string) => void
}

export const ListaExercicios = ({ exercicios, onEditar, onMover }: ListaExerciciosProps) => {
  const sensores = useSensoresOrdenacao()
  const grupos = conjugacoes(exercicios)

  return (
    <DndContext sensors={sensores} collisionDetection={closestCenter} onDragEnd={aoSoltar(onMover)}>
      <SortableContext items={exercicios} strategy={verticalListSortingStrategy}>
        <ol className="flex flex-col divide-y divide-border/60">
          {exercicios.map((exercicio, posicao) => (
            <ExercicioItem
              key={exercicio.id}
              posicao={posicao + 1}
              exercicio={exercicio}
              conjugacao={grupos[posicao]}
              onEditar={onEditar}
            />
          ))}
        </ol>
      </SortableContext>
    </DndContext>
  )
}
