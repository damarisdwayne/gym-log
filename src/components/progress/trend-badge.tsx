import { Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { round } from '@/lib/series'

type TrendBadgeProps = {
  current: number
  previous: number | null
}

export const TrendBadge = ({ current, previous }: TrendBadgeProps) => {
  if (previous === null) return <Badge>Primeiro registro</Badge>

  const delta = round(current - previous)

  if (delta === 0)
    return (
      <Badge>
        <Minus className="size-3" />
        Manteve
      </Badge>
    )

  if (delta > 0)
    return (
      <Badge variant="accent">
        <TrendingUp className="size-3" />+{delta} kg
      </Badge>
    )

  return (
    <Badge className="bg-destructive/15 text-destructive">
      <TrendingDown className="size-3" />
      {delta} kg
    </Badge>
  )
}
