import type { GrupoExames } from './types'

export const LISTA_CLINICO: GrupoExames[] = [
  {
    categoria: 'Hemograma',
    exames: [
      {
        nome: 'Hemograma completo',
        descricao:
          'Conta e avalia glóbulos vermelhos, brancos e plaquetas. Rastreia anemia, infecção e alterações do sangue.',
      },
    ],
  },
  {
    categoria: 'Rim',
    exames: [
      {
        nome: 'Ureia e creatinina',
        descricao:
          'Avaliam a função dos rins. A creatinina serve pra estimar a taxa de filtração dos rins (TFG).',
      },
    ],
  },
  {
    categoria: 'Eletrólitos',
    exames: [
      {
        nome: 'Sódio',
        abbr: 'Na',
        descricao:
          'Principal eletrólito do sangue. Ligado a hidratação, pressão arterial e função dos rins.',
      },
      {
        nome: 'Potássio',
        abbr: 'K',
        descricao:
          'Eletrólito essencial pra função dos músculos e do coração (ritmo cardíaco).',
      },
    ],
  },
  {
    categoria: 'Ferro',
    exames: [
      {
        nome: 'Perfil de ferro',
        abbr: 'ferro · ferritina · saturação',
        descricao:
          'Estoque e disponibilidade de ferro no corpo. Ferritina baixa indica falta de ferro; alta pode ser inflamação ou sobrecarga.',
      },
    ],
  },
  {
    categoria: 'Açúcar & metabolismo',
    exames: [
      {
        nome: 'Glicemia em jejum',
        descricao: 'Nível de açúcar (glicose) no sangue em jejum. Foto do momento.',
      },
      {
        nome: 'Hemoglobina glicada',
        abbr: 'HbA1c',
        descricao:
          'Média da glicose dos últimos ~2 a 3 meses. Mostra a tendência, não só o dia da coleta.',
      },
      {
        nome: 'Insulina em jejum + HOMA-IR',
        descricao:
          'Índice de resistência à insulina (calculado da glicose e da insulina em jejum). Pede os dois juntos — sinaliza tendência ao diabetes anos antes de a glicemia se alterar.',
      },
    ],
  },
  {
    categoria: 'Lipídios & coração',
    exames: [
      {
        nome: 'Lipidograma completo',
        descricao:
          'Perfil de gorduras no sangue: colesterol total, HDL, LDL, VLDL e triglicérides — tudo num exame só.',
      },
      {
        nome: 'Apolipoproteína B',
        abbr: 'ApoB',
        descricao:
          'Conta o número de partículas que podem se depositar e formar placa nas artérias (aterogênicas). Marcador de risco cardiovascular mais preciso que olhar só o LDL.',
      },
      {
        nome: 'Lipoproteína(a)',
        abbr: 'Lp(a)',
        descricao:
          'Fator de risco cardiovascular quase todo genético. Costuma-se medir ao menos uma vez na vida.',
      },
      {
        nome: 'PCR ultrassensível',
        abbr: 'hs-CRP',
        descricao:
          'Mede inflamação de baixo grau no sangue. Entra aqui porque a inflamação crônica participa da formação de placa nas artérias, então funciona como marcador de risco cardiovascular. ⚠️ Não mede diretamente "entupimento" — quem mostra isso são os exames de imagem do coração (ex.: escore de cálcio).',
      },
    ],
  },
  {
    categoria: 'Fígado & proteína',
    exames: [
      {
        nome: 'TGO e TGP',
        abbr: 'AST · ALT',
        descricao:
          'Enzimas que ficam dentro das células do fígado. Quando sobem no sangue, é sinal de que as células hepáticas estão sofrendo (gordura no fígado, álcool, remédio, hepatite).',
      },
      {
        nome: 'Gama-GT',
        abbr: 'GGT',
        descricao:
          'Enzima das vias biliares. Sobe bastante com álcool e com fígado gorduroso. Junto da fosfatase alcalina, ajuda a separar problema de fígado de problema de osso.',
      },
      {
        nome: 'Fosfatase alcalina',
        descricao:
          'Enzima ligada a fígado, vias biliares e ossos. Alterações ajudam a apontar onde investigar.',
      },
      {
        nome: 'Albumina',
        descricao:
          'Principal proteína do sangue. Reflete estado nutricional e função do fígado.',
      },
    ],
  },
  {
    categoria: 'Vitaminas & minerais',
    exames: [
      {
        nome: 'Vitamina D',
        abbr: '25-OH',
        descricao:
          'Nível de vitamina D no corpo. Importante pra ossos, imunidade e humor.',
      },
      {
        nome: 'Vitamina B12',
        descricao:
          'Essencial pros nervos e pra formação do sangue. Falta é comum em dieta vegetariana/vegana.',
      },
      {
        nome: 'Ácido fólico',
        abbr: 'folato',
        descricao:
          'Trabalha junto com a B12 na formação das células do sangue. Falta dos dois dá o mesmo tipo de anemia — por isso costumam ser pedidos no mesmo pacote.',
      },
      {
        nome: 'Zinco e cálcio',
        descricao:
          'Minerais importantes pra imunidade, enzimas (zinco) e ossos/músculos (cálcio).',
      },
    ],
  },
  {
    categoria: 'Hormônios',
    exames: [
      {
        nome: 'TSH + T4 livre + T3',
        descricao:
          'Avaliam a tireoide. O TSH é o rastreio principal; o T4 livre é o hormônio em si; o T3 é a forma mais ativa. Metabolismo lento, cansaço e queda de cabelo podem ser tireoide, não "idade".',
      },
      {
        nome: 'Testosterona total e livre',
        descricao:
          'Hormônio androgênico. A fração livre é a que está ativa no corpo.',
      },
      {
        nome: 'Cortisol',
        descricao:
          'Hormônio do estresse. Varia muito com o horário — normalmente coletado de manhã (pico matinal).',
      },
    ],
  },
  {
    categoria: 'Sorologias · ISTs e hepatites',
    exames: [
      { nome: 'Sorologia HIV', descricao: 'Detecta infecção pelo HIV.' },
      {
        nome: 'Sorologia sífilis',
        abbr: 'VDRL',
        descricao: 'Rastreia sífilis (VDRL e/ou teste treponêmico).',
      },
      {
        nome: 'HBsAg',
        abbr: 'Hepatite B',
        descricao:
          'Antígeno de superfície da hepatite B. Positivo indica infecção ativa.',
      },
      {
        nome: 'Anti-HCV',
        abbr: 'Hepatite C',
        descricao:
          'Anticorpo contra a hepatite C. Rastreia contato/infecção pelo vírus.',
      },
    ],
  },
]

