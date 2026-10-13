export const MUSCULOS = [
  'Glúteo',
  'Quadríceps',
  'Posterior',
  'Adutores',
  'Panturrilha',
  'Costas',
  'Peito',
  'Ombro',
  'Bíceps',
  'Tríceps',
  'Abdômen',
] as const

export type Musculo = (typeof MUSCULOS)[number]

export type Musculos = {
  foco: Musculo[]
  auxiliares: Musculo[]
}
