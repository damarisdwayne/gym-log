import { normalizar } from '@/lib/utils'
import type { Musculo, Musculos } from './musculos'
import type { ExercicioTreino } from './types'

const musculos = (foco: Musculo[], auxiliares: Musculo[] = []): Musculos => ({ foco, auxiliares })

const AGACHAMENTO = musculos(['Quadríceps', 'Glúteo'], ['Adutores'])
const SUMO = musculos(['Glúteo', 'Adutores'], ['Quadríceps'])
const UNILATERAL = musculos(['Glúteo'], ['Quadríceps', 'Adutores'])
const EXTENSAO_QUADRIL = musculos(['Glúteo'], ['Posterior'])
const ELEVACAO_PELVICA = musculos(['Glúteo'])
const ABDUCAO = musculos(['Glúteo'])
const ADUCAO = musculos(['Adutores'])
const PANTURRILHA = musculos(['Panturrilha'])
const REMADA = musculos(['Costas'], ['Bíceps', 'Ombro'])
const PUXADA = musculos(['Costas'], ['Bíceps'])
const FACEPULL = musculos(['Ombro'], ['Costas'])
const CRUCIFIXO = musculos(['Peito'], ['Ombro'])
const ELEVACAO_OMBRO = musculos(['Ombro'])
const TRICEPS = musculos(['Tríceps'])
const BICEPS = musculos(['Bíceps'])
const ABDOMEN = musculos(['Abdômen'])

const SUGESTOES: [string, Musculos][] = [
  ['agachamento sumo', SUMO],
  ['sumo', SUMO],
  ['agachamento', AGACHAMENTO],
  ['legpress', musculos(['Quadríceps'], ['Glúteo', 'Adutores'])],
  ['hack', musculos(['Quadríceps'], ['Glúteo'])],
  ['bulgaro', UNILATERAL],
  ['recuo', UNILATERAL],
  ['afundo', UNILATERAL],
  ['passada', UNILATERAL],
  ['step', UNILATERAL],
  ['extensora', musculos(['Quadríceps'])],
  ['flexora', musculos(['Posterior'])],
  ['stiff', musculos(['Posterior'], ['Glúteo'])],
  ['rdl', musculos(['Posterior', 'Glúteo'])],
  ['levantamento terra', musculos(['Glúteo', 'Posterior'], ['Quadríceps', 'Costas'])],
  ['banco romano', EXTENSAO_QUADRIL],
  ['hiperextensao', EXTENSAO_QUADRIL],
  ['extensao de quadril', EXTENSAO_QUADRIL],
  ['coice', EXTENSAO_QUADRIL],
  ['elevacao pelvica', ELEVACAO_PELVICA],
  ['hip thrust', ELEVACAO_PELVICA],
  ['abdutora', ABDUCAO],
  ['abducao', ABDUCAO],
  ['adutora', ADUCAO],
  ['aducao', ADUCAO],
  ['panturrilha', PANTURRILHA],
  ['gemeos', PANTURRILHA],
  ['remada', REMADA],
  ['puxada', PUXADA],
  ['pulldown', PUXADA],
  ['barra fixa', PUXADA],
  ['pullover', musculos(['Costas'], ['Peito'])],
  ['facepull', FACEPULL],
  ['facpull', FACEPULL],
  ['supino', musculos(['Peito'], ['Ombro', 'Tríceps'])],
  ['flexao de braco', musculos(['Peito'], ['Tríceps', 'Ombro'])],
  ['crucifixo inverso', FACEPULL],
  ['crucifixo', CRUCIFIXO],
  ['voador', CRUCIFIXO],
  ['crossover', CRUCIFIXO],
  ['desenvolvimento', musculos(['Ombro'], ['Tríceps'])],
  ['elevacao lateral', ELEVACAO_OMBRO],
  ['elevacao frontal', ELEVACAO_OMBRO],
  ['triceps', TRICEPS],
  ['frances', TRICEPS],
  ['biceps', BICEPS],
  ['rosca', BICEPS],
  ['martelo', BICEPS],
  ['abdominal', ABDOMEN],
  ['prancha', ABDOMEN],
]

const compactar = (texto: string) => texto.replace(/[^a-z0-9]/g, '')

const POR_ESPECIFICIDADE = SUGESTOES.map(([chave, sugestao]) => [compactar(chave), sugestao] as const).sort(
  ([a], [b]) => b.length - a.length,
)

const sugerirParte = (parte: string) =>
  POR_ESPECIFICIDADE.find(([chave]) => compactar(parte).includes(chave))?.[1]

const unicos = (lista: Musculo[]) => [...new Set(lista)]

export const sugerirMusculos = (nome: string): Musculos => {
  const sugestoes = normalizar(nome)
    .split('+')
    .flatMap((parte) => sugerirParte(parte) ?? [])
  const foco = unicos(sugestoes.flatMap((sugestao) => sugestao.foco))
  const auxiliares = unicos(sugestoes.flatMap((sugestao) => sugestao.auxiliares)).filter(
    (musculo) => !foco.includes(musculo),
  )
  return { foco, auxiliares }
}

export const musculosDe = ({ nome, foco, auxiliares }: ExercicioTreino): Musculos =>
  foco?.length ? { foco, auxiliares: auxiliares ?? [] } : sugerirMusculos(nome)
