import type { LinhaEvolucao } from '../evolucao-table'

export type Composicao = {
  datas: string[]
  linhas: LinhaEvolucao[]
  arquivo?: string
  nota: string
}

export const COMPOSICAO: Composicao = {
  datas: ['14/06/25', '26/07/25', '13/09/25', '02/06/26'],
  arquivo: '/fichas/nutricao/evolucao-corporal.pdf',
  linhas: [
    { parametro: 'Peso', valores: ['60,7 kg', '60,2 kg', '60,7 kg', '57,8 kg'] },
    { parametro: 'IMC', valores: ['23,4', '23,2', '23,4', '22,3'] },
    {
      parametro: '% de gordura',
      valores: ['34,9 %', '33,7 %', '33,6 %', '35,9 %'],
    },
    {
      parametro: 'Massa magra',
      valores: ['39,5 kg', '39,9 kg', '40,3 kg', '37,1 kg'],
    },
    {
      parametro: 'Massa gorda',
      valores: ['21,2 kg', '20,3 kg', '20,4 kg', '20,7 kg'],
    },
    { parametro: 'Cintura', valores: ['72 cm', '72,5 cm', '72 cm', '68,5 cm'] },
    { parametro: 'Busto', valores: ['87 cm', '87 cm', '84,5 cm', '83 cm'] },
    { parametro: 'Quadril', valores: ['97,9 cm', '97 cm', '94 cm', '93,5 cm'] },
    {
      parametro: 'Abdômen',
      valores: ['82,5 cm', '81,5 cm', '80 cm', '78,5 cm'],
    },
    {
      parametro: 'Coxa (dir.)',
      valores: ['54 cm', '55 cm', '56 cm', '50,9 cm'],
    },
    {
      parametro: 'Braço (dir.)',
      valores: ['27,5 cm', '27,5 cm', '28,5 cm', '26 cm'],
    },
    { parametro: 'Pescoço', valores: ['-', '-', '-', '29,8 cm'] },
    {
      parametro: 'Relação cintura/quadril',
      valores: ['0,74', '0,75', '0,77', '0,73'],
    },
  ],
  nota: 'Altura 1,61 m. IMC classificado como Adequado em todas as datas. "Busto" = circunferência do tórax do laudo. Coxa e braço são do lado direito (relaxado). Dobras e o lado esquerdo estão no PDF.',
}
