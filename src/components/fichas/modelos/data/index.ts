import type { Modelo, ModeloBruto, TreinoBruto } from '../types'
import { chaveDe } from '../variantes'
import { MODELO_PK } from './pk'

const normalizarTreinos = (prefixo: string, treinos: TreinoBruto[] = []) =>
  treinos.map((treino, indiceTreino) => {
    const idTreino = `${prefixo}-${indiceTreino}`
    return {
      ...treino,
      id: idTreino,
      exercicios: treino.exercicios.map((exercicio, indice) => ({ ...exercicio, id: `${idTreino}-${indice}` })),
    }
  })

const normalizar = ({ treinos, variantes, ...modelo }: ModeloBruto): Modelo => {
  const normalizadas = variantes?.map((variante) => {
    const chave = chaveDe(variante.valores)
    return { ...variante, chave, treinos: normalizarTreinos(`${modelo.id}-${chave}`, variante.treinos) }
  })
  return {
    ...modelo,
    treinos: normalizadas?.[0].treinos ?? normalizarTreinos(modelo.id, treinos),
    variantes: normalizadas,
  }
}

export const carregarModelos = async (): Promise<Modelo[]> => {
  const [natflix, casa, tay, glow] = await Promise.all([
    import('./natflix.json'),
    import('./casa.json'),
    import('./tay.json'),
    import('./glow.json'),
  ])
  const brutos = [MODELO_PK, ...casa.default, ...natflix.default, ...tay.default, ...glow.default] as ModeloBruto[]
  return brutos.map(normalizar)
}
