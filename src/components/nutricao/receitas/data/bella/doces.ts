import type { ReceitaBase } from '../../types'
import { macros } from '../utils'

const SORVETE_NO_LIQUIDIFICADOR = [
  'Bata tudo no liquidificador ou processador até a consistência de sorvete.',
  'Se quiser mais firme, leve ao congelador por um tempo.',
]

export const DOCES: ReceitaBase[] = [
  {
    id: 'brigadeiro-branco-preto-fit',
    nome: 'Brigadeiro branco e preto fit',
    secao: 'doces-praticos',
    pagina: 30,
    macros: macros(398, 36, 33, 14),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '140 g de leite em pó desnatado',
          '30 g de pasta de amendoim',
          '20 g de whey (branco) ou 10 g de cacau em pó (preto)',
        ],
      },
    ],
    passos: [
      'Misture o leite em pó com o whey ou o cacau e vá juntando água até ficar pastoso.',
      'No preto, adoce com um pouco de sucralose.',
      'Junte a pasta de amendoim e leve ao congelador por cerca de 1 h.',
    ],
    dica: 'Macros do branco. Versão preta: 360 kcal · P 23g · C 36g · G 15g.',
  },
  {
    id: 'panqueca-calda-doce-de-leite',
    nome: 'Panqueca com calda de doce de leite',
    secao: 'whey',
    pagina: 31,
    macros: macros(470, 46, 55, 7),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '5 claras',
          '50 g de farelo de aveia',
          '15 g de whey',
          '20 ml de água ou leite',
          'Adoçante a gosto',
        ],
      },
      { titulo: 'Calda', itens: ['40 g de doce de leite', '5 g de whey'] },
    ],
    passos: [
      'Misture a massa e leve à frigideira em fogo baixo.',
      'Calda: misture o whey com o doce de leite e um pouco de água.',
    ],
  },
  {
    id: 'bombom-crocante-chocolate-branco',
    nome: 'Bombom crocante de chocolate branco',
    secao: 'doces-praticos',
    pagina: 32,
    macros: macros(320, 11, 36, 14),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '50 g de chocolate branco',
          '20 g de PTS (proteína texturizada de soja) crua',
        ],
      },
    ],
    passos: [
      'Derreta o chocolate no micro-ondas.',
      'Na forminha de silicone: chocolate, PTS e o resto do chocolate.',
      'Congelador até endurecer.',
    ],
  },
  {
    id: 'mingau-aveia-proteico-sem-whey',
    nome: 'Mingau de aveia proteico (sem whey)',
    secao: 'mingaus',
    pagina: 33,
    macros: macros(400, 20, 59, 10),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '60 g de farelo de aveia',
          '200 ml de leite integral',
          '150 ml de água',
          '50 g de banana',
          '10 g de leite em pó desnatado',
        ],
      },
    ],
    passos: [
      'Leve a aveia, o leite e a água à panela, mexendo sem parar até engrossar.',
      'Cubra com o leite em pó e a banana.',
    ],
  },
  {
    id: 'bolo-microondas-chocolate',
    nome: 'Bolo de micro-ondas sabor chocolate',
    secao: 'bolos',
    pagina: 34,
    macros: macros(408, 22, 55, 10),
    preparo: ['microondas'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '1 ovo',
          '5 g de cacau em pó',
          '40 g de farelo de aveia',
          '100 g de banana',
          'Fermento',
        ],
      },
      { titulo: 'Calda', itens: ['10 g de whey', '5 g de leite em pó'] },
    ],
    passos: [
      'Misture a massa com um pouco de água, sem deixar líquida demais.',
      'Micro-ondas por cerca de 3 min.',
      'Calda: whey + leite em pó + um pouco de água. Despeje por cima.',
    ],
  },
  {
    id: 'overnight-oats',
    nome: 'Overnight oats',
    secao: 'mingaus',
    pagina: 35,
    macros: macros(322, 29, 37, 6),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '100 ml de leite integral',
          '100 g de iogurte desnatado',
          '40 g de aveia em flocos',
          '20 g de whey',
          'Adoçante a gosto',
        ],
      },
    ],
    passos: [
      'Misture tudo, menos o whey, num pote fechado.',
      'Deixe a noite toda na geladeira (ou algumas horas, até engrossar).',
      'Junte o whey e sirva.',
    ],
  },
  {
    id: 'sorvete-morango-fit',
    nome: 'Sorvete de morango fit',
    secao: 'gelados',
    pagina: 36,
    macros: macros(201, 15, 30, 3),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '100 g de banana congelada',
          '50 g de morango congelado',
          '50 ml de leite',
          '15 g de whey (opcional)',
          'Essência de baunilha a gosto',
        ],
      },
    ],
    passos: SORVETE_NO_LIQUIDIFICADOR,
    dica: 'Bata umas pedrinhas de gelo junto para dar mais volume.',
  },
  {
    id: 'panqueca-chocolate-fit',
    nome: 'Panqueca de chocolate fit',
    secao: 'whey',
    pagina: 37,
    macros: macros(444, 35, 51, 11),
    preparo: ['fogao'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '3 claras',
          '30 g de farelo de aveia',
          '10 g de cacau em pó',
          '50 g de banana',
          '20 ml de água ou leite',
        ],
      },
      {
        titulo: 'Recheio e calda',
        itens: ['50 g de banana', '10 g de whey', '15 g de pasta de amendoim'],
      },
    ],
    passos: [
      'Misture a massa e leve à frigideira em fogo baixo.',
      'Coloque a banana de um lado e feche como um crepe.',
      'Calda: whey + pasta de amendoim + um pouco de água. Jogue por cima.',
    ],
  },
  {
    id: 'mingau-aveia-chocolate',
    nome: 'Mingau de aveia sabor chocolate',
    secao: 'mingaus',
    pagina: 38,
    macros: macros(578, 23, 67, 25),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '60 g de farelo de aveia',
          '200 ml de leite integral',
          '150 ml de água',
          '10 g de cacau em pó',
          '15 g de pasta de amendoim',
          '25 g de chocolate',
          'Adoçante a gosto',
        ],
      },
    ],
    passos: [
      'Leve tudo ao fogo, menos o chocolate, mexendo até engrossar.',
      'Junte o chocolate no mingau quente para derreter.',
    ],
  },
  {
    id: 'acai-sem-acucar',
    nome: 'Açaí sem açúcar',
    secao: 'gelados',
    pagina: 39,
    macros: macros(310, 14, 46, 6),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '2 polpas de açaí congeladas',
          '100 g de banana',
          '15 g de whey (opcional)',
        ],
      },
    ],
    passos: SORVETE_NO_LIQUIDIFICADOR,
  },
  {
    id: 'bombom-gelado-proteico',
    nome: 'Bombom gelado proteico',
    secao: 'gelados',
    pagina: 40,
    macros: macros(164, 19, 5, 7),
    preparo: ['sem-fogo'],
    ingredientes: [{ itens: ['20 g de whey', '15 g de pasta de amendoim'] }],
    passos: [
      'Misture o whey e a pasta de amendoim com um pouco de água até ficar cremoso.',
      'Coloque numa forminha de silicone e congele até endurecer.',
    ],
  },
  {
    id: 'bolo-microondas-oreo',
    nome: 'Bolo de micro-ondas sabor Oreo',
    secao: 'bolos',
    pagina: 41,
    macros: macros(372, 24, 39, 13),
    preparo: ['microondas'],
    ingredientes: [
      {
        titulo: 'Massa',
        itens: [
          '30 g de farelo de aveia',
          '1 ovo ou 3 claras',
          '10 g de whey',
          '20 g de Oreo picado',
          '50 ml de água ou leite',
          'Fermento',
        ],
      },
      { titulo: 'Calda', itens: ['10 g de doce de leite', '5 g de whey'] },
    ],
    passos: [
      'Misture a massa com o Oreo picado e leve ao micro-ondas por cerca de 3 min.',
      'Calda: doce de leite + whey.',
    ],
  },
  {
    id: 'sorvete-chocolate-fit',
    nome: 'Sorvete de chocolate fit',
    secao: 'gelados',
    pagina: 42,
    macros: macros(170, 5, 30, 3),
    preparo: ['sem-fogo'],
    ingredientes: [
      {
        itens: [
          '100 g de banana congelada (não fica com gosto de banana)',
          '10 g de cacau em pó ou whey de chocolate',
          '50 ml de leite',
          'Adoçante a gosto',
        ],
      },
    ],
    passos: SORVETE_NO_LIQUIDIFICADOR,
  },
  {
    id: 'sorvete-creme-vegano',
    nome: 'Sorvete de creme vegano',
    secao: 'gelados',
    pagina: 43,
    macros: macros(191, 8, 31, 4),
    preparo: ['sem-fogo'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '100 g de banana congelada',
          '100 ml de leite de soja (fica bem mais docinho)',
          'Essência de baunilha a gosto',
        ],
      },
    ],
    passos: SORVETE_NO_LIQUIDIFICADOR,
  },
  {
    id: 'bolo-microondas-ninho',
    nome: 'Bolo de micro-ondas de leite Ninho',
    secao: 'bolos',
    pagina: 44,
    macros: macros(391, 28, 32, 17),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '30 g de farelo de aveia',
          '1 ovo ou 3 claras',
          '30 g de leite Ninho',
          '20 ml de água ou leite',
          'Adoçante a gosto',
          'Fermento',
          '15 g de pasta de amendoim',
        ],
      },
    ],
    passos: [
      'Misture tudo, menos a pasta de amendoim e 10 g do Ninho, e leve ao micro-ondas por cerca de 3 min.',
      'Calda: pasta de amendoim + o Ninho reservado até ficar cremoso. Cubra o bolo.',
    ],
  },
  {
    id: 'mingau-claras-proteico',
    nome: 'Mingau de claras proteico',
    secao: 'mingaus',
    pagina: 45,
    macros: macros(452, 47, 29, 16),
    preparo: ['fogao'],
    ingredientes: [
      {
        itens: [
          '30 g de farelo de aveia',
          '3 claras',
          '200 ml de leite ou água',
          '30 g de whey',
          '30 g de pasta de amendoim',
        ],
      },
    ],
    passos: [
      'Bata a aveia, as claras e o leite no liquidificador.',
      'Leve à panela, mexendo até engrossar.',
      'Junte o whey e a pasta de amendoim.',
    ],
    dica: 'A clara não deixa gosto, só dá volume e saciedade.',
  },
  {
    id: 'pipoca-doce-whey',
    nome: 'Pipoca doce com whey',
    secao: 'doces-praticos',
    pagina: 46,
    macros: macros(303, 25, 43, 3),
    preparo: ['microondas'],
    ingredientes: [
      {
        itens: [
          '20 ml de água',
          '50 g de milho de pipoca',
          '15 g de leite em pó desnatado',
          '20 g de whey',
        ],
      },
    ],
    passos: [
      'Coloque a água, o milho e adoçante num pote de vidro tampado com papel filme ou prato.',
      'Micro-ondas por cerca de 5 min (ou na panela).',
      'Faça um creminho com o leite em pó, 5 g de whey e água e misture na pipoca.',
      'Finalize com o resto do whey puro e mexa bem.',
    ],
  },
  {
    id: 'pao-pb-banana',
    nome: 'Pão com pasta de amendoim e banana',
    secao: 'doces-praticos',
    pagina: 47,
    macros: macros(252, 11.5, 31, 9),
    preparo: ['airfryer', 'forno'],
    ingredientes: [
      {
        itens: [
          '2 fatias de pão de forma integral',
          '40 g de banana nanica',
          '20 g de pasta de amendoim',
          'Canela a gosto',
        ],
      },
    ],
    passos: [
      'Amasse a banana e espalhe nos dois pães.',
      'Dilua a pasta de amendoim com água até ficar cremosa e com mais volume, e espalhe por cima.',
      'Polvilhe canela e leve à airfryer a 200° por cerca de 8 min.',
    ],
  },
  {
    id: 'mingau-aveia-vegano',
    nome: 'Mingau de aveia vegano',
    secao: 'mingaus',
    pagina: 48,
    macros: macros(405, 27, 53, 10),
    preparo: ['fogao'],
    vegana: true,
    ingredientes: [
      {
        itens: [
          '60 g de aveia em flocos ou farelo',
          '200 ml de leite de soja',
          '150 ml de água',
          '20 g de proteína vegana (opcional)',
          '50 g de banana',
        ],
      },
    ],
    passos: [
      'Cozinhe a aveia com o leite de soja e a água, mexendo até engrossar.',
      'Desligue e junte a proteína vegana e a banana.',
    ],
  },
]
