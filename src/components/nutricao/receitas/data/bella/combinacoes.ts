import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

type Combinacao = Pick<ReceitaBase, 'id' | 'nome' | 'pagina' | 'macros'> & {
  itens: string[]
  saciedade: string
}

const combinacao = ({ itens, saciedade, ...base }: Combinacao): ReceitaBase => ({
  ...base,
  secao: 'combinacoes',
  preparo: ['sem-fogo'],
  ingredientes: [{ itens }],
  passos: [],
  dica: `Por que dá + saciedade? ${saciedade}.`,
})

export const COMBINACOES: ReceitaBase[] = [
  combinacao({
    id: 'pao-banana-doce-de-leite',
    nome: 'Pão integral com banana e doce de leite',
    pagina: 67,
    macros: macros(245, 8, 45, 3),
    itens: ['2 fatias de pão integral', '50 g de banana', '30 g de doce de leite'],
    saciedade: 'Fonte de fibra + fonte de fibra + doce',
  }),
  combinacao({
    id: 'pao-doce-de-leite',
    nome: 'Pão integral com doce de leite',
    pagina: 68,
    macros: macros(230, 8, 40, 4),
    itens: ['2 fatias de pão integral', '40 g de doce de leite'],
    saciedade: 'Fonte de fibra + doce',
  }),
  combinacao({
    id: 'morango-leite-condensado',
    nome: 'Morango com leite condensado',
    pagina: 69,
    macros: macros(95, 2, 18, 2),
    itens: ['100 g de morangos', '20 g de leite condensado'],
    saciedade: 'Fonte de fibra + doce',
  }),
  combinacao({
    id: 'pao-chocolate-derretido',
    nome: 'Pão integral com chocolate derretido',
    pagina: 70,
    macros: macros(309, 6, 42, 13),
    itens: ['2 fatias de pão integral', '40 g de chocolate derretido'],
    saciedade: 'Fonte de fibra + doce',
  }),
  combinacao({
    id: 'sorvete-whey-doce-de-leite',
    nome: 'Sorvete com whey e doce de leite',
    pagina: 71,
    macros: macros(394, 27, 46, 12),
    itens: ['120 g de sorvete', '30 g de whey', '20 g de doce de leite'],
    saciedade: 'Doce + fonte de proteína + doce',
  }),
  combinacao({
    id: 'sorvete-pts',
    nome: 'Sorvete com proteína de soja crua',
    pagina: 72,
    macros: macros(262, 12, 34, 9),
    itens: ['120 g de sorvete', '20 g de proteína texturizada de soja crua'],
    saciedade: 'Doce + fonte de proteína e fibras',
  }),
  combinacao({
    id: 'acai-ninho',
    nome: 'Açaí com leite Ninho',
    pagina: 73,
    macros: macros(223, 5, 31, 8),
    itens: ['120 g de açaí', '20 g de leite Ninho'],
    saciedade: 'Doce (se for com açúcar) + fonte de gordura e proteína',
  }),
  combinacao({
    id: 'acai-leite-condensado-pts',
    nome: 'Açaí com leite condensado e proteína de soja',
    pagina: 74,
    macros: macros(345, 11, 39, 4),
    itens: [
      '120 g de açaí',
      '20 g de leite condensado',
      '20 g de proteína texturizada de soja crua',
    ],
    saciedade: 'Doce (se for com açúcar) + doce + fonte de proteína e fibras',
  }),
  combinacao({
    id: 'brigadeiro-cacau',
    nome: 'Brigadeiro de cacau em pó',
    pagina: 75,
    macros: macros(348, 10, 56, 9),
    itens: ['80 g de leite condensado', '20 g de cacau em pó'],
    saciedade: 'Doce + fonte de fibras',
  }),
  combinacao({
    id: 'brigadeiro-ninho',
    nome: 'Brigadeiro de leite Ninho',
    pagina: 76,
    macros: macros(359, 11, 52, 12),
    itens: ['80 g de leite condensado', '20 g de leite Ninho'],
    saciedade: 'Doce + fonte de gordura e proteína',
  }),
]
