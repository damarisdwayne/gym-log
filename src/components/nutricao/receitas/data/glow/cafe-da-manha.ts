import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const CAFE_DA_MANHA: ReceitaBase[] = [
  {
    id: 'classico-diario-whey',
    nome: 'Meu clássico diário',
    secao: 'whey',
    pagina: 9,
    macros: macros(507, 34, 70, 12),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '20 g de aveia sem glúten (flocos finos)',
          '80 g de banana prata (opcional)',
          '80 g de morango picado',
          '18 g de biscoito de arroz',
          '10 g de mel',
          '30 g de whey protein isolado sabor chocolate (pode ser o concentrado)',
          '20 g de castanha de caju',
        ],
      },
    ],
    passos: [
      'Em uma tigela, misture a aveia com um pouquinho de água quente (ou leite vegetal, se preferir).',
      'Acrescente o whey e mexa até formar uma massa cremosa.',
      'Coloque por cima as frutas picadas, o mel e finalize com as castanhas e os biscoitos de arroz triturados para dar crocância.',
    ],
  },
  {
    id: 'cuscuz-ovos-mussarela',
    nome: 'Energia e satisfação (cuscuz com ovos)',
    secao: 'lanches',
    pagina: 11,
    macros: macros(323, 21, 22, 16),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 ovos grandes',
          '80 g de cuscuz pronto (flocão de milho, sem sal nem manteiga)',
          '25 g de mussarela Piracanjuba',
        ],
      },
    ],
    passos: [
      'Prepare o cuscuz com água, sem sal e sem manteiga.',
      'Em uma frigideira antiaderente, cozinhe os ovos em fogo baixo, sem gordura, com sal a gosto.',
      'Monte o prato com o cuscuz e os ovos.',
      'Adicione a fatia de mussarela por cima: o calor vai derreter e deixar cremoso.',
    ],
    dica: 'Você pode preparar o cuscuz na noite anterior e deixar na geladeira. Na manhã seguinte, basta aquecer por 30 segundos e adicionar os ovos frescos — prático e rápido para dias corridos!',
  },
  {
    id: 'pao-ovo-queijo-derretido',
    nome: 'Pão com ovo e queijo derretido',
    secao: 'lanches',
    pagina: 13,
    macros: macros(367, 23, 26, 18),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '2 fatias de pão de forma Pullman tradicional ou integral (pode ser outra marca)',
          '2 ovos grandes',
          '1 fatia de mussarela (25 g) dividida entre as duas fatias de pão',
        ],
      },
    ],
    passos: [
      'Torre levemente as fatias de pão (na frigideira ou na torradeira).',
      'Enquanto isso, aqueça uma frigideira antiaderente e prepare os ovos, com a gema levemente mole para dar cremosidade (ou dura, se preferir).',
      'Coloque um ovo sobre cada fatia de pão.',
      'Divida a fatia de mussarela ao meio e coloque por cima dos ovos ainda quentes, para derreter.',
    ],
  },
]
