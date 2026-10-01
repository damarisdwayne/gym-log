import { Badge } from '@/components/ui/badge'
import { Sheet } from '@/components/ui/sheet'
import { MacroStats } from '../macro-stats'
import { Dica, LinkEbook, ListaIngredientes, ListaPassos, SecaoDetalhe } from '../shared/receita'
import { EBOOK_RS7, fotoRS7, REFEICOES, TAGS } from './constants'
import type { ReceitaRS7 } from './types'

const plural = (n: number, singular: string, plural: string) => `${n} ${n === 1 ? singular : plural}`

const ConteudoRS7 = ({ receita }: { receita: ReceitaRS7 }) => {
  const refeicao = REFEICOES.find((item) => item.id === receita.refeicao)

  return (
    <div className="flex flex-col gap-5">
      <img
        src={fotoRS7(receita.id)}
        alt={receita.nome}
        className="aspect-16/9 w-full rounded-xl bg-muted object-cover"
      />

      {receita.descricao && (
        <p className="-mt-2 text-sm italic text-muted-foreground">{receita.descricao}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {refeicao && (
          <Badge variant="primary">
            {refeicao.emoji} {refeicao.label}
          </Badge>
        )}
        {receita.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {TAGS[tag].emoji} {TAGS[tag].label}
          </Badge>
        ))}
        <Badge>⏱ {receita.minutos} min</Badge>
        <Badge>🍽️ {plural(receita.porcoes, 'porção', 'porções')}</Badge>
        {receita.dificuldade && <Badge>{receita.dificuldade}</Badge>}
      </div>

      <div className="flex flex-col gap-1.5">
        <MacroStats calorias={receita.macros.calorias} macros={receita.macros} />
        {receita.porcoes > 1 && (
          <p className="px-1 text-xs text-muted-foreground">Valores por porção</p>
        )}
      </div>

      <SecaoDetalhe titulo="Ingredientes">
        <ListaIngredientes
          itens={receita.ingredientes.map(({ nome, qtd }) => ({ nome, detalhe: qtd }))}
        />
      </SecaoDetalhe>

      <SecaoDetalhe titulo="Modo de preparo">
        <ListaPassos passos={receita.passos} />
      </SecaoDetalhe>

      {receita.dica && <Dica>{receita.dica}</Dica>}

      <LinkEbook arquivo={EBOOK_RS7.arquivo} pagina={receita.pagina}>
        {EBOOK_RS7.titulo} ({EBOOK_RS7.autor}) · pág. {receita.pagina}
      </LinkEbook>
    </div>
  )
}

type ReceitaRS7DetalheProps = {
  receita?: ReceitaRS7
  onFechar: () => void
}

export const ReceitaRS7Detalhe = ({ receita, onFechar }: ReceitaRS7DetalheProps) => (
  <Sheet open={Boolean(receita)} title={receita?.nome ?? ''} onClose={onFechar}>
    {receita && <ConteudoRS7 receita={receita} />}
  </Sheet>
)
