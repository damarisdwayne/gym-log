import type { ReactNode } from 'react'

type LinhaChipsProps = {
  titulo: string
  children: ReactNode
}

export const LinhaChips = ({ titulo, children }: LinhaChipsProps) => (
  <div className="flex flex-col gap-1.5">
    <span className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      {titulo}
    </span>
    <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-none">
      {children}
    </div>
  </div>
)
