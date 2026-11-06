import { createId } from '@/lib/utils'
import type { Treino } from '../types'
import { copiarTreino } from '../utils'

export type GrupoTreinos = {
  id: string
  nome: string
  treinos: Treino[]
}

const GRUPO_INICIAL = 'principal'

export const gruposDe = (treinos: Treino[], grupos?: GrupoTreinos[]): GrupoTreinos[] =>
  grupos?.length ? grupos : [{ id: GRUPO_INICIAL, nome: 'Meu treino', treinos }]

type SalvarGrupos = (grupos: GrupoTreinos[], ativo?: string) => void

export const acoesGrupos = (grupos: GrupoTreinos[], ativo: GrupoTreinos, salvar: SalvarGrupos) => ({
  criarGrupo: (nome: string, copiar: boolean) => {
    const novo = { id: createId(), nome, treinos: copiar ? ativo.treinos.map(copiarTreino) : [] }
    salvar([...grupos, novo], novo.id)
  },
  renomearGrupo: (id: string, nome: string) =>
    salvar(grupos.map((grupo) => (grupo.id === id ? { ...grupo, nome } : grupo))),
  excluirGrupo: (id: string) => {
    const restantes = grupos.filter((grupo) => grupo.id !== id)
    if (restantes.length) salvar(restantes, restantes[0].id)
  },
})
