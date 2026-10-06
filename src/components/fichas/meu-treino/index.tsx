import { useCallback, useState } from 'react'
import { Dumbbell, Plus } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { ExercicioForm } from './exercicio-form'
import { TreinoCard } from './treino-card'
import { TreinoForm } from './treino-form'
import type { ExercicioTreino, Treino } from './types'
import { useMeuTreino } from './use-meu-treino'

type EdicaoTreino = { treino?: Treino }

type EdicaoExercicio = { treinoId: string; exercicio?: ExercicioTreino }

type MeuTreinoProps = {
  exerciseNames: string[]
}

export const MeuTreino = ({ exerciseNames }: MeuTreinoProps) => {
  const meuTreino = useMeuTreino()
  const [edicaoTreino, setEdicaoTreino] = useState<EdicaoTreino>()
  const [edicaoExercicio, setEdicaoExercicio] = useState<EdicaoExercicio>()

  const fecharTreino = useCallback(() => setEdicaoTreino(undefined), [])
  const fecharExercicio = useCallback(() => setEdicaoExercicio(undefined), [])

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Meu treino
        </h2>
        {meuTreino.treinos.length > 0 && (
          <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setEdicaoTreino({})}>
            <Plus className="size-4" />
            Novo treino
          </Button>
        )}
      </div>

      {meuTreino.treinos.length ? (
        meuTreino.treinos.map((treino, indice) => (
          <TreinoCard
            key={treino.id}
            indice={indice}
            treino={treino}
            onEditar={() => setEdicaoTreino({ treino })}
            onExercicio={(exercicio) => setEdicaoExercicio({ treinoId: treino.id, exercicio })}
          />
        ))
      ) : (
        <EmptyState
          icon={Dumbbell}
          title="Nenhum treino cadastrado"
          description="Crie um treino por grupo (quadríceps, posterior, glúteos, braço…) e adicione os exercícios."
          action={
            <Button size="sm" onClick={() => setEdicaoTreino({})}>
              <Plus className="size-4" />
              Criar treino
            </Button>
          }
        />
      )}

      <Sheet
        open={Boolean(edicaoTreino)}
        title={edicaoTreino?.treino ? 'Editar treino' : 'Novo treino'}
        onClose={fecharTreino}
      >
        {edicaoTreino && (
          <TreinoForm
            treino={edicaoTreino.treino}
            onSalvar={(treino) => {
              meuTreino.salvarTreino(treino)
              fecharTreino()
            }}
            onRemover={(id) => {
              meuTreino.removerTreino(id)
              fecharTreino()
            }}
          />
        )}
      </Sheet>

      <Sheet
        open={Boolean(edicaoExercicio)}
        title={edicaoExercicio?.exercicio ? 'Editar exercício' : 'Novo exercício'}
        onClose={fecharExercicio}
      >
        {edicaoExercicio && (
          <ExercicioForm
            exercicio={edicaoExercicio.exercicio}
            exerciseNames={exerciseNames}
            onSalvar={(exercicio) => {
              meuTreino.salvarExercicio(edicaoExercicio.treinoId, exercicio)
              fecharExercicio()
            }}
            onRemover={(id) => {
              meuTreino.removerExercicio(edicaoExercicio.treinoId, id)
              fecharExercicio()
            }}
          />
        )}
      </Sheet>
    </section>
  )
}
