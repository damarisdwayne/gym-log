import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CollapsibleProps = {
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
  defaultOpen?: boolean
  children: ReactNode
  className?: string
}

export const Collapsible = ({
  title,
  description,
  meta,
  defaultOpen = false,
  children,
  className,
}: CollapsibleProps) => (
  <details
    open={defaultOpen}
    className={cn(
      'group rounded-xl border border-border bg-card overflow-hidden',
      className,
    )}
  >
    <summary className="flex cursor-pointer list-none items-center gap-3 p-4 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60 [&::-webkit-details-marker]:hidden">
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-base font-semibold leading-tight">{title}</span>
        {description && (
          <span className="text-xs text-muted-foreground">{description}</span>
        )}
      </div>
      <div className="ml-auto flex shrink-0 items-center gap-2">
        {meta}
        <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </div>
    </summary>
    <div className="px-4 pb-4">{children}</div>
  </details>
)
