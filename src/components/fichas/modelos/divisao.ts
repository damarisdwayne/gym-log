import type { Divisao, DiasDivisao, FocoDivisao, Treino } from '../meu-treino'
import { AGENDA_NATFLIX } from './agenda-natflix'
import type { Modelo } from './types'

type Semanas = string[][]

export type TabelaSemanas = Record<DiasDivisao, Record<FocoDivisao, Semanas>>

const TRES_DIAS: Semanas = [['D', 'B3', 'D']]

const TRES_DIAS_POR_FOCO = { geral: TRES_DIAS, quadriceps: TRES_DIAS, gluteo: TRES_DIAS }

const DIVISAO_CASA: TabelaSemanas = {
  3: TRES_DIAS_POR_FOCO,
  4: {
    geral: [['A', 'B3', 'C', 'B3']],
    quadriceps: [['A', 'B3', 'C', 'A']],
    gluteo: [['C', 'B3', 'C', 'C']],
  },
  5: {
    geral: [['A', 'B1', 'C', 'B2', 'D']],
    quadriceps: [['A', 'B1', 'D', 'B2', 'A']],
    gluteo: [['C', 'B1', 'D', 'B2', 'C']],
  },
  6: {
    geral: [['A', 'B1', 'C', 'B2', 'D', 'B3']],
    quadriceps: [['A', 'B1', 'D', 'B2', 'A', 'B3']],
    gluteo: [['C', 'B1', 'D', 'B2', 'C', 'B3']],
  },
}

const AGENDA: TabelaSemanas = { 3: TRES_DIAS_POR_FOCO, ...AGENDA_NATFLIX }

export const DIAS: DiasDivisao[] = [3, 4, 5, 6]

export const FOCOS: { id: FocoDivisao; label: string }[] = [
  { id: 'geral', label: 'Geral' },
  { id: 'quadriceps', label: 'Quadríceps' },
  { id: 'gluteo', label: 'Glúteo' },
]

export const DIVISAO_PADRAO: Divisao = { dias: 4, foco: 'geral', semana: 1 }

const tabelaDe = (treinos: Treino[]) => {
  const rotulos = new Set(treinos.map(({ rotulo }) => rotulo))
  if (rotulos.has('C1')) return AGENDA
  if (['A', 'B3', 'C', 'D'].every((rotulo) => rotulos.has(rotulo))) return DIVISAO_CASA
  return undefined
}

const semanasDe = (modelo: Modelo, { dias, foco }: Divisao) =>
  modelo.cronograma ?? tabelaDe(modelo.treinos)?.[dias][foco]

export type OpcoesDivisao = {
  diasEFoco: boolean
  semanas: number
  nota?: string
}

const NOTA_TAY = 'O cronograma da Tay tem 4 semanas: escolha em qual você está.'
const NOTA_NATFLIX = 'A agenda da Natflix cobre 6 semanas (de 22/06 a 01/08): escolha em qual você está.'

export const opcoesDivisao = (modelo: Modelo, divisao: Divisao): OpcoesDivisao | undefined => {
  const semanas = semanasDe(modelo, divisao)
  if (!semanas) return undefined
  if (modelo.cronograma) return { diasEFoco: false, semanas: semanas.length, nota: NOTA_TAY }
  return { diasEFoco: true, semanas: semanas.length, nota: semanas.length > 1 ? NOTA_NATFLIX : undefined }
}

export const semanaAtual = (divisao: Divisao, semanas: number) => Math.min(divisao.semana ?? 1, semanas)

export const aplicarDivisao = (modelo: Modelo, treinos: Treino[], divisao: Divisao) => {
  const semanas = semanasDe(modelo, divisao)
  if (!semanas) return treinos
  const semana = semanas[semanaAtual(divisao, semanas.length) - 1]
  return treinos.map((treino) => ({
    ...treino,
    vezesPorSemana: semana.filter((rotulo) => rotulo === treino.rotulo).length,
  }))
}

export const ajusteDivisao = (modelo: Modelo, divisao: Divisao) => (treinos: Treino[]) =>
  aplicarDivisao(modelo, treinos, divisao)
