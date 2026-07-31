export type Exame = {
  nome: string
  abbr?: string
  descricao: string
}

export type GrupoExames = {
  categoria: string
  exames: Exame[]
}

export type LinhaResultado = {
  exame: string
  valor: string
  referencia: string
}

export type GrupoResultado = {
  categoria: string
  linhas: LinhaResultado[]
}

export type Coleta = {
  id: string
  titulo: string
  data: string
  laboratorio: string
  arquivo?: string
  grupos: GrupoResultado[]
  nota?: string
}


export type Dica = {
  id: string
  titulo: string
  paragrafos: string[]
  lista?: { titulo: string; itens: string[] }
  aviso?: string
  link: { label: string; url: string }
}
