import type { Alimento, Macros, Opcao, Refeicao } from '../types'
import {
  A_VONTADE,
  porcao,
  TROCAS_ABOBORA,
  TROCAS_ALFACE,
  TROCAS_ARROZ,
  TROCAS_BANANA,
  TROCAS_FEIJAO,
  TROCAS_FRANGO,
  TROCAS_LEITE,
  TROCAS_MUCARELA,
  TROCAS_PAO,
  TROCAS_UVA_RUBI,
  trocasAveia,
} from './trocas'

export const macros = (proteinas: number, carboidratos: number, lipideos: number): Macros => ({
  proteinas,
  carboidratos,
  lipideos,
})

export const WHEY_GROWTH: Alimento = porcao('Whey protein (Growth)', '1 dosador', '30 g')
export const WHEY_DUX: Alimento = porcao('Whey protein concentrado baunilha (Dux)', '1 dosador', '30 g')

export const cafeComBanana = (whey: Alimento, calorias: number, valores: Macros): Opcao => ({
  id: 'cafe-banana',
  titulo: 'Opção 1',
  calorias,
  macros: valores,
  alimentos: [
    whey,
    { ...porcao('Aveia em flocos finos', '2 colheres de sopa cheias', '30 g'), substituicoes: trocasAveia(2) },
    { ...porcao('Banana', '1 unidade', '94 g'), substituicoes: TROCAS_BANANA },
    { ...porcao('Leite de vaca integral UHT', '80 ml'), substituicoes: TROCAS_LEITE },
  ],
})

export const CAFE_COM_IOGURTE: Opcao = {
  id: 'cafe-iogurte',
  titulo: 'Opção 2',
  calorias: 314,
  macros: macros(27.4, 40, 5.5),
  alimentos: [
    WHEY_DUX,
    porcao('Iogurte grego Pense Zero sem lactose (Batavo)', '1 unidade', '100 g'),
    { ...porcao('Aveia em flocos finos', '1 colher de sopa cheia', '15 g'), substituicoes: trocasAveia(1) },
    { ...porcao('Uva Rubi', '5 unidades médias', '40 g'), substituicoes: TROCAS_UVA_RUBI },
    porcao('Geleia de morango (Queensberry)', '1 colher de sopa', '20 g'),
  ],
}

export const cafeDaManha = (opcoes: Opcao[]): Refeicao => ({
  id: 'cafe-da-manha',
  nome: 'Café da manhã',
  atalho: 'Café',
  emoji: '🥣',
  opcoes,
})

export const ALMOCO: Refeicao = {
  id: 'almoco',
  nome: 'Almoço',
  atalho: 'Almoço',
  emoji: '🍛',
  opcoes: [
    {
      id: 'almoco-1',
      titulo: 'Opção 1',
      calorias: 517,
      macros: macros(52.8, 51.5, 11.4),
      alimentos: [
        { ...porcao('Arroz branco cozido', '6 colheres de sopa cheias', '120 g'), substituicoes: TROCAS_ARROZ },
        { ...porcao('Feijão carioca cozido', '1 concha média', '100 g'), substituicoes: TROCAS_FEIJAO },
        { ...porcao('Filé de frango grelhado', '1,5 filé grande', '150 g'), substituicoes: TROCAS_FRANGO },
        {
          ...porcao('Abóbora moranga cozida', '3 colheres de sopa cheias (picada)', '108 g'),
          substituicoes: TROCAS_ABOBORA,
        },
        { ...porcao('Alface', A_VONTADE), substituicoes: TROCAS_ALFACE },
        porcao('Tomate', A_VONTADE),
      ],
    },
  ],
}

export const hamburguer = (patinho: number, calorias: number, valores: Macros): Opcao => ({
  id: 'jantar-hamburguer',
  titulo: 'Hambúrguer',
  calorias,
  macros: valores,
  alimentos: [
    { ...porcao('Pão de hambúrguer (Bauducco)', '1 unidade', '50 g'), substituicoes: TROCAS_PAO },
    porcao('Patinho', 'Grelhado', `${patinho} g`),
    { ...porcao('Queijo muçarela', '1 fatia', '20 g'), substituicoes: TROCAS_MUCARELA },
    porcao('Alface', A_VONTADE),
    porcao('Tomate', '1 colher de sopa cheia', '10 g'),
    porcao('Cebola roxa', A_VONTADE),
  ],
})

export const PIZZA_DE_FRANGO: Opcao = {
  id: 'jantar-pizza',
  titulo: 'Pizza de frango',
  calorias: 780,
  macros: macros(35.1, 104.2, 25.7),
  alimentos: [porcao('Pizza de frango com requeijão', '3 fatias médias', '270 g')],
}

export const jantar = (opcoes: Opcao[]): Refeicao => ({
  id: 'jantar',
  nome: 'Jantar',
  atalho: 'Jantar',
  emoji: '🍔',
  opcoes,
})
