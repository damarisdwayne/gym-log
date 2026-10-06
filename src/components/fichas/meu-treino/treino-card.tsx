import { Pencil, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible } from '@/components/ui/collapsible'
import { ExercicioItem } from './exercicio-item'
import type { ExercicioTreino, Treino } from './types'
import { letraTreino } from './utils'

type TreinoCardProps = {
  indice: number
  treino: Treino
  onEditar: () => void
  onExercicio: (exercicio?: ExercicioTreino) => void
}

export const TreinoCard = ({ indice, treino, onEditar, onExercicio }: TreinoCardProps) => (
  <Collapsible
    title={`${letraTreino(indice)} · ${treino.nome}`}
    meta={<Badge>{treino.exercicios.length} exercícios</Badge>}
  >
    <div className="flex flex-col gap-3">
      {treino.exercicios.length > 0 && (
        <ol className="flex flex-col divide-y divide-border/60">
          {treino.exercicios.map((exercicio, posicao) => (
            <ExercicioItem
              key={exercicio.id}
              posicao={posicao + 1}
              exercicio={exercicio}
              onEditar={onExercicio}
            />
          ))}
        </ol>
      )}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onExercicio()}>
          <Plus className="size-4" />
          Adicionar exercício
        </Button>
        <Button variant="ghost" size="sm" onClick={onEditar}>
          <Pencil className="size-3.5" />
          Editar
        </Button>
      </div>
    </div>
  </Collapsible>
)
