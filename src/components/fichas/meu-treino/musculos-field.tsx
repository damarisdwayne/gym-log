import { Label } from '@/components/ui/label'
import { ChipOpcao } from './chip-opcao'
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
        {MUSCULOS.map((musculo) => (
          <ChipOpcao
            key={musculo}
            selecionado={selecionados.includes(musculo)}
            disabled={bloqueados.includes(musculo)}
            onClick={() => alternar(musculo)}
          >
            {musculo}
          </ChipOpcao>
        ))}
      </div>
    </div>
  )
}
