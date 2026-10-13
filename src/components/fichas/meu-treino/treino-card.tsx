import { Pencil, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible } from '@/components/ui/collapsible'
import { ListaExercicios } from './lista-exercicios'
import type { ExercicioTreino, Treino } from './types'
import { letraTreino } from './utils'

type TreinoCardProps = {
  indice: number
  treino: Treino
  onEditar: () => void
  onExercicio: (exercicio?: ExercicioTreino) => void
  onMoverExercicio: (deId: string, paraId: string) => void
}

export const TreinoCard = ({
  indice,
  treino,
  onEditar,
  onExercicio,
  onMoverExercicio,
}: TreinoCardProps) => (
  <Collapsible
    title={`${letraTreino(indice)} · ${treino.nome}`}
    meta={
      <>
        {(treino.vezesPorSemana ?? 1) > 1 && (
          <Badge variant="primary">{treino.vezesPorSemana}×/sem</Badge>
        )}
        <Badge>{treino.exercicios.length} exercícios</Badge>
      </>
    }
  >
    <div className="flex flex-col gap-3">
      {treino.exercicios.length > 0 && (
        <ListaExercicios
          exercicios={treino.exercicios}
          onEditar={onExercicio}
          onMover={onMoverExercicio}
        />
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
