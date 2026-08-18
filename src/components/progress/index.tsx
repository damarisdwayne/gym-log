import { useMemo, useState } from 'react'
import { TrendingUp } from 'lucide-react'
import { ExerciseProgressCard } from './exercise-progress-card'
import { EmptyState } from '@/components/empty-state'
import { SearchField } from '@/components/ui/search-field'
import type { ExerciseHistory } from '@/lib/progress'

type ProgressProps = {
  histories: ExerciseHistory[]
}

export const Progress = ({ histories }: ProgressProps) => {
  const [term, setTerm] = useState('')

  const sorted = useMemo(
    () => [...histories].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')),
    [histories],
  )

  const query = term.trim().toLowerCase()
  const visible = query
    ? sorted.filter((history) => history.name.toLowerCase().includes(query))
    : sorted

  if (!histories.length)
    return (
      <EmptyState
        icon={TrendingUp}
        title="Sem dados de evolução"
        description="Depois de registrar o mesmo exercício em dias diferentes, a evolução de carga aparece aqui."
      />
    )

  return (
    <div className="flex flex-col gap-3">
      <SearchField
        value={term}
        placeholder="Buscar exercício"
        label="Buscar exercício"
        onChange={setTerm}
      />

      {visible.length ? (
        visible.map((history) => (
          <ExerciseProgressCard key={history.name} history={history} />
        ))
      ) : (
        <EmptyState
          icon={TrendingUp}
          title="Nenhum exercício encontrado"
          description={`Nada corresponde a "${term.trim()}". Tente outro termo.`}
        />
      )}
    </div>
  )
}
