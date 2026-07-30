import { History } from 'lucide-react'
import { SetChips } from '@/components/set-chips'
import { Button } from '@/components/ui/button'
import { formatShortDate } from '@/lib/date'
import type { DatedEntry } from '@/lib/progress'
import type { WorkoutSet } from '@/types'

type LastRecordHintProps = {
  record: DatedEntry
  onReuse: (sets: WorkoutSet[]) => void
}

export const LastRecordHint = ({ record, onReuse }: LastRecordHintProps) => (
  <div className="flex flex-col gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3">
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
        <History className="size-3.5" />
        Último treino em {formatShortDate(record.date)}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => onReuse(record.entry.sets)}
      >
        Repetir
      </Button>
    </div>
    <SetChips sets={record.entry.sets} />
  </div>
)
