import { useCallback, useEffect, useMemo, useState } from 'react'
import { loadSessions, saveSessions } from '@/lib/storage'
import type { ExerciseEntry, Session, SessionMap } from '@/types'

export const useSessions = () => {
  const [sessions, setSessions] = useState<SessionMap>(loadSessions)

  useEffect(() => {
    saveSessions(sessions)
  }, [sessions])

  const addExercise = useCallback((date: string, entry: ExerciseEntry) => {
    setSessions((current) => ({
      ...current,
      [date]: [...(current[date] ?? []), entry],
    }))
  }, [])

  const updateExercise = useCallback((date: string, entry: ExerciseEntry) => {
    setSessions((current) => ({
      ...current,
      [date]: (current[date] ?? []).map((item) =>
        item.id === entry.id ? entry : item,
      ),
    }))
  }, [])

  const removeExercise = useCallback((date: string, id: string) => {
    setSessions((current) => {
      const remaining = (current[date] ?? []).filter((item) => item.id !== id)
      const next = { ...current }
      if (remaining.length) next[date] = remaining
      else delete next[date]
      return next
    })
  }, [])

  const replaceAll = useCallback((next: SessionMap) => setSessions(next), [])

  const clearAll = useCallback(() => setSessions({}), [])

  const orderedSessions = useMemo<Session[]>(
    () =>
      Object.entries(sessions)
        .filter(([, exercises]) => exercises.length > 0)
        .map(([date, exercises]) => ({ date, exercises }))
        .sort((a, b) => b.date.localeCompare(a.date)),
    [sessions],
  )

  const exerciseNames = useMemo(
    () =>
      [
        ...new Set(
          Object.values(sessions)
            .flat()
            .map((entry) => entry.name),
        ),
      ].sort((a, b) => a.localeCompare(b, 'pt-BR')),
    [sessions],
  )

  return {
    sessions,
    orderedSessions,
    exerciseNames,
    addExercise,
    updateExercise,
    removeExercise,
    replaceAll,
    clearAll,
  }
}
