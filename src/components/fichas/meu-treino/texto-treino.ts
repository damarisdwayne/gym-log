import { conjugacoes } from './conjugados'
import type { Treino } from './types'
import { formatarVezes, resumoExercicio, rotuloTreino } from './utils'

const frequencia = (vezes = 1) => {
  if (vezes === 1) return ''
  if (vezes === 0) return ' _(fora da semana)_'
  return ` _(${formatarVezes(vezes)}×/sem)_`
}

const linhasTreino = (treino: Treino, indice: number) => {
  const grupos = conjugacoes(treino.exercicios)
  return [
    '',
    `*${rotuloTreino(treino, indice)} · ${treino.nome}*${frequencia(treino.vezesPorSemana)}`,
    ...treino.exercicios.flatMap((exercicio, posicao) => [
      ...(grupos[posicao].rotulo ? [`_${grupos[posicao].rotulo}_`] : []),
      `${grupos[posicao].noGrupo ? '↳ ' : ''}${posicao + 1}. ${exercicio.nome} — ${resumoExercicio(exercicio)}`,
      ...(exercicio.obs ? [`   _${exercicio.obs}_`] : []),
    ]),
  ]
}

export const textoTreinos = (titulo: string, treinos: Treino[]) =>
  [`*${titulo}*`, ...treinos.flatMap(linhasTreino)].join('\n')
