import { TrendingUp } from 'lucide-react'
import { ExerciseProgressCard } from './exercise-progress-card'
import { EmptyState } from '@/components/empty-state'
import type { ExerciseHistory } from '@/lib/progress'

type ProgressProps = {
  histories: ExerciseHistory[]
}

export const Progress = ({ histories }: ProgressProps) => {
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
      {histories.map((history) => (
        <ExerciseProgressCard key={history.name} history={history} />
      ))}
    </div>
  )
}
