import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
}

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border px-6 py-10 text-center">
    <Icon className="size-6 text-muted-foreground" />
    <p className="text-sm font-medium">{title}</p>
    <p className="max-w-xs text-xs text-muted-foreground">{description}</p>
    {action && <div className="pt-2">{action}</div>}
  </div>
)
