import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { classesConjugacao, conjugacoes, ExercicioResumo, rotuloTreino, VezesBadge, type Treino } from '../meu-treino'

type TreinoLeituraProps = {
  indice: number
  treino: Treino
}

export const TreinoLeitura = ({ indice, treino }: TreinoLeituraProps) => {
  const grupos = conjugacoes(treino.exercicios)

  return (
    <Collapsible
      title={`${rotuloTreino(treino, indice)} · ${treino.nome}`}
      meta={
        <>
          <VezesBadge vezes={treino.vezesPorSemana} />
          <Badge>{treino.exercicios.length} exercícios</Badge>
        </>
      }
    >
      <ol className="flex flex-col divide-y divide-border/60">
        {treino.exercicios.map((exercicio, posicao) => {
          const conjugacao = grupos[posicao]
          return (
            <li
              key={exercicio.id}
              className={cn(
                'flex items-center gap-3 py-2.5',
                classesConjugacao(conjugacao),
                conjugacao.noGrupo && 'pl-2',
              )}
            >
              <ExercicioResumo posicao={posicao + 1} exercicio={exercicio} grupo={conjugacao.rotulo} />
            </li>
          )
        })}
      </ol>
    </Collapsible>
  )
}
