import { CardReceita } from '../shared/receita'
import { fotoRS7, ROTULO_REFEICAO } from './constants'
import type { ReceitaRS7 } from './types'

type ReceitaRS7CardProps = {
  receita: ReceitaRS7
  favorita: boolean
  onFavoritar: () => void
  onAbrir: (receita: ReceitaRS7) => void
}

export const ReceitaRS7Card = ({ receita, favorita, onFavoritar, onAbrir }: ReceitaRS7CardProps) => (
  <CardReceita
    foto={
      <img
        src={fotoRS7(receita.id)}
        alt=""
        loading="lazy"
        decoding="async"
        className="size-full bg-muted object-cover transition-transform duration-300 group-hover:scale-105"
      />
    }
    rotulo={ROTULO_REFEICAO[receita.refeicao]}
    nome={receita.nome}
    calorias={receita.macros.calorias}
    proteinas={receita.macros.proteinas}
    extra={`⏱ ${receita.minutos} min`}
    favorita={favorita}
    onFavoritar={onFavoritar}
    onClick={() => onAbrir(receita)}
  />
)
