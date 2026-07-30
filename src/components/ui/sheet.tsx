import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

type SheetProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  className?: string
}

const stack: symbol[] = []

export const Sheet = ({
  open,
  title,
  onClose,
  children,
  className,
}: SheetProps) => {
  useEffect(() => {
    if (!open) return

    const id = Symbol('sheet')
    stack.push(id)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && stack.at(-1) === id) onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      stack.splice(stack.indexOf(id), 1)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm [animation:overlay-in_180ms_ease-out]"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'relative flex max-h-[92dvh] w-full max-w-2xl flex-col rounded-t-2xl border border-border bg-card [animation:sheet-in_220ms_cubic-bezier(0.22,1,0.36,1)] sm:rounded-2xl',
          className,
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
          <h2 className="text-base font-semibold">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X className="size-4" />
          </Button>
        </div>
        <div className="overflow-y-auto overflow-x-hidden px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {children}
        </div>
      </div>
    </div>
  )
}
