import { MUSCULOS, type Musculo } from '../musculos'
import { musculosDe } from '../sugestoes'
import type { Treino } from '../types'

export const PESO_AUXILIAR = 0.5
export const FAIXA_IDEAL = { min: 10, max: 20 }

export type VolumeMusculo = {
  musculo: Musculo
  foco: number
  auxiliar: number
  total: number
}

type Contagem = Pick<VolumeMusculo, 'foco' | 'auxiliar'>

export const calcularVolume = (treinos: Treino[]): VolumeMusculo[] => {
  const contagens = new Map<Musculo, Contagem>()

  const somar = (musculo: Musculo, campo: keyof Contagem, series: number) => {
    const atual = contagens.get(musculo) ?? { foco: 0, auxiliar: 0 }
    contagens.set(musculo, { ...atual, [campo]: atual[campo] + series })
  }

  treinos.forEach((treino) => {
    const vezes = treino.vezesPorSemana ?? 1
    treino.exercicios.forEach((exercicio) => {
      const series = exercicio.series * vezes
      const { foco, auxiliares } = musculosDe(exercicio)
      foco.forEach((musculo) => somar(musculo, 'foco', series))
      auxiliares.forEach((musculo) => somar(musculo, 'auxiliar', series))
    })
  })

  return MUSCULOS.flatMap((musculo) => {
    const contagem = contagens.get(musculo)
    if (!contagem) return []
    return [{ musculo, ...contagem, total: contagem.foco + contagem.auxiliar * PESO_AUXILIAR }]
  }).sort((a, b) => b.total - a.total)
}

export const contarSemFoco = (treinos: Treino[]) =>
  treinos.reduce(
    (total, treino) => total + treino.exercicios.filter((exercicio) => !musculosDe(exercicio).foco.length).length,
    0,
  )

export const formatarSeries = (valor: number) => valor.toLocaleString('pt-BR')
