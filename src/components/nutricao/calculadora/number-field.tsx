import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { AtualizarCampo, CampoNumerico, DadosCalculadora } from './types'

type NumberFieldProps = {
  form: string
  campo: CampoNumerico
  label: string
  sufixo: string
  dados: DadosCalculadora
  onChange: AtualizarCampo
}

export const NumberField = ({
  form,
  campo,
  label,
  sufixo,
  dados,
  onChange,
}: NumberFieldProps) => {
  const id = `${form}-${campo}`

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          className="pr-10 tabular-nums"
          value={dados[campo]}
          onChange={(event) => onChange(campo, event.target.value)}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          {sufixo}
        </span>
      </div>
    </div>
  )
}
