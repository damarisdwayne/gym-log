export type CampoMedicao =
  | 'peso'
  | 'gordura'
  | 'pescoco'
  | 'cintura'
  | 'quadril'
  | 'abdomen'
  | 'coxa'
  | 'braco'
  | 'bracoEsquerdo'
  | 'bracoDireito'
  | 'ombro'
  | 'torax'
  | 'coxaProximal'
  | 'panturrilha'
  | 'antebraco'
  | 'punho'

export type Medicao = {
  data: string
  valores: Partial<Record<CampoMedicao, number>>
}
