import type { Modelo, ModeloBruto } from '../types'
import { MODELO_PK } from './pk'

const normalizar = (modelo: ModeloBruto): Modelo => ({
  ...modelo,
  treinos: modelo.treinos.map((treino, indiceTreino) => {
    const idTreino = `${modelo.id}-${indiceTreino}`
    return {
      ...treino,
      id: idTreino,
      exercicios: treino.exercicios.map((exercicio, indice) => ({ ...exercicio, id: `${idTreino}-${indice}` })),
    }
  }),
})

export const carregarModelos = async (): Promise<Modelo[]> => {
  const [natflix, casa, tay] = await Promise.all([
    import('./natflix.json'),
    import('./casa.json'),
    import('./tay.json'),
  ])
  const brutos = [MODELO_PK, ...casa.default, ...natflix.default, ...tay.default] as ModeloBruto[]
  return brutos.map(normalizar)
}
