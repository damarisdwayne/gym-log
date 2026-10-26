import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Modelo } from './types'

type ModeloLinhaProps = {
  modelo: Modelo
  ativo: boolean
  onAbrir: () => void
}

export const ModeloLinha = ({ modelo, ativo, onAbrir }: ModeloLinhaProps) => (
  <button
    type="button"
    onClick={onAbrir}
    className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
  >
    <span className="flex min-w-0 flex-col gap-0.5">
      <span className="text-sm font-medium">{modelo.titulo}</span>
      <span className="text-xs text-muted-foreground">
        {modelo.treinos.length} treinos · {modelo.treinos.map(({ rotulo, nome }) => rotulo ?? nome).join(', ')}
      </span>
    </span>
    {ativo && <Badge variant="primary">Atual</Badge>}
    <ChevronRight className="ml-auto size-4 shrink-0 text-muted-foreground" />
  </button>
)
