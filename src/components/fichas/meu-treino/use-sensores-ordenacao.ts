import { KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'

export const useSensoresOrdenacao = () =>
  useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

export const aoSoltar =
  (onMover: (deId: string, paraId: string) => void) =>
  ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return
    onMover(String(active.id), String(over.id))
  }
