import { Badge } from '@/components/ui/badge'
import { formatarVezes } from './utils'

export const VezesBadge = ({ vezes = 1 }: { vezes?: number }) => {
  if (vezes === 1) return null
  if (vezes === 0) return <Badge>Fora da semana</Badge>
  return <Badge variant="primary">{formatarVezes(vezes)}×/sem</Badge>
}
