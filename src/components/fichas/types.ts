export type FichaTipo = 'guia' | 'planilha' | 'cardapio' | 'lista'

export type Ficha = {
  id: string
  titulo: string
  descricao: string
  tipo: FichaTipo
  tamanho: string
  arquivo: string
}

export type MesFichas = {
  id: string
  label: string
  fichas: Ficha[]
}

export type Curso = {
  id: string
  nome: string
  descricao: string
  geral: Ficha[]
  meses: MesFichas[]
}
