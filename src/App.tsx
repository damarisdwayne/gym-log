import { useMemo, useState } from 'react'
import { CalendarDays, FolderOpen, HeartPulse, TrendingUp } from 'lucide-react'
import { AppHeader } from '@/components/app-header'
import { BottomNav, type NavItem } from '@/components/bottom-nav'
import { DataActions } from '@/components/data-actions'
import { ExerciseForm } from '@/components/exercise-form'
import { Fichas } from '@/components/fichas'
import { History } from '@/components/history'
import { Progress } from '@/components/progress'
import { Saude } from '@/components/saude'
import { Sheet } from '@/components/ui/sheet'
import { todayISO } from '@/lib/date'
import { buildHistories } from '@/lib/progress'
import { useSessions } from '@/hooks/use-sessions'
import type { ExerciseEntry } from '@/types'

type TabValue = 'history' | 'progress' | 'fichas' | 'saude'

const NAV: NavItem<TabValue>[] = [
  { value: 'history', label: 'Histórico', icon: CalendarDays },
  { value: 'progress', label: 'Evolução', icon: TrendingUp },
  { value: 'fichas', label: 'Fichas', icon: FolderOpen },
  { value: 'saude', label: 'Saúde', icon: HeartPulse },
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
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-4 px-4 pb-32 pt-[max(1rem,env(safe-area-inset-top))]">
      <AppHeader today={todayISO()} />

      {tab === 'history' && (
        <History
          sessions={orderedSessions}
          onRemoveExercise={removeExercise}
          onAddExercise={() => setFormOpen(true)}
        />
      )}
      {tab === 'progress' && <Progress histories={histories} />}
      {tab === 'fichas' && <Fichas />}
      {tab === 'saude' && <Saude />}

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

      <BottomNav
        items={NAV}
        value={tab}
        onChange={setTab}
        onRegister={() => setFormOpen(true)}
      />

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
