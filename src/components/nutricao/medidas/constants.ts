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
  { campo: 'coxa', label: 'Coxa', sufixo: 'cm' },
  { campo: 'braco', label: 'Braço', sufixo: 'cm' },
]
