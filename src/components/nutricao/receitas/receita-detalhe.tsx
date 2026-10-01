import type { ReactNode } from 'react'
import { FileText, Lightbulb } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Sheet } from '@/components/ui/sheet'
import { MacroStats } from '../macro-stats'
import { EBOOKS, LEGENDA_MEDIDAS, PREPAROS, SECOES, TIPOS } from './constants'
import { ReceitaFoto } from './receita-foto'
import type { GrupoIngredientes, Receita } from './types'

const Secao = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <section className="flex flex-col gap-2">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      {titulo}
    </h3>
    {children}
  </section>
)

const Ingredientes = ({ grupo }: { grupo: GrupoIngredientes }) => (
  <div className="flex flex-col gap-1">
    {grupo.titulo && <span className="text-xs font-semibold text-primary">{grupo.titulo}</span>}
    <ul className="flex flex-col divide-y divide-border/60">
      {grupo.itens.map((item) => (
        <li key={item} className="py-1.5 text-sm leading-snug">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Passos = ({ passos }: { passos: string[] }) => (
  <ol className="flex flex-col gap-3">
    {passos.map((passo, indice) => (
      <li key={passo} className="flex gap-3 text-sm leading-relaxed">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
          {indice + 1}
        </span>
        <span>{passo}</span>
      </li>
    ))}
  </ol>
)

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

      <Secao titulo="Ingredientes">
        {receita.ingredientes.map((grupo) => (
          <Ingredientes key={grupo.titulo ?? 'base'} grupo={grupo} />
        ))}
        <p className="text-[11px] text-muted-foreground">{LEGENDA_MEDIDAS}</p>
      </Secao>

      {receita.passos.length > 0 && (
        <Secao titulo="Modo de preparo">
          <Passos passos={receita.passos} />
        </Secao>
      )}

      {receita.dica && (
        <p className="flex gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3 text-sm text-accent">
          <Lightbulb className="mt-0.5 size-4 shrink-0" />
          {receita.dica}
        </p>
      )}

      <a
        href={`${ebook.arquivo}#page=${receita.pagina}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <FileText className="size-3.5" />
        Ebook {ebook.titulo} ({ebook.autora}) · pág. {receita.pagina}
      </a>
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
