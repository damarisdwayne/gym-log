import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

const ARROZ_TOMATE_AZEITE = [
  '150 g de arroz branco cozido',
  '40 g de tomate picado',
  '2 a 4 g de azeite de oliva extra virgem (1 cc)',
]

const COZINHAR_ARROZ = 'Cozinhe o arroz com o mínimo possível de óleo e sal.'

export const ALMOCOS: ReceitaBase[] = [
  {
    id: 'frango-arroz-classico',
    nome: 'Clássico leve e equilibrado (frango com arroz)',
    secao: 'frango',
    pagina: 15,
    macros: macros(405, 36, 44, 8),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '100 g de peito de frango grelhado (ou selado com pouco azeite)',
          ...ARROZ_TOMATE_AZEITE,
          'Alface à vontade',
        ],
      },
    ],
    passos: [
      COZINHAR_ARROZ,
      'Grelhe o frango até dourar levemente, mantendo-o suculento.',
      'Sirva o frango com o arroz e os legumes frescos.',
      'Regue a salada com o azeite de oliva cru.',
    ],
    dica: 'Prepare o frango em porções e armazene em potinhos. Assim, você garante praticidade durante a semana e evita sair da dieta nos dias corridos.',
  },
  {
    id: 'arroz-patinho-magro',
    nome: 'Arroz com patinho magro',
    secao: 'carne',
    pagina: 17,
    macros: macros(369, 26, 43, 9),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '100 g de patinho moído magro',
          ...ARROZ_TOMATE_AZEITE,
          'Temperos naturais a gosto (alho, cebola, salsinha, cúrcuma, limão)',
        ],
      },
    ],
    passos: [
      COZINHAR_ARROZ,
      'Em uma frigideira antiaderente, refogue o patinho com os temperos naturais.',
      'Mantenha-o suculento, apenas selando levemente.',
      'Sirva o arroz com o patinho e finalize com o tomate picado por cima.',
      'Regue o prato com o azeite de oliva cru.',
    ],
    dica: 'Você pode preparar o patinho em maior quantidade e guardar em pequenas porções. Assim, tem sempre uma opção saudável pronta pra aquecer e servir em minutos.',
  },
  {
    id: 'tilapia-arroz',
    nome: 'Tilápia com arroz',
    secao: 'peixe',
    pagina: 19,
    macros: macros(351, 28, 43, 6),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '120 g de filé de tilápia',
          ...ARROZ_TOMATE_AZEITE,
          'Suco de limão e temperos naturais a gosto (alho, cebola, cúrcuma, orégano, salsinha)',
        ],
      },
    ],
    passos: [
      COZINHAR_ARROZ,
      'Em uma frigideira antiaderente, sele a tilápia com um fio de azeite até dourar dos dois lados.',
      'Sirva com o arroz e finalize com o tomate picado e o azeite cru por cima.',
      'Finalize com um toque de limão para realçar o sabor.',
    ],
  },
]
