import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const VEGETAIS: ReceitaBase[] = [
  {
    id: 'avocado-toast-ovo',
    nome: 'Avocado toast com ovo',
    secao: 'vegetarianas',
    pagina: 63,
    macros: macros(376, 11.7, 23.8, 28.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '1 avocado ou ½ abacate',
          '1 ovo',
          '1 fatia de pão integral ou de fermentação natural',
        ],
      },
    ],
    passos: [
      'Fatie o avocado e frite 1 ovo numa frigideira antiaderente (gema mole, se preferir).',
      'Esquente o pão na frigideira, sanduicheira ou forno.',
      'Monte: pão, avocado e o ovo por cima. Finalize com sal e azeite.',
    ],
  },
  {
    id: 'aveioca-avocado',
    nome: 'Aveioca com recheio de avocado',
    secao: 'vegetarianas',
    pagina: 65,
    macros: macros(395, 6.5, 26.1, 3.1),
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '3 cs de aveia',
          '1 cs de quinoa (opcional)',
          '1 pitada de açafrão',
          '1 pitada de páprica doce',
          '½ avocado',
          '½ tomate',
        ],
      },
    ],
    passos: [
      'Misture os secos, hidrate com ½ xícara de água, acerte o sal e espere 10 min.',
      'Despeje numa frigideira untada com azeite.',
      'Espere dourar, vire e recheie com o avocado cortado e os tomatinhos.',
    ],
  },
  {
    id: 'massa-vegana-espinafre',
    nome: 'Massa vegana com espinafre',
    secao: 'vegetarianas',
    pagina: 67,
    macros: macros(688, 21.8, 91.1, 29.2),
    rende: '2 porções',
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '200 g de macarrão rigatone cru (ou outro)',
          '½ xícara de castanha de caju',
          '½ cebola',
          '1 dente de alho',
          '1 xícara de folhas de espinafre',
          '10 tomatinhos',
          'Azeite, sal e pimenta do reino a gosto',
        ],
      },
    ],
    passos: [
      'Deixe as castanhas de molho em água filtrada por no mínimo 1 h.',
      'Cozinhe a massa em água fervente até ficar al dente.',
      'Refogue a cebola e o alho, junte o espinafre e deixe murchar bem.',
      'Escorra as castanhas e bata com 1 xícara de água filtrada nova até virar um creme.',
      'Junte o creme ao refogado, misture, adicione o macarrão e sirva.',
    ],
  },
  {
    id: 'salada-quinoa-sementes',
    nome: 'Salada de quinoa e sementes',
    secao: 'vegetarianas',
    pagina: 69,
    macros: macros(340, 10.5, 42.1, 11.4),
    rende: '3 porções',
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '500 g de quinoa',
          '300 g de brócolis',
          '85 g de mix de castanhas',
          '15 g de semente de girassol',
          '80 g de rúcula',
          '1 cs de azeite para refogar',
        ],
      },
    ],
    passos: [
      'Refogue a quinoa já cozida no alho e na cebola.',
      'Depois de fria, junte o brócolis cozido e o resto dos ingredientes.',
      'Finalize com sal, pimenta, azeite e temperos.',
    ],
  },
  {
    id: 'shimeji-tomate-cereja',
    nome: 'Shimeji com tomate cereja',
    secao: 'vegetarianas',
    pagina: 71,
    macros: macros(198, 11, 26.3, 5.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '300 g de shimeji',
          '90 g de tomate cereja',
          '½ cs de manteiga',
        ],
      },
    ],
    passos: [
      'Refogue o shimeji na manteiga até ficar bem molinho e suculento. Tempere com sal e pimenta.',
      'Desligue o fogo, junte os tomatinhos e misture bem.',
    ],
  },
  {
    id: 'salada-caprese',
    nome: 'Salada caprese',
    secao: 'vegetarianas',
    pagina: 73,
    macros: macros(464, 28.6, 4, 37.1),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '1 muçarela de búfala grande',
          '1 tomate italiano',
          'Temperos a gosto',
        ],
      },
    ],
    passos: [
      'Coloque a muçarela no prato e o tomate em rodelas em volta.',
      'Finalize com azeite, sal e orégano.',
    ],
  },
  {
    id: 'salada-queijo-cabra-roma',
    nome: 'Salada de queijo de cabra e romã',
    secao: 'vegetarianas',
    pagina: 75,
    macros: macros(385, 13.5, 38.5, 21.9),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          'Rúcula e espinafre',
          '2 cs de castanhas ou nozes',
          '40 g de queijo de cabra em cubinhos',
          'Romã',
          '2 tâmaras secas cortadas',
          'Temperos a gosto',
        ],
      },
    ],
    passos: ['Misture tudo e sirva.'],
  },
  {
    id: 'hamburguer-feijao-fradinho',
    nome: 'Hambúrguer de feijão fradinho',
    secao: 'vegetarianas',
    pagina: 77,
    macros: macros(212, 12.1, 38, 1.5),
    rende: '8 porções',
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '500 g de feijão fradinho',
          '½ xícara de alho poró',
          '250 g de batata doce crua',
          '250 g de batata baroa ou inglesa crua',
        ],
      },
    ],
    passos: [
      'Deixe o feijão de molho por no mínimo 4 h, trocando a água.',
      'Cozinhe com alho poró na água até ficar molinho, sem desmanchar. Escorra e deixe esfriar.',
      'Cozinhe as batatas cortadas, espere esfriar e amasse tudo junto com o feijão.',
      'Modele em hambúrgueres (ou almôndegas) e grelhe com um fio de azeite.',
    ],
  },
  {
    id: 'lasanha-vegetariana',
    nome: 'Lasanha vegetariana',
    secao: 'vegetarianas',
    pagina: 79,
    macros: macros(152, 12.9, 9.3, 7.3),
    rende: '4 porções',
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        itens: [
          '250 g de abobrinha crua',
          '200 g de berinjela crua',
          '180 g de molho de tomate caseiro (ou passata)',
          '150 g de queijo minas padrão',
        ],
      },
    ],
    passos: [
      'Fatie a berinjela e a abobrinha bem fininhas e grelhe numa frigideira.',
      'Depois de frias, monte num refratário: molho, abobrinha e berinjela, queijo, abobrinha e berinjela, e finalize com molho e queijo.',
      'Leve ao forno por 20 min.',
    ],
  },
  {
    id: 'legumes-grelhados',
    nome: 'Legumes grelhados especiais',
    secao: 'legumes',
    pagina: 82,
    macros: macros(307, 10.7, 35.6, 16.5),
    rende: '2 porções',
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Legumes',
        itens: [
          '150 g de berinjela',
          '100 g de tomate',
          '100 g de batata doce',
          '100 g de couve-flor',
          '50 g de brócolis',
          '100 g de cenoura',
          '50 g de cebola',
          '100 g de repolho',
          '100 g de pimentão',
          '60 g de vagem',
          '100 g de abobrinha',
        ],
      },
      {
        titulo: 'O segredo (tempero)',
        itens: [
          '1 cs de manteiga',
          '2 cs de azeite',
          'Ervas frescas: tomilho, cebolinha, orégano, endro',
        ],
      },
    ],
    passos: [
      'Misture o azeite, a manteiga e as ervas.',
      'Lave e corte os legumes como preferir.',
      'Na chapa ou frigideira, pincele o molho nos legumes enquanto grelham.',
      'Tempere com sal grosso e pimenta e deixe ficar tudo tostadinho.',
    ],
    dica: 'O molho e o tempero são TUDO! Macros calculados com os legumes cozidos.',
  },
  {
    id: 'abobora-airfryer',
    nome: 'Abóbora na airfryer',
    secao: 'legumes',
    pagina: 84,
    macros: macros(179, 4.5, 32.4, 5.8),
    preparo: ['fogao', 'airfryer'],
    ingredientes: [
      {
        itens: [
          '300 g de abóbora',
          '1 cc rasa de manteiga para pincelar',
          'Alecrim, páprica picante, orégano, tempero de cebola, alho e salsa, chimichurri',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Lave e corte a abóbora em cubos (se estiver dura, 1 min no micro-ondas ajuda).',
      'Cozinhe por uns 30 min até amolecer um pouco. Escorra e salgue.',
      'Pincele a manteiga e tempere.',
      'Airfryer por 20 min a 180° e mais 6 a 8 min a 200°.',
    ],
    dica: 'Fica com uma casquinha crocante por fora e derretendo por dentro.',
  },
  {
    id: 'macarrao-legumes',
    nome: 'Macarrão de legumes',
    secao: 'legumes',
    pagina: 86,
    macros: macros(256, 7.7, 26.6, 13.8),
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '1 cenoura',
          '100 g de abobrinha',
          '½ cebola',
          '100 g de cogumelos',
          '2 cs de quinoa',
          '1 cs de azeite',
        ],
      },
    ],
    passos: [
      'Com um cortador de legumes (não ralador), corte a cenoura e a abobrinha em formato de macarrão.',
      'Refogue a cebola e os cogumelos no azeite.',
      'Junte a quinoa, a cenoura e a abobrinha e deixe ficar bem molinho.',
    ],
  },
  {
    id: 'abobora-caramelada',
    nome: 'Abóbora caramelada',
    secao: 'legumes',
    pagina: 88,
    macros: macros(208, 5.4, 36.6, 4.2),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '300 g de abóbora baiana madura',
          '½ cebola grande',
          '½ cs de manteiga',
        ],
      },
    ],
    passos: [
      'Corte a abóbora em cubos e cozinhe no vapor.',
      'Faça um refogado de manteiga e cebola.',
      'Junte a abóbora, um fio de azeite e sal e tampe. Fogo médio, com um pouco de água se precisar.',
    ],
  },
  {
    id: 'abobora-alecrim',
    nome: 'Abóbora especial com alecrim',
    secao: 'legumes',
    pagina: 90,
    macros: macros(166, 2.7, 19.8, 9.8),
    rende: '5 porções',
    preparo: ['fogao', 'forno'],
    vegana: true,
    ingredientes: [
      {
        itens: ['1 kg de abóbora japonesa', '4 cs de azeite', 'Sal e alecrim'],
      },
    ],
    passos: [
      'Corte a abóbora em lascas grossas e cozinhe em água fervente por 8 min. Enquanto isso, aqueça o forno a 250°.',
      'Com a abóbora um pouco macia (não mole), tempere com azeite, sal e alecrim.',
      'Asse por 10 min, vire e asse mais 10 min.',
    ],
  },
]
