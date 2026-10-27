import type { Porcao } from '../types'

export const porcao = (nome: string, medida: string, peso?: string): Porcao => ({
  nome,
  medida,
  peso,
})

export const A_VONTADE = 'À vontade'

export const trocasAveia = (colheres: 1 | 2): Porcao[] => {
  const medida = colheres === 1 ? '1 colher de sopa cheia' : '2 colheres de sopa cheias'
  const gramas = (valor: number) => `${valor * colheres} g`
  return [
    porcao('Farinha de aveia', medida, gramas(18)),
    porcao('Aveia em flocos', medida, gramas(15)),
    porcao('Semente de chia', colheres === 1 ? '1 colher de sopa' : '2 colheres de sopa', gramas(10)),
    porcao('Semente de linhaça', medida, gramas(15)),
    porcao('Farinha de linhaça', medida, gramas(15)),
  ]
}

export const TROCAS_BANANA: Porcao[] = [
  porcao('Uva Itália', '1 cacho pequeno', '170 g'),
  porcao('Maçã verde', '1 unidade pequena', '170 g'),
  porcao('Laranja lima', '1 unidade média', '180 g'),
  porcao('Pera', '1,5 unidade média', '165 g'),
  porcao('Abacaxi', '2 fatias médias', '150 g'),
  porcao('Goiaba vermelha', '1 unidade média', '130 g'),
  porcao('Banana prata', '2 unidades médias', '80 g'),
  porcao('Morango', '20 unidades médias', '240 g'),
  porcao('Melancia', '1,5 fatia média', '300 g'),
  porcao('Kiwi', '1 unidade', '75 g'),
  porcao('Mamão', '1 fatia média', '170 g'),
  porcao('Tangerina Ponkã', '1 unidade média', '135 g'),
  porcao('Melão', '3 fatias grandes', '345 g'),
  porcao('Manga', '1 xícara de chá, fatiada', '132 g'),
  porcao('Abacate', '1 colher de sopa cheia', '45 g'),
]

export const TROCAS_UVA_RUBI: Porcao[] = [
  porcao('Laranja lima', '1 unidade pequena', '90 g'),
  porcao('Pera', '1 unidade média', '110 g'),
  porcao('Abacaxi', '1 fatia média', '75 g'),
  porcao('Goiaba vermelha', '1 unidade média', '130 g'),
  porcao('Banana prata', '1 unidade média', '40 g'),
  porcao('Morango', '6 unidades médias', '72 g'),
  porcao('Melancia', '1 fatia média', '200 g'),
  porcao('Kiwi', '1 unidade', '75 g'),
  porcao('Uva Itália', '5 unidades médias', '40 g'),
  porcao('Mamão', '1 fatia pequena', '80 g'),
]

export const TROCAS_LEITE: Porcao[] = [
  porcao('Leite desnatado UHT (Piracanjuba)', '1 copo', '200 ml'),
  porcao('Leite de soja', '400 ml'),
  porcao('Leite semidesnatado (Paulista)', '1 copo americano pequeno', '165 ml'),
]

export const TROCAS_ARROZ: Porcao[] = [
  porcao('Purê de batata-doce (Pronto Light)', '4,9 colheres de sopa', '123,5 g'),
  porcao('Purê de batata inglesa', '2,8 colheres de servir cheias', '225,9 g'),
  porcao('Batata-doce cozida', '2,3 fatias médias', '158,1 g'),
  porcao('Batata inglesa cozida', '5,6 escumadeiras cheias', '282,4 g'),
  porcao('Macarrão ao sugo', '1,2 pegador', '180 g'),
  porcao('Mandioca cozida', '1,3 pedaço médio', '127,1 g'),
  porcao('Arroz integral cozido', '1,7 escumadeira cheia', '144 g'),
]

export const TROCAS_FEIJAO: Porcao[] = [
  porcao('Ervilha cozida', '2 colheres de servir cheias', '76 g'),
  porcao('Grão-de-bico cozido', '2 colheres de sopa', '48 g'),
  porcao('Lentilha cozida', '2,5 colheres de sopa cheias', '67,5 g'),
  porcao('Feijão preto cozido', '1,5 concha rasa', '120 g'),
  porcao('Feijão branco cozido', '3 colheres de sopa cheias', '51 g'),
  porcao('Feijão fradinho cozido', '1,5 concha rasa', '120 g'),
  porcao('Milho verde cozido', '3 colheres de sobremesa cheias', '51 g'),
]

