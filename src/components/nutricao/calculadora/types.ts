import type { Macros } from '../plano/types'

export type Sexo = 'feminino' | 'masculino'

export type Objetivo = 'eliminar' | 'manter' | 'ganhar'

export type Atividade =
  | 'sedentario'
  | 'pouco'
  | 'moderado'
  | 'muito'
  | 'extremo'

export type CampoNumerico =
  | 'idade'
  | 'altura'
  | 'peso'
  | 'pescoco'
  | 'cintura'
  | 'quadril'
  | 'abdomen'
  | 'coxa'
  | 'braco'
  | 'bracoEsquerdo'
  | 'bracoDireito'
  | 'ombro'
  | 'torax'
  | 'coxaProximal'
  | 'panturrilha'
  | 'antebraco'
  | 'punho'
  | 'gordura'

export type DadosCalculadora = Record<CampoNumerico, string> & {
  sexo: Sexo
  objetivo: Objetivo
  atividade: Atividade
}

export type AtualizarCampo = <K extends keyof DadosCalculadora>(
  campo: K,
  valor: DadosCalculadora[K],
) => void

export type ResultadoGordura = {
  percentual: number
  massaGorda: number
  massaMagra: number
}

export type FormulaTmb = 'Katch-McArdle' | 'Mifflin-St Jeor'

export type ResultadoCalorias = {
  formula: FormulaTmb
  tmb: number
  gastoTotal: number
  calorias: number
  macros: Macros
}
