import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type NumberFieldProps = {
  label: string
  value: number
  onChange: (value: number) => void
  step?: number
  min?: number
  suffix?: string
}

export const NumberField = ({
  label,
  value,
  onChange,
  step = 1,
  min = 0,
  suffix,
}: NumberFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <Label>{label}</Label>
    <div className="relative">
      <Input
        type="number"
        inputMode="decimal"
        step={step}
        min={min}
        value={Number.isNaN(value) ? '' : value}
        onChange={(event) => onChange(Number(event.target.value))}
        className={suffix ? 'pr-10' : undefined}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
          {suffix}
        </span>
      )}
    </div>
  </div>
)
