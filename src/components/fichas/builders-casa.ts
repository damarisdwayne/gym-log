import type { Ficha, MesFichas } from './types'

const BASE = '/fichas/casa'

type TreinoCasa = {
  periodo: string
  letra: string
  foco: string
  tamanho: string
}

const arquivoDe = ({ periodo, letra }: TreinoCasa) =>
  `${BASE}/${periodo}/treino-${letra.replace('.', '').toLowerCase()}.pdf`

const treino = (item: TreinoCasa): Ficha => ({
  id: `casa-${item.periodo}-${item.letra}`,
  titulo: `Treino ${item.letra}`,
  descricao: item.foco,
  tipo: 'planilha',
  tamanho: item.tamanho,
  arquivo: arquivoDe(item),
})

export const divisaoTreinos = (tamanho: string): Ficha => ({
  id: 'casa-divisao',
  titulo: 'Divisão dos treinos',
  descricao: 'Como distribuir os treinos em casa na semana',
  tipo: 'agenda',
  tamanho,
  arquivo: `${BASE}/geral/divisao-treinos.pdf`,
})

export const treinoEmCasa = (
  divisao: string,
  treinos: TreinoCasa[],
): MesFichas => ({
  id: 'casa',
  label: '🏠 Treino em casa',
  fichas: [divisaoTreinos(divisao), ...treinos.map(treino)],
})
