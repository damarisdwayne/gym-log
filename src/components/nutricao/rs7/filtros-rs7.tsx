import { SearchField } from '@/components/ui/search-field'
import { FiltroChip, LinhaChips } from '../shared/receita'
import { NIVEIS, REFEICOES, TAGS } from './constants'
import type { NivelFiltro, RefeicaoFiltro } from './filtros'
import type { TagRS7 } from './types'

const OPCOES_REFEICAO: { id: RefeicaoFiltro; label: string; emoji: string }[] = [
  { id: 'todas', label: 'Todas', emoji: '📖' },
  ...REFEICOES,
]

const OPCOES_NIVEL: { id: NivelFiltro; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  ...NIVEIS,
]

const OPCOES_TAG = Object.entries(TAGS) as [TagRS7, (typeof TAGS)[TagRS7]][]

type FiltrosRS7Props = {
  busca: string
  refeicao: RefeicaoFiltro
  nivel: NivelFiltro
  tags: TagRS7[]
  onBusca: (valor: string) => void
  onRefeicao: (valor: RefeicaoFiltro) => void
  onNivel: (valor: NivelFiltro) => void
  onTag: (tag: TagRS7) => void
}

export const FiltrosRS7 = ({
  busca,
  refeicao,
  nivel,
  tags,
  onBusca,
  onRefeicao,
  onNivel,
  onTag,
}: FiltrosRS7Props) => (
  <div className="flex flex-col gap-3">
    <SearchField
      value={busca}
      placeholder="Buscar receita ou ingrediente"
      label="Buscar receita"
      onChange={onBusca}
    />

    <LinhaChips titulo="Refeição">
      {OPCOES_REFEICAO.map((opcao) => (
        <FiltroChip
          key={opcao.id}
          label={opcao.label}
          emoji={opcao.emoji}
          ativo={refeicao === opcao.id}
          onClick={() => onRefeicao(opcao.id)}
        />
      ))}
    </LinhaChips>

    <LinhaChips titulo="Energia por porção">
      {OPCOES_NIVEL.map((opcao) => (
        <FiltroChip
          key={opcao.id}
          label={opcao.label}
          ativo={nivel === opcao.id}
          onClick={() => onNivel(opcao.id)}
        />
      ))}
    </LinhaChips>

    <LinhaChips titulo="Dieta">
      {OPCOES_TAG.map(([id, { label, emoji }]) => (
        <FiltroChip
          key={id}
          label={label}
          emoji={emoji}
          ativo={tags.includes(id)}
          onClick={() => onTag(id)}
        />
      ))}
    </LinhaChips>
  </div>
)
