import type { ReceitaBase } from '../../types'
import { AGRIDOCES } from './agridoces'
import { AMENDOIM } from './amendoim'
import { DOCES_PRATICOS } from './doces-praticos'
import { DRI_BOLOS } from './dri-bolos'
import { FRANGO } from './frango'
import { LANCHES_OVOS } from './lanches-ovos'
import { LANCHES_PAES } from './lanches-paes'
import { VEGETAIS } from './vegetais'
import { WHEY } from './whey'

export const NATFLIX: ReceitaBase[] = [
  ...FRANGO,
  ...LANCHES_OVOS,
  ...LANCHES_PAES,
  ...VEGETAIS,
  ...WHEY,
  ...AMENDOIM,
  ...DRI_BOLOS,
  ...DOCES_PRATICOS,
  ...AGRIDOCES,
]
