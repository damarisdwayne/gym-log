import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

export const FRANGO: ReceitaBase[] = [
  {
    id: 'pizza-fitness',
    nome: 'Pizza fitness',
    secao: 'frango',
    pagina: 6,
    macros: macros(492, 50, 15, 25),
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '2 ovos',
          '2 cs de farinha de aveia (ou de linhaça, arroz, amêndoa ou farelo de aveia)',
          '1 cs de manteiga derretida',
          'Sal a gosto',
          '½ cc de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '80 g de frango desfiado',
          '40 g de requeijão light de catupiry',
          '40 g de queijo muçarela light',
          'Molho de tomate',
          'Orégano a gosto',
        ],
      },
    ],
    passos: [
      'Misture os ingredientes da massa e coloque numa frigideira untada em fogo baixo. Tampe e espere até ficar uma massa durinha, tipo panqueca.',
      'Desligue o fogo, passe a massa para uma forma e vá recheando: molho de tomate, frango, requeijão, muçarela e orégano.',
      'Leve ao forno a 180° até o queijo derreter (uns 10 min).',
    ],
  },
  {
    id: 'empadao-fitness',
    nome: 'Empadão fitness',
    secao: 'frango',
    pagina: 8,
    macros: macros(229, 16.4, 11.4, 13.1),
    rende: '4 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '3 ovos',
          '55 g de farinha de aveia (≈ 9 cs, ou até engrossar)',
          '1 cs de azeite',
          'Açafrão e sal a gosto',
          '3 cs de água',
          '80 g de frango desfiado',
          '30 g de queijo muçarela',
          '3 cs de requeijão light',
          '1 cc de fermento',
        ],
      },
    ],
    passos: [
      'Misture os ovos, a farinha, o azeite, os temperos e a água com uma colher. Por último, o fermento.',
      'Unte uma forma, coloque metade da massa, o recheio (frango, queijo, requeijão) e o resto da massa.',
      'Coloque um pouco de queijo por cima e leve ao forno por 20 a 25 min ou até dourar.',
    ],
  },
  {
    id: 'torta-frango-queijo',
    nome: 'Torta de frango com queijo fitness',
    secao: 'frango',
    pagina: 10,
    macros: macros(425, 42.7, 12, 22.5),
    rende: '4 porções',
    preparo: ['forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '4 ovos',
          '200 ml de creme de leite light',
          '1 cs de requeijão light',
          '1 cs de farinha de aveia',
          '1 cc de sal',
          '1 cc de fermento',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '300 g de frango desfiado',
          '150 g de queijo muçarela light',
          '1 cs de creme de queijo minas',
          '100 g de milho (½ lata)',
          '50 g de molho de tomate',
          'Parmesão a gosto',
        ],
      },
    ],
    passos: [
      'Bata os ingredientes da massa no liquidificador, deixando o fermento para o final.',
      'Unte uma travessa, coloque metade da massa, depois o recheio e cubra com o restante da massa.',
      'Polvilhe parmesão por cima e leve ao forno por 20 a 30 min ou até dourar.',
    ],
  },
  {
    id: 'coxinha-batata-doce',
    nome: 'Coxinha com massa de batata doce',
    secao: 'frango',
    pagina: 12,
    macros: macros(258, 21.8, 14.8, 8.6),
    rende: '6 porções',
    preparo: ['forno', 'airfryer'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: ['300 g de batata doce', '6 cs de farelo de aveia', 'Sal a gosto'],
      },
      {
        titulo: 'Recheio',
        itens: [
          '400 g de frango desfiado (o quanto quiser rechear)',
          '100 g de requeijão cremoso light',
        ],
      },
      {
        titulo: 'Para empanar',
        itens: ['1 ovo', '50 g de queijo parmesão ralado'],
      },
    ],
    passos: [
      'Cozinhe a batata sem casca, amasse, espere esfriar e misture com o farelo de aveia. Divida em 6 porções.',
      'Abra cada porção como um pratinho, recheie com frango e requeijão, feche e modele em formato de coxinha.',
      'Passe no ovo batido e depois no parmesão.',
      'Leve ao forno ou airfryer até dourar.',
    ],
  },
  {
    id: 'pastel-fitness',
    nome: 'Pastel fitness',
    secao: 'frango',
    pagina: 14,
    macros: macros(290, 22.4, 6.7, 11.3),
    rende: '4 pastéis',
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '30 g de polvilho azedo',
          '15 g de farelo de aveia',
          '15 g de farinha de amêndoas',
          '80 g de parmesão ralado',
          'Sal',
          '1 ovo',
          '350 g de frango desfiado',
        ],
      },
    ],
    passos: [
      'Misture os secos e vá colocando o ovo DEVAGAR até virar uma massa.',
      'Faça bolinhas e amasse sobre papel manteiga, deixando a massa fina e redonda.',
      'Coloque o frango no meio, feche em formato de pastel e pincele gema.',
      'Leve ao forno por cerca de 20 min.',
    ],
  },
  {
    id: 'quiche-frango-catupiry',
    nome: 'Quiche de frango com catupiry',
    secao: 'frango',
    pagina: 16,
    macros: macros(337, 29.8, 22.5, 12.4),
    rende: '6 porções',
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '500 g de grão de bico cozido',
          '100 g de queijo parmesão ralado',
          'Azeite',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '400 g de frango desfiado',
          '200 g de catupiry, requeijão ou creme de queijo',
          'Alho, cebola, pimenta do reino, sal e uma pitada de louro em pó',
        ],
      },
    ],
    passos: [
      'Cozinhe o grão de bico até ficar macio (não demais) e bata no processador até virar uma pasta lisa. Misture com azeite.',
      'Cozinhe e desfie o frango. Refogue com alho, cebola, pimenta, sal e louro e junte o catupiry.',
      'Forre a forma com a massa de grão de bico e coloque o recheio por cima.',
      'Polvilhe parmesão e leve para gratinar por cerca de 20 min.',
    ],
  },
  {
    id: 'panqueca-frango-queijo',
    nome: 'Panqueca de frango com queijo',
    secao: 'frango',
    pagina: 18,
    macros: macros(580, 48.5, 25.8, 25.5),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '2 ovos (ou 1 ovo e 1 clara)',
          '1 cs de farelo de aveia',
          '1 cs de tapioca',
          '1 cs de parmesão ralado',
          '1 cs de requeijão light',
          'Temperos a gosto',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '½ cs de requeijão',
          '30 g de muçarela',
          '100 g de peito de frango',
          'Orégano',
        ],
      },
    ],
    passos: [
      'Misture a massa e coloque na frigideira em FOGO BAIXO e TAMPADA, para não queimar.',
      'Espere dourar e vire.',
      'Espalhe o requeijão, o frango e o queijo e feche.',
      'Tampe e espere a muçarela derreter, ainda em fogo baixo.',
    ],
  },
  {
    id: 'panqueca-claras-frango',
    nome: 'Panqueca de claras com frango',
    secao: 'frango',
    pagina: 20,
    macros: macros(115, 23, 0.7, 2),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '3 claras',
          '50 g de frango desfiado',
          '1 cs de requeijão',
          '1 cc de parmesão ralado',
          'Sal a gosto',
        ],
      },
    ],
    passos: [
      'Misture tudo e coloque na frigideira em fogo baixo, tampada.',
      'Vá virando até dourar.',
    ],
  },
  {
    id: 'crepe-frances',
    nome: 'Crepe francês',
    secao: 'frango',
    pagina: 22,
    macros: macros(480, 29.1, 49, 15),
    rende: '4 porções',
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '250 g de farinha de trigo',
          '250 ml de leite normal ou vegetal',
          '250 ml de água',
          '2 ovos',
          '1 cs de manteiga ou azeite',
          'Sal e temperos a gosto',
        ],
      },
      {
        titulo: 'Recheio',
        itens: ['250 g de frango desfiado', '100 g de queijo muçarela'],
      },
    ],
    passos: [
      'Misture a farinha e os ovos e incorpore o leite aos poucos. Bata até virar um líquido homogêneo e adicione a manteiga, o sal e os temperos.',
      'Com uma concha, despeje a massa numa frigideira antiaderente em fogo médio, cobrindo o fundo.',
      'Quando dourar de um lado, vire, adicione o recheio e sirva.',
    ],
    dica: 'Outros recheios: queijo, tomate e orégano · cogumelos na manteiga com espinafre refogado.',
  },
  {
    id: 'panqueca-frango-desfiado',
    nome: 'Panqueca de frango desfiado',
    secao: 'frango',
    pagina: 24,
    macros: macros(272, 20.3, 14.9, 11),
    rende: '7 panquecas',
    preparo: ['fogao', 'forno'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo',
          '1 xícara de leite (ou vegetal)',
          '1 xícara de farinha de trigo',
          '2 cs de manteiga sem sal derretida',
          '½ cc de sal',
        ],
      },
      {
        titulo: 'Recheio',
        itens: [
          '350 g de frango cozido e desfiado',
          '100 g de queijo muçarela',
          '3 cs de molho de tomate',
          '½ cebola picada',
          '60 g de queijo parmesão ralado',
        ],
      },
    ],
    passos: [
      'Bata no liquidificador o ovo, o leite, a farinha, a manteiga e o sal.',
      'Numa frigideira untada, despeje uma concha pequena da massa, deixe 1 min, vire e deixe mais 1 min. Repita com o resto.',
      'Refogue a cebola até dourar e junte o frango. Espere esfriar.',
      'Em cada massa, coloque 1 fatia de muçarela e 2 cs de frango, enrole e arrume num refratário.',
      'Finalize com molho de tomate e parmesão e leve ao forno por 15 min.',
    ],
  },
  {
    id: 'hamburguer-caseiro',
    nome: 'Hambúrguer caseiro',
    secao: 'carne',
    pagina: 27,
    macros: macros(597, 66.4, 26.4, 25),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '200 g de patinho moído',
          '2 fatias de pão de hambúrguer',
          '60 g de queijo muçarela ou minas padrão',
          '1 folha de alface',
          '2 rodelas de tomate',
          '4 fatias de pepino',
          '1 cs de molho inglês',
        ],
      },
    ],
    passos: [
      'Tempere a carne com sal, pimenta do reino e molho inglês.',
      'Modele o hambúrguer e grelhe numa frigideira antiaderente ou untada.',
      'Vire para dourar do outro lado, adicione o queijo e reserve.',
      'Passe o pão na mesma frigideira para pegar o gostinho da carne.',
      'Monte: pão, alface, tomate, pepino, carne e a outra fatia de pão.',
    ],
  },
]
