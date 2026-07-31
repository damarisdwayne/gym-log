import type { Ficha } from './types'

const BASE = '/fichas/natflix'

export type Foco = 'emagrecimento' | 'hipertrofia'

const FOCO_LABEL: Record<Foco, string> = {
  emagrecimento: 'Emagrecimento',
  hipertrofia: 'Hipertrofia',
}

export const guia = (mes: string, tamanho: string): Ficha => ({
  id: `${mes}-guia`,
  titulo: 'Guia de execução',
  descricao: 'Cada exercício da ficha completa, com fotos e explicação',
  tipo: 'guia',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/hipertrofia-avancado-guia.pdf`,
})

export const guiaReduzido = (mes: string, tamanho: string): Ficha => ({
  id: `${mes}-guia-reduzido`,
  titulo: 'Guia de execução · reduzido',
  descricao: 'Cada exercício da ficha reduzida, com fotos e explicação',
  tipo: 'guia',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/hipertrofia-avancado-reduzido-guia.pdf`,
})

export const planilha = (mes: string, tamanho: string): Ficha => ({
  id: `${mes}-planilha`,
  titulo: 'Planilha de treino',
  descricao: 'Ficha completa: exercício, séries, repetições e descanso',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/hipertrofia-avancado-planilha.pdf`,
})

export const planilhaReduzida = (mes: string, tamanho: string): Ficha => ({
  id: `${mes}-planilha-reduzida`,
  titulo: 'Planilha reduzida',
  descricao: 'Versão curta da ficha, para treinar em 45min a 1h',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/hipertrofia-avancado-reduzido-planilha.pdf`,
})

export const cardapio = (
  mes: string,
  foco: Foco,
  kcal: number,
  tamanho: string,
): Ficha => ({
  id: `${mes}-cardapio-${kcal}`,
  titulo: `${FOCO_LABEL[foco]} ${kcal} kcal`,
  descricao: 'Planejamento alimentar completo',
  tipo: 'cardapio',
  tamanho,
  arquivo: `${BASE}/${mes}/cardapios/${foco}-${kcal}kcal.pdf`,
})

export const listaCompras = (
  mes: string,
  foco: Foco,
  tamanho: string,
): Ficha => ({
  id: `${mes}-compras-${foco}`,
  titulo: `Lista de compras · ${FOCO_LABEL[foco]}`,
  descricao: 'O que comprar para o cardápio do mês',
  tipo: 'lista',
  tamanho,
  arquivo: `${BASE}/${mes}/cardapios/lista-compras-${foco}.pdf`,
})

export const planilhaCardio = (tamanho: string): Ficha => ({
  id: 'geral-planilha-cardio',
  titulo: 'Planilha de cardio',
  descricao: 'Progressão do cardio ao longo do mês',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/geral/planilha-cardio.pdf`,
})

export const agenda = (vezesPorSemana: number, tamanho: string): Ficha => ({
  id: `geral-agenda-${vezesPorSemana}x`,
  titulo: `Agenda de treino · ${vezesPorSemana}x na semana`,
  descricao: 'Divisão dos treinos ao longo do mês',
  tipo: 'agenda',
  tamanho,
  arquivo: `${BASE}/geral/agenda-treino-${vezesPorSemana}x-semana.pdf`,
})

export const ebookReceitas = (tamanho: string): Ficha => ({
  id: 'geral-ebook-receitas',
  titulo: 'E-book de receitas',
  descricao: 'Receitas da Natasha Villaschi',
  tipo: 'ebook',
  tamanho,
  arquivo: `${BASE}/geral/ebook-receitas.pdf`,
})

export const listaSubstituicao = (foco: Foco, tamanho: string): Ficha => ({
  id: `geral-substituicao-${foco}`,
  titulo: `Lista de substituição · ${FOCO_LABEL[foco]}`,
  descricao: 'Trocas equivalentes de alimentos, vale para qualquer mês',
  tipo: 'lista',
  tamanho,
  arquivo: `${BASE}/geral/lista-substituicao-${foco}.pdf`,
})
