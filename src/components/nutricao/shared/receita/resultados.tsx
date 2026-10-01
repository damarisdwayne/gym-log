import type { ReactNode } from 'react'
import { ChefHat } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'

type ResultadosProps = {
  visiveis: number
  total: number
  temFiltro: boolean
  onLimpar: () => void
  acoes?: ReactNode
  children: ReactNode
}

export const Resultados = ({
  visiveis,
  total,
  temFiltro,
  onLimpar,
  acoes,
  children,
}: ResultadosProps) => (
  <>
    <div className="flex flex-col gap-2 border-t border-border pt-3">
      <div className="flex items-center gap-2 px-1">
        <span className="text-sm font-semibold tabular-nums">
          {visiveis}
          <span className="font-normal text-muted-foreground"> de {total} receitas</span>
        </span>
        {temFiltro && (
          <Button variant="ghost" size="sm" className="ml-auto" onClick={onLimpar}>
            Limpar filtros
          </Button>
        )}
      </div>
      {acoes}
    </div>

    {visiveis ? (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{children}</div>
    ) : (
      <EmptyState
        icon={ChefHat}
        title="Nenhuma receita encontrada"
        description="Tente tirar algum filtro ou buscar por outro ingrediente."
        action={
          <Button variant="outline" size="sm" onClick={onLimpar}>
            Limpar filtros
          </Button>
        }
      />
    )}
  </>
)
