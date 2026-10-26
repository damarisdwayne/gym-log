import { cn } from '@/lib/utils'
import type { ExercicioTreino } from './types'

export type Conjugacao = {
  rotulo?: string
  noGrupo: boolean
  fimDoGrupo: boolean
}

export const rotuloGrupo = (tamanho: number) => {
  if (tamanho === 2) return 'Bi-set'
  if (tamanho === 3) return 'Tri-set'
  return `Circuito de ${tamanho}`
}

export const conjugacoes = (exercicios: ExercicioTreino[]): Conjugacao[] => {
  const resultado: Conjugacao[] = []
  let inicio = 0
  while (inicio < exercicios.length) {
    let fim = inicio
    while (fim < exercicios.length - 1 && exercicios[fim].conjugadoComProximo) fim++
    const tamanho = fim - inicio + 1
    for (let indice = inicio; indice <= fim; indice++)
      resultado.push({
        rotulo: tamanho > 1 && indice === inicio ? rotuloGrupo(tamanho) : undefined,
        noGrupo: tamanho > 1,
        fimDoGrupo: indice === fim,
      })
    inicio = fim + 1
  }
  return resultado
}

export const classesConjugacao = (conjugacao?: Conjugacao) =>
  cn(
    conjugacao?.noGrupo && 'border-l-2 border-l-primary/60',
    conjugacao?.noGrupo && !conjugacao.fimDoGrupo && 'border-b-transparent',
  )

export const grupoDe = (exercicios: ExercicioTreino[], exercicio: ExercicioTreino) => {
  const indice = exercicios.findIndex(({ id }) => id === exercicio.id)
  if (indice < 0) return [exercicio]
  let inicio = indice
  while (inicio > 0 && exercicios[inicio - 1].conjugadoComProximo) inicio--
  let fim = indice
  while (fim < exercicios.length - 1 && exercicios[fim].conjugadoComProximo) fim++
  return exercicios.slice(inicio, fim + 1)
}
