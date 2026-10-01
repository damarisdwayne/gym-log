import { useCallback, useState } from 'react'
import { ChefHat } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { FiltroChip } from './filtro-chip'
import { FiltrosReceitas } from './filtros-receitas'
import type { Ordem } from './filtros'
import { ReceitaCard } from './receita-card'
import { ReceitaDetalhe } from './receita-detalhe'
import type { Receita } from './types'
import { useFiltroReceitas } from './use-filtro-receitas'

export { RECEITAS } from './data'

const ORDENS: { id: Ordem; label: string }[] = [
  { id: 'ebook', label: 'Ordem do ebook' },
  { id: 'proteina', label: '+ proteína' },
  { id: 'calorias', label: '− kcal' },
]

export const Receitas = () => {
  const filtro = useFiltroReceitas()
  const [aberta, setAberta] = useState<Receita>()
  const fechar = useCallback(() => setAberta(undefined), [])

  return (
    <div className="flex flex-col gap-4">
      <FiltrosReceitas
        busca={filtro.busca}
        tipo={filtro.tipo}
        ativos={filtro.ativos}
        onBusca={filtro.setBusca}
        onTipo={filtro.setTipo}
        onAlternar={filtro.alternar}
      />

      <div className="flex flex-col gap-2 border-t border-border pt-3">
        <div className="flex items-center gap-2 px-1">
          <span className="text-sm font-semibold tabular-nums">
            {filtro.receitas.length}
            <span className="font-normal text-muted-foreground"> de {filtro.total} receitas</span>
          </span>
          {filtro.temFiltro && (
            <Button variant="ghost" size="sm" className="ml-auto" onClick={filtro.limpar}>
              Limpar filtros
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ORDENS.map((ordem) => (
            <FiltroChip
              key={ordem.id}
              label={ordem.label}
              ativo={filtro.ordem === ordem.id}
              onClick={() => filtro.setOrdem(ordem.id)}
            />
          ))}
        </div>
      </div>

      {filtro.receitas.length ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {filtro.receitas.map((receita) => (
            <ReceitaCard key={receita.id} receita={receita} onAbrir={setAberta} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={ChefHat}
          title="Nenhuma receita encontrada"
          description="Tente tirar algum filtro ou buscar por outro ingrediente."
          action={
            <Button variant="outline" size="sm" onClick={filtro.limpar}>
              Limpar filtros
            </Button>
          }
        />
      )}

      <ReceitaDetalhe receita={aberta} onFechar={fechar} />
    </div>
  )
}
