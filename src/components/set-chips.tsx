import { cn } from '@/lib/utils'
import type { WorkoutSet } from '@/types'

type SetChipsProps = {
  sets: WorkoutSet[]
  className?: string
}

export const SetChips = ({ sets, className }: SetChipsProps) => (
  <div className={cn('flex flex-wrap gap-1.5', className)}>
    {sets.map((set, index) => (
      <span
        key={index}
        className="rounded-md border border-border bg-muted px-2 py-1 text-xs tabular-nums"
      >
        {set.reps}
        <span className="text-muted-foreground"> × </span>
        <strong className="font-semibold">{set.weight}</strong>
        <span className="text-muted-foreground">kg</span>
      </span>
    ))}
  </div>
)
