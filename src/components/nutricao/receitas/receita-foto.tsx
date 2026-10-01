import { cn } from '@/lib/utils'
import { fotoReceita, SECOES } from './constants'
import type { Receita } from './types'

type ReceitaFotoProps = {
  receita: Receita
  className?: string
  alt?: string
}

export const ReceitaFoto = ({ receita, className, alt = '' }: ReceitaFotoProps) => {
  if (receita.semFoto)
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className={cn(
          'flex items-center justify-center bg-linear-to-br from-primary/25 via-muted to-accent/20 text-5xl',
          className,
        )}
      >
        <span aria-hidden>{SECOES[receita.secao].emoji}</span>
      </div>
    )

  return (
    <img
      src={fotoReceita(receita.id)}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn('bg-muted object-cover', className)}
    />
  )
}
