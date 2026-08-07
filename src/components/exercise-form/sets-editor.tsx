import { Fragment, useState } from 'react'
import { ArrowDownToLine, Plus, Trash2 } from 'lucide-react'
import { SetValueField } from './set-value-field'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Picker } from '@/components/ui/picker'
import { detectMode, formatWeight, MODE_LABEL, totalVolume } from '@/lib/series'
import { createId } from '@/lib/utils'
import type { WorkoutSet } from '@/types'

export type EditableSet = {
  id: string
  reps: string
  weight: string
}

export const DEFAULT_REPS = '10'

const DEFAULT_WEIGHT = 20

const MAX_REPS = 30
const MAX_WEIGHT = 200

const REPS_VALUES = Array.from({ length: MAX_REPS }, (_, index) => index + 1)
const WEIGHT_VALUES = Array.from(
  { length: MAX_WEIGHT },
  (_, index) => index + 1,
)

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

type PickerTarget = {
  id: string
  field: 'reps' | 'weight'
}

type SetsEditorProps = {
  sets: EditableSet[]
  onChange: (sets: EditableSet[]) => void
}

export const SetsEditor = ({ sets, onChange }: SetsEditorProps) => {
  const [target, setTarget] = useState<PickerTarget | null>(null)

  const filled = toWorkoutSets(sets)
  const activeSet = sets.find((set) => set.id === target?.id)
  const isReps = target?.field === 'reps'

  const patch = (id: string, values: Partial<EditableSet>) =>
    onChange(sets.map((set) => (set.id === id ? { ...set, ...values } : set)))

  const remove = (id: string) => onChange(sets.filter((set) => set.id !== id))

  const append = () => onChange([...sets, createSet(filled.at(-1))])

  const primeiraCarga = sets[0]?.weight.trim() ?? ''

  const podeRepetirCarga =
    primeiraCarga !== '' &&
    sets.slice(1).some((set) => set.weight.trim() === '')

  const repetirCarga = () =>
    onChange(
      sets.map((set) =>
        set.weight.trim() === '' ? { ...set, weight: primeiraCarga } : set,
      ),
    )

  const handleSelect = (value: number) => {
    if (!target) return
    patch(target.id, { [target.field]: String(value) })
    setTarget(null)
  }

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
            <SetValueField
              value={set.reps}
              placeholder={DEFAULT_REPS}
              label={`Repetições da série ${index + 1}`}
              onChange={(reps) => patch(set.id, { reps })}
              onOpenList={() => setTarget({ id: set.id, field: 'reps' })}
            />
            <SetValueField
              value={set.weight}
              placeholder={String(DEFAULT_WEIGHT)}
              suffix="kg"
              decimal
              label={`Carga da série ${index + 1}`}
              onChange={(weight) => patch(set.id, { weight })}
              onOpenList={() => setTarget({ id: set.id, field: 'weight' })}
            />
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

      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={append}>
          <Plus className="size-4" />
          Adicionar série
        </Button>

        {podeRepetirCarga && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={repetirCarga}
          >
            <ArrowDownToLine className="size-4" />
            Repetir carga
          </Button>
        )}

        {filled.length > 0 && (
          <span className="ml-auto text-xs text-muted-foreground">
            Volume {formatWeight(totalVolume(filled))}
          </span>
        )}
      </div>

      <Picker
        open={target !== null}
        title={isReps ? 'Repetições' : 'Carga'}
        values={isReps ? REPS_VALUES : WEIGHT_VALUES}
        value={Number(isReps ? activeSet?.reps : activeSet?.weight) || null}
        fallback={
          isReps
            ? Number(DEFAULT_REPS)
            : (filled.at(-1)?.weight ?? DEFAULT_WEIGHT)
        }
        suffix={isReps ? undefined : 'kg'}
        onSelect={handleSelect}
        onClose={() => setTarget(null)}
      />
    </div>
  )
}
