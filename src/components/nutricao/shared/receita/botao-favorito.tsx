import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

type BotaoFavoritoProps = {
  favorita: boolean
  onClick: () => void
  className?: string
}

export const BotaoFavorito = ({ favorita, onClick, className }: BotaoFavoritoProps) => (
  <button
    type="button"
    aria-pressed={favorita}
    aria-label={favorita ? 'Remover dos favoritos' : 'Favoritar'}
    onClick={onClick}
    className={cn(
      'flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
      className,
    )}
  >
    <Heart className={cn('size-4', favorita && 'fill-current text-red-500')} />
  </button>
)
