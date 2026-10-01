import { FiltroChip } from './filtro-chip'

export type Ordem = 'ebook' | 'proteina' | 'calorias'

type ComMacros = { macros: { proteinas: number; calorias: number } }

export const ORDENACAO: Record<Ordem, (a: ComMacros, b: ComMacros) => number> = {
  ebook: () => 0,
  proteina: (a, b) => b.macros.proteinas - a.macros.proteinas,
  calorias: (a, b) => a.macros.calorias - b.macros.calorias,
}

const ORDENS: { id: Ordem; label: string }[] = [
  { id: 'ebook', label: 'Ordem do ebook' },
  { id: 'proteina', label: '+ proteína' },
  { id: 'calorias', label: '− kcal' },
]

type SeletorOrdemProps = {
  valor: Ordem
  onChange: (ordem: Ordem) => void
}

export const SeletorOrdem = ({ valor, onChange }: SeletorOrdemProps) => (
  <div className="flex flex-wrap gap-1.5">
    {ORDENS.map((ordem) => (
      <FiltroChip
        key={ordem.id}
        label={ordem.label}
        ativo={valor === ordem.id}
        onClick={() => onChange(ordem.id)}
      />
    ))}
  </div>
)

export const normalizar = (texto: string) =>
  texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
