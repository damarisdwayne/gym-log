import type { Refeicao } from './types'

export const CAFE_DA_MANHA: Refeicao = {
  id: 'cafe-da-manha',
  horario: '08:30',
  nome: 'Café da manhã · Mingau',
  atalho: 'Café',
  emoji: '🥣',
  opcoes: [
    {
      id: 'cafe-1',
      titulo: 'Opção 1',
      alimentos: [
        { nome: 'Leite de vaca desnatado UHT', medida: '150 ml' },
        { nome: 'Farelo de aveia', medida: '2 colheres de sopa', peso: '20 g' },
        {
          nome: 'Semente de chia',
          medida: '1 colher de sopa cheia',
          peso: '15 g',
          substituicoes: [
            {
              nome: 'Semente de linhaça',
              medida: '1 colher de sobremesa cheia',
              peso: '10 g',
            },
            {
              nome: 'Semente de girassol',
              medida: '1 colher de sobremesa rasa',
              peso: '10 g',
            },
            {
              nome: 'Semente de abóbora',
              medida: '1 colher de sopa rasa',
              peso: '15 g',
            },
          ],
        },
        {
          nome: 'Whey protein concentrado (Growth)',
          medida: '1 colher de sopa cheia',
          peso: '20 g',
        },
        { nome: 'Banana', medida: '1 unidade média', peso: '65 g' },
        { nome: 'Maca peruana', medida: '1 colher de sopa cheia', peso: '10 g' },
        {
          nome: 'Ginseng em pó',
          medida: '1 colher de sobremesa cheia',
          peso: '5 g',
        },
        {
          nome: 'Pasta de amendoim integral',
          medida: '1 colher de sopa rasa',
          peso: '10 g',
        },
      ],
    },
  ],
  blocos: [
    {
      titulo: 'Benefícios funcionais',
      itens: [
        'Leite desnatado: proteínas e cálcio para músculos e ossos.',
        'Farelo de aveia: fibras que aumentam a saciedade e ajudam no controle do colesterol e da glicemia.',
        'Chia: rica em fibras, ômega-3 e antioxidantes; auxilia a saúde intestinal e cardiovascular.',
        'Whey: proteína de alta qualidade para recuperação e manutenção muscular.',
        'Banana: energia, potássio e auxílio à função muscular.',
        'Maca peruana: pode contribuir para disposição, energia e libido.',
        'Ginseng: pode ajudar na energia, concentração e redução da fadiga.',
        'Pasta de amendoim: gorduras saudáveis, proteínas, vitamina E e magnésio; ajuda na saciedade.',
      ],
      nota: 'Maca peruana e ginseng podem ajudar na disposição, mas os resultados são individuais e não substituem a investigação e o tratamento dos fatores hormonais relacionados à SOP e ao uso do DIU.',
    },
  ],
}

export const ALMOCO: Refeicao = {
  id: 'almoco',
  horario: '12:00',
  nome: 'Almoço',
  atalho: 'Almoço',
  emoji: '🍛',
  opcoes: [
    {
      id: 'almoco-1',
      titulo: 'Opção 1',
      alimentos: [
        {
          nome: 'Arroz branco cozido',
          medida: '3 colheres de sopa cheias',
          peso: '75 g',
          substituicoes: [
            {
              nome: 'Batata inglesa cozida',
              medida: '5 colheres de sopa cheias',
              peso: '150 g',
            },
            {
              nome: 'Abóbora moranga cozida ou assada',
              medida: '6 colheres de sopa cheias (picada)',
              peso: '216 g',
            },
            {
              nome: 'Mandioca cozida',
              medida: '2 colheres de sopa cheias',
              peso: '74 g',
            },
            {
              nome: 'Inhame cozido',
              medida: '3 colheres de sopa cheias',
              peso: '105 g',
            },
            {
              nome: 'Macarrão cozido',
              medida: '1 escumadeira média rasa',
              peso: '75 g',
            },
          ],
        },
        {
          nome: 'Peito de frango sem pele grelhado',
          medida: '1 filé médio',
          peso: '100 g',
          substituicoes: [
            {
              nome: 'Patinho refogado',
              medida: '4 colheres de sopa cheias',
              peso: '100 g',
            },
            {
              nome: 'Acém moído cozido',
              medida: '3 colheres de sopa cheias',
              peso: '75 g',
            },
            {
              nome: 'Coxa de frango assada',
              medida: '1 unidade grande',
              peso: '110 g',
            },
          ],
        },
        {
          nome: 'Feijão carioca cozido',
          medida: '4 colheres de sopa cheias',
          peso: '68 g',
          substituicoes: [
            {
              nome: 'Feijão preto cozido',
              medida: '4 colheres de sopa cheias',
              peso: '68 g',
            },
          ],
        },
        {
          nome: 'Legumes na airfryer, vapor ou crus',
          medida: '4 colheres de sopa cheias',
          peso: '80 g',
        },
        { nome: 'Salada de alface', medida: 'À vontade' },
        {
          nome: 'Azeite de oliva extravirgem',
          medida: '1 colher de sobremesa rasa',
          peso: '5 ml',
        },
      ],
    },
  ],
  blocos: [
    {
      titulo: 'Montagem do prato',
      itens: [
        'Metade do prato: salada e legumes',
        'Um quarto: proteína (frango ou carne)',
        'Um quarto: arroz + feijão',
      ],
    },
    {
      titulo: 'Vegetais para variar',
      itens: [
        'Abobrinha',
        'Cenoura',
        'Brócolis',
        'Couve-flor',
        'Vagem',
        'Berinjela',
        'Abóbora',
        'Chuchu',
        'Alface',
        'Rúcula',
        'Agrião',
        'Tomate',
      ],
      nota: 'Podem ser cozidos, refogados, assados ou crus. Não precisa escolher todos — basta chegar a mais ou menos metade do prato com vegetais.',
    },
  ],
}
