import type { Dieta, Plano } from '../types'
import { DIETA_DOM, DIETA_SAB } from './fim-de-semana'
import { DIETA_SEG_SEX } from './seg-sex'

export const PLANO: Plano = {
  prescritoEm: '09/10/2026',
  nutricionista: 'Thiago Chiqueto',
  orientacoes: ['Tomar de 2 a 3 litros de água por dia'],
  dietas: [DIETA_SEG_SEX, DIETA_SAB, DIETA_DOM],
}

export const DIETA_PADRAO = DIETA_SEG_SEX

export const dietaDoDia = (dia = new Date().getDay()): Dieta =>
  PLANO.dietas.find((dieta) => dieta.dias.includes(dia)) ?? DIETA_PADRAO
