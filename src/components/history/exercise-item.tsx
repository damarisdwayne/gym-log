import { Trash2 } from 'lucide-react'
import { SetChips } from '@/components/set-chips'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  formatWeight,
  MODE_LABEL,
  topWeight,
  totalReps,
  totalVolume,
} from '@/lib/series'
import type { ExerciseEntry } from '@/types'

type ExerciseItemProps = {
  entry: ExerciseEntry
  onRemove: () => void
}

export const ExerciseItem = ({ entry, onRemove }: ExerciseItemProps) => (
  <div className="flex flex-col gap-2 rounded-lg border border-border bg-muted/40 p-3">
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">{entry.name}</span>
        <div className="flex flex-wrap gap-1">
          <Badge variant="primary">{MODE_LABEL[entry.mode]}</Badge>
          <Badge>{entry.sets.length} séries</Badge>
          <Badge>{totalReps(entry.sets)} reps</Badge>
          <Badge variant="accent">
            Pico {formatWeight(topWeight(entry.sets))}
          </Badge>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onRemove}
        aria-label={`Remover ${entry.name}`}
      >
        <Trash2 className="size-4" />
      </Button>
    </div>

    <SetChips sets={entry.sets} />

    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <span>Volume {formatWeight(totalVolume(entry.sets))}</span>
      {entry.note && <span className="italic">{entry.note}</span>}
    </div>
  </div>
)
