import { cn } from '@/lib/utils'

export type SegmentedOption<T extends string> = {
  value: T
  label: string
  description?: string
  icon?: string
}

type SegmentedProps<T extends string> = {
  options: SegmentedOption<T>[]
  value: T
  label: string
  onChange: (value: T) => void
  className?: string
}

export const Segmented = <T extends string>({
  options,
  value,
  label,
  onChange,
  className,
}: SegmentedProps<T>) => (
  <div
    role="radiogroup"
    aria-label={label}
    className={cn('grid auto-cols-fr grid-flow-col gap-1', className)}
  >
    {options.map((option) => {
      const selected = option.value === value
      return (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={selected}
          onClick={() => onChange(option.value)}
          className={cn(
            'flex min-h-10 flex-col items-center justify-center gap-1 rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
            selected
              ? 'border-primary bg-primary/15 font-semibold text-primary'
              : 'border-border text-muted-foreground hover:bg-muted hover:text-foreground',
          )}
        >
          {option.icon && (
            <span aria-hidden className="text-base leading-none">
              {option.icon}
            </span>
          )}
          <span>{option.label}</span>
          {option.description && (
            <span className="text-[11px] font-normal text-muted-foreground">
              {option.description}
            </span>
          )}
        </button>
      )
    })}
  </div>
)
