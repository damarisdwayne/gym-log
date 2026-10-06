import type { ReactNode } from 'react'
import { ExternalLink, FileText, Lightbulb, type LucideIcon } from 'lucide-react'

export type ItemIngrediente = {
  nome: string
  detalhe?: string
}

export const SecaoDetalhe = ({ titulo, children }: { titulo: string; children: ReactNode }) => (
  <section className="flex flex-col gap-2">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      {titulo}
    </h3>
    {children}
  </section>
)

type ListaIngredientesProps = {
  titulo?: string
  itens: ItemIngrediente[]
}

export const ListaIngredientes = ({ titulo, itens }: ListaIngredientesProps) => (
  <div className="flex flex-col gap-1">
    {titulo && <span className="text-xs font-semibold text-primary">{titulo}</span>}
    <ul className="flex flex-col divide-y divide-border/60">
      {itens.map((item) => (
        <li key={`${item.nome}-${item.detalhe ?? ''}`} className="flex items-baseline gap-3 py-1.5">
          <span className="text-sm leading-snug">{item.nome}</span>
          {item.detalhe && (
            <span className="ml-auto shrink-0 text-right text-xs text-muted-foreground">
              {item.detalhe}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
)

export const ListaPassos = ({ passos }: { passos: string[] }) => (
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

export const Dica = ({ children }: { children: ReactNode }) => (
  <p className="flex gap-2 rounded-lg border border-accent/30 bg-accent/5 p-3 text-sm text-accent">
    <Lightbulb className="mt-0.5 size-4 shrink-0" />
    {children}
  </p>
)

type LinkFonteProps = {
  href: string
  icon?: LucideIcon
  children: ReactNode
}

export const LinkFonte = ({ href, icon: Icon = ExternalLink, children }: LinkFonteProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
  >
    <Icon className="size-3.5" />
    {children}
  </a>
)

type LinkOriginalProps = {
  link: string
  autor: string
}

export const LinkOriginal = ({ link, autor }: LinkOriginalProps) => (
  <LinkFonte href={link}>Ver original · {autor}</LinkFonte>
)

type LinkEbookProps = {
  arquivo: string
  pagina: number
  children: ReactNode
}

export const LinkEbook = ({ arquivo, pagina, children }: LinkEbookProps) => (
  <LinkFonte href={`${arquivo}#page=${pagina}`} icon={FileText}>
    {children}
  </LinkFonte>
)
