import { FOCO_LABEL, type Foco } from './builders'
import type { Ficha, MesFichas } from './types'

const BASE = '/fichas/tay-training'

export const ficha = (
  mes: string,
  vezesPorSemana: number,
  tamanho: string,
): Ficha => ({
  id: `tay-${mes}-${vezesPorSemana}x`,
  titulo: `Ficha de treino · ${vezesPorSemana}x na semana`,
  descricao: 'Cronograma e exercícios do mês',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/ficha-${vezesPorSemana}x.pdf`,
})

export const mes = (
  numero: number,
  tamanho4x: string,
  tamanho5x: string,
): MesFichas => {
  const id = `mes-${String(numero).padStart(2, '0')}`

  return {
    id,
    label: `Mês ${numero}`,
    fichas: [ficha(id, 4, tamanho4x), ficha(id, 5, tamanho5x)],
  }
}

export const cardapio = (foco: Foco, kcal: number, tamanho: string): Ficha => ({
  id: `tay-cardapio-${kcal}`,
  titulo: `${FOCO_LABEL[foco]} ${kcal} kcal`,
  descricao: 'Planejamento alimentar da nutri Rafaela Ramos',
  tipo: 'cardapio',
  tamanho,
  arquivo: `${BASE}/geral/cardapio-${foco}-${kcal}kcal.pdf`,
})

export const planilhaCardio = (tamanho: string): Ficha => ({
  id: 'tay-planilha-cardio',
  titulo: 'Planilha de cardio',
  descricao: 'Opções de aparelho, tempo e intensidade',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/geral/planilha-cardio.pdf`,
})
