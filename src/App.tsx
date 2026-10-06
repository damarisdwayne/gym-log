import { useMemo, useState } from 'react'
import {
  CalendarDays,
  FolderOpen,
  HeartPulse,
  TrendingUp,
  UtensilsCrossed,
} from 'lucide-react'
import { AppHeader } from '@/components/app-header'
import { AppMenu } from '@/components/app-menu'
import { BottomNav, type NavItem } from '@/components/bottom-nav'
import { DataActions } from '@/components/data-actions'
import { ExerciseForm } from '@/components/exercise-form'
import { Fichas } from '@/components/fichas'
import { History } from '@/components/history'
import { Nutricao } from '@/components/nutricao'
import { Progress } from '@/components/progress'
import { Saude } from '@/components/saude'
import { Sheet } from '@/components/ui/sheet'
import { todayISO } from '@/lib/date'
import { buildHistories } from '@/lib/progress'
import { useHashRoute } from '@/hooks/use-hash-route'
import { useSessions } from '@/hooks/use-sessions'
import type { ExerciseEntry } from '@/types'

type TabValue = 'history' | 'progress' | 'nutricao' | 'fichas' | 'saude'

const SECOES: NavItem<TabValue>[] = [
  { value: 'history', label: 'Histórico', icon: CalendarDays },
  { value: 'progress', label: 'Evolução', icon: TrendingUp },
  { value: 'nutricao', label: 'Nutrição', icon: UtensilsCrossed },
  { value: 'fichas', label: 'Fichas', icon: FolderOpen },
  { value: 'saude', label: 'Saúde', icon: HeartPulse },
]

const NA_BARRA = new Set<TabValue>(['history', 'progress', 'nutricao'])
const BARRA = SECOES.filter((secao) => NA_BARRA.has(secao.value))

const ehTab = (valor: string | undefined): valor is TabValue =>
  SECOES.some((secao) => secao.value === valor)

export const App = () => {
  const { segmentos, navegar, voltar } = useHashRoute()
  const [formOpen, setFormOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const {
    sessions,
    orderedSessions,
    exerciseNames,
    addExercise,
    removeExercise,
    replaceAll,
    clearAll,
  } = useSessions()

  const [primeiro, subpagina] = segmentos
  const tab: TabValue = ehTab(primeiro) ? primeiro : 'history'
  const histories = useMemo(() => buildHistories(sessions), [sessions])

  const irPara = (destino: TabValue) => {
    setMenuOpen(false)
    if (destino !== tab || subpagina) navegar(destino)
  }

  const handleSubmit = (date: string, entry: ExerciseEntry) => {
    addExercise(date, entry)
    setFormOpen(false)
    irPara('history')
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
      {tab === 'nutricao' && (
        <Nutricao
          pagina={subpagina}
          onAbrir={(pagina) => navegar(`nutricao/${pagina}`)}
          onVoltar={() => voltar('nutricao')}
        />
      )}
      {tab === 'fichas' && <Fichas exerciseNames={exerciseNames} />}
      {tab === 'saude' && <Saude />}

      <BottomNav
        items={BARRA}
        value={tab}
        onChange={irPara}
        onRegister={() => setFormOpen(true)}
        onMenu={() => setMenuOpen(true)}
      />

      <AppMenu
        open={menuOpen}
        items={SECOES}
        value={tab}
        onChange={irPara}
        onClose={() => setMenuOpen(false)}
        rodape={
          <>
            <p className="text-[11px] text-muted-foreground">
              Os dados ficam salvos apenas neste dispositivo. Exporte de tempos
              em tempos para não perder o histórico.
            </p>
            <DataActions
              sessions={sessions}
              onReplace={replaceAll}
              onClear={clearAll}
            />
          </>
        }
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
