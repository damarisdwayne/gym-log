import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Treino } from './types'

type ListaPorSemanaProps = {
  treinos: Treino[]
  renderTreino: (treino: Treino, indice: number) => ReactNode
}

export const ListaPorSemana = ({ treinos, renderTreino }: ListaPorSemanaProps) => {
  const [mostrarFora, setMostrarFora] = useState(false)
  const comIndice = treinos.map((treino, indice) => ({ treino, indice }))
  const naSemana = comIndice.filter(({ treino }) => treino.vezesPorSemana !== 0)
  const fora = comIndice.filter(({ treino }) => treino.vezesPorSemana === 0)

  return (
    <>
      {naSemana.map(({ treino, indice }) => renderTreino(treino, indice))}
      {fora.length > 0 && (
        <Button variant="ghost" size="sm" className="self-start" onClick={() => setMostrarFora((atual) => !atual)}>
          <ChevronDown className={cn('size-4 transition-transform', mostrarFora && 'rotate-180')} />
          {mostrarFora ? 'Esconder' : 'Ver'} {fora.length === 1 ? 'treino fora da semana' : `${fora.length} treinos fora da semana`}
        </Button>
      )}
      {mostrarFora && fora.map(({ treino, indice }) => renderTreino(treino, indice))}
    </>
  )
}
