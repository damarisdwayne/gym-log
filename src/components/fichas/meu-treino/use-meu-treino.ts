import { arrayMove } from '@dnd-kit/sortable'
import { useStoredState } from '@/hooks/use-stored-state'
import { createId } from '@/lib/utils'
import type { ExercicioTreino, Treino } from './types'

const STORAGE_KEY = 'gym-log:meu-treino:v1'

const INICIAL: { treinos: Treino[] } = { treinos: [] }

const salvarNaLista = <T extends { id: string }>(lista: T[], item: T) =>
  lista.some((atual) => atual.id === item.id)
    ? lista.map((atual) => (atual.id === item.id ? item : atual))
    : [...lista, item]

const copiarTreino = (treino: Treino): Treino => ({
  ...treino,
  id: createId(),
  exercicios: treino.exercicios.map((exercicio) => ({ ...exercicio, id: createId() })),
})

export const useMeuTreino = () => {
  const [{ treinos }, atualizar] = useStoredState(STORAGE_KEY, INICIAL)

  const alterarTreino = (id: string, alterar: (treino: Treino) => Treino) =>
    atualizar({ treinos: treinos.map((treino) => (treino.id === id ? alterar(treino) : treino)) })

  return {
    treinos,
    salvarTreino: (treino: Treino) => atualizar({ treinos: salvarNaLista(treinos, treino) }),
    importarTreinos: (novos: Treino[]) =>
      atualizar({ treinos: [...treinos, ...novos.map(copiarTreino)] }),
    removerTreino: (id: string) =>
      atualizar({ treinos: treinos.filter((treino) => treino.id !== id) }),
    salvarExercicio: (treinoId: string, exercicio: ExercicioTreino) =>
      alterarTreino(treinoId, (treino) => ({
        ...treino,
        exercicios: salvarNaLista(treino.exercicios, exercicio),
      })),
    removerExercicio: (treinoId: string, id: string) =>
      alterarTreino(treinoId, (treino) => ({
        ...treino,
        exercicios: treino.exercicios.filter((exercicio) => exercicio.id !== id),
      })),
    moverExercicio: (treinoId: string, deId: string, paraId: string) =>
      alterarTreino(treinoId, (treino) => {
        const de = treino.exercicios.findIndex((exercicio) => exercicio.id === deId)
        const para = treino.exercicios.findIndex((exercicio) => exercicio.id === paraId)
        if (de < 0 || para < 0) return treino
        return { ...treino, exercicios: arrayMove(treino.exercicios, de, para) }
      }),
  }
}

export type MeuTreinoEstado = ReturnType<typeof useMeuTreino>
