import type { SegmentedOption } from '@/components/ui/segmented'
import type {
  Atividade,
  CampoNumerico,
  DadosCalculadora,
  Objetivo,
  Sexo,
} from './types'

export const STORAGE_KEY = 'gym-log:calculadora:v1'

export const DADOS_INICIAIS: DadosCalculadora = {
  sexo: 'feminino',
  objetivo: 'eliminar',
  atividade: 'moderado',
  idade: '',
  altura: '',
  peso: '',
  pescoco: '',
  cintura: '',
  quadril: '',
  abdomen: '',
  coxa: '',
  braco: '',
  bracoEsquerdo: '',
  bracoDireito: '',
  ombro: '',
  torax: '',
  coxaProximal: '',
  panturrilha: '',
  antebraco: '',
  punho: '',
  gordura: '',
}

export const SEXOS: SegmentedOption<Sexo>[] = [
  { value: 'feminino', label: 'Feminino' },
  { value: 'masculino', label: 'Masculino' },
]

export const OBJETIVOS: SegmentedOption<Objetivo>[] = [
  { value: 'eliminar', label: 'Eliminar gordura', description: '−20% kcal' },
  { value: 'manter', label: 'Manter peso', description: 'manutenção' },
  { value: 'ganhar', label: 'Ganhar músculo', description: '+10% kcal' },
]

export const ATIVIDADES: SegmentedOption<Atividade>[] = [
  { value: 'sedentario', label: 'Sedentário', description: 'pouco ou nenhum exercício' },
  { value: 'pouco', label: 'Pouco ativo', description: 'treino leve 1–3x/semana' },
  { value: 'moderado', label: 'Moderadamente ativo', description: 'treino 3–5x/semana' },
  { value: 'muito', label: 'Muito ativo', description: 'treino intenso 6–7x/semana' },
  { value: 'extremo', label: 'Extremamente ativo', description: 'treino 2x/dia ou trabalho físico' },
]

export const FATOR_ATIVIDADE: Record<Atividade, number> = {
  sedentario: 1.2,
  pouco: 1.375,
  moderado: 1.55,
  muito: 1.725,
  extremo: 1.9,
}

type RegraObjetivo = {
  ajuste: number
  proteinaPorKg: number
  gorduraPorKg: number
}

export const REGRA_OBJETIVO: Record<Objetivo, RegraObjetivo> = {
  eliminar: { ajuste: -0.2, proteinaPorKg: 2.2, gorduraPorKg: 0.8 },
  manter: { ajuste: 0, proteinaPorKg: 1.8, gorduraPorKg: 0.9 },
  ganhar: { ajuste: 0.1, proteinaPorKg: 2, gorduraPorKg: 1 },
}

type Medida = { campo: CampoNumerico; label: string }

export const MEDIDAS: Record<Sexo, Medida[]> = {
  feminino: [
    { campo: 'pescoco', label: 'Pescoço' },
    { campo: 'cintura', label: 'Cintura' },
    { campo: 'quadril', label: 'Quadril' },
  ],
  masculino: [
    { campo: 'pescoco', label: 'Pescoço' },
    { campo: 'abdomen', label: 'Abdômen' },
  ],
}

const MEDIDAS_PROTOCOLO: Medida[] = [
  { campo: 'bracoEsquerdo', label: 'Braço esq. relaxado' },
  { campo: 'bracoDireito', label: 'Braço dir. relaxado' },
  { campo: 'ombro', label: 'Ombro' },
  { campo: 'torax', label: 'Tórax' },
  { campo: 'coxaProximal', label: 'Coxa proximal esq.' },
  { campo: 'panturrilha', label: 'Panturrilha relaxada' },
  { campo: 'antebraco', label: 'Antebraço' },
  { campo: 'punho', label: 'Punho' },
]

export const MEDIDAS_EXTRAS: Record<Sexo, Medida[]> = {
  feminino: [{ campo: 'abdomen', label: 'Abdômen' }, ...MEDIDAS_PROTOCOLO],
  masculino: MEDIDAS_PROTOCOLO,
}
