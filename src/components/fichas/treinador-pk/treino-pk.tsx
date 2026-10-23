import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { ExercicioResumo, letraTreino, type Treino } from '../meu-treino'

type TreinoPkProps = {
  indice: number
  treino: Treino
}

export const TreinoPk = ({ indice, treino }: TreinoPkProps) => (
  <Collapsible
    title={`${letraTreino(indice)} · ${treino.nome}`}
    meta={<Badge>{treino.exercicios.length} exercícios</Badge>}
  >
    <ol className="flex flex-col divide-y divide-border/60">
      {treino.exercicios.map((exercicio, posicao) => (
        <li key={exercicio.id} className="flex items-center gap-3 py-2.5">
          <ExercicioResumo posicao={posicao + 1} exercicio={exercicio} />
        </li>
      ))}
    </ol>
  </Collapsible>
)
