import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formatWeight, totalVolume } from '@/lib/series'
import type { WorkoutSet } from '@/types'

type SetsEditorProps = {
  sets: WorkoutSet[]
  onChange: (sets: WorkoutSet[]) => void
}

export const SetsEditor = ({ sets, onChange }: SetsEditorProps) => {
  const patch = (index: number, values: Partial<WorkoutSet>) =>
    onChange(sets.map((set, i) => (i === index ? { ...set, ...values } : set)))

  const remove = (index: number) =>
    onChange(sets.filter((_, i) => i !== index))

  const append = () =>
    onChange([...sets, sets[sets.length - 1] ?? { reps: 10, weight: 10 }])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Séries realizadas</Label>
        <span className="text-xs text-muted-foreground">
          Volume {formatWeight(totalVolume(sets))}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {sets.map((set, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-6 shrink-0 text-center text-xs font-semibold text-muted-foreground">
              {index + 1}ª
            </span>
            <Input
              type="number"
              inputMode="numeric"
              min={1}
              value={set.reps}
              onChange={(event) =>
                patch(index, { reps: Number(event.target.value) })
              }
              className="h-10"
              aria-label={`Repetições da série ${index + 1}`}
            />
            <span className="text-xs text-muted-foreground">×</span>
            <div className="relative flex-1">
              <Input
                type="number"
                inputMode="decimal"
                step={0.5}
                min={0}
                value={set.weight}
                onChange={(event) =>
                  patch(index, { weight: Number(event.target.value) })
                }
                className="h-10 pr-9"
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
              onClick={() => remove(index)}
              disabled={sets.length === 1}
              aria-label={`Remover série ${index + 1}`}
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button type="button" variant="outline" size="sm" onClick={append}>
        <Plus className="size-4" />
        Adicionar série
      </Button>
    </div>
  )
}
