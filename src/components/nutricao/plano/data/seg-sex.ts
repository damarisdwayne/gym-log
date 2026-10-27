import type { Alimento, Dieta, Macros, Opcao, Refeicao } from '../types'
import {
  ALMOCO,
  CAFE_COM_IOGURTE,
  cafeComBanana,
  cafeDaManha,
  hamburguer,
  jantar,
  macros,
  RAP_10_COM_FRANGO,
  WHEY_GROWTH,
} from './refeicoes'
import { A_VONTADE, porcao, TROCAS_CASTANHA } from './trocas'

const JEJUM: Refeicao = {
  id: 'jejum',
  nome: 'Jejum',
  atalho: 'Jejum',
  emoji: '💧',
  opcoes: [
    {
      id: 'jejum-1',
      titulo: 'Opção 1',
      calorias: 49,
      macros: macros(1, 12, 0),
      alimentos: [
        porcao('Ameixa preta sem caroço (Celmar)', '3 unidades médias', '30 g'),
        porcao('Água', '1 copo americano duplo', '240 ml'),
      ],
    },
  ],
}

const REQUEIJAO = porcao('Requeijão light (Tirolez)', '1 colher de sopa', '30 g')
const MUCARELA = porcao('Queijo muçarela', '1 fatia', '20 g')
const OVO = porcao('Ovo de galinha', '1 unidade', '50 g')
const TOMATE = porcao('Tomate', A_VONTADE)

const CASTANHA: Alimento = {
  ...porcao('Castanha de caju', '5 unidades', '12,5 g'),
  substituicoes: TROCAS_CASTANHA,
}
const CASTANHA_CALORIAS = 73
const CASTANHA_MACROS = macros(2.3, 3.8, 5.5)

const lanche = (
  numero: number,
  nome: string,
  calorias: number,
  valores: Macros,
  alimentos: Alimento[],
): Opcao => ({
  id: `lanche-${numero}`,
  titulo: `Opção ${numero}`,
  nome,
  calorias: calorias + CASTANHA_CALORIAS,
  macros: macros(
    valores.proteinas + CASTANHA_MACROS.proteinas,
    valores.carboidratos + CASTANHA_MACROS.carboidratos,
    valores.lipideos + CASTANHA_MACROS.lipideos,
  ),
  alimentos: [...alimentos, CASTANHA],
})

const LANCHE_DA_TARDE: Refeicao = {
  id: 'lanche-da-tarde',
  nome: 'Lanche da tarde',
  atalho: 'Lanche',
  emoji: '🥪',
  opcoes: [
    lanche(1, 'Toast de ovos', 266, macros(15.6, 19.9, 14.3), [
      porcao('Pão de forma integral', '1 fatia', '25 g'),
      porcao('Ovo de galinha cozido', '1 unidade média', '50 g'),
      TOMATE,
      porcao('Cebola roxa', '2 unidades pequenas', '60 g'),
      REQUEIJAO,
      MUCARELA,
    ]),
    lanche(2, 'Crepioca recheada com frango', 278, macros(21.4, 22.9, 11.1), [
      porcao('Goma de tapioca', '30 g'),
      porcao('Frango desfiado', '2 colheres de sopa cheias', '40 g'),
      OVO,
      REQUEIJAO,
    ]),
    lanche(3, 'Torta cremosa de frango', 341, macros(34.6, 23, 12.6), [
      porcao('Frango desfiado', '4 colheres de sopa cheias', '80 g'),
      OVO,
      REQUEIJAO,
      porcao('Goma de tapioca', '1 colher de sopa', '20 g'),
      porcao('Fermento químico em pó', '1 colher de café', '3 g'),
      TOMATE,
      porcao('Milho verde', '1 colher de sopa cheia', '24 g'),
    ]),
    lanche(4, 'Pizza de Rap 10 com frango', 291, macros(21.5, 21.1, 13.3), [
      porcao('Rap 10 tradicional', '1 unidade', '40 g'),
      porcao('Frango desfiado', '2 colheres de sopa cheias', '40 g'),
      MUCARELA,
      REQUEIJAO,
      TOMATE,
    ]),
  ],
}

export const DIETA_SEG_SEX: Dieta = {
  id: 'seg-sex',
  titulo: 'Seg–Sex',
  dias: [1, 2, 3, 4, 5],
  calorias: 1664,
  macros: macros(141.7, 164.7, 51),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-seg-sex.pdf',
  tamanho: '60 KB',
  refeicoes: [
    JEJUM,
    cafeDaManha([cafeComBanana(WHEY_GROWTH, 395, macros(30.8, 54.4, 7.2)), CAFE_COM_IOGURTE]),
    ALMOCO,
    LANCHE_DA_TARDE,
    jantar([hamburguer(80, 365, macros(39.2, 23.2, 12.7)), RAP_10_COM_FRANGO]),
  ],
}
