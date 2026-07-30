import { cn } from '@/lib/utils'

export type TabItem<T extends string> = {
  value: T
  label: string
}

type TabsProps<T extends string> = {
  items: TabItem<T>[]
  value: T
  onChange: (value: T) => void
  className?: string
}

export const Tabs = <T extends string>({
  items,
  value,
  onChange,
  className,
}: TabsProps<T>) => (
  <div
    role="tablist"
    className={cn(
      'grid gap-1 rounded-xl border border-border bg-card p-1',
      className,
    )}
    style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
  >
    {items.map((item) => (
      <button
        key={item.value}
        role="tab"
        aria-selected={value === item.value}
        onClick={() => onChange(item.value)}
        className={cn(
          'h-9 rounded-lg text-sm font-medium transition-colors',
          value === item.value
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {item.label}
      </button>
    ))}
  </div>
)
