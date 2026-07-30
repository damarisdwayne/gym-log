import { ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'

type SetValueFieldProps = {
  value: string
  placeholder: string
  label: string
  decimal?: boolean
  suffix?: string
  onChange: (value: string) => void
  onOpenList: () => void
}

export const SetValueField = ({
  value,
  placeholder,
  label,
  decimal,
  suffix,
  onChange,
  onOpenList,
}: SetValueFieldProps) => (
  <div className="relative min-w-0">
    <Input
      type="number"
      inputMode={decimal ? 'decimal' : 'numeric'}
      min={0}
      step={decimal ? 0.5 : 1}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={suffix ? 'pr-15' : 'pr-9'}
      aria-label={label}
    />

    {suffix && (
      <span className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
        {suffix}
      </span>
    )}

    <button
      type="button"
      onClick={onOpenList}
      aria-label={`Escolher ${label.toLowerCase()} numa lista`}
      className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <ChevronDown className="size-4" />
    </button>
  </div>
)
