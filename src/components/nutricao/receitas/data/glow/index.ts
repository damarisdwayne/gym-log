import type { ReceitaBase } from '../../types'
import { ALMOCOS } from './almocos'
import { CAFE_DA_MANHA } from './cafe-da-manha'
import { LANCHES_RAPIDOS } from './lanches-rapidos'

export const GLOW: ReceitaBase[] = [...CAFE_DA_MANHA, ...ALMOCOS, ...LANCHES_RAPIDOS]
