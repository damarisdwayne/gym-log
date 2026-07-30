import { useMemo, useState } from 'react'
import { AppHeader } from '@/components/app-header'
import { DataActions } from '@/components/data-actions'
import { ExerciseForm } from '@/components/exercise-form'
import { History } from '@/components/history'
import { Progress } from '@/components/progress'
import { Tabs, type TabItem } from '@/components/ui/tabs'
import { todayISO } from '@/lib/date'
import { buildHistories } from '@/lib/progress'
import { useSessions } from '@/hooks/use-sessions'

type TabValue = 'register' | 'history' | 'progress'

const TABS: TabItem<TabValue>[] = [
  { value: 'register', label: 'Registrar' },
  { value: 'history', label: 'Histórico' },
  { value: 'progress', label: 'Evolução' },
]

export const App = () => {
  const [tab, setTab] = useState<TabValue>('register')
  const {
    sessions,
    orderedSessions,
    exerciseNames,
    addExercise,
    removeExercise,
    replaceAll,
    clearAll,
  } = useSessions()

  const histories = useMemo(() => buildHistories(sessions), [sessions])

  const handleSubmit: typeof addExercise = (date, entry) => {
    addExercise(date, entry)
    setTab('history')
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-4 px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))]">
      <AppHeader today={todayISO()} />

      <Tabs items={TABS} value={tab} onChange={setTab} />

      {tab === 'register' && (
        <ExerciseForm
          sessions={sessions}
          exerciseNames={exerciseNames}
          onSubmit={handleSubmit}
        />
      )}

      {tab === 'history' && (
        <History
          sessions={orderedSessions}
          onRemoveExercise={removeExercise}
        />
      )}

      {tab === 'progress' && <Progress histories={histories} />}

      <footer className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
        <p className="text-[11px] text-muted-foreground">
          Os dados ficam salvos apenas neste dispositivo. Exporte de tempos em
          tempos para não perder o histórico.
        </p>
        <DataActions
          sessions={sessions}
          onReplace={replaceAll}
          onClear={clearAll}
        />
      </footer>
    </div>
  )
}
