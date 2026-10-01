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
  alimentos: Alimento[]
}

export type Bloco = {
  titulo: string
  itens: string[]
  nota?: string
}

export type Refeicao = {
  id: string
  horario: string
  nome: string
  atalho: string
  emoji: string
  opcoes: Opcao[]
  blocos?: Bloco[]
}

export type Plano = {
  prescritoEm: string
  nutricionista: string
  foco: string
  calorias: number
  macros: Macros
  arquivo: string
  refeicoes: Refeicao[]
}
