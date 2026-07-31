import {
  cardapio,
  guia,
  listaCompras,
  listaSubstituicao,
  planilha,
  planilhaReduzida,
} from './builders'
import type { Curso } from './types'

export const CURSOS: Curso[] = [
  {
    id: 'natflix',
    nome: 'Natflix',
    descricao: 'Hipertrofia avançado',
    geral: [
      listaSubstituicao('emagrecimento', '48 KB'),
      listaSubstituicao('hipertrofia', '56 KB'),
    ],
    meses: [
      {
        id: '2024-01',
        label: 'Janeiro 2024',
        fichas: [
          guia('2024-01', '4,6 MB'),
          planilhaReduzida('2024-01', '2,0 MB'),
          cardapio('2024-01', 'emagrecimento', 1300, '1,2 MB'),
          cardapio('2024-01', 'emagrecimento', 1500, '1,2 MB'),
          cardapio('2024-01', 'emagrecimento', 1800, '1,2 MB'),
          cardapio('2024-01', 'hipertrofia', 2300, '1,2 MB'),
        ],
      },
      {
        id: '2024-02',
        label: 'Fevereiro 2024',
        fichas: [
          guia('2024-02', '5,0 MB'),
          planilha('2024-02', '2,0 MB'),
          planilhaReduzida('2024-02', '1,9 MB'),
          cardapio('2024-02', 'emagrecimento', 1300, '1,2 MB'),
          cardapio('2024-02', 'emagrecimento', 1500, '1,2 MB'),
          cardapio('2024-02', 'emagrecimento', 1800, '1,2 MB'),
          cardapio('2024-02', 'hipertrofia', 2300, '1,2 MB'),
          listaCompras('2024-02', 'emagrecimento', '36 KB'),
          listaCompras('2024-02', 'hipertrofia', '36 KB'),
        ],
      },
    ],
  },
]
