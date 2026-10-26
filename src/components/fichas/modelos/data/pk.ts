import type { ModeloBruto, TreinoBruto } from '../types'

const REPS = '8–12'

type ExercicioPk = [nome: string, series: number]

const treino = (nome: string, exercicios: ExercicioPk[]): TreinoBruto => ({
  nome,
  exercicios: exercicios.map(([nomeExercicio, series]) => ({ nome: nomeExercicio, series, reps: REPS })),
})

export const MODELO_PK: ModeloBruto = {
  id: 'pk',
  origem: 'pk',
  grupo: 'pk',
  titulo: 'Treinador PK',
  treinos: [
    treino('Quadríceps', [
      ['Agachamento', 2],
      ['Leg press 180', 2],
      ['Afundo', 2],
      ['Cadeira extensora', 3],
    ]),
    treino('Superiores 1', [
      ['Pulldown', 3],
      ['Barra fixa', 2],
      ['Remada curvada', 2],
      ['Crucifixo inverso', 3],
      ['Rosca alternada sentada', 3],
      ['Rosca martelo', 3],
    ]),
    treino('Posterior e glúteo', [
      ['Cadeira flexora', 3],
      ['Stiff', 2],
      ['Elevação pélvica', 2],
      ['Cadeira abdutora', 3],
      ['Extensão de quadril no banco romano', 2],
    ]),
    treino('Superiores 2', [
      ['Desenvolvimento', 2],
      ['Elevação lateral', 3],
      ['Elevação frontal', 3],
      ['Pec deck', 3],
      ['Tríceps francês na polia', 3],
      ['Tríceps corda', 3],
    ]),
    treino('Inferiores', [
      ['Mesa flexora', 3],
      ['Agachamento hack', 2],
      ['Búlgaro', 2],
      ['RDL', 2],
    ]),
  ],
}