export const TROCAS_FRANGO: Porcao[] = [
  porcao('Coxa de frango sem pele cozida', '3 unidades médias', '150 g'),
  porcao(
    'Carne (alcatra, contrafilé, coxão mole, filé mignon, lagarto, patinho) com molho de tomate',
    '1,4 bife grande',
    '140 g',
  ),
  porcao('Carne de porco cozida', '6 cubos', '150 g'),
  porcao('Carne (músculo, paleta) cozida com molho de tomate', '7 pedaços', '140 g'),
  porcao('Frango sem pele grelhado/assado', '2,5 sobrecoxas médias', '162,5 g'),
  porcao('Coxa de frango sem pele assada', '2 unidades médias', '130 g'),
  porcao('Sobrecoxa de frango sem pele assada', '1,5 unidade', '97,5 g'),
  porcao('Asa de frango com pele assada', '3 unidades', '120 g'),
  porcao('Carne seca cozida', '5 colheres de sopa cheias (picada)', '90 g'),
  porcao('Estrogonofe de carne', '2,5 colheres de sopa cheias', '150 g'),
  porcao('Estrogonofe de frango', '6 colheres de sopa cheias', '150 g'),
  porcao('Bisteca de porco assada', '2 fatias médias', '220 g'),
  porcao('Carne moída refogada', '5,5 colheres de sopa', '137,5 g'),
  porcao('Frango desfiado', '9 colheres de sopa cheias', '180 g'),
]

export const TROCAS_ABOBORA: Porcao[] = [
  porcao('Cenoura cozida', '3 colheres de arroz cheias (picada)', '120 g'),
  porcao('Jiló', '2 colheres de sopa cheias', '90 g'),
  porcao('Quiabo cozido', '5 colheres de sopa cheias', '100 g'),
  porcao('Rabanete', A_VONTADE),
  porcao('Abobrinha italiana', '4 colheres de sopa cheias (picada)', '120 g'),
  porcao('Abóbora cabotiá cozida', '2 colheres de sopa cheias', '72 g'),
  porcao('Vagem cozida', '5 colheres de sopa cheias', '100 g'),
  porcao('Chuchu cozido', '5 colheres de sopa (picado)', '100 g'),
  porcao('Beterraba', '3 colheres de sopa cheias (ralada)', '75 g'),
]

export const TROCAS_ALFACE: Porcao[] = [
  'Agrião',
  'Rúcula',
  'Couve-flor cozida',
  'Espinafre cozido',
  'Couve manteiga cozida',
  'Almeirão',
  'Brócolis cozido',
  'Tomate',
  'Cebola roxa',
  'Cebola',
].map((nome) => porcao(nome, A_VONTADE))

export const TROCAS_CASTANHA: Porcao[] = [
  porcao('Noz', '2 unidades', '10 g'),
  porcao('Amêndoa', '12 unidades', '12 g'),
  porcao('Amendoim', '1 colher de sopa rasa', '13 g'),
  porcao('Semente de linhaça', '2 colheres de sobremesa cheias', '20 g'),
  porcao('Castanha-do-pará', '3 unidades', '12 g'),
]

export const TROCAS_PAO: Porcao[] = [
  porcao('Pão de hambúrguer (Plusvita)', '1 unidade', '50 g'),
  porcao('Pão francês', '1 unidade', '50 g'),
  porcao('Pão de forma integral', '2 fatias', '50 g'),
  porcao('Pão bisnaguinha', '2 unidades', '40 g'),
  porcao('Pão de forma', '2 fatias', '50 g'),
  porcao('Pão sírio', '1 unidade', '60 g'),
]

export const TROCAS_MUCARELA: Porcao[] = [porcao('Queijo cheddar light', '2 unidades', '30 g')]

export const TROCAS_MUCARELA_RAP: Porcao[] = [
  porcao('Queijo cheddar light', '1 unidade', '15 g'),
  porcao('Cream cheese light', '½ colher de sopa cheia', '15 g'),
  porcao('Requeijão light (Danúbio)', '½ colher de sopa cheia', '15 g'),
  porcao('Creme de ricota', '0,8 colher de sopa', '15 g'),
  porcao('Queijo minas frescal', '½ fatia', '15 g'),
  porcao('Maionese light (Hellmann’s)', '1 colher de sopa', '12 g'),
]
