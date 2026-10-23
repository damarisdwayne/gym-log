import { normalizar } from '@/lib/utils'
import { SUBDIVISOES_LEGADAS, type Musculo, type MusculoLegado, type Musculos, type MusculoSalvo } from './musculos'
import type { ExercicioTreino } from './types'

const musculos = (foco: Musculo[], auxiliares: Musculo[] = []): Musculos => ({ foco, auxiliares })

const AGACHAMENTO = musculos(['Quadríceps', 'Glúteo máximo'], ['Adutores'])
const SUMO = musculos(['Glúteo máximo', 'Adutores'], ['Quadríceps'])
const UNILATERAL = musculos(['Glúteo máximo'], ['Quadríceps', 'Adutores', 'Glúteo médio'])
const EXTENSAO_QUADRIL = musculos(['Glúteo máximo'], ['Posterior'])
const ELEVACAO_PELVICA = musculos(['Glúteo máximo'])
const ABDUCAO = musculos(['Glúteo médio'])
const ADUCAO = musculos(['Adutores'])
const HACK = musculos(['Quadríceps'], ['Glúteo máximo'])
const PANTURRILHA = musculos(['Panturrilha'])
const REMADA = musculos(['Costas'], ['Bíceps', 'Ombro posterior'])
const PUXADA = musculos(['Costas'], ['Bíceps'])
const FACEPULL = musculos(['Ombro posterior'], ['Costas'])
const CRUCIFIXO = musculos(['Peito'], ['Ombro anterior'])
const TRICEPS = musculos(['Tríceps'])
const BICEPS = musculos(['Bíceps'])
const ABDOMEN = musculos(['Abdômen'])

const SUGESTOES: [string, Musculos][] = [
  ['agachamento sumo', SUMO],
  ['sumo', SUMO],
  ['agachamento', AGACHAMENTO],
  ['legpress', musculos(['Quadríceps'], ['Glúteo máximo', 'Adutores'])],
  ['hack', HACK],
  ['agachamento hack', HACK],
  ['bulgaro', UNILATERAL],
  ['recuo', UNILATERAL],
  ['afundo', UNILATERAL],
  ['passada', UNILATERAL],
  ['step', UNILATERAL],
  ['extensora', musculos(['Quadríceps'])],
  ['flexora', musculos(['Posterior'])],
  ['stiff', musculos(['Posterior'], ['Glúteo máximo'])],
  ['rdl', musculos(['Posterior', 'Glúteo máximo'])],
  ['levantamento terra', musculos(['Glúteo máximo', 'Posterior'], ['Quadríceps', 'Costas'])],
  ['banco romano', EXTENSAO_QUADRIL],
  ['hiperextensao', EXTENSAO_QUADRIL],
  ['extensao de quadril', EXTENSAO_QUADRIL],
  ['coice', EXTENSAO_QUADRIL],
  ['elevacao pelvica', ELEVACAO_PELVICA],
  ['hip thrust', ELEVACAO_PELVICA],
  ['abdutora', ABDUCAO],
  ['abducao', ABDUCAO],
  ['coice lateral', ABDUCAO],
  ['ostra', ABDUCAO],
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
  ['supino', musculos(['Peito'], ['Ombro anterior', 'Tríceps'])],
  ['flexao de braco', musculos(['Peito'], ['Tríceps', 'Ombro anterior'])],
  ['crucifixo inverso', FACEPULL],
  ['voador inverso', FACEPULL],
  ['peck deck inverso', FACEPULL],
  ['pec deck inverso', FACEPULL],
  ['pec deck', CRUCIFIXO],
  ['peck deck', CRUCIFIXO],
  ['crucifixo', CRUCIFIXO],
  ['voador', CRUCIFIXO],
  ['crossover', CRUCIFIXO],
  ['desenvolvimento', musculos(['Ombro anterior'], ['Ombro lateral', 'Tríceps'])],
  ['elevacao lateral', musculos(['Ombro lateral'])],
  ['elevacao frontal', musculos(['Ombro anterior'])],
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

const ehLegado = (musculo: MusculoSalvo): musculo is MusculoLegado => musculo in SUBDIVISOES_LEGADAS

const migrarLegado = (salvos: MusculoSalvo[], sugeridos: Musculo[], todosSugeridos: Musculo[]) =>
  unicos(
    salvos.flatMap((musculo) => {
      if (!ehLegado(musculo)) return [musculo]
      const subdivisoes: readonly Musculo[] = SUBDIVISOES_LEGADAS[musculo]
      const doCampo = sugeridos.filter((item) => subdivisoes.includes(item))
      if (doCampo.length) return doCampo
      const doExercicio = todosSugeridos.filter((item) => subdivisoes.includes(item))
      return doExercicio.length ? doExercicio : subdivisoes.slice(0, 1)
    }),
  )

export const musculosDe = ({ nome, foco, auxiliares }: ExercicioTreino): Musculos => {
  const sugestao = sugerirMusculos(nome)
  if (!foco?.length) return sugestao
  const todosSugeridos = [...sugestao.foco, ...sugestao.auxiliares]
  const focoMigrado = migrarLegado(foco, sugestao.foco, todosSugeridos)
  return {
    foco: focoMigrado,
    auxiliares: migrarLegado(auxiliares ?? [], sugestao.auxiliares, todosSugeridos).filter(
      (musculo) => !focoMigrado.includes(musculo),
    ),
  }
}
