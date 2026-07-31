import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { AppHeader } from '@/components/app-header'
import { DataActions } from '@/components/data-actions'
import { ExerciseForm } from '@/components/exercise-form'
import { Fichas } from '@/components/fichas'
import { History } from '@/components/history'
import { Progress } from '@/components/progress'
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { Tabs, type TabItem } from '@/components/ui/tabs'
import { todayISO } from '@/lib/date'
import { buildHistories } from '@/lib/progress'
import { useSessions } from '@/hooks/use-sessions'
import type { ExerciseEntry } from '@/types'

type TabValue = 'history' | 'progress' | 'fichas'

const TABS: TabItem<TabValue>[] = [
  { value: 'history', label: 'Histórico' },
  { value: 'progress', label: 'Evolução' },
  { value: 'fichas', label: 'Fichas' },
]

export const App = () => {
  const [tab, setTab] = useState<TabValue>('history')
  const [formOpen, setFormOpen] = useState(false)
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

  const handleSubmit = (date: string, entry: ExerciseEntry) => {
    addExercise(date, entry)
    setFormOpen(false)
    setTab('history')
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-4 px-4 pb-28 pt-[max(1rem,env(safe-area-inset-top))]">
      <AppHeader today={todayISO()} />

      <Tabs items={TABS} value={tab} onChange={setTab} />

      {tab === 'history' && (
        <History
          sessions={orderedSessions}
          onRemoveExercise={removeExercise}
          onAddExercise={() => setFormOpen(true)}
        />
      )}
      {tab === 'progress' && <Progress histories={histories} />}
      {tab === 'fichas' && <Fichas />}

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

      <Button
        onClick={() => setFormOpen(true)}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 h-14 rounded-full px-5 shadow-lg shadow-black/40"
      >
        <Plus className="size-5" />
        Registrar
      </Button>

      <Sheet
        open={formOpen}
        title="Registrar exercício"
        onClose={() => setFormOpen(false)}
      >
        <ExerciseForm
          sessions={sessions}
          exerciseNames={exerciseNames}
          onSubmit={handleSubmit}
        />
      </Sheet>
    </div>
  )
}
