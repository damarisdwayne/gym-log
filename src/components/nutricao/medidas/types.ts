export type CampoMedicao =
  | 'peso'
  | 'gordura'
  | 'pescoco'
  | 'cintura'
  | 'quadril'
  | 'abdomen'
  | 'coxa'
  | 'braco'

export type Medicao = {
  data: string
  valores: Partial<Record<CampoMedicao, number>>
}
