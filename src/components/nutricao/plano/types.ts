export type Macros = {
  proteinas: number
  carboidratos: number
  lipideos: number
}

export type Porcao = {
  nome: string
  medida: string
  peso?: string
}

export type Alimento = Porcao & {
  substituicoes?: Porcao[]
}

export type Opcao = {
  id: string
  titulo: string
  nome?: string
  alimentos: Alimento[]
  calorias?: number
  macros?: Macros
}

export type Bloco = {
  titulo: string
  itens: string[]
  nota?: string
}

export type Refeicao = {
  id: string
  horario?: string
  nome: string
  atalho: string
  emoji: string
  opcoes: Opcao[]
  blocos?: Bloco[]
}

export type Dieta = {
  id: string
  titulo: string
  dias: number[]
  calorias: number
  macros: Macros
  arquivo: string
  tamanho: string
  refeicoes: Refeicao[]
}

export type Plano = {
  prescritoEm: string
  nutricionista: string
  orientacoes: string[]
  dietas: Dieta[]
}
