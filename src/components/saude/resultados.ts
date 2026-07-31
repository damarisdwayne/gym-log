import type { Coleta, Dica } from './types'

export const COLETAS: Coleta[] = [
  {
    id: 'sangue-2026-02',
    titulo: 'Sangue',
    data: '25/02/2026',
    laboratorio: 'Hermes Pardini',
    arquivo: '/fichas/saude/sangue-fev-2026.pdf',
    grupos: [
      {
        categoria: 'Sangue & inflamação',
        linhas: [
          { exame: 'Hemoglobina', valor: '13,4 g/dL', referencia: '12,0–16,0' },
          { exame: 'Hematócrito', valor: '36,8 %', referencia: '36,0–46,0' },
          { exame: 'Leucócitos', valor: '6.340 /mm³', referencia: '4.000–11.000' },
          {
            exame: 'Plaquetas',
            valor: '286.000 /mm³',
            referencia: '150.000–450.000',
          },
        ],
      },
      {
        categoria: 'Rim',
        linhas: [
          {
            exame: 'Creatinina',
            valor: '0,76 mg/dL',
            referencia: '0,40–1,00 · TFG >90',
          },
          { exame: 'Ureia', valor: '28,5 mg/dL', referencia: '19,0–49,0' },
        ],
      },
      {
        categoria: 'Ferro',
        linhas: [
          { exame: 'Ferro sérico', valor: '138 mcg/dL', referencia: '50–170' },
          { exame: 'Ferritina', valor: '78,4 ng/mL', referencia: '10,0–271,0' },
        ],
      },
      {
        categoria: 'Açúcar & metabolismo',
        linhas: [
          { exame: 'Glicose em jejum', valor: '79 mg/dL', referencia: '60–99' },
          {
            exame: 'Hemoglobina glicada (HbA1c)',
            valor: '5,0 %',
            referencia: '< 5,7',
          },
          { exame: 'Insulina basal', valor: '3,2 µUI/mL', referencia: '3,0–25,0' },
          {
            exame: 'HOMA-IR (calculado)',
            valor: '0,62',
            referencia: 'glicose × insulina ÷ 405',
          },
        ],
      },
      {
        categoria: 'Lipídios & coração',
        linhas: [
          { exame: 'Colesterol total', valor: '177 mg/dL', referencia: '< 190' },
          { exame: 'Colesterol HDL', valor: '59 mg/dL', referencia: '> 40' },
          { exame: 'Triglicérides', valor: '61 mg/dL', referencia: '< 150' },
        ],
      },
      {
        categoria: 'Vitaminas & minerais',
        linhas: [
          {
            exame: 'Vitamina D (25-OH)',
            valor: '31,5 ng/mL',
            referencia: 'ideal 30–60',
          },
          { exame: 'Vitamina B12', valor: '556 pg/mL', referencia: '172–890' },
          { exame: 'Cálcio', valor: '9,7 mg/dL', referencia: '8,6–10,9' },
          { exame: 'Zinco', valor: '89,3 mcg/dL', referencia: '60,0–120,0' },
        ],
      },
      {
        categoria: 'Hormônios',
        linhas: [
          { exame: 'T4 livre', valor: '1,28 ng/dL', referencia: '0,89–1,61' },
          {
            exame: 'Testosterona total',
            valor: '35 ng/dL',
            referencia: 'mulher 12–60',
          },
        ],
      },
      {
        categoria: 'Sorologias · ISTs e hepatites',
        linhas: [
          {
            exame: 'HIV (Ag/Ac 4ª geração)',
            valor: 'Não reagente',
            referencia: 'não reagente',
          },
          {
            exame: 'Sífilis (anticorpos totais)',
            valor: 'Não reagente',
            referencia: 'índice < 1,00 (deu 0,07)',
          },
          {
            exame: 'HBsAg (hepatite B)',
            valor: 'Não reagente',
            referencia: 'índice < 1,00 (deu 0,37)',
          },
          {
            exame: 'Anti-HCV (hepatite C)',
            valor: 'Não reagente',
            referencia: 'índice < 1,00 (deu 0,11)',
          },
        ],
      },
    ],
    nota: 'B12 saiu nos dois pedidos (556 e 500 pg/mL) — mantive um valor. Da lista, não foram feitos nesta coleta: PCR ultrassensível, LDL/VLDL, ApoB, Lp(a), fosfatase alcalina, albumina, cortisol e TSH.',
  },
]


export const DICAS: Dica[] = [
  {
    id: 'probiotico',
    titulo: '🦠 Probiótico com antibiótico',
    paragrafos: [
      'Antibiótico derruba também as bactérias boas do intestino — daí a diarreia e o desconforto. Um probiótico ajuda a proteger a microbiota, mas não é tudo igual: o efeito depende da cepa, da dose e de qual antibiótico você está usando.',
    ],
    lista: {
      titulo: 'Cepas citadas no vídeo:',
      itens: [
        'Saccharomyces boulardii',
        'Lactobacillus rhamnosus GG',
        'Lactobacillus reuteri',
        'Bacillus clausii',
      ],
    },
    link: {
      label: '@nutricionistavick',
      url: 'https://www.instagram.com/reel/DbB744bRm9v/',
    },
  },
  {
    id: 'fit',
    titulo: '🧫 FIT — rastreio de câncer de intestino',
    paragrafos: [
      'O Teste Imunoquímico Fecal (FIT) entrou no SUS em 2026 (Ministério da Saúde) como rastreamento de câncer colorretal pra pessoas de 50 a 75 anos sem sintomas.',
      'Você coleta uma amostra de fezes em casa e o teste detecta sangue oculto (invisível a olho nu), que pode indicar pólipos ou lesões iniciais. Deu positivo → encaminha pra colonoscopia (padrão-ouro, que confirma e pode remover pólipos na hora).',
    ],
    aviso:
      '⚠️ Não substitui avaliação médica; pode dar falso-positivo ou falso-negativo. Câncer colorretal é o 2º mais frequente no país (+45 mil casos/ano — INCA).',
    link: {
      label: '@minsaude · INCA',
      url: 'https://www.instagram.com/p/DbGY6JPOmlP/',
    },
  },
]
