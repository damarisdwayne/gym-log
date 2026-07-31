import { FOCO_LABEL, type Foco } from './builders'
import type { Ficha, MesFichas } from './types'

const BASE = '/fichas/tay-training'

export type Local = 'academia' | 'casa'

const LOCAL_LABEL: Record<Local, string> = {
  academia: 'Academia',
  casa: 'Casa',
}

type Tamanhos = Partial<Record<`${Local}${4 | 5}x`, string>>

const ORDEM: { chave: keyof Tamanhos; local: Local; vezes: number }[] = [
  { chave: 'academia4x', local: 'academia', vezes: 4 },
  { chave: 'academia5x', local: 'academia', vezes: 5 },
  { chave: 'casa4x', local: 'casa', vezes: 4 },
  { chave: 'casa5x', local: 'casa', vezes: 5 },
]

export const ficha = (
  mes: string,
  local: Local,
  vezesPorSemana: number,
  tamanho: string,
): Ficha => ({
  id: `tay-${mes}-${local}-${vezesPorSemana}x`,
  titulo: `${LOCAL_LABEL[local]} · ${vezesPorSemana}x na semana`,
  descricao: 'Cronograma e exercícios do mês',
  tipo: 'planilha',
  tamanho,
  arquivo: `${BASE}/${mes}/treinos/${local}-${vezesPorSemana}x.pdf`,
})

export const mes = (numero: number, tamanhos: Tamanhos): MesFichas => {
  const id = `mes-${String(numero).padStart(2, '0')}`

  return {
    id,
    label: `Mês ${numero}`,
    fichas: ORDEM.filter(({ chave }) => tamanhos[chave]).map(
      ({ chave, local, vezes }) => ficha(id, local, vezes, tamanhos[chave]!),
    ),
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
