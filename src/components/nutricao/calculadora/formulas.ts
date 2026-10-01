import { FATOR_ATIVIDADE, REGRA_OBJETIVO } from './constants'
import type {
  DadosCalculadora,
  ResultadoCalorias,
  ResultadoGordura,
} from './types'

export const parseNumero = (valor: string): number | null => {
  if (!valor.trim()) return null
  const numero = Number(valor.replace(',', '.'))
  return Number.isFinite(numero) && numero > 0 ? numero : null
}

const percentualMarinha = (dados: DadosCalculadora): number | null => {
  const altura = parseNumero(dados.altura)
  const pescoco = parseNumero(dados.pescoco)
  if (!altura || !pescoco) return null

  if (dados.sexo === 'masculino') {
    const abdomen = parseNumero(dados.abdomen)
    if (!abdomen || abdomen <= pescoco) return null
    return (
      495 /
        (1.0324 -
          0.19077 * Math.log10(abdomen - pescoco) +
          0.15456 * Math.log10(altura)) -
      450
    )
  }

  const cintura = parseNumero(dados.cintura)
  const quadril = parseNumero(dados.quadril)
  if (!cintura || !quadril || cintura + quadril <= pescoco) return null
  return (
    495 /
      (1.29579 -
        0.35004 * Math.log10(cintura + quadril - pescoco) +
        0.221 * Math.log10(altura)) -
    450
  )
}

export const calcularGordura = (
  dados: DadosCalculadora,
): ResultadoGordura | null => {
  const percentual = percentualMarinha(dados)
  const peso = parseNumero(dados.peso)
  if (percentual === null || !peso || percentual <= 0 || percentual >= 70)
    return null

  const massaGorda = (peso * percentual) / 100
  return { percentual, massaGorda, massaMagra: peso - massaGorda }
}

const tmbMifflin = (dados: DadosCalculadora, peso: number): number | null => {
  const altura = parseNumero(dados.altura)
  const idade = parseNumero(dados.idade)
  if (!altura || !idade) return null
  const base = 10 * peso + 6.25 * altura - 5 * idade
  return dados.sexo === 'masculino' ? base + 5 : base - 161
}

export const calcularCalorias = (
  dados: DadosCalculadora,
): ResultadoCalorias | null => {
  const peso = parseNumero(dados.peso)
  if (!peso) return null

  const gordura = parseNumero(dados.gordura)
  const massaMagra = gordura && gordura < 70 ? peso * (1 - gordura / 100) : null
  const tmb = massaMagra ? 370 + 21.6 * massaMagra : tmbMifflin(dados, peso)
  if (!tmb) return null

  const regra = REGRA_OBJETIVO[dados.objetivo]
  const gastoTotal = tmb * FATOR_ATIVIDADE[dados.atividade]
  const calorias = gastoTotal * (1 + regra.ajuste)
  const proteinas = peso * regra.proteinaPorKg
  const lipideos = peso * regra.gorduraPorKg
  const carboidratos = Math.max(0, (calorias - proteinas * 4 - lipideos * 9) / 4)

  return {
    formula: massaMagra ? 'Katch-McArdle' : 'Mifflin-St Jeor',
    tmb,
    gastoTotal,
    calorias,
    macros: { proteinas, carboidratos, lipideos },
  }
}
