import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { SessionCard } from './session-card'
import { EmptyState } from '@/components/empty-state'
import { Input } from '@/components/ui/input'
import type { Session } from '@/types'

type HistoryProps = {
  sessions: Session[]
  onRemoveExercise: (date: string, id: string) => void
}

export const History = ({ sessions, onRemoveExercise }: HistoryProps) => {
  const [query, setQuery] = useState('')

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

  if (!sessions.length)
    return (
      <EmptyState
        icon={CalendarDays}
        title="Nenhum treino registrado"
        description="Registre seu primeiro exercício na aba Registrar para começar o histórico."
      />
    )

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
