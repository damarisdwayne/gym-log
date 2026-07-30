import { TrendBadge } from './trend-badge'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatShortDate } from '@/lib/date'
import type { ExerciseHistory } from '@/lib/progress'
import { formatWeight, MODE_LABEL, topWeight } from '@/lib/series'

type ExerciseProgressCardProps = {
  history: ExerciseHistory
}

const RECENT_LIMIT = 6

export const ExerciseProgressCard = ({
  history,
}: ExerciseProgressCardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-start justify-between gap-2">
        <CardTitle>{history.name}</CardTitle>
        <TrendBadge
          current={history.lastWeight}
          previous={history.previousWeight}
        />
      </div>
      <div className="flex flex-wrap gap-1">
        <Badge variant="primary">
          Recorde {formatWeight(history.bestWeight)}
        </Badge>
        <Badge>{history.entries.length} treinos</Badge>
        <Badge>Volume {formatWeight(history.lastVolume)}</Badge>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-1.5">
      {history.entries.slice(0, RECENT_LIMIT).map(({ date, entry }) => (
        <div
          key={entry.id}
          className="flex items-center justify-between gap-2 border-b border-border/60 pb-1.5 text-xs last:border-0 last:pb-0"
        >
          <span className="w-12 shrink-0 text-muted-foreground tabular-nums">
            {formatShortDate(date)}
          </span>
          <span className="flex-1 truncate text-muted-foreground">
            {MODE_LABEL[entry.mode]} · {entry.sets.length}×
          </span>
          <span className="font-semibold tabular-nums">
            {formatWeight(topWeight(entry.sets))}
          </span>
        </div>
      ))}
      {history.entries.length > RECENT_LIMIT && (
        <p className="pt-1 text-[11px] text-muted-foreground">
          + {history.entries.length - RECENT_LIMIT} treinos anteriores
        </p>
      )}
    </CardContent>
  </Card>
)
