import type { ExercicioTreino, Treino } from '../meu-treino'

export type OrigemModelo = 'pk' | 'natflix' | 'tay' | 'glow'

type ExercicioBruto = Omit<ExercicioTreino, 'id' | 'foco' | 'auxiliares'>

export type TreinoBruto = Omit<Treino, 'id' | 'exercicios'> & {
  exercicios: ExercicioBruto[]
}

type ModeloBase = {
  id: string
  origem: OrigemModelo
  grupo: string
  grupoLabel?: string
  titulo: string
  arquivo?: string
  cronograma?: string[][]
}

export type Dimensao = {
  id: string
  label: string
  opcoes: { valor: string; rotulo: string }[]
}

export type SelecaoVariante = Record<string, string>

type VarianteBase = {
  valores: SelecaoVariante
  arquivo?: string
  cronograma?: string[][]
}

export type VarianteBruta = VarianteBase & { treinos: TreinoBruto[] }

export type Variante = VarianteBase & { chave: string; treinos: Treino[] }

type ComVariantes = { dimensoes?: Dimensao[]; idsAnteriores?: string[] }

export type ModeloBruto = ModeloBase & ComVariantes & { treinos?: TreinoBruto[]; variantes?: VarianteBruta[] }

export type Modelo = ModeloBase & ComVariantes & { treinos: Treino[]; variantes?: Variante[] }
