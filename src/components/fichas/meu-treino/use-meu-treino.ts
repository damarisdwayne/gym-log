import { arrayMove } from '@dnd-kit/sortable'
import { useStoredState } from '@/hooks/use-stored-state'
import { createId } from '@/lib/utils'
import type { Divisao, ExercicioTreino, Treino } from './types'

const STORAGE_KEY = 'gym-log:meu-treino:v1'
const STORAGE_KEY_ATUAL = 'gym-log:treino-atual:v1'

const INICIAL: { treinos: Treino[] } = { treinos: [] }

export type CopiaModelo = {
  titulo: string
  treinos: Treino[]
  divisao?: Divisao
}

export type ModeloAtivavel = CopiaModelo & { id: string }

type AjustarTreinos = (treinos: Treino[]) => Treino[]

const semAjuste: AjustarTreinos = (treinos) => treinos

type EstadoAtual = {
  atual?: string
  copias: Record<string, CopiaModelo>
}

const INICIAL_ATUAL: EstadoAtual = { copias: {} }

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
  const [meu, atualizarMeu] = useStoredState(STORAGE_KEY, INICIAL)
  const [{ atual, copias }, atualizarAtual] = useStoredState(STORAGE_KEY_ATUAL, INICIAL_ATUAL)

  const copiaAtiva = atual ? copias[atual] : undefined
  const treinos = copiaAtiva?.treinos ?? meu.treinos

  const atualizarTreinos = (novos: Treino[]) => {
    if (!atual || !copiaAtiva) return atualizarMeu({ treinos: novos })
    atualizarAtual({ copias: { ...copias, [atual]: { ...copiaAtiva, treinos: novos } } })
  }

  const alterarTreino = (id: string, alterar: (treino: Treino) => Treino) =>
    atualizarTreinos(treinos.map((treino) => (treino.id === id ? alterar(treino) : treino)))

  return {
    treinos,
    atual:
      copiaAtiva && atual
        ? { id: atual, titulo: copiaAtiva.titulo, divisao: copiaAtiva.divisao }
        : undefined,
    usarModelo: ({ id, titulo, treinos: originais, divisao }: ModeloAtivavel, ajustar = semAjuste) => {
      const base = copias[id]?.treinos ?? originais.map(copiarTreino)
      atualizarAtual({
        atual: id,
        copias: { ...copias, [id]: { titulo, divisao, treinos: ajustar(base) } },
      })
    },
    restaurarModelo: ({ id, titulo, treinos: originais, divisao }: ModeloAtivavel, ajustar = semAjuste) =>
      atualizarAtual({
        copias: { ...copias, [id]: { titulo, divisao, treinos: ajustar(originais.map(copiarTreino)) } },
      }),
    definirDivisao: (divisao: Divisao, ajustar: AjustarTreinos) => {
      if (!atual || !copiaAtiva) return
      atualizarAtual({
        copias: { ...copias, [atual]: { ...copiaAtiva, divisao, treinos: ajustar(copiaAtiva.treinos) } },
      })
    },
    voltarProMeuTreino: () => atualizarAtual({ atual: undefined }),
    salvarTreino: (treino: Treino) => atualizarTreinos(salvarNaLista(treinos, treino)),
    removerTreino: (id: string) => atualizarTreinos(treinos.filter((treino) => treino.id !== id)),
    salvarGrupo: (treinoId: string, antigos: ExercicioTreino[], novos: ExercicioTreino[]) =>
      alterarTreino(treinoId, (treino) => {
        const ids = new Set(antigos.map(({ id }) => id))
        const inicio = treino.exercicios.findIndex(({ id }) => ids.has(id))
        const restantes = treino.exercicios.filter(({ id }) => !ids.has(id))
        const posicao = inicio < 0 ? restantes.length : inicio
        return { ...treino, exercicios: [...restantes.slice(0, posicao), ...novos, ...restantes.slice(posicao)] }
      }),
    removerGrupo: (treinoId: string, grupo: ExercicioTreino[]) => {
      const ids = new Set(grupo.map(({ id }) => id))
      alterarTreino(treinoId, (treino) => ({
        ...treino,
        exercicios: treino.exercicios.filter(({ id }) => !ids.has(id)),
      }))
    },
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
