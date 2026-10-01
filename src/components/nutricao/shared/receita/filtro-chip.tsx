import { cn } from '@/lib/utils'

type FiltroChipProps = {
  label: string
  emoji?: string
  ativo: boolean
  onClick: () => void
}

export const FiltroChip = ({ label, emoji, ativo, onClick }: FiltroChipProps) => (
  <button
    type="button"
    aria-pressed={ativo}
    onClick={onClick}
    className={cn(
      'inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
      ativo
        ? 'border-primary bg-primary/15 text-primary'
        : 'border-border text-muted-foreground hover:bg-muted hover:text-foreground',
    )}
  >
    {emoji && <span aria-hidden>{emoji}</span>}
    {label}
  </button>
)
