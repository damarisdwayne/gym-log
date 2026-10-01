import type { NivelId, RefeicaoId, TagRS7 } from './types'

export const EBOOK_RS7 = {
  titulo: 'Receitas Saudáveis em 7 Minutos',
  autor: 'Dr. Santiago Paes',
  arquivo: '/fichas/nutricao/ebook-rs7-receitas-saudaveis.pdf',
}

export const fotoRS7 = (id: string) => `/receitas/rs7/${id}.webp`

export const REFEICOES: { id: RefeicaoId; label: string; emoji: string }[] = [
  { id: 'cafe', label: 'Café da manhã', emoji: '☕' },
  { id: 'almoco', label: 'Almoço', emoji: '🍛' },
  { id: 'lanche', label: 'Lanche', emoji: '🥪' },
  { id: 'jantar', label: 'Jantar', emoji: '🌙' },
  { id: 'ceia', label: 'Ceia', emoji: '🍵' },
  { id: 'pre-treino', label: 'Pré-treino', emoji: '⚡' },
  { id: 'pos-treino', label: 'Pós-treino', emoji: '💪' },
  { id: 'sobremesa', label: 'Sobremesa', emoji: '🍨' },
]

export const ROTULO_REFEICAO = Object.fromEntries(
  REFEICOES.map((refeicao) => [refeicao.id, refeicao.label]),
) as Record<RefeicaoId, string>

export const NIVEIS: { id: NivelId; label: string; max: number }[] = [
  { id: 1, label: 'Até 350 kcal', max: 350 },
  { id: 2, label: '351–500 kcal', max: 500 },
  { id: 3, label: '501–650 kcal', max: 650 },
  { id: 4, label: '651+ kcal', max: Infinity },
]

export const nivelDe = (calorias: number): NivelId =>
  NIVEIS.find((nivel) => calorias <= nivel.max)?.id ?? 4

export const TAGS: Record<TagRS7, { label: string; emoji: string }> = {
  vegetariana: { label: 'Vegetariana', emoji: '🥗' },
  vegana: { label: 'Vegana', emoji: '🌱' },
  semLactose: { label: 'Sem lactose', emoji: '🥛' },
}
