import type { ReceitaBase } from '../../types'
import { COMBINACOES } from './combinacoes'
import { DOCES } from './doces'
import { DOCES_PROTEICOS } from './doces-proteicos'
import { SALGADAS } from './salgadas'

export const BELLA: ReceitaBase[] = [
  ...SALGADAS,
  ...DOCES,
  ...DOCES_PROTEICOS,
  ...COMBINACOES,
]
