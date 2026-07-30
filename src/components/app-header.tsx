import { Dumbbell } from 'lucide-react'
import { formatFullDate } from '@/lib/date'

type AppHeaderProps = {
  today: string
}

export const AppHeader = ({ today }: AppHeaderProps) => (
  <header className="flex items-center gap-3">
    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
      <Dumbbell className="size-5" />
    </div>
    <div className="flex flex-col">
      <h1 className="text-lg font-bold leading-tight">Gym Log</h1>
      <p className="text-xs capitalize text-muted-foreground">
        {formatFullDate(today)}
      </p>
    </div>
  </header>
)
