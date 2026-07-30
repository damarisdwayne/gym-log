import { Fragment } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { detectMode, formatWeight, MODE_LABEL, totalVolume } from '@/lib/series'
import { createId } from '@/lib/utils'
import type { WorkoutSet } from '@/types'

export type EditableSet = WorkoutSet & { id: string }

export const createSet = (set?: WorkoutSet): EditableSet => ({
  id: createId(),
  reps: set?.reps ?? 12,
  weight: set?.weight ?? 0,
})

type SetsEditorProps = {
  sets: EditableSet[]
  onChange: (sets: EditableSet[]) => void
}

export const SetsEditor = ({ sets, onChange }: SetsEditorProps) => {
  const patch = (id: string, values: Partial<WorkoutSet>) =>
    onChange(sets.map((set) => (set.id === id ? { ...set, ...values } : set)))

  const remove = (id: string) => onChange(sets.filter((set) => set.id !== id))

  const append = () => onChange([...sets, createSet(sets.at(-1))])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Séries</Label>
        <Badge variant="primary">{MODE_LABEL[detectMode(sets)]}</Badge>
      </div>

      <div className="grid grid-cols-[1.5rem_1fr_1fr_2.25rem] items-center gap-x-2 gap-y-2">
        <span />
        <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Reps
        </span>
        <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Carga
        </span>
        <span />

        {sets.map((set, index) => (
          <Fragment key={set.id}>
            <span className="text-center text-xs font-semibold text-muted-foreground">
              {index + 1}
            </span>
            <Input
              type="number"
              inputMode="numeric"
              min={1}
              value={set.reps}
              onChange={(event) =>
                patch(set.id, { reps: Number(event.target.value) })
              }
              className="h-11 min-w-0"
              aria-label={`Repetições da série ${index + 1}`}
            />
            <div className="relative min-w-0">
              <Input
                type="number"
                inputMode="decimal"
                step={0.5}
                min={0}
                value={set.weight}
                onChange={(event) =>
                  patch(set.id, { weight: Number(event.target.value) })
                }
                className="h-11 w-full pr-9"
                aria-label={`Carga da série ${index + 1}`}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                kg
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(set.id)}
              disabled={sets.length === 1}
              aria-label={`Remover série ${index + 1}`}
            >
              <Trash2 className="size-4" />
            </Button>
          </Fragment>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button type="button" variant="outline" size="sm" onClick={append}>
          <Plus className="size-4" />
          Adicionar série
        </Button>
        <span className="text-xs text-muted-foreground">
          Volume {formatWeight(totalVolume(sets))}
        </span>
      </div>
    </div>
  )
}
