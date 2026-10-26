export type TecnicaId = 'drop-set' | 'rest-pause' | 'cluster' | 'back-off'

export type TecnicaExercicio = {
  tipo: TecnicaId
  extensoes?: number
  series?: number
}

type Extensao = {
  singular: string
  plural: string
  bonus: number
}

type Tecnica = {
  id: TecnicaId
  label: string
  comoFazer: string[]
  volume: string
  extensao?: Extensao
}

export const TECNICAS: Tecnica[] = [
  {
    id: 'drop-set',
    label: 'Drop set',
    comoFazer: [
      'Faça a série até a falha (ou quase).',
      'Sem descansar, tire uns 20–30% do peso e continue até a falha de novo.',
      'Repita 1 a 3 vezes. Funciona melhor em máquinas e halteres.',
    ],
    volume: 'Cada drop conta +0,5 série.',
    extensao: { singular: 'drop', plural: 'drops', bonus: 0.5 },
  },
  {
    id: 'rest-pause',
    label: 'Rest-pause',
    comoFazer: [
      'Faça a série até a falha (ou quase).',
      'Descanse só 10–20 segundos, com o mesmo peso.',
      'Faça mais repetições até a falha. Repita a pausa 2 ou 3 vezes.',
    ],
    volume: 'Cada pausa conta +0,5 série.',
    extensao: { singular: 'pausa', plural: 'pausas', bonus: 0.5 },
  },
  {
    id: 'cluster',
    label: 'Cluster',
    comoFazer: [
      'Escolha um peso que você faria umas 6 repetições.',
      'Divida a série em blocos de 2–3 repetições com 10–20 segundos de pausa entre eles.',
      'Assim você faz mais repetições com carga alta. Bom pra compostos e força.',
    ],
    volume: 'É a mesma série dividida: conta como série normal.',
  },
  {
    id: 'back-off',
    label: 'Back-off set',
    comoFazer: [
      'Faça uma top set: a série mais pesada do dia, com poucas repetições.',
      'Tire uns 10–20% do peso e, com descanso normal, faça 1 ou 2 séries com mais repetições.',
      'Coloque no campo Séries o total, contando a top set e as back-off.',
    ],
    volume: 'Cada back-off é uma série completa: já entra no número de séries.',
  },
]

export const TECNICA_POR_ID = Object.fromEntries(TECNICAS.map((tecnica) => [tecnica.id, tecnica])) as Record<
  TecnicaId,
  Tecnica
>

export const EXTENSOES_PADRAO = 2

export const seriesExtras = (tecnica: TecnicaExercicio | undefined, seriesTotais: number) => {
  const extensao = tecnica && TECNICA_POR_ID[tecnica.tipo].extensao
  if (!tecnica || !extensao) return 0
  const seriesComTecnica = Math.min(tecnica.series ?? 1, seriesTotais)
  return (tecnica.extensoes ?? EXTENSOES_PADRAO) * extensao.bonus * seriesComTecnica
}

const plural = (quantidade: number, singular: string, plural: string) =>
  `${quantidade} ${quantidade === 1 ? singular : plural}`

export const resumoTecnica = (tecnica: TecnicaExercicio) => {
  const { label, extensao } = TECNICA_POR_ID[tecnica.tipo]
  if (!extensao) return label
  const extensoes = plural(tecnica.extensoes ?? EXTENSOES_PADRAO, extensao.singular, extensao.plural)
  const series = tecnica.series ?? 1
  const onde = series === 1 ? 'na última série' : `nas últimas ${series} séries`
  return `${label} · ${extensoes} ${onde}`
}
