import type { ReactNode } from 'react'
import { SearchField } from '@/components/ui/search-field'
import { TIPOS } from './constants'
import { FiltroChip } from './filtro-chip'
import { GRUPOS_FILTRO, type TipoFiltro } from './filtros'

const OPCOES_TIPO = [
  { id: 'todas', label: 'Todas', emoji: '📖' },
  ...Object.entries(TIPOS).map(([id, { label, emoji }]) => ({ id, label, emoji })),
] as { id: TipoFiltro; label: string; emoji: string }[]

const LinhaChips = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <span className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      {titulo}
    </span>
    <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-none">
      {children}
    </div>
  </div>
)

type FiltrosReceitasProps = {
  busca: string
  tipo: TipoFiltro
  ativos: string[]
  onBusca: (valor: string) => void
  onTipo: (valor: TipoFiltro) => void
  onAlternar: (id: string) => void
}

export const FiltrosReceitas = ({
  busca,
  tipo,
  ativos,
  onBusca,
  onTipo,
  onAlternar,
}: FiltrosReceitasProps) => (
  <div className="flex flex-col gap-3">
    <SearchField
      value={busca}
      placeholder="Buscar receita ou ingrediente"
      label="Buscar receita"
      onChange={onBusca}
    />

    <LinhaChips titulo="Tipo">
      {OPCOES_TIPO.map((opcao) => (
        <FiltroChip
          key={opcao.id}
          label={opcao.label}
          emoji={opcao.emoji}
          ativo={tipo === opcao.id}
          onClick={() => onTipo(opcao.id)}
        />
      ))}
    </LinhaChips>

    {GRUPOS_FILTRO.map((grupo) => (
      <LinhaChips key={grupo.titulo} titulo={grupo.titulo}>
        {grupo.filtros.map((filtro) => (
          <FiltroChip
            key={filtro.id}
            label={filtro.label}
            emoji={filtro.emoji}
            ativo={ativos.includes(filtro.id)}
            onClick={() => onAlternar(filtro.id)}
          />
        ))}
      </LinhaChips>
    ))}
  </div>
)
