import type { MacrosReceita } from '../../receitas/types'
import { formatarGramas } from './card-receita'

export type ReceitaCompartilhavel = {
  nome: string
  macros?: MacrosReceita
  porcao?: string
  link?: string
  ingredientes: { titulo?: string; itens: string[] }[]
  passos: string[]
  dica?: string
}

const linhaMacros = ({ calorias, proteinas, carboidratos, lipideos }: MacrosReceita) =>
  `🔥 ${calorias} kcal · 💪 ${formatarGramas(proteinas)} prot · 🍞 ${formatarGramas(carboidratos)} carb · 🥑 ${formatarGramas(lipideos)} gord`

export const textoReceita = ({
  nome,
  macros,
  porcao,
  link,
  ingredientes,
  passos,
  dica,
}: ReceitaCompartilhavel) =>
  [
    `*${nome}*`,
    macros && linhaMacros(macros),
    porcao && `_${porcao}_`,
    '',
    '*Ingredientes*',
    ...ingredientes.flatMap((grupo) => [
      ...(grupo.titulo ? [`_${grupo.titulo}_`] : []),
      ...grupo.itens.map((item) => `• ${item}`),
    ]),
    ...(passos.length
      ? ['', '*Modo de preparo*', ...passos.map((passo, indice) => `${indice + 1}. ${passo}`)]
      : []),
    ...(dica ? ['', `💡 ${dica}`] : []),
    ...(link ? ['', `🔗 ${link}`] : []),
  ]
    .filter((linha) => linha !== undefined)
    .join('\n')
