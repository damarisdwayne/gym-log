import type { ReactNode } from 'react'
import { BotaoFavorito } from './botao-favorito'

export const formatarGramas = (valor: number) =>
  `${valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}g`

type CardReceitaProps = {
  foto: ReactNode
  rotulo: string
  nome: string
  calorias: number
  proteinas: number
  extra?: ReactNode
  favorita?: boolean
  onFavoritar?: () => void
  onClick: () => void
}

export const CardReceita = ({
  foto,
  rotulo,
  nome,
  calorias,
  proteinas,
  extra,
  favorita = false,
  onFavoritar,
  onClick,
}: CardReceitaProps) => (
  <div className="relative flex">
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <div className="aspect-4/3 w-full overflow-hidden bg-muted">{foto}</div>
      <div className="flex flex-1 flex-col gap-1 p-2.5">
        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          {rotulo}
        </span>
        <span className="line-clamp-2 text-sm font-semibold leading-snug">{nome}</span>
        <span className="mt-auto flex items-baseline gap-2 pt-1 text-xs tabular-nums">
          <span className="font-semibold">{calorias} kcal</span>
          <span className="text-primary">{formatarGramas(proteinas)} prot</span>
          {extra && <span className="ml-auto text-muted-foreground">{extra}</span>}
        </span>
      </div>
    </button>
    {onFavoritar && (
      <BotaoFavorito
        favorita={favorita}
        onClick={onFavoritar}
        className="absolute right-1.5 top-1.5 size-8 bg-black/45 text-white backdrop-blur-sm hover:bg-black/60"
      />
    )}
  </div>
)
