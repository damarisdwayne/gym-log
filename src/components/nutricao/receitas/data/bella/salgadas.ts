import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

const VINAGRETE = {
  titulo: 'Vinagrete',
  itens: [
    '100 g de tomate',
    '100 g de cebola',
    '100 g de pimentão',
    '5 ml de azeite',
    'Vinagre e sal a gosto',
  ],
}

export const SALGADAS: ReceitaBase[] = [
  {
    id: 'frango-recheado-legumes',
    nome: 'Frango recheado com legumes',
    secao: 'frango',
    pagina: 6,
    macros: macros(186, 33.5, 5, 2.5),
    preparo: ['airfryer', 'forno'],
    ingredientes: [
      { itens: ['1 peito de frango (100 g)', '50 g de legumes variados picados'] },
    ],
    passos: [
      'Tempere o frango com sal, pimenta do reino e curry.',
      'Corte em tiras sem soltar completamente, deixando espaço para rechear.',
      'Recheie as aberturas com os legumes (vagem, milho, ervilha e cenoura congelados funcionam bem).',
      'Airfryer ou forno a 200° por cerca de 15 min, até tostar.',
    ],
  },
  {
    id: 'salada-molho-abobora',
    nome: 'Salada com “molho” de abóbora',
    secao: 'frango',
    pagina: 7,
    macros: macros(230, 34, 17, 2.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          'Repolho e alface a gosto',
          '100 g de abóbora japonesa cozida',
          '100 g de tomate cereja',
          '100 g de frango grelhado',
        ],
      },
    ],
    passos: [
      'Lave o repolho e a alface e separe num pote.',
      'Cozinhe a abóbora sem casca e amasse até virar purê.',
      'Corte os tomates e o frango grelhado em cubinhos.',
      'Misture tudo e sirva.',
    ],
  },
  {
    id: 'batata-rustica-queijo',
    nome: 'Batata rústica com queijo',
    secao: 'lanches',
    pagina: 8,
    macros: macros(224, 10.8, 30, 7.2),
    preparo: ['airfryer'],
    ingredientes: [{ itens: ['200 g de batata inglesa crua', '30 g de queijo muçarela'] }],
    passos: [
      'Corte a batata em meia-lua e tempere com sal e alecrim.',
      'Airfryer a 200° por cerca de 15 min.',
      'Faltando 3 min, cubra com a muçarela picada e deixe gratinar.',
    ],
  },
  {
    id: 'pao-aveia-microondas',
    nome: 'Pão de aveia de micro-ondas',
    secao: 'lanches',
    pagina: 9,
    macros: macros(257, 13, 22, 13),
    preparo: ['microondas', 'fogao'],
    ingredientes: [
      {
        itens: [
          '30 g de farelo de aveia',
          '10 g de chia',
          '10 g de requeijão light',
          '1 ovo',
        ],
      },
    ],
    passos: [
      'Misture tudo com sal e espalhe num prato, bem aberto como uma panqueca.',
      'Micro-ondas por 2 min.',
      'Doure numa frigideira.',
    ],
  },
  {
    id: 'pizza-fit-frigideira',
    nome: 'Pizza fit de frigideira',
    secao: 'lanches',
    pagina: 10,
    macros: macros(284, 20.5, 15.5, 15.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 ovo',
          '20 g de farelo de aveia',
          '40 g de molho de tomate',
          '20 g de queijo muçarela',
          '15 g de requeijão light',
          '10 g de presunto ou peito de peru',
        ],
      },
    ],
    passos: [
      'Misture o ovo, a aveia e o sal e leve à frigideira untada em fogo baixo.',
      'Quando tostar, vire e cubra com molho, requeijão, queijo e presunto.',
      'Tampe e deixe o queijo gratinar.',
    ],
  },
  {
    id: 'escondidinho-frango',
    nome: 'Escondidinho fit de frango',
    secao: 'frango',
    pagina: 11,
    macros: macros(491, 52, 37.5, 13.5),
    preparo: ['airfryer', 'forno'],
    ingredientes: [
      {
        itens: [
          '300 g de batata inglesa cozida',
          '20 ml de leite desnatado',
          '40 g de queijo muçarela',
          '120 g de frango desfiado cozido',
        ],
      },
    ],
    passos: [
      'Amasse a batata com o leite e o sal até virar purê.',
      'Num refratário, faça uma camada de purê e cubra com o frango temperado.',
      'Finalize com a muçarela e leve à airfryer a 200° por cerca de 8 min, até gratinar.',
    ],
  },
  {
    id: 'hamburguer-caseiro-fit',
    nome: 'Hambúrguer caseiro fit',
    secao: 'carne',
    pagina: 12,
    macros: macros(363, 31, 27, 14),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 pão de hambúrguer (50 g)',
          '80 g de patinho moído cru',
          '30 g de queijo muçarela',
          '15 g de creme de ricota light ou requeijão light',
          'Alface, tomate e cebola a gosto',
        ],
      },
    ],
    passos: [
      'Grelhe a carne numa frigideira com o mínimo de azeite.',
      'Quase no ponto, coloque a muçarela por cima e cubra com um prato para derreter.',
      'Monte o hambúrguer com os demais ingredientes.',
    ],
    dica: 'Combina com a batata rústica e um refrigerante zero.',
  },
  {
    id: 'pao-pizza',
    nome: 'Pão pizza',
    secao: 'lanches',
    pagina: 13,
    macros: macros(272, 25, 31, 16),
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '2 pães de forma (integral ou normal)',
          '30 g de molho de tomate',
          '50 g de ricota fresca',
          '30 g de creme de ricota light',
          '30 g de queijo muçarela',
          'Orégano a gosto',
        ],
      },
    ],
    passos: [
      'Em cada pão, 15 g de molho, 25 g de ricota, 15 g de creme de ricota e 15 g de muçarela.',
      'Airfryer a 200° por cerca de 8 min. Finalize com orégano.',
    ],
  },
  {
    id: 'gratinado-brocolis',
    nome: 'Gratinado de brócolis',
    secao: 'legumes',
    pagina: 14,
    macros: macros(575, 45, 12, 41),
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        itens: [
          '1 maço de brócolis',
          '2 ovos',
          '40 g de creme de ricota light',
          '100 g de queijo muçarela',
          'Sal, pimenta do reino e orégano',
        ],
      },
    ],
    passos: [
      'Cozinhe o brócolis e separe em floretes menores.',
      'Misture os ovos, o creme de ricota, os temperos e 50 g de muçarela.',
      'Junte ao brócolis e cubra com os outros 50 g de queijo.',
      'Forno preaquecido a 180° até gratinar.',
    ],
  },
  {
    id: 'estrogonofe-fit',
    nome: 'Estrogonofe fit',
    secao: 'frango',
    pagina: 15,
    macros: macros(223, 35, 4, 6),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '100 g de peito de frango picado cru',
          '30 g de creme de ricota light',
          '30 g de molho de tomate',
          'Temperos a gosto',
        ],
      },
    ],
    passos: [
      'Doure o alho e junte o frango e os temperos.',
      'Deixe cozinhar na própria água que o frango solta.',
      'Quando secar, junte um pouco de água e o creme de ricota.',
      'Finalize com o molho de tomate.',
    ],
  },
  {
    id: 'empadao-frango-fit',
    nome: 'Empadão de frango fit',
    secao: 'frango',
    pagina: 16,
    macros: macros(805, 47, 88, 28),
    rende: '3 porções',
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '250 g de farinha de arroz (ou de aveia, ou trigo integral)',
          '50 g de manteiga sem sal',
          'Água e sal',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '300 g de frango cozido desfiado',
          '1 lata de milho',
          '1 pacote de molho de tomate',
          '1 pote de 200 g de requeijão light',
        ],
      },
    ],
    passos: [
      'Misture a farinha com a manteiga derretida e vá juntando água até dar ponto de massa. Acerte o sal.',
      'Cozinhe o frango na pressão com cebola, alho e sal, desfie e junte o milho, o molho e o requeijão.',
      'Forre a forma com metade da massa, coloque o recheio e cubra com o resto.',
      'Forno preaquecido a 180° até assar a massa.',
    ],
  },
  {
    id: 'salada-molho-requeijao',
    nome: 'Salada com molho de requeijão',
    secao: 'frango',
    pagina: 17,
    macros: macros(341, 46, 14, 11),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          'Alface a gosto',
          '100 g de frango grelhado',
          '100 g de ricota fresca',
          '100 g de tomate',
          '30 g de creme de ricota light',
        ],
      },
    ],
    passos: [
      'Lave a alface e coloque numa tigela.',
      'Junte o frango em cubos, a ricota e os tomates picados.',
      'Misture tudo com o creme de ricota.',
    ],
  },
  {
    id: 'pao-queijo-frigideira',
    nome: 'Pão de queijo de frigideira fit',
    secao: 'lanches',
    pagina: 18,
    macros: macros(308, 15, 30, 15),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 ovo',
          '40 g de tapioca',
          '15 g de creme de ricota light',
          '30 g de queijo muçarela',
        ],
      },
    ],
    passos: [
      'Misture o ovo, a tapioca e o creme de ricota.',
      'Despeje na frigideira untada em fogo baixo.',
      'Vire, cubra com a muçarela, tampe até derreter e dobre.',
    ],
  },
  {
    id: 'pizza-fit-airfryer',
    nome: 'Pizza fit na airfryer',
    secao: 'atum',
    pagina: 19,
    macros: macros(452, 44.7, 50, 7),
    preparo: ['airfryer', 'forno'],
    ingredientes: [
      {
        itens: [
          '2 pães sírios integrais (ou normais)',
          '120 g de atum sólido ao natural ou frango desfiado',
          '35 g de requeijão light ou creme de ricota',
          '100 g de vinagrete',
          'Pimenta do reino e orégano a gosto',
        ],
      },
      VINAGRETE,
    ],
    passos: [
      'Vinagrete: pique o tomate, a cebola e o pimentão em cubinhos e tempere com azeite, vinagre e sal.',
      'Misture o atum (ou frango) com o requeijão e o vinagrete.',
      'Espalhe sobre os pães sírios.',
      'Airfryer ou forno a 200° por cerca de 8 min, até torrar. Tempere a gosto.',
    ],
    dica: 'O vinagrete tem calorias insignificantes, não precisa contar.',
  },
  {
    id: 'mexido-legumes-atum',
    nome: 'Mexido de legumes com atum',
    secao: 'atum',
    pagina: 21,
    macros: macros(272, 22, 36, 6),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '150 g de abóbora japonesa cozida',
          '60 g de atum sólido ao óleo',
          '50 g de vagem',
          '50 g de cenoura cozida',
          '50 g de milho',
          '50 g de ervilha',
        ],
      },
    ],
    passos: [
      'Amasse a abóbora sem casca até virar purê.',
      'Junte o atum, os legumes e o sal e misture bem.',
    ],
    dica: 'Dá pra trocar os legumes por um mix congelado.',
  },
  {
    id: 'pizza-proteica-atum',
    nome: 'Pizza proteica de atum',
    secao: 'atum',
    pagina: 22,
    macros: macros(443, 42, 49, 8),
    preparo: ['airfryer', 'forno'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '2 pães sírios integrais ou normais',
          '1 lata de atum sólido ao natural',
          '35 g de requeijão light ou creme de ricota light',
          'Vinagrete ou legumes',
        ],
      },
      VINAGRETE,
    ],
    passos: [
      'Misture o atum com o requeijão e o vinagrete até formar uma pasta.',
      'Divida a pasta entre os dois pães sírios.',
      'Airfryer ou forno até o pão ficar bem crocante.',
    ],
  },
  {
    id: 'salada-batata-doce',
    nome: 'Salada de batata doce',
    secao: 'frango',
    pagina: 23,
    macros: macros(402, 33, 37, 13),
    preparo: ['fogao'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '140 g de batata doce cozida',
          '100 g de tomate cereja ou comum picado',
          '100 g de frango grelhado em cubinhos ou tiras',
          '10 ml de azeite',
          '10 ml de vinagre balsâmico',
          'Alface e folhas à vontade',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Cozinhe a batata, grelhe o frango e lave as folhas e os tomates.',
      'Misture alface, tomate, batata e frango num pote.',
      'Bata o azeite com o balsâmico, despeje por cima e misture.',
    ],
  },
  {
    id: 'macaroca-fit',
    nome: 'Maçaroca fit',
    secao: 'lanches',
    pagina: 24,
    macros: macros(370, 24, 53, 6),
    preparo: ['fogao'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '250 g de batata inglesa cozida',
          '80 g de arroz branco cozido',
          '1 ovo inteiro',
          '3 claras',
          'Sal e limão a gosto',
        ],
      },
    ],
    passos: [
      'Amasse a batata e misture com o arroz.',
      'Faça um ovo mexido cremoso: primeiro as claras, a gema por último.',
      'Junte o ovo à batata com arroz e tempere com limão e sal.',
    ],
  },
  {
    id: 'torta-frango-frigideira',
    nome: 'Torta de frango de frigideira',
    secao: 'frango',
    pagina: 25,
    macros: macros(400, 37, 19, 19),
    preparo: ['fogao'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 ovo inteiro',
          '2 claras',
          '30 g de farinha de aveia',
          '30 g de requeijão light ou creme de ricota light',
          '5 ml de azeite',
          'Sal e temperos a gosto',
          '5 g de fermento em pó',
          '50 g de frango cozido desfiado',
        ],
      },
    ],
    passos: [
      'Massa: ovo, claras, aveia, 10 g de requeijão, azeite, fermento e temperos.',
      'Na frigideira untada em fogo mínimo, despeje metade da massa.',
      'Recheie com o frango misturado aos 20 g de requeijão restantes e cubra com o resto da massa.',
      'Tampe até firmar, vire e deixe mais 1 min.',
    ],
  },
  {
    id: 'coxinha-fit-proteica',
    nome: 'Coxinha fit proteica',
    secao: 'frango',
    pagina: 26,
    macros: macros(236, 16, 36, 3),
    rende: '5 coxinhas',
    preparo: ['airfryer', 'forno'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '550 g de batata inglesa cozida',
          '90 g de farinha de aveia',
          '200 g de frango desfiado cozido',
          '75 g de requeijão light',
        ],
      },
    ],
    passos: [
      'Misture a batata com a aveia e os temperos até virar uma massa homogênea.',
      'Divida em 5, abra cada porção, recheie com frango e requeijão e modele.',
      'Opcional: passe no ovo e na farinha para ficar mais crocante.',
      'Airfryer ou forno até dourar.',
    ],
  },
  {
    id: 'cone-pizza-fit',
    nome: 'Cone de pizza fit',
    secao: 'frango',
    pagina: 27,
    macros: macros(349, 29, 21, 16),
    rende: '2 cones',
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 wrap Rap10 integral ou normal',
          '30 g de requeijão light',
          '50 g de frango desfiado cozido',
          '30 g de queijo muçarela',
        ],
      },
    ],
    passos: [
      'Corte o wrap ao meio e passe requeijão em toda a superfície.',
      'Enrole em formato de cone — o requeijão faz grudar.',
      'Recheie com o frango e cubra com a muçarela.',
    ],
    dica: 'Macros dos 2 cones. O recheio é só uma ideia, use o que preferir.',
  },
  {
    id: 'pastel-aveia',
    nome: 'Pastel de aveia',
    secao: 'frango',
    pagina: 28,
    macros: macros(711, 60, 43, 32),
    rende: '≈ 6 pastéis',
    preparo: ['airfryer', 'forno'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 pote de iogurte desnatado',
          '90 g de farinha de aveia',
          '10 g de azeite',
          '100 g de frango desfiado',
          '60 g de queijo muçarela',
        ],
      },
    ],
    passos: [
      'Misture o iogurte, a farinha, o azeite, o sal e os temperos até virar uma massa de pizza.',
      'Abra e corte em círculos (uma tampa ajuda).',
      'Recheie com frango e queijo, feche com um garfo e pincele gema, se quiser.',
      'Airfryer ou forno a 200° por 20 a 30 min.',
    ],
    dica: 'Macros da receita inteira.',
  },
  {
    id: 'pastel-rap10',
    nome: 'Pastel com Rap10',
    secao: 'lanches',
    pagina: 29,
    macros: macros(214, 10, 20, 11),
    preparo: ['airfryer', 'forno'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 wrap Rap10 integral ou normal',
          '30 g de queijo muçarela',
          'Manjericão a gosto',
          'Molho de tomate ou tomate a gosto',
        ],
      },
    ],
    passos: [
      'Molhe o wrap inteiro num prato com água.',
      'Recheie com o queijo, o manjericão e o tomate.',
      'Feche com um garfo e pincele gema, se quiser.',
      'Airfryer ou forno a 200° por 20 a 30 min.',
    ],
  },
]
