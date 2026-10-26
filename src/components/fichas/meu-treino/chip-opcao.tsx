import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ChipOpcaoProps = {
  selecionado: boolean
  disabled?: boolean
  onClick: () => void
  children: ReactNode
}

export const ChipOpcao = ({ selecionado, disabled, onClick, children }: ChipOpcaoProps) => (
  <button
    type="button"
    aria-pressed={selecionado}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      'rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-30',
      selecionado
        ? 'border-primary bg-primary/15 font-semibold text-primary'
        : 'border-border text-muted-foreground hover:bg-muted hover:text-foreground',
    )}
  >
    {children}
  </button>
)
