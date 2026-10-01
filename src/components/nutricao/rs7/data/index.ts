import type { ReceitaRS7 } from '../types'
import almoco from './almoco.json'
import cafe from './cafe.json'
import ceia from './ceia.json'
import jantar from './jantar.json'
import lanche from './lanche.json'
import posTreino from './pos-treino.json'
import preTreino from './pre-treino.json'
import sobremesa from './sobremesa.json'

export const RECEITAS_RS7 = [
  ...cafe,
  ...almoco,
  ...lanche,
  ...jantar,
  ...ceia,
  ...preTreino,
  ...posTreino,
  ...sobremesa,
] as ReceitaRS7[]
