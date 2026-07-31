import type { Curso } from './types'

const NATFLIX_2024_01 = '/fichas/natflix/2024-01'

export const CURSOS: Curso[] = [
  {
    id: 'natflix',
    nome: 'Natflix',
    descricao: 'Hipertrofia avançado reduzido',
    meses: [
      {
        id: '2024-01',
        label: 'Janeiro 2024',
        fichas: [
          {
            id: 'natflix-2024-01-guia',
            titulo: 'Guia de execução',
            descricao: 'Cada exercício com fotos e explicação série a série',
            tipo: 'guia',
            tamanho: '4,6 MB',
            arquivo: `${NATFLIX_2024_01}/treinos/hipertrofia-avancado-reduzido-guia.pdf`,
          },
          {
            id: 'natflix-2024-01-planilha',
            titulo: 'Planilha de treino',
            descricao: 'Exercício, séries, repetições e descanso',
            tipo: 'planilha',
            tamanho: '2,0 MB',
            arquivo: `${NATFLIX_2024_01}/treinos/hipertrofia-avancado-reduzido-planilha.pdf`,
          },
          {
            id: 'natflix-2024-01-cardapio-1300',
            titulo: 'Emagrecimento 1300 kcal',
            descricao: 'Planejamento alimentar completo',
            tipo: 'cardapio',
            tamanho: '1,2 MB',
            arquivo: `${NATFLIX_2024_01}/cardapios/emagrecimento-1300kcal.pdf`,
          },
          {
            id: 'natflix-2024-01-cardapio-1500',
            titulo: 'Emagrecimento 1500 kcal',
            descricao: 'Planejamento alimentar completo',
            tipo: 'cardapio',
            tamanho: '1,2 MB',
            arquivo: `${NATFLIX_2024_01}/cardapios/emagrecimento-1500kcal.pdf`,
          },
          {
            id: 'natflix-2024-01-cardapio-1800',
            titulo: 'Emagrecimento 1800 kcal',
            descricao: 'Planejamento alimentar completo',
            tipo: 'cardapio',
            tamanho: '1,2 MB',
            arquivo: `${NATFLIX_2024_01}/cardapios/emagrecimento-1800kcal.pdf`,
          },
          {
            id: 'natflix-2024-01-cardapio-2300',
            titulo: 'Hipertrofia 2300 kcal',
            descricao: 'Planejamento alimentar completo',
            tipo: 'cardapio',
            tamanho: '1,2 MB',
            arquivo: `${NATFLIX_2024_01}/cardapios/hipertrofia-2300kcal.pdf`,
          },
        ],
      },
    ],
  },
]
