import type { Ebook, EbookId, Preparo, Secao, SecaoId, Tipo } from './types'

export const EBOOKS: Record<EbookId, Ebook> = {
  natflix: {
    id: 'natflix',
    titulo: 'Natflix',
    autora: 'Natasha Villaschi',
    arquivo: '/fichas/natflix/geral/ebook-receitas.pdf',
  },
  bella: {
    id: 'bella',
    titulo: 'Uma Bella Vida Flex',
    autora: 'Isabella Araujo',
    arquivo: '/fichas/nutricao/ebook-receitas-bella-vida-flex.pdf',
  },
}

export const fotoReceita = (id: string) => `/receitas/${id}.webp`

const LISTA_SECOES: Secao[] = [
  { id: 'frango', titulo: 'Com frango', tipo: 'salgada', emoji: '🍗' },
  { id: 'carne', titulo: 'Com carne', tipo: 'salgada', emoji: '🥩' },
  { id: 'atum', titulo: 'Com atum', tipo: 'salgada', emoji: '🐟' },
  { id: 'lanches', titulo: 'Lanches práticos', tipo: 'salgada', emoji: '🥪' },
  {
    id: 'vegetarianas',
    titulo: 'Veganas / vegetarianas',
    tipo: 'salgada',
    emoji: '🥗',
  },
  { id: 'legumes', titulo: 'Com legumes', tipo: 'salgada', emoji: '🥕' },
  { id: 'whey', titulo: 'Com whey', tipo: 'doce', emoji: '💪' },
  { id: 'amendoim', titulo: 'Com pasta de amendoim', tipo: 'doce', emoji: '🥜' },
  { id: 'dri', titulo: 'Receitas da Dri', tipo: 'doce', emoji: '🍮' },
  { id: 'bolos', titulo: 'Bolos', tipo: 'doce', emoji: '🍰' },
  { id: 'mingaus', titulo: 'Mingaus e oats', tipo: 'doce', emoji: '🥣' },
  { id: 'gelados', titulo: 'Sorvetes e gelados', tipo: 'doce', emoji: '🍨' },
  { id: 'shakes', titulo: 'Bebidas e shakes', tipo: 'doce', emoji: '🥤' },
  { id: 'doces-praticos', titulo: 'Doces práticos', tipo: 'doce', emoji: '🍫' },
  { id: 'doce-vegano', titulo: 'Doce vegano', tipo: 'doce', emoji: '🌱' },
  { id: 'combinacoes', titulo: 'Combinações doces', tipo: 'doce', emoji: '🍓' },
  { id: 'agridoces', titulo: 'Agridoces', tipo: 'agridoce', emoji: '🍯' },
]

export const SECOES = Object.fromEntries(
  LISTA_SECOES.map((secao) => [secao.id, secao]),
) as Record<SecaoId, Secao>

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
