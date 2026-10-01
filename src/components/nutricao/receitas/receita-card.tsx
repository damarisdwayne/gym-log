import { formatarGramas, SECOES } from './constants'
import { ReceitaFoto } from './receita-foto'
import type { Receita } from './types'

type ReceitaCardProps = {
  receita: Receita
  onAbrir: (receita: Receita) => void
}

export const ReceitaCard = ({ receita, onAbrir }: ReceitaCardProps) => {
  const { calorias, proteinas } = receita.macros

  return (
    <button
      type="button"
      onClick={() => onAbrir(receita)}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <div className="aspect-4/3 w-full overflow-hidden bg-muted">
        <ReceitaFoto
          receita={receita}
          className="size-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-2.5">
        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          {SECOES[receita.secao].titulo}
        </span>
        <span className="line-clamp-2 text-sm font-semibold leading-snug">
          {receita.nome}
        </span>
        <span className="mt-auto flex items-baseline gap-2 pt-1 text-xs tabular-nums">
          <span className="font-semibold">{calorias} kcal</span>
          <span className="text-primary">{formatarGramas(proteinas)} prot</span>
        </span>
      </div>
    </button>
  )
}
