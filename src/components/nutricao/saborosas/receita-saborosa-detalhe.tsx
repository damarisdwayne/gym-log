import { Badge } from '@/components/ui/badge'
import { Sheet } from '@/components/ui/sheet'
import { MacroStats } from '../macro-stats'
import { PREPAROS } from '../receitas/constants'
import {
  AcoesReceita,
  Dica,
  fotoReceita,
  LinkOriginal,
  ListaIngredientes,
  ListaPassos,
  SecaoDetalhe,
} from '../shared/receita'
import type { ReceitaSaborosa } from './types'

const ConteudoSaborosa = ({ receita }: { receita: ReceitaSaborosa }) => (
  <div className="flex flex-col gap-5">
    <img
      src={fotoReceita(receita.id)}
      alt={receita.nome}
      className="aspect-4/3 w-full rounded-xl bg-muted object-cover"
    />

    <div className="flex flex-wrap gap-1.5">
      {receita.preparo.map((preparo) => (
        <Badge key={preparo}>
          {PREPAROS[preparo].emoji} {PREPAROS[preparo].label}
        </Badge>
      ))}
      {receita.rende && <Badge>🍽️ Rende {receita.rende}</Badge>}
    </div>

    {receita.macros && <MacroStats calorias={receita.macros.calorias} macros={receita.macros} />}

    <SecaoDetalhe titulo="Ingredientes">
      {receita.ingredientes.map((grupo) => (
        <ListaIngredientes
          key={grupo.titulo ?? 'base'}
          titulo={grupo.titulo}
          itens={grupo.itens.map((nome) => ({ nome }))}
        />
      ))}
    </SecaoDetalhe>

    <SecaoDetalhe titulo="Modo de preparo">
      <ListaPassos passos={receita.passos} />
    </SecaoDetalhe>

    {receita.dica && <Dica>{receita.dica}</Dica>}

    <LinkOriginal link={receita.link} autor={receita.autor} />
  </div>
)

type ReceitaSaborosaDetalheProps = {
  receita?: ReceitaSaborosa
  favorita: boolean
  onFavoritar: (id: string) => void
  onFechar: () => void
}

export const ReceitaSaborosaDetalhe = ({
  receita,
  favorita,
  onFavoritar,
  onFechar,
}: ReceitaSaborosaDetalheProps) => (
  <Sheet
    open={Boolean(receita)}
    title={receita?.nome ?? ''}
    onClose={onFechar}
    actions={
      receita && (
        <AcoesReceita
          receita={receita}
          favorita={favorita}
          onFavoritar={() => onFavoritar(receita.id)}
        />
      )
    }
  >
    {receita && <ConteudoSaborosa receita={receita} />}
  </Sheet>
)
