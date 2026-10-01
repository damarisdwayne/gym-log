import { SearchField } from '@/components/ui/search-field'
import { FiltroChip, LinhaChips } from '../shared/receita'
import { TIPOS } from './constants'
import { GRUPOS_FILTRO, type TipoFiltro } from './filtros'

const OPCOES_TIPO = [
  { id: 'todas', label: 'Todas', emoji: '📖' },
  ...Object.entries(TIPOS).map(([id, { label, emoji }]) => ({ id, label, emoji })),
] as { id: TipoFiltro; label: string; emoji: string }[]

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
