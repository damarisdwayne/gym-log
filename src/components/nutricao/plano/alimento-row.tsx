import { useState } from 'react'
import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Alimento, Porcao } from './types'

const PorcaoInfo = ({ porcao }: { porcao: Porcao }) => (
  <span className="flex min-w-0 flex-col">
    <span className="text-sm leading-snug">{porcao.nome}</span>
    <span className="text-xs text-muted-foreground">{porcao.medida}</span>
  </span>
)

const Peso = ({ peso }: { peso?: string }) =>
  peso ? (
    <span className="ml-auto shrink-0 text-sm font-semibold tabular-nums">
      {peso}
    </span>
  ) : null

export const AlimentoRow = ({ alimento }: { alimento: Alimento }) => {
  const [aberto, setAberto] = useState(false)
  const trocas = alimento.substituicoes ?? []

  return (
    <li className="flex flex-col gap-2 py-2.5">
      <div className="flex items-start gap-3">
        <PorcaoInfo porcao={alimento} />
        <Peso peso={alimento.peso} />
      </div>

      {trocas.length > 0 && (
        <button
          type="button"
          aria-expanded={aberto}
          onClick={() => setAberto((atual) => !atual)}
          className="inline-flex w-fit items-center gap-1 rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
        >
          <ArrowLeftRight className="size-3" />
          {trocas.length} {trocas.length === 1 ? 'troca' : 'trocas'}
          <ChevronDown
            className={cn('size-3 transition-transform', aberto && 'rotate-180')}
          />
        </button>
      )}

      {aberto && (
        <ul className="flex flex-col gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3">
          {trocas.map((troca) => (
            <li key={troca.nome} className="flex items-start gap-3">
              <PorcaoInfo porcao={troca} />
              <Peso peso={troca.peso} />
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
