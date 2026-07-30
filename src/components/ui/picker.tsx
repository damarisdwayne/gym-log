import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { Sheet } from './sheet'
import { cn } from '@/lib/utils'

type PickerProps = {
  open: boolean
  title: string
  values: number[]
  value: number | null
  fallback: number
  suffix?: string
  onSelect: (value: number) => void
  onClose: () => void
}

export const Picker = ({
  open,
  title,
  values,
  value,
  fallback,
  suffix,
  onSelect,
  onClose,
}: PickerProps) => {
  const focusedRef = useRef<HTMLButtonElement>(null)
  const focusedValue = value ?? fallback

  useEffect(() => {
    if (!open) return
    focusedRef.current?.scrollIntoView({ block: 'center' })
  }, [open])

  return (
    <Sheet open={open} title={title} onClose={onClose} className="max-h-[70dvh]">
      <ul className="flex flex-col gap-1">
        {values.map((item) => {
          const selected = item === value
          return (
            <li key={item}>
              <button
                ref={item === focusedValue ? focusedRef : undefined}
                type="button"
                onClick={() => onSelect(item)}
                className={cn(
                  'flex h-12 w-full items-center justify-between rounded-lg px-4 text-base tabular-nums transition-colors',
                  selected
                    ? 'bg-primary font-semibold text-primary-foreground'
                    : 'hover:bg-muted',
                )}
              >
                <span>
                  {item}
                  {suffix && (
                    <span
                      className={cn(
                        'ml-1 text-sm',
                        selected ? 'opacity-70' : 'text-muted-foreground',
                      )}
                    >
                      {suffix}
                    </span>
                  )}
                </span>
                {selected && <Check className="size-4" />}
              </button>
            </li>
          )
        })}
      </ul>
    </Sheet>
  )
}
