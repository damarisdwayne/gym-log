import type { Dieta, Refeicao } from '../types'
import { CAFE_COM_IOGURTE, cafeComBanana, cafeDaManha, JANTAR_FIM_DE_SEMANA, macros, WHEY_DUX } from './refeicoes'
import { A_VONTADE, porcao } from './trocas'

const CAFE_DE_SABADO = cafeDaManha([cafeComBanana(WHEY_DUX, 390, macros(27.8, 55.9, 7.3)), CAFE_COM_IOGURTE])

const ALMOCO_DE_SABADO: Refeicao = {
  id: 'almoco',
  nome: 'Almoço',
  atalho: 'Almoço',
  emoji: '🍝',
  opcoes: [
    {
      id: 'almoco-macarrao',
      titulo: 'Opção 1',
      calorias: 398,
      macros: macros(44.8, 24.5, 14.1),
      alimentos: [
        {
          ...porcao('Macarrão ao sugo', '1 pegador', '120 g'),
          substituicoes: [
            porcao('Purê de batata-doce (Pronto Light)', '4 colheres de sopa', '100 g'),
            porcao('Purê de batata inglesa', '2 colheres de servir cheias', '160 g'),
            porcao('Batata-doce cozida', '2 fatias médias', '140 g'),
            porcao('Batata inglesa cozida', '5 escumadeiras cheias', '250 g'),
            porcao('Macarrão ao sugo', '1 pegador', '150 g'),
            porcao('Mandioca cozida', '1 pedaço médio', '100 g'),
            porcao('Arroz integral cozido', '6 colheres de sopa cheias', '120 g'),
          ],
        },
        {
          ...porcao(
            'Carne (alcatra, contrafilé, coxão mole, filé mignon, lagarto, patinho) com molho de tomate',
            '1,5 bife grande',
            '150 g',
          ),
          substituicoes: [
            porcao('Coxa de frango sem pele assada', '2 unidades médias', '130 g'),
            porcao('Filé de frango grelhado', '150 g'),
            porcao('Frango sem pele grelhado/assado', '2 sobrecoxas médias', '130 g'),
            porcao('Sobrecoxa de frango sem pele assada', '2 unidades médias', '120 g'),
            porcao('Carne seca cozida', '5 colheres de sopa cheias (picada)', '90 g'),
            porcao('Carne (músculo, paleta) cozida com molho de tomate', '8 pedaços', '160 g'),
            porcao('Filé de peixe grelhado/assado', '1,5 filé médio', '150 g'),
            porcao('Carne de porco cozida', '6 cubos', '150 g'),
          ],
        },
        {
          ...porcao('Abobrinha italiana refogada sem sal', '3 colheres de sopa cheias (picada)', '90 g'),
          substituicoes: [
            porcao('Quiabo', '2 colheres de sopa', '80 g'),
            porcao('Jiló', '2 colheres de sopa cheias', '90 g'),
            porcao('Quiabo cozido', '5 colheres de sopa cheias', '100 g'),
            porcao('Rabanete', A_VONTADE),
            porcao('Abóbora cabotiá cozida', '2 colheres de sopa cheias', '72 g'),
            porcao('Vagem cozida', '5 colheres de sopa cheias', '100 g'),
            porcao('Chuchu cozido', '5 colheres de sopa (picado)', '100 g'),
            porcao('Beterraba', '2 colheres de sopa cheias (ralada)', '50 g'),
          ],
        },
      ],
    },
  ],
}

const ALMOCO_DE_CHURRASCO: Refeicao = {
  id: 'almoco',
  nome: 'Almoço',
  atalho: 'Almoço',
  emoji: '🥩',
  opcoes: [
    {
      id: 'almoco-maminha',
      titulo: 'Opção 1',
      calorias: 496,
      macros: macros(87.1, 13.2, 11.7),
      alimentos: [
        {
          ...porcao(
            'Maminha assada recheada (cebola, pimentão, tomate, calabresa e pimenta-do-reino)',
            '3 fatias médias',
            '330 g',
          ),
          substituicoes: [porcao('Costela assada', '2 pedaços grandes', '120 g')],
        },
        porcao('Soda italiana de morango (Projeto Verão)', '1 porção', '223 ml'),
      ],
    },
  ],
}

export const DIETA_SAB: Dieta = {
  id: 'sab',
  titulo: 'Sábado',
  dias: [6],
  calorias: 1195,
  macros: macros(118.9, 103.7, 35.5),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-sab.pdf',
  tamanho: '52 KB',
  refeicoes: [CAFE_DE_SABADO, ALMOCO_DE_SABADO, JANTAR_FIM_DE_SEMANA],
}

export const DIETA_SAB_CHURRASCO: Dieta = {
  id: 'sab-churrasco',
  titulo: 'Sáb churrasco',
  dias: [],
  calorias: 1293,
  macros: macros(161.3, 92.3, 33.1),
  arquivo: '/fichas/nutricao/plano-alimentar-2026-10-sab-churrasco.pdf',
  tamanho: '48 KB',
  refeicoes: [CAFE_DE_SABADO, ALMOCO_DE_CHURRASCO, JANTAR_FIM_DE_SEMANA],
}
