import { CardReceita } from '../shared/receita'
import { SECOES } from './constants'
import { ReceitaFoto } from './receita-foto'
import type { Receita } from './types'

type ReceitaCardProps = {
  receita: Receita
  favorita: boolean
  onFavoritar: () => void
  onAbrir: (receita: Receita) => void
}

export const ReceitaCard = ({ receita, favorita, onFavoritar, onAbrir }: ReceitaCardProps) => (
  <CardReceita
    foto={
      <ReceitaFoto
        receita={receita}
        className="size-full transition-transform duration-300 group-hover:scale-105"
      />
    }
    rotulo={SECOES[receita.secao].titulo}
    nome={receita.nome}
    calorias={receita.macros.calorias}
    proteinas={receita.macros.proteinas}
    favorita={favorita}
    onFavoritar={onFavoritar}
    onClick={() => onAbrir(receita)}
  />
)
