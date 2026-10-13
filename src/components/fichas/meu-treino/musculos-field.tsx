import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { MUSCULOS, type Musculo } from './musculos'

type MusculosFieldProps = {
  label: string
  selecionados: Musculo[]
  bloqueados: Musculo[]
  onChange: (musculos: Musculo[]) => void
}

export const MusculosField = ({ label, selecionados, bloqueados, onChange }: MusculosFieldProps) => {
  const alternar = (musculo: Musculo) =>
    onChange(
      selecionados.includes(musculo)
        ? selecionados.filter((item) => item !== musculo)
        : [...selecionados, musculo],
    )

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-1.5">
        {MUSCULOS.map((musculo) => {
          const selecionado = selecionados.includes(musculo)
          return (
            <button
              key={musculo}
              type="button"
              aria-pressed={selecionado}
              disabled={bloqueados.includes(musculo)}
              onClick={() => alternar(musculo)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-30',
                selecionado
                  ? 'border-primary bg-primary/15 font-semibold text-primary'
                  : 'border-border text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {musculo}
            </button>
          )
        })}
      </div>
    </div>
  )
}
