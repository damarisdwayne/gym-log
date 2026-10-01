import {
  calcularGordura,
  parseNumero,
  type DadosCalculadora,
} from '../calculadora'
import { CAMPOS_MEDICAO } from './constants'
import type { Medicao } from './types'

export const criarMedicao = (
  data: string,
  dados: DadosCalculadora,
): Medicao => {
  const valores: Medicao['valores'] = {}
  for (const { campo } of CAMPOS_MEDICAO) {
    const valor =
      campo === 'gordura'
        ? (calcularGordura(dados)?.percentual ?? parseNumero(dados.gordura))
        : parseNumero(dados[campo])
    if (valor !== null) valores[campo] = Math.round(valor * 10) / 10
  }
  return { data, valores }
}

export const formatarData = (iso: string) => {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano.slice(2)}`
}
