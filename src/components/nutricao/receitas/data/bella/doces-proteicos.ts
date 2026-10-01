import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

const NO_LIQUIDIFICADOR = [
  'Bata tudo no liquidificador.',
  'Se ficar difícil de bater, junte água até não sobrar pedra de gelo.',
  'Sirva num copo com canudo.',
]

export const DOCES_PROTEICOS: ReceitaBase[] = [
  {
    id: 'pao-creminho-whey',
    nome: 'Pão com creminho de whey',
    secao: 'whey',
    pagina: 49,
    macros: macros(236, 27.6, 24.7, 2.6),
    preparo: ['airfryer'],
    ingredientes: [
      {
        itens: [
          '2 pães de forma',
          '15 g de leite em pó desnatado',
          '15 g de whey',
          'Canela a gosto',
        ],
      },
    ],
    passos: [
      'Torre os pães e deixe-os em pé ao tirar, para ficarem crocantes.',
      'Creminho: leite em pó + whey + um pouco de água.',
      'Espalhe nos pães e polvilhe canela.',
    ],
  },
  {
    id: 'muffin-baunilha-fit',
    nome: 'Muffin de baunilha fit',
    secao: 'bolos',
    pagina: 50,
    macros: macros(292, 26, 37, 5),
    preparo: ['forno'],
    ingredientes: [
      {
        itens: [
          '50 g de farinha de aveia ou farelo',
          '120 ml de leite desnatado',
          '20 g de whey',
          'Essência de baunilha a gosto',
          'Adoçante a gosto',
        ],
      },
    ],
    passos: [
      'Misture tudo e distribua em forminhas de silicone.',
      'Forno preaquecido a 200° por cerca de 15 min.',
    ],
  },
  {
    id: 'danoninho-fit',
    nome: 'Danoninho fit',
    secao: 'doces-praticos',
    pagina: 51,
    macros: macros(744, 38.7, 55.4, 41),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '300 ml de água',
          '150 g de leite em pó integral',
          '1 pacote de suco em pó zero (morango ou outro sabor)',
        ],
      },
    ],
    passos: [
      'Bata tudo no liquidificador ou mixer até ficar consistente.',
      'Leve ao congelador, se quiser mais firme.',
    ],
    dica: 'Macros da receita inteira — dá pra dividir em vários potinhos.',
  },
  {
    id: 'bolo-puma-microondas',
    nome: 'Bolo puma de micro-ondas',
    secao: 'bolos',
    pagina: 52,
    macros: macros(341, 8.7, 52.6, 13.8),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '90 g de farinha de aveia ou farelo',
          '3 ovos',
          '120 ml de leite desnatado',
          '50 g de achocolatado em pó',
          '10 g de cacau em pó',
          '200 g de banana',
          'Adoçante a gosto',
          'Fermento',
        ],
      },
    ],
    passos: ['Misture tudo e leve ao micro-ondas por cerca de 10 min.'],
  },
  {
    id: 'fondue-chocolate',
    nome: 'Fondue de chocolate',
    secao: 'doces-praticos',
    pagina: 53,
    macros: macros(345, 3.3, 34.2, 22),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '50 g de creme de leite',
          '20 g de chocolate ao leite',
          '20 g de chocolate meio amargo',
          '50 g de morango',
          '50 g de uva sem semente',
        ],
      },
    ],
    passos: [
      'Derreta os chocolates com o creme de leite em banho-maria ou no micro-ondas.',
      'Sirva com as frutas.',
    ],
  },
  {
    id: 'frapuccino-fit',
    nome: 'Frapuccino fit',
    secao: 'shakes',
    pagina: 54,
    macros: macros(214, 23, 22, 4),
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 forma de gelo inteira',
          '250 ml de leite semidesnatado',
          '30 g de whey',
          '5 g de café solúvel',
          'Sucralose a gosto',
        ],
      },
    ],
    passos: NO_LIQUIDIFICADOR,
  },
  {
    id: 'capuccino-fit',
    nome: 'Capuccino fit',
    secao: 'shakes',
    pagina: 55,
    macros: macros(122, 9, 15, 3),
    preparo: ['fogao'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '300 ml de leite semidesnatado',
          '5 g de café solúvel',
          'Sucralose a gosto',
          'Canela',
        ],
      },
    ],
    passos: [
      'Ferva o leite.',
      'Na caneca, misture o leite com o café, o adoçante e a canela.',
    ],
    dica: 'Dá pra colocar whey, mas é opcional.',
  },
  {
    id: 'pipoca-doce-de-leite',
    nome: 'Pipoca fit de doce de leite',
    secao: 'doces-praticos',
    pagina: 56,
    macros: macros(296, 13, 52, 3),
    preparo: ['microondas'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '20 ml de água',
          '50 g de milho de pipoca',
          '20 g de leite em pó desnatado',
          '20 g de doce de leite',
        ],
      },
    ],
    passos: [
      'Estoure a pipoca no micro-ondas (pote de vidro tampado, ≈ 5 min) com a água e adoçante.',
      'Creminho: 10 g de leite em pó + doce de leite + água, bem cremoso.',
      'Misture na pipoca e finalize com os outros 10 g de leite em pó (ou whey).',
    ],
  },
  {
    id: 'cookies-microondas',
    nome: 'Cookies fit de micro-ondas',
    secao: 'doces-praticos',
    pagina: 57,
    macros: macros(318, 22, 44, 6),
    rende: '3 cookies',
    preparo: ['microondas'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '60 g de farinha de aveia',
          '20 g de whey',
          '80 ml de leite desnatado',
          '20 g de chocolate picadinho',
        ],
      },
    ],
    passos: [
      'Misture a aveia, o whey e o leite até virar um creme.',
      'Num prato, modele 3 cookies grandes e espalhe o chocolate por cima.',
      'Micro-ondas por cerca de 2 min.',
    ],
    dica: 'Macros dos 3 cookies.',
  },
  {
    id: 'mingau-pouco-calorico',
    nome: 'Mingau de aveia pouco calórico',
    secao: 'mingaus',
    pagina: 58,
    macros: macros(259, 19, 35, 5),
    preparo: ['fogao'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '30 g de farelo de aveia',
          '100 ml de leite desnatado',
          '50 g de banana (opcional)',
          '20 g de whey',
        ],
      },
    ],
    passos: [
      'Junte tudo na panela com mais 100 ml de água — dá volume sem calorias. Adoçante e canela, se quiser.',
      'Mexa no fogo até ferver e engrossar.',
    ],
  },
  {
    id: 'shake-cutting',
    nome: 'Shake pra cutting',
    secao: 'shakes',
    pagina: 59,
    macros: macros(187, 22, 18, 3),
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 forma de gelo inteira',
          '200 ml de leite desnatado',
          '15 g de pasta de amendoim em pó ou cacau em pó',
          '20 g de whey',
          'Adoçante e canela a gosto',
        ],
      },
    ],
    passos: NO_LIQUIDIFICADOR,
  },
  {
    id: 'shake-bulking',
    nome: 'Shake pra bulking',
    secao: 'shakes',
    pagina: 60,
    macros: macros(551, 28, 67, 21),
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '100 g de banana congelada',
          '400 ml de leite integral',
          '30 g de mel',
          '20 g de whey',
          '30 g de pasta de amendoim',
        ],
      },
    ],
    passos: NO_LIQUIDIFICADOR,
  },
  {
    id: 'barrinha-proteina',
    nome: 'Barrinha de proteína caseira',
    secao: 'whey',
    pagina: 61,
    macros: macros(525, 24, 58, 22),
    rende: '2 a 3 barrinhas',
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '30 g de aveia em flocos',
          '20 g de farinha de aveia',
          '20 g de pasta de amendoim',
          '20 g de whey',
          '30 g de chocolate',
          'Adoçante a gosto',
        ],
      },
    ],
    passos: [
      'Misture tudo, menos o chocolate, até formar uma massa bem firme.',
      'Espalhe numa forma com papel manteiga e cubra com o chocolate derretido.',
      'Freezer por pelo menos 1 h e corte em retângulos.',
    ],
    dica: 'Macros da receita inteira.',
  },
  {
    id: 'cookie-bites',
    nome: 'Cookie bites fit',
    secao: 'whey',
    pagina: 62,
    macros: macros(453, 22, 47, 21),
    rende: '5 a 10 bolinhas',
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '30 g de farinha de aveia',
          '20 g de whey (opcional)',
          '20 g de pasta de amendoim',
          '30 g de chocolate',
        ],
      },
    ],
    passos: [
      'Misture a farinha, o whey e a pasta de amendoim até ficar bem firme (pouquinha água, se precisar).',
      'Com as mãos untadas, faça bolinhas como brigadeiro.',
      'Cubra com o chocolate derretido e congele até endurecer.',
    ],
    dica: 'Macros da receita inteira.',
  },
  {
    id: 'copo-da-felicidade',
    nome: 'Copo da felicidade fit',
    secao: 'doces-praticos',
    pagina: 63,
    macros: macros(334, 22, 46, 7),
    preparo: ['sem-fogo'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '½ pote de iogurte desnatado',
          '20 g de whey',
          '100 g de uvas',
          '20 g de leite em pó desnatado',
          '20 g de chocolate',
        ],
      },
    ],
    passos: [
      'Creme branco: iogurte + whey.',
      'Creme escuro: leite em pó + chocolate derretido.',
      'Monte no copo: creme branco, uvas e creme escuro.',
    ],
    dica: 'Pasta de amendoim como mais uma camada fica ótima, mas aumenta as calorias.',
  },
  {
    id: 'bala-fini-proteica',
    nome: 'Bala Fini proteica',
    secao: 'gelados',
    pagina: 64,
    macros: macros(151, 24, 6, 1),
    preparo: ['microondas'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 gelatina de morango zero',
          '1 gelatina incolor',
          '100 ml de água',
          '20 g de whey (morango ou baunilha)',
        ],
      },
    ],
    passos: [
      'Misture as gelatinas com a água e deixe hidratar por 5 min.',
      'Micro-ondas por 20 s e junte o whey.',
      'Distribua em forminhas pequenas e leve à geladeira por 1 h.',
    ],
  },
  {
    id: 'eskibom-fit',
    nome: 'Eskibom fit',
    secao: 'gelados',
    pagina: 65,
    macros: macros(651, 40, 85, 15),
    rende: '≈ 10 unidades',
    preparo: ['microondas'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '90 g de leite em pó desnatado',
          '1 pote de iogurte desnatado',
          'Adoçante a gosto',
          '50 g de chocolate',
        ],
      },
    ],
    passos: [
      'Misture o leite em pó, o iogurte e o adoçante, coloque em forminhas e congele.',
      'Derreta o chocolate e mexa até amornar, para não derreter a massa.',
      'Mergulhe os picolés no chocolate e volte ao congelador.',
    ],
    dica: 'Macros da receita inteira.',
  },
  {
    id: 'alfajor-fit',
    nome: 'Alfajor fit',
    secao: 'doces-praticos',
    pagina: 66,
    macros: macros(393, 7, 54, 17),
    rende: '2 mini alfajores',
    preparo: ['airfryer', 'microondas'],
    semFoto: true,
    ingredientes: [
      {
        itens: [
          '1 fatia de pão integral',
          '20 g de doce de leite',
          '50 g de chocolate',
        ],
      },
    ],
    passos: [
      'Torre bem o pão e corte em 4 partes.',
      'Monte 2 mini sanduíches com 10 g de doce de leite cada.',
      'Cubra com chocolate derretido e congele até endurecer.',
    ],
    dica: 'Macros dos 2 alfajores.',
  },
]
