import { Badge } from '@/components/ui/badge'
import { Sheet } from '@/components/ui/sheet'
import { MacroStats } from '../macro-stats'
import { Dica, LinkEbook, ListaIngredientes, ListaPassos, SecaoDetalhe } from '../shared/receita'
import { EBOOKS, LEGENDA_MEDIDAS, PREPAROS, SECOES, TIPOS } from './constants'
import { ReceitaFoto } from './receita-foto'
import type { Receita } from './types'

const ConteudoReceita = ({ receita }: { receita: Receita }) => {
  const secao = SECOES[receita.secao]
  const ebook = EBOOKS[receita.ebook]

  return (
    <div className="flex flex-col gap-5">
      <ReceitaFoto
        receita={receita}
        alt={receita.nome}
        className="aspect-4/3 w-full rounded-xl"
      />

      <div className="flex flex-wrap gap-1.5">
        <Badge variant="primary">
          {TIPOS[secao.tipo].emoji} {secao.titulo}
        </Badge>
        {receita.vegana && <Badge variant="accent">🌱 Vegana</Badge>}
        {receita.preparo.map((preparo) => (
          <Badge key={preparo}>
            {PREPAROS[preparo].emoji} {PREPAROS[preparo].label}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <MacroStats calorias={receita.macros.calorias} macros={receita.macros} />
        <p className="px-1 text-xs text-muted-foreground">
          {receita.rende ? `Por porção · rende ${receita.rende}` : 'Receita inteira'}
        </p>
      </div>

      <SecaoDetalhe titulo="Ingredientes">
        {receita.ingredientes.map((grupo) => (
          <ListaIngredientes
            key={grupo.titulo ?? 'base'}
            titulo={grupo.titulo}
            itens={grupo.itens.map((nome) => ({ nome }))}
          />
        ))}
        <p className="text-[11px] text-muted-foreground">{LEGENDA_MEDIDAS}</p>
      </SecaoDetalhe>

      {receita.passos.length > 0 && (
        <SecaoDetalhe titulo="Modo de preparo">
          <ListaPassos passos={receita.passos} />
        </SecaoDetalhe>
      )}

      {receita.dica && <Dica>{receita.dica}</Dica>}

      <LinkEbook arquivo={ebook.arquivo} pagina={receita.pagina}>
        Ebook {ebook.titulo} ({ebook.autora}) · pág. {receita.pagina}
      </LinkEbook>
    </div>
  )
}

type ReceitaDetalheProps = {
  receita?: Receita
  onFechar: () => void
}

export const ReceitaDetalhe = ({ receita, onFechar }: ReceitaDetalheProps) => (
  <Sheet open={Boolean(receita)} title={receita?.nome ?? ''} onClose={onFechar}>
    {receita && <ConteudoReceita receita={receita} />}
  </Sheet>
)
