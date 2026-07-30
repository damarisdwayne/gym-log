import { Fragment } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { detectMode, formatWeight, MODE_LABEL, totalVolume } from '@/lib/series'
import { createId } from '@/lib/utils'
import type { WorkoutSet } from '@/types'

export type EditableSet = {
  id: string
  reps: string
  weight: string
}

export const DEFAULT_REPS = '10'

export const createSet = (set?: WorkoutSet): EditableSet => ({
  id: createId(),
  reps: set ? String(set.reps) : DEFAULT_REPS,
  weight: set ? String(set.weight) : '',
})

export const isPristineSet = (set: EditableSet) =>
  set.reps === DEFAULT_REPS && set.weight.trim() === ''

export const toWorkoutSets = (sets: EditableSet[]): WorkoutSet[] =>
  sets
    .filter((set) => set.reps.trim() !== '' && set.weight.trim() !== '')
    .map((set) => ({ reps: Number(set.reps), weight: Number(set.weight) }))

type SetsEditorProps = {
  sets: EditableSet[]
  onChange: (sets: EditableSet[]) => void
}

export const SetsEditor = ({ sets, onChange }: SetsEditorProps) => {
  const filled = toWorkoutSets(sets)

  const patch = (id: string, values: Partial<EditableSet>) =>
    onChange(sets.map((set) => (set.id === id ? { ...set, ...values } : set)))

  const remove = (id: string) => onChange(sets.filter((set) => set.id !== id))

  const append = () => onChange([...sets, createSet()])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Séries</Label>
        {filled.length > 0 && (
          <Badge variant="primary">{MODE_LABEL[detectMode(filled)]}</Badge>
        )}
      </div>

      <div className="grid grid-cols-[1.5rem_minmax(0,1fr)_minmax(0,1fr)_2.25rem] items-center gap-2">
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
              placeholder={DEFAULT_REPS}
              value={set.reps}
              onChange={(event) => patch(set.id, { reps: event.target.value })}
              className="h-11 min-w-0"
              aria-label={`Repetições da série ${index + 1}`}
            />
            <div className="relative min-w-0">
              <Input
                type="number"
                inputMode="decimal"
                step={0.5}
                min={0}
                placeholder="20"
                value={set.weight}
                onChange={(event) =>
                  patch(set.id, { weight: event.target.value })
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
        {filled.length > 0 && (
          <span className="text-xs text-muted-foreground">
            Volume {formatWeight(totalVolume(filled))}
          </span>
        )}
      </div>
    </div>
  )
}
