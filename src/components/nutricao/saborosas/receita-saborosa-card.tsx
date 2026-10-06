import { CardReceita, fotoReceita } from '../shared/receita'
import { PREPAROS } from '../receitas/constants'
import type { ReceitaSaborosa } from './types'

type ReceitaSaborosaCardProps = {
  receita: ReceitaSaborosa
  favorita: boolean
  onFavoritar: () => void
  onAbrir: (receita: ReceitaSaborosa) => void
}

export const ReceitaSaborosaCard = ({
  receita,
  favorita,
  onFavoritar,
  onAbrir,
}: ReceitaSaborosaCardProps) => (
  <CardReceita
    foto={
      <img
        src={fotoReceita(receita.id)}
        alt=""
        loading="lazy"
        decoding="async"
        className="size-full bg-muted object-cover transition-transform duration-300 group-hover:scale-105"
      />
    }
    rotulo={receita.autor}
    nome={receita.nome}
    calorias={receita.macros?.calorias}
    proteinas={receita.macros?.proteinas}
    extra={receita.preparo.map((preparo) => PREPAROS[preparo].emoji).join(' ')}
    favorita={favorita}
    onFavoritar={onFavoritar}
    onClick={() => onAbrir(receita)}
  />
)
