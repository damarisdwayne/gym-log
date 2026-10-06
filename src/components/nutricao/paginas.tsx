import { lazy, Suspense, type ReactNode } from 'react'
import { CaloriasForm } from './calculadora'
import { ComposicaoPagina } from './composicao-pagina'
import { GorduraPagina } from './gordura-pagina'
import { PLANO, PlanoAlimentar } from './plano'
import { EBOOKS, RECEITAS, Receitas } from './receitas'
import { RECEITAS_SABOROSAS, ReceitasSaborosas } from './saborosas'

const ReceitasRS7 = lazy(() => import('./rs7'))

const Carregando = () => (
  <p className="px-1 py-6 text-center text-sm text-muted-foreground">Carregando receitas…</p>
)

export type PaginaNutricao =
  | 'plano'
  | 'receitas'
  | 'receitas-dia'
  | 'saborosas'
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
    descricao: `${RECEITAS.length} receitas dos ${Object.keys(EBOOKS).length} ebooks e minhas, com macros`,
    render: () => <Receitas />,
  },
  {
    id: 'receitas-dia',
    emoji: '🕗',
    titulo: 'Receitas do dia a dia',
    descricao: '365 receitas por refeição, prontas em até 7 min',
    render: () => (
      <Suspense fallback={<Carregando />}>
        <ReceitasRS7 />
      </Suspense>
    ),
  },
  {
    id: 'saborosas',
    emoji: '😋',
    titulo: 'Receitas saborosas',
    descricao: `${RECEITAS_SABOROSAS.length} ${RECEITAS_SABOROSAS.length === 1 ? 'receita' : 'receitas'} sem compromisso com a dieta`,
    render: () => <ReceitasSaborosas />,
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
