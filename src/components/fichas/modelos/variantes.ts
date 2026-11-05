import type { Dimensao, Modelo, SelecaoVariante, Variante } from './types'

export const chaveDe = (valores: SelecaoVariante) =>
  Object.entries(valores)
    .map(([dimensao, valor]) => `${dimensao}=${valor}`)
    .join('|')

const prioridade = (dimensoes: Dimensao[], selecao: SelecaoVariante) => [
  ...Object.keys(selecao),
  ...dimensoes.map(({ id }) => id).filter((id) => !(id in selecao)),
]

const melhorVariante = (variantes: Variante[], dimensoes: Dimensao[], selecao: SelecaoVariante) =>
  prioridade(dimensoes, selecao).reduce((candidatas, id) => {
    if (selecao[id] === undefined) return candidatas
    const iguais = candidatas.filter(({ valores }) => valores[id] === selecao[id])
    return iguais.length ? iguais : candidatas
  }, variantes)[0]

export const varianteDe = (modelo: Modelo, selecao: SelecaoVariante | string = {}) => {
  const { variantes, dimensoes = [] } = modelo
  if (!variantes?.length) return undefined
  if (typeof selecao === 'string') return variantes.find(({ chave }) => chave === selecao) ?? variantes[0]
  return melhorVariante(variantes, dimensoes, selecao)
}

export const resolverModelo = (modelo: Modelo, selecao?: SelecaoVariante | string): Modelo => {
  const variante = varianteDe(modelo, selecao)
  if (!variante) return modelo
  return {
    ...modelo,
    treinos: variante.treinos,
    arquivo: variante.arquivo ?? modelo.arquivo,
    cronograma: variante.cronograma,
    variantes: undefined,
    dimensoes: undefined,
  }
}

export const rotuloVariante = ({ dimensoes = [] }: Modelo, variante?: Variante) =>
  variante &&
  dimensoes
    .map(({ id, opcoes }) => opcoes.find(({ valor }) => valor === variante.valores[id])?.rotulo)
    .filter(Boolean)
    .join(' · ')

export const resumoDimensoes = ({ dimensoes = [] }: Modelo) =>
  dimensoes.map(({ opcoes }) => opcoes.map(({ rotulo }) => rotulo).join(' · ')).join(' | ')

export const ehModelo = (modelo: Modelo, id?: string) =>
  Boolean(id) && (modelo.id === id || Boolean(id && modelo.idsAnteriores?.includes(id)))
