import { Plus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type NavItem<T extends string> = {
  value: T
  label: string
  icon: LucideIcon
}

type BottomNavProps<T extends string> = {
  items: NavItem<T>[]
  value: T
  onChange: (value: T) => void
  onRegister: () => void
  registerLabel?: string
}

const half = <T extends string>(items: NavItem<T>[]) =>
  Math.ceil(items.length / 2)

export const BottomNav = <T extends string>({
  items,
  value,
  onChange,
  onRegister,
  registerLabel = 'Registrar',
}: BottomNavProps<T>) => {
  const meio = half(items)
  const esquerda = items.slice(0, meio)
  const direita = items.slice(meio)

  const renderItem = (item: NavItem<T>) => {
    const Icon = item.icon
    const ativo = value === item.value

    return (
      <button
        key={item.value}
        type="button"
        role="tab"
        aria-selected={ativo}
        onClick={() => onChange(item.value)}
        className={cn(
          'flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 text-[10px] font-medium transition-colors',
          ativo
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        <Icon className={cn('size-5', ativo && 'stroke-[2.5]')} />
        {item.label}
      </button>
    )
  }

  return (
    <nav
      role="tablist"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex w-full max-w-2xl items-stretch px-2">
        {esquerda.map(renderItem)}

        <div className="flex w-16 shrink-0 items-center justify-center">
          <button
            type="button"
            onClick={onRegister}
            aria-label={registerLabel}
            className="-mt-6 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-transform active:scale-95"
          >
            <Plus className="size-6" />
          </button>
        </div>

        {direita.map(renderItem)}
      </div>
    </nav>
  )
}
