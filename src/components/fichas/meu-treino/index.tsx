import { useCallback, useState, type ReactNode } from 'react'
import { Dumbbell, Plus } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { grupoDe, rotuloGrupo } from './conjugados'
import { ExercicioForm } from './exercicio-form'
import { ListaPorSemana } from './lista-por-semana'
import { TreinoCard } from './treino-card'
import { TreinoAtualBanner } from './treino-atual-banner'
import { TreinoForm } from './treino-form'
import type { ExercicioTreino, Treino } from './types'
import type { MeuTreinoEstado } from './use-meu-treino'
import { VolumeSemanal } from './volume'

type EdicaoTreino = { treino?: Treino }

type EdicaoExercicio = { treinoId: string; exercicio?: ExercicioTreino }

export { ChipOpcao } from './chip-opcao'
export { classesConjugacao, conjugacoes } from './conjugados'
export { ExercicioResumo } from './exercicio-resumo'
export { ListaPorSemana } from './lista-por-semana'
export type { DiasDivisao, Divisao, ExercicioTreino, FocoDivisao, Treino } from './types'
export { useMeuTreino } from './use-meu-treino'
export { rotuloTreino } from './utils'
export { VezesBadge } from './vezes-badge'
export { VolumeSemanal } from './volume'

type MeuTreinoProps = {
  meuTreino: MeuTreinoEstado
  exerciseNames: string[]
  onRestaurar?: () => void
  ajustesAtual?: ReactNode
}

export const MeuTreino = ({ meuTreino, exerciseNames, onRestaurar, ajustesAtual }: MeuTreinoProps) => {
  const [edicaoTreino, setEdicaoTreino] = useState<EdicaoTreino>()
  const [edicaoExercicio, setEdicaoExercicio] = useState<EdicaoExercicio>()

  const fecharTreino = useCallback(() => setEdicaoTreino(undefined), [])
  const fecharExercicio = useCallback(() => setEdicaoExercicio(undefined), [])
  const exerciciosEmEdicao =
    meuTreino.treinos.find(({ id }) => id === edicaoExercicio?.treinoId)?.exercicios ?? []
  const grupoEmEdicao = edicaoExercicio?.exercicio ? grupoDe(exerciciosEmEdicao, edicaoExercicio.exercicio) : []
  const tituloEdicao =
    grupoEmEdicao.length > 1 ? `Editar ${rotuloGrupo(grupoEmEdicao.length).toLowerCase()}` : 'Editar exercício'

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {meuTreino.atual ? 'Treino atual' : 'Meu treino'}
        </h2>
        {meuTreino.treinos.length > 0 && (
          <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setEdicaoTreino({})}>
            <Plus className="size-4" />
            Novo treino
          </Button>
        )}
      </div>

      {meuTreino.atual && (
        <TreinoAtualBanner
          titulo={meuTreino.atual.titulo}
          onVoltar={meuTreino.voltarProMeuTreino}
          onRestaurar={onRestaurar}
        >
          {ajustesAtual}
        </TreinoAtualBanner>
      )}

      <VolumeSemanal treinos={meuTreino.treinos} />

      {meuTreino.treinos.length ? (
        <ListaPorSemana
          treinos={meuTreino.treinos}
          renderTreino={(treino, indice) => (
            <TreinoCard
              key={treino.id}
              indice={indice}
              treino={treino}
              onEditar={() => setEdicaoTreino({ treino })}
              onExercicio={(exercicio) => setEdicaoExercicio({ treinoId: treino.id, exercicio })}
              onMoverExercicio={(deId, paraId) => meuTreino.moverExercicio(treino.id, deId, paraId)}
            />
          )}
        />
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
        title={edicaoExercicio?.exercicio ? tituloEdicao : 'Novo exercício'}
        onClose={fecharExercicio}
      >
        {edicaoExercicio && (
          <ExercicioForm
            grupo={grupoEmEdicao}
            exerciseNames={exerciseNames}
            onSalvar={(exercicios) => {
              meuTreino.salvarGrupo(edicaoExercicio.treinoId, grupoEmEdicao, exercicios)
              fecharExercicio()
            }}
            onRemover={() => {
              meuTreino.removerGrupo(edicaoExercicio.treinoId, grupoEmEdicao)
              fecharExercicio()
            }}
          />
        )}
      </Sheet>
    </section>
  )
}
