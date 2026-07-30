import { Label } from '@/components/ui/label'
import { SERIES_MODES } from '@/lib/series'
import { cn } from '@/lib/utils'
import type { SeriesMode } from '@/types'

type ModeSelectProps = {
  value: SeriesMode
  onChange: (mode: SeriesMode) => void
}

export const ModeSelect = ({ value, onChange }: ModeSelectProps) => {
  const active = SERIES_MODES.find((mode) => mode.value === value)

  return (
    <div className="flex flex-col gap-1.5">
      <Label>Tipo de série</Label>
      <div className="grid grid-cols-3 gap-1 rounded-xl border border-border bg-muted p-1">
        {SERIES_MODES.map((mode) => (
          <button
            key={mode.value}
            type="button"
            onClick={() => onChange(mode.value)}
            className={cn(
              'h-10 rounded-lg px-1 text-xs font-medium leading-tight transition-colors',
              value === mode.value
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {mode.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{active?.hint}</p>
    </div>
  )
}
