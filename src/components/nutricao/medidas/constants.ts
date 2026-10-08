import type { CampoMedicao } from './types'

export const STORAGE_KEY = 'gym-log:medicoes:v1'

type CampoInfo = {
  campo: CampoMedicao
  label: string
  sufixo: string
}

export const CAMPOS_MEDICAO: CampoInfo[] = [
  { campo: 'peso', label: 'Peso', sufixo: 'kg' },
  { campo: 'gordura', label: '% de gordura', sufixo: '%' },
  { campo: 'pescoco', label: 'Pescoço', sufixo: 'cm' },
  { campo: 'cintura', label: 'Cintura', sufixo: 'cm' },
  { campo: 'quadril', label: 'Quadril', sufixo: 'cm' },
  { campo: 'abdomen', label: 'Abdômen', sufixo: 'cm' },
  { campo: 'bracoEsquerdo', label: 'Braço esq. relaxado', sufixo: 'cm' },
  { campo: 'bracoDireito', label: 'Braço dir. relaxado', sufixo: 'cm' },
  { campo: 'ombro', label: 'Ombro', sufixo: 'cm' },
  { campo: 'torax', label: 'Tórax', sufixo: 'cm' },
  { campo: 'coxaProximal', label: 'Coxa proximal esq.', sufixo: 'cm' },
  { campo: 'panturrilha', label: 'Panturrilha relaxada', sufixo: 'cm' },
  { campo: 'antebraco', label: 'Antebraço', sufixo: 'cm' },
  { campo: 'punho', label: 'Punho', sufixo: 'cm' },
  { campo: 'coxa', label: 'Coxa (meio)', sufixo: 'cm' },
  { campo: 'braco', label: 'Braço', sufixo: 'cm' },
]
