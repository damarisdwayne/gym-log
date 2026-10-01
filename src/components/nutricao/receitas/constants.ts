import type { Preparo, Secao, SecaoId, Tipo } from './types'

export const EBOOK = '/fichas/natflix/geral/ebook-receitas.pdf'

export const fotoReceita = (id: string) => `/receitas/${id}.webp`

export const SECOES: Record<SecaoId, Secao> = {
  frango: { id: 'frango', titulo: 'Com frango', tipo: 'salgada' },
  carne: { id: 'carne', titulo: 'Com carne', tipo: 'salgada' },
  lanches: { id: 'lanches', titulo: 'Lanches práticos', tipo: 'salgada' },
  vegetarianas: {
    id: 'vegetarianas',
    titulo: 'Veganas / vegetarianas',
    tipo: 'salgada',
  },
  legumes: { id: 'legumes', titulo: 'Com legumes', tipo: 'salgada' },
  whey: { id: 'whey', titulo: 'Com whey', tipo: 'doce' },
  amendoim: { id: 'amendoim', titulo: 'Com pasta de amendoim', tipo: 'doce' },
  dri: { id: 'dri', titulo: 'Receitas da Dri', tipo: 'doce' },
  bolos: { id: 'bolos', titulo: 'Bolos', tipo: 'doce' },
  'doces-praticos': {
    id: 'doces-praticos',
    titulo: 'Doces práticos',
    tipo: 'doce',
  },
  'doce-vegano': { id: 'doce-vegano', titulo: 'Doce vegano', tipo: 'doce' },
  agridoces: { id: 'agridoces', titulo: 'Agridoces', tipo: 'agridoce' },
}

export const TIPOS: Record<Tipo, { label: string; emoji: string }> = {
  salgada: { label: 'Salgadas', emoji: '🧂' },
  doce: { label: 'Doces', emoji: '🍫' },
  agridoce: { label: 'Agridoces', emoji: '🍯' },
}

export const PREPAROS: Record<Preparo, { label: string; emoji: string }> = {
  forno: { label: 'Forno', emoji: '🔥' },
  airfryer: { label: 'Airfryer', emoji: '🌀' },
  microondas: { label: 'Micro-ondas', emoji: '📡' },
  fogao: { label: 'Fogão', emoji: '🍳' },
  'sem-fogo': { label: 'Sem fogo', emoji: '🥣' },
}

export const LEGENDA_MEDIDAS = 'cs = colher de sopa · cc = colher de chá'

export const formatarGramas = (valor: number) =>
  `${valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}g`
