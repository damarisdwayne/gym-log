import type { Ficha, MesFichas } from './types'

const BASE = '/fichas/glow'

type Local = 'academia' | 'casa'

type Nivel = 'iniciante' | 'intermediario' | 'avancado'

type Tipo = 'completo' | 'express'

type Vezes = 3 | 4 | 5 | 6

type ParteFullBody = 'corpo-todo' | 'inferiores' | 'superiores'

type Musculo = 'gluteos' | 'ombros' | 'costas'

type NivelIsolado = 'iniciante' | 'intermediario-avancado'

type Plano = { local: Local; nivel?: Nivel }

const LOCAL_LABEL: Record<Local, string> = { academia: 'Academia', casa: 'Em casa' }

const NIVEL_LABEL: Record<Nivel | NivelIsolado, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
  'intermediario-avancado': 'Intermediário + avançado',
}

const TIPO_DESCRICAO: Record<Tipo, string> = { completo: 'treino completo', express: 'até 1 hora' }

const PARTE_LABEL: Record<ParteFullBody, string> = {
  'corpo-todo': 'Corpo todo',
  inferiores: 'Inferiores',
  superiores: 'Superiores',
}

const PARTE_DESCRICAO: Record<ParteFullBody, string> = {
  'corpo-todo': 'treino único para o corpo todo',
  inferiores: 'quadríceps, posteriores, glúteos e panturrilhas',
  superiores: 'costas, peito, ombros, braços e abdômen',
}

const MUSCULO_LABEL: Record<Musculo, string> = { gluteos: 'Glúteos', ombros: 'Ombros', costas: 'Costas' }

const rotuloPlano = ({ local, nivel }: Plano) => (nivel ? NIVEL_LABEL[nivel] : LOCAL_LABEL[local])

const arquivo = (mes: string, caminho: string, ficha: Omit<Ficha, 'id' | 'arquivo' | 'tipo'>): Ficha => ({
  id: `glow-${mes}-${caminho.replace('/', '-')}`,
  tipo: 'planilha',
  arquivo: `${BASE}/${mes}/${caminho}.pdf`,
  ...ficha,
})

const prefixoSemanal = ({ local, nivel }: Plano, tipo: Tipo) => {
  if (local === 'casa') return `casa/${tipo}`
  return tipo === 'express' ? `academia/${nivel}-express` : `academia/${nivel}`
}

export const semanal = (mes: string, plano: Plano, tipo: Tipo, tamanhos: Partial<Record<Vezes, string>>) =>
  (Object.entries(tamanhos) as [string, string][]).map(([vezes, tamanho]) =>
    arquivo(mes, `${prefixoSemanal(plano, tipo)}-${vezes}x`, {
      titulo: tipo === 'express' ? `Express · ${vezes}x` : `${vezes}x na semana`,
      descricao: `${rotuloPlano(plano)} · ${TIPO_DESCRICAO[tipo]}, com vídeos`,
      tamanho,
    }),
  )

export const fullBody = (mes: string, plano: Plano, tamanhos: Record<ParteFullBody, string>) =>
  (Object.entries(tamanhos) as [ParteFullBody, string][]).map(([parte, tamanho]) =>
    arquivo(mes, `${plano.local}/full-body-${plano.nivel ? `${plano.nivel}-` : ''}${parte}`, {
      titulo: `Full body · ${PARTE_LABEL[parte]}`,
      descricao: `${rotuloPlano(plano)} · ${PARTE_DESCRICAO[parte]}`,
      tamanho,
    }),
  )

export const isolados = (mes: string, tamanhos: Record<Musculo, Record<NivelIsolado, string>>) =>
  (Object.entries(tamanhos) as [Musculo, Record<NivelIsolado, string>][]).flatMap(([musculo, porNivel]) =>
    (Object.entries(porNivel) as [NivelIsolado, string][]).map(([nivel, tamanho]) =>
      arquivo(mes, `isolados/${musculo}-${nivel}`, {
        titulo: `Isolado · ${MUSCULO_LABEL[musculo]}`,
        descricao: `${NIVEL_LABEL[nivel]} · ênfase em ${MUSCULO_LABEL[musculo].toLowerCase()}`,
        tamanho,
      }),
    ),
  )

export const mesGlow = (mes: string, ...grupos: Ficha[][]): MesFichas => ({
  id: `glow-${mes}`,
  label: `Mês ${Number(mes.slice(-2))}`,
  fichas: grupos.flat(),
})

export const guiaCardio = (tamanho: string): Ficha => ({
  id: 'glow-geral-cardio',
  titulo: 'Guia de cardio',
  descricao: 'Contínuo, intervalado e HIIT por equipamento e nível',
  tipo: 'guia',
  tamanho,
  arquivo: `${BASE}/geral/cardio.pdf`,
})

export const alongamentos = (tamanho: string): Ficha => ({
  id: 'glow-geral-alongamentos',
  titulo: 'Mobilidade e alongamentos',
  descricao: '5 rotinas, 30 exercícios com vídeo',
  tipo: 'guia',
  tamanho,
  arquivo: `${BASE}/geral/alongamentos.pdf`,
})

export const ebookAlimenteSe = (tamanho: string): Ficha => ({
  id: 'glow-geral-ebook',
  titulo: 'Alimente-se como eu',
  descricao: 'Receitas e lista de compras da Isa',
  tipo: 'ebook',
  tamanho,
  arquivo: `${BASE}/geral/ebook-alimente-se-como-eu.pdf`,
})
