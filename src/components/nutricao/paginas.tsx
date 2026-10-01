import type { ReactNode } from 'react'
import { CaloriasForm } from './calculadora'
import { ComposicaoPagina } from './composicao-pagina'
import { GorduraPagina } from './gordura-pagina'
import { PLANO, PlanoAlimentar } from './plano'
import { RECEITAS, Receitas } from './receitas'

export type PaginaNutricao =
  | 'plano'
  | 'receitas'
  | 'gordura'
  | 'calorias'
  | 'composicao'

type ContextoPagina = {
  abrir: (pagina: PaginaNutricao) => void
}

type DefinicaoPagina = {
  id: PaginaNutricao
  emoji: string
  titulo: string
  descricao: string
  render: (contexto: ContextoPagina) => ReactNode
}

export const PAGINAS: DefinicaoPagina[] = [
  {
    id: 'plano',
    emoji: '🍽️',
    titulo: 'Meu plano alimentar',
    descricao: `Refeições e trocas · ${PLANO.calorias} kcal`,
    render: () => <PlanoAlimentar />,
  },
  {
    id: 'receitas',
    emoji: '👩‍🍳',
    titulo: 'Receitas fit',
    descricao: `${RECEITAS.length} receitas do ebook da Natflix, com macros`,
    render: () => <Receitas />,
  },
  {
    id: 'gordura',
    emoji: '🧮',
    titulo: 'Calculadora de % de gordura',
    descricao: 'Pelas medidas com fita métrica',
    render: ({ abrir }) => (
      <GorduraPagina onUsarResultado={() => abrir('calorias')} />
    ),
  },
  {
    id: 'calorias',
    emoji: '🔥',
    titulo: 'Calculadora de calorias e macros',
    descricao: 'Quanto comer de acordo com o objetivo',
    render: () => <CaloriasForm />,
  },
  {
    id: 'composicao',
    emoji: '📏',
    titulo: 'Composição corporal',
    descricao: 'Minhas medidas mês a mês e as avaliações da nutri',
    render: () => <ComposicaoPagina />,
  },
]
