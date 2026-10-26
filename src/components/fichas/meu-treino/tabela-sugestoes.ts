import type { Musculo, Musculos } from './musculos'

const musculos = (foco: Musculo[], auxiliares: Musculo[] = []): Musculos => ({ foco, auxiliares })

const AGACHAMENTO = musculos(['Quadríceps'], ['Glúteo máximo', 'Adutores'])
const SUMO = musculos(['Glúteo máximo', 'Adutores'], ['Quadríceps'])
const UNILATERAL = musculos(['Glúteo máximo'], ['Quadríceps', 'Adutores', 'Glúteo médio'])
const AFUNDO = musculos(['Quadríceps'], ['Glúteo máximo', 'Adutores', 'Glúteo médio'])
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
const ABDUCAO_DIAGONAL = musculos(['Glúteo médio'], ['Glúteo máximo'])
const GOOD_MORNING = musculos(['Posterior'], ['Glúteo máximo'])
const FLEXAO_BRACO = musculos(['Peito'], ['Tríceps', 'Ombro anterior'])

export const SUGESTOES: [string, Musculos][] = [
  ['agachamento sumo', SUMO],
  ['sumo', SUMO],
  ['agachamento', AGACHAMENTO],
  ['legpress', musculos(['Quadríceps'], ['Glúteo máximo', 'Adutores'])],
  ['hack', HACK],
  ['agachamento hack', HACK],
  ['bulgaro', UNILATERAL],
  ['recuo', AFUNDO],
  ['afundo', AFUNDO],
  ['passada', AFUNDO],
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
  ['romanian deadlift', musculos(['Posterior', 'Glúteo máximo'])],
  ['terra unilateral', musculos(['Glúteo máximo', 'Posterior'])],
  ['good morning', GOOD_MORNING],
  ['squat', AGACHAMENTO],
  ['thruster', musculos(['Quadríceps'], ['Glúteo máximo', 'Ombro anterior'])],
  ['retrocesso', AFUNDO],
  ['avanco', AFUNDO],
  ['subida', UNILATERAL],
  ['leg horizontal', musculos(['Quadríceps'], ['Glúteo máximo', 'Adutores'])],
  ['nordica reversa', musculos(['Quadríceps'])],
  ['flexao de joelho', musculos(['Posterior'])],
  ['extensao de joelho e quadril', musculos(['Glúteo máximo'], ['Quadríceps'])],
  ['gluteo 4 apoios', EXTENSAO_QUADRIL],
  ['4 apoios', EXTENSAO_QUADRIL],
  ['gluteo em pe', EXTENSAO_QUADRIL],
  ['gluteo na polia', EXTENSAO_QUADRIL],
  ['chute', EXTENSAO_QUADRIL],
  ['ponte', ELEVACAO_PELVICA],
  ['extensao diagonal', ABDUCAO_DIAGONAL],
  ['diagonal no cross', ABDUCAO_DIAGONAL],
  ['deslocamento', ABDUCAO],
  ['serrote', REMADA],
  ['chest pull', FACEPULL],
  ['flexao no chao', FLEXAO_BRACO],
  ['flexao fechada', musculos(['Tríceps'], ['Peito', 'Ombro anterior'])],
  ['flexao com maos fechadas', musculos(['Tríceps'], ['Peito', 'Ombro anterior'])],
  ['flexao toca ombro', FLEXAO_BRACO],
  ['flexao de tronco', ABDOMEN],
  ['flexao de quadril', ABDOMEN],
  ['remador', ABDOMEN],
  ['canivete', ABDOMEN],
  ['russian twist', ABDOMEN],
  ['zombie crunch', ABDOMEN],
  ['infra', ABDOMEN],
  ['supra', ABDOMEN],
  ['sit up', ABDOMEN],
  ['canoa', ABDOMEN],
  ['bike', ABDOMEN],
  ['around the world', ABDOMEN],
  ['toca pe', ABDOMEN],
  ['toca peso', ABDOMEN],
  ['toca ombro', ABDOMEN],
  ['passa peso', ABDOMEN],
  ['peso por baixo', ABDOMEN],
  ['climber', ABDOMEN],
  ['escalada', ABDOMEN],
]
