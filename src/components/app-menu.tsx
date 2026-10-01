import type { ReactNode } from 'react'
import { Sheet } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import type { NavItem } from './bottom-nav'

type AppMenuProps<T extends string> = {
  open: boolean
  items: NavItem<T>[]
  value: T
  onChange: (value: T) => void
  onClose: () => void
  rodape?: ReactNode
}

export const AppMenu = <T extends string>({
  open,
  items,
  value,
  onChange,
  onClose,
  rodape,
}: AppMenuProps<T>) => (
  <Sheet open={open} title="Menu" side="right" onClose={onClose}>
    <div className="flex min-h-full flex-col gap-6">
      <nav className="flex flex-col gap-1">
        {items.map(({ value: item, label, icon: Icon }) => {
          const ativo = item === value
          return (
            <button
              key={item}
              type="button"
              aria-current={ativo ? 'page' : undefined}
              onClick={() => onChange(item)}
              className={cn(
                'flex h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors',
                ativo
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Icon className="size-5" />
              {label}
            </button>
          )
        })}
      </nav>

      {rodape && (
        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
          {rodape}
        </div>
      )}
    </div>
  </Sheet>
)
