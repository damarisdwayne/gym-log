import type { Ficha } from './types'

const BASE = '/fichas/nutricao'

type Macros = {
  proteinas: number
  carboidratos: number
  lipideos: number
}

export const planoAlimentar = (
  prescrito: string,
  calorias: number,
  { proteinas, carboidratos, lipideos }: Macros,
  tamanho: string,
): Ficha => ({
  id: 'nutricao-plano-alimentar',
  titulo: 'Plano alimentar',
  descricao: `${prescrito} · ${calorias} kcal · P ${proteinas}g · C ${carboidratos}g · L ${lipideos}g`,
  tipo: 'cardapio',
  tamanho,
  arquivo: `${BASE}/plano-alimentar.pdf`,
})

export const evolucaoCorporal = (periodo: string, tamanho: string): Ficha => ({
  id: 'nutricao-evolucao-corporal',
  titulo: 'Evolução corporal',
  descricao: `Medições de ${periodo}`,
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/evolucao-corporal.pdf`,
})
