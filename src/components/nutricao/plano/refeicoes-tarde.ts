import type { Alimento, Porcao, Refeicao } from './types'

const CASTANHA_DO_PARA: Porcao = {
  nome: 'Castanha-do-pará sem sal',
  medida: '2 unidades',
  peso: '8 g',
}

const CASTANHA_DE_CAJU: Alimento = {
  nome: 'Castanha de caju',
  medida: '7 unidades',
  peso: '17,5 g',
  substituicoes: [CASTANHA_DO_PARA],
}

const FRANGO_DESFIADO = (medida: string, peso: string): Porcao => ({
  nome: 'Frango desfiado',
  medida,
  peso,
})

export const LANCHE_DA_TARDE: Refeicao = {
  id: 'lanche-da-tarde',
  horario: '15:00',
  nome: 'Lanche da tarde',
  atalho: 'Lanche',
  emoji: '🍇',
  opcoes: [
    {
      id: 'lanche-1',
      titulo: 'Ovo + fruta',
      alimentos: [
        {
          nome: 'Ovo de galinha cozido',
          medida: '2 unidades médias',
          peso: '100 g',
          substituicoes: [
            { nome: 'Queijo minas frescal', medida: '2 fatias', peso: '60 g' },
          ],
        },
        {
          nome: 'Uva',
          medida: '15 unidades médias',
          peso: '120 g',
          substituicoes: [
            { nome: 'Morango', medida: '8 unidades médias', peso: '96 g' },
            { nome: 'Kiwi', medida: '1 unidade média', peso: '76 g' },
            { nome: 'Ameixa', medida: '1 unidade média', peso: '42 g' },
            { nome: 'Mamão', medida: '8 colheres de sopa cheias', peso: '160 g' },
            { nome: 'Mexerica', medida: '1 unidade média', peso: '125 g' },
            { nome: 'Chocolate 70% cacau', medida: '3 quadrados', peso: '15 g' },
          ],
        },
        CASTANHA_DE_CAJU,
      ],
    },
    {
      id: 'lanche-2',
      titulo: 'YoPRO',
      alimentos: [
        {
          nome: 'Bebida láctea YoPRO banana (15 g de proteína, zero lactose)',
          medida: '1 unidade',
          peso: '250 ml',
        },
        CASTANHA_DE_CAJU,
      ],
    },
    {
      id: 'lanche-3',
      titulo: 'Torrada + atum',
      alimentos: [
        {
          nome: 'Torrada light Magic Toast (Marilan)',
          medida: '6 unidades',
          peso: '18 g',
          substituicoes: [
            {
              nome: 'Torrada fermentação natural (Bauducco)',
              medida: '3 unidades',
              peso: '22,5 g',
            },
          ],
        },
        {
          nome: 'Atum sólido ao natural',
          medida: '3 colheres de sopa cheias',
          peso: '60 g',
        },
        {
          nome: 'Requeijão cremoso light',
          medida: '1 colher de sopa',
          peso: '20 g',
        },
      ],
    },
  ],
  blocos: [
    {
      titulo: 'Benefícios funcionais',
      itens: [
        'Ovo: aumenta a saciedade e ajuda a preservar a massa muscular durante o emagrecimento.',
        'Uva: antioxidantes para a circulação e uma opção prática pra matar a vontade de doce.',
        'Castanhas: controlam a fome e trazem nutrientes importantes para o equilíbrio hormonal.',
      ],
    },
  ],
}

export const JANTAR: Refeicao = {
  id: 'jantar',
  horario: '19:00',
  nome: 'Jantar',
  atalho: 'Jantar',
  emoji: '🍝',
  opcoes: [
    {
      id: 'jantar-1',
      titulo: 'Pão + patinho',
      alimentos: [
        {
          nome: 'Bisnaga (Seven Boys)',
          medida: '3 unidades',
          peso: '51 g',
          substituicoes: [
            {
              nome: 'Pão tortilha 35% integral (Rap10)',
              medida: '1 unidade',
              peso: '40 g',
            },
            { nome: 'Pão francês', medida: '1 unidade', peso: '50 g' },
          ],
        },
        {
          nome: 'Patinho refogado',
          medida: '4 colheres de sopa cheias',
          peso: '80 g',
          substituicoes: [FRANGO_DESFIADO('4 colheres de sopa cheias', '80 g')],
        },
        {
          nome: 'Requeijão cremoso light',
          medida: '1,5 colher de sopa',
          peso: '30 g',
          substituicoes: [
            { nome: 'Creme de ricota', medida: '2 colheres de sopa', peso: '40 g' },
          ],
        },
        { nome: 'Suco de uva integral', medida: '150 ml' },
      ],
    },
    {
      id: 'jantar-2',
      titulo: 'Macarrão + patinho',
      alimentos: [
        {
          nome: 'Macarrão cozido',
          medida: '5 colheres de sopa cheias',
          peso: '125 g',
          substituicoes: [
            {
              nome: 'Macarrão integral cozido',
              medida: '2,5 colheres de servir cheias',
              peso: '125 g',
            },
          ],
        },
        {
          nome: 'Patinho refogado',
          medida: '5 colheres de sopa cheias',
          peso: '100 g',
          substituicoes: [
            FRANGO_DESFIADO('5 colheres de sopa cheias', '100 g'),
            {
              nome: 'Acém moído cozido',
              medida: '3,5 colheres de sopa cheias',
              peso: '87,5 g',
            },
          ],
        },
        {
          nome: 'Molho de tomate caseiro',
          medida: '3 colheres de sopa',
          peso: '60 g',
        },
        { nome: 'Suco de uva integral', medida: '150 ml' },
      ],
    },
  ],
  blocos: [
    {
      titulo: 'Benefícios funcionais',
      itens: [
        'Pão: energia para o dia, equilibrado quando combinado com proteína.',
        'Patinho: ótima fonte de proteína, aumenta a saciedade e reduz a fome à noite.',
        'Requeijão light: sabor e cremosidade com menos gordura.',
        'Suco de uva integral: antioxidantes para a saúde cardiovascular.',
      ],
    },
  ],
}
