import type { Ficha } from './types'

const BASE = '/fichas/nutricao'

export const planoAlimentar = (prescrito: string, tamanho: string): Ficha => ({
  id: 'nutricao-plano-alimentar',
  titulo: 'Plano alimentar',
  descricao: `Prescrito em ${prescrito}`,
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
