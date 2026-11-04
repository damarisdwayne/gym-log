import type { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core'
import { GripVertical } from 'lucide-react'
import { cn } from '@/lib/utils'

type AlcaArrastarProps = {
  rotulo: string
  attributes: DraggableAttributes
  listeners: DraggableSyntheticListeners
  setActivatorNodeRef: (elemento: HTMLElement | null) => void
  className?: string
}

export const AlcaArrastar = ({
  rotulo,
  attributes,
  listeners,
  setActivatorNodeRef,
  className,
}: AlcaArrastarProps) => (
  <button
    type="button"
    ref={setActivatorNodeRef}
    aria-label={`Mover ${rotulo}`}
    onClick={(evento) => evento.preventDefault()}
    className={cn(
      'flex h-11 w-7 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:cursor-grabbing',
      className,
    )}
    {...attributes}
    {...listeners}
  >
    <GripVertical className="size-4" />
  </button>
)
