import { BookOpen, ExternalLink, Table2, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Ficha, FichaTipo } from './types'

const TIPO_ICON: Record<FichaTipo, LucideIcon> = {
  guia: BookOpen,
  planilha: Table2,
  cardapio: UtensilsCrossed,
}

const TIPO_LABEL: Record<FichaTipo, string> = {
  guia: 'Guia',
  planilha: 'Planilha',
  cardapio: 'Cardápio',
}

type FichaItemProps = {
  ficha: Ficha
}

export const FichaItem = ({ ficha }: FichaItemProps) => {
  const Icon = TIPO_ICON[ficha.tipo]

  return (
    <a
      href={ficha.arquivo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Icon className="size-5" />
      </span>

      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className="truncate text-sm font-medium">{ficha.titulo}</span>
          <Badge>{TIPO_LABEL[ficha.tipo]}</Badge>
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {ficha.descricao} · {ficha.tamanho}
        </span>
      </span>

      <ExternalLink className="ml-auto size-4 shrink-0 text-muted-foreground" />
    </a>
  )
}
