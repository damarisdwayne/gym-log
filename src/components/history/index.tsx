import { useState } from 'react'
import { CalendarDays, Plus } from 'lucide-react'
import { SessionCard } from './session-card'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { Session } from '@/types'

type HistoryProps = {
  sessions: Session[]
  onRemoveExercise: (date: string, id: string) => void
  onAddExercise: () => void
}

export const History = ({
  sessions,
  onRemoveExercise,
  onAddExercise,
}: HistoryProps) => {
  const [query, setQuery] = useState('')

  if (!sessions.length)
    return (
      <EmptyState
        icon={CalendarDays}
        title="Nenhum treino registrado"
        description="Registre seu primeiro exercício para começar o histórico."
        action={
          <Button size="sm" onClick={onAddExercise}>
            <Plus className="size-4" />
            Registrar exercício
          </Button>
        }
      />
    )

  const term = query.trim().toLowerCase()
  const filtered = term
    ? sessions
        .map((session) => ({
          ...session,
          exercises: session.exercises.filter((entry) =>
            entry.name.toLowerCase().includes(term),
          ),
        }))
        .filter((session) => session.exercises.length > 0)
    : sessions

  return (
    <div className="flex flex-col gap-3">
      <Input
        placeholder="Buscar exercício..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {filtered.map((session) => (
        <SessionCard
          key={session.date}
          session={session}
          onRemoveExercise={onRemoveExercise}
        />
      ))}
      {!filtered.length && (
        <EmptyState
          icon={CalendarDays}
          title="Nada encontrado"
          description="Nenhum exercício corresponde à sua busca."
        />
      )}
    </div>
  )
}
