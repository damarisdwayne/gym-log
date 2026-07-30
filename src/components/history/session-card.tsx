import { ExerciseItem } from './exercise-item'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatFullDate, isToday } from '@/lib/date'
import { exerciseVolume, formatWeight } from '@/lib/series'
import type { Session } from '@/types'

type SessionCardProps = {
  session: Session
  onRemoveExercise: (date: string, id: string) => void
}

export const SessionCard = ({
  session,
  onRemoveExercise,
}: SessionCardProps) => {
  const volume = session.exercises.reduce(
    (sum, entry) => sum + exerciseVolume(entry),
    0,
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="capitalize">
            {formatFullDate(session.date)}
          </CardTitle>
          {isToday(session.date) && <Badge variant="primary">Hoje</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">
          {session.exercises.length} exercícios · volume total{' '}
          {formatWeight(volume)}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {session.exercises.map((entry) => (
          <ExerciseItem
            key={entry.id}
            entry={entry}
            onRemove={() => onRemoveExercise(session.date, entry.id)}
          />
        ))}
      </CardContent>
    </Card>
  )
}
