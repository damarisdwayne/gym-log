import type { MacrosReceita } from '../types'

export const macros = (
  calorias: number,
  proteinas: number,
  carboidratos: number,
  lipideos: number,
): MacrosReceita => ({ calorias, proteinas, carboidratos, lipideos })
