import { useStoredState } from '@/hooks/use-stored-state'
import type { ExercicioTreino, Treino } from './types'

const STORAGE_KEY = 'gym-log:meu-treino:v1'

const INICIAL: { treinos: Treino[] } = { treinos: [] }

const salvarNaLista = <T extends { id: string }>(lista: T[], item: T) =>
  lista.some((atual) => atual.id === item.id)
    ? lista.map((atual) => (atual.id === item.id ? item : atual))
    : [...lista, item]

export const useMeuTreino = () => {
  const [{ treinos }, atualizar] = useStoredState(STORAGE_KEY, INICIAL)

  const alterarTreino = (id: string, alterar: (treino: Treino) => Treino) =>
    atualizar({ treinos: treinos.map((treino) => (treino.id === id ? alterar(treino) : treino)) })

  return {
    treinos,
    salvarTreino: (treino: Treino) => atualizar({ treinos: salvarNaLista(treinos, treino) }),
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
  }
}
