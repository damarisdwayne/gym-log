import type { ReactNode } from 'react'
import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { Treino } from './types'
import { aoSoltar, useSensoresOrdenacao } from './use-sensores-ordenacao'

type ListaTreinosOrdenavelProps = {
  treinos: Treino[]
  onMover: (deId: string, paraId: string) => void
  children: ReactNode
}

export const ListaTreinosOrdenavel = ({ treinos, onMover, children }: ListaTreinosOrdenavelProps) => {
  const sensores = useSensoresOrdenacao()

  return (
    <DndContext sensors={sensores} collisionDetection={closestCenter} onDragEnd={aoSoltar(onMover)}>
      <SortableContext items={treinos} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
