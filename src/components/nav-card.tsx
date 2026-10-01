import { ChevronRight } from 'lucide-react'

type NavCardProps = {
  emoji: string
  titulo: string
  descricao: string
  onClick: () => void
}

export const NavCard = ({ emoji, titulo, descricao, onClick }: NavCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
  >
    <span
      className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-xl"
      aria-hidden
    >
      {emoji}
    </span>
    <span className="flex min-w-0 flex-col gap-0.5">
      <span className="text-base font-semibold leading-tight">{titulo}</span>
      <span className="text-xs text-muted-foreground">{descricao}</span>
    </span>
    <ChevronRight className="ml-auto size-5 shrink-0 text-muted-foreground" />
  </button>
)
