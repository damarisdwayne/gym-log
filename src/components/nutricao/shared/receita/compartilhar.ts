import { useState } from 'react'
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

const compartilhar = async (titulo: string, texto: string) => {
  if (navigator.share) {
    try {
      await navigator.share({ title: titulo, text: texto })
      return false
    } catch (erro) {
      if (erro instanceof DOMException && erro.name === 'AbortError') return false
    }
  }
  await navigator.clipboard.writeText(texto)
  return true
}

export const useCompartilhar = () => {
  const [copiado, setCopiado] = useState(false)

  const enviar = async (receita: ReceitaCompartilhavel) => {
    try {
      if (!(await compartilhar(receita.nome, textoReceita(receita)))) return
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      setCopiado(false)
    }
  }

  return { copiado, enviar }
}
