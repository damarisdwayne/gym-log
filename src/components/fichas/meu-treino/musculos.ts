export const MUSCULOS = [
  'Glúteo máximo',
  'Glúteo médio',
  'Quadríceps',
  'Posterior',
  'Adutores',
  'Panturrilha',
  'Costas',
  'Peito',
  'Ombro anterior',
  'Ombro lateral',
  'Ombro posterior',
  'Bíceps',
  'Tríceps',
  'Abdômen',
] as const

export type Musculo = (typeof MUSCULOS)[number]

export const SUBDIVISOES_LEGADAS = {
  Glúteo: ['Glúteo máximo', 'Glúteo médio'],
  Ombro: ['Ombro anterior', 'Ombro lateral', 'Ombro posterior'],
} as const satisfies Record<string, readonly Musculo[]>

export type MusculoLegado = keyof typeof SUBDIVISOES_LEGADAS

export type MusculoSalvo = Musculo | MusculoLegado

export type Musculos = {
  foco: Musculo[]
  auxiliares: Musculo[]
}