export const CARDIACOS: GrupoExames[] = [
  {
    categoria: 'Coração · rastreio básico',
    exames: [
      {
        nome: 'Eletrocardiograma',
        abbr: 'ECG',
        descricao:
          'Registra a atividade elétrica do coração em poucos minutos. Mostra ritmo, arritmias e sinais de sobrecarga ou de infarto antigo. Barato e rápido.',
      },
      {
        nome: 'Ecocardiograma',
        abbr: 'eco',
        descricao:
          'Ultrassom do coração: mostra o tamanho das câmaras, as válvulas e a força de bombeamento (fração de ejeção). Complementa o ECG — um vê a elétrica, o outro vê a estrutura.',
      },
    ],
  },
  {
    categoria: 'Coração · imagem avançada',
    exames: [
      {
        nome: 'Escore de cálcio',
        descricao:
          'Tomografia rápida (sem contraste) que mede o cálcio depositado nas artérias do coração. Quanto mais cálcio, mais placa — ajuda a estimar o risco cardiovascular.',
      },
      {
        nome: 'Angiotomografia das coronárias',
        abbr: 'angio-TC',
        descricao:
          'Tomografia com contraste que mostra as artérias do coração por dentro — enxerga estreitamento/obstrução. Não invasiva.',
      },
      {
        nome: 'Coronariografia',
        abbr: 'cateterismo',
        descricao:
          'Exame invasivo: um cateter injeta contraste direto nas coronárias e filma o fluxo. Padrão-ouro pra confirmar (e às vezes já tratar) obstruções. Feito em hospital.',
      },
    ],
  },
]

export const ALEM_DO_SANGUE: GrupoExames[] = [
  {
    categoria: 'Abdômen · imagem',
    exames: [
      {
        nome: 'Ultrassom de abdômen total',
        descricao:
          'Olha fígado, vesícula, vias biliares, pâncreas, baço e rins de uma vez. É o exame que flagra fígado gorduroso, pedra na vesícula, cistos e nódulos — coisas que costumam não dar sintoma nenhum.',
      },
    ],
  },
  {
    categoria: 'Urina & rim',
    exames: [
      {
        nome: 'Urina tipo 1',
        abbr: 'EAS',
        descricao:
          'Exame simples e barato: procura proteína, sangue, glicose e sinais de infecção na urina. Perda de proteína é um dos primeiros avisos de que o rim está sofrendo.',
      },
      {
        nome: 'Urocultura',
        descricao:
          'Cultura da urina: identifica qual bactéria está causando a infecção e a quais antibióticos ela responde (antibiograma).',
      },
    ],
  },
  {
    categoria: 'Pulmão',
    exames: [
      {
        nome: 'Espirometria',
        abbr: 'prova de função pulmonar',
        descricao:
          'Você sopra num aparelho que mede quanto ar cabe e com que velocidade sai. Diagnostica e acompanha asma e DPOC. Especialmente indicado pra quem fuma ou fumou.',
      },
    ],
  },
  {
    categoria: 'Osso & composição corporal',
    exames: [
      {
        nome: 'DEXA',
        abbr: 'densitometria · composição corporal',
        descricao:
          'Raio-X de baixa dose que separa osso, massa magra e gordura com precisão — e mostra onde a gordura está (inclusive a visceral). É o padrão-ouro tanto pra osteoporose quanto pra composição corporal; balança de bioimpedância só estima.',
      },
    ],
  },
]
