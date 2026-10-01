import type { ReactNode } from 'react'
import { AvaliacoesNutri } from './composicao'
import { MinhasMedidas } from './medidas'

const Secao = ({
  titulo,
  children,
}: {
  titulo: string
  children: ReactNode
}) => (
  <section className="flex flex-col gap-2">
    <h3 className="px-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      {titulo}
    </h3>
    {children}
  </section>
)

export const ComposicaoPagina = () => (
  <div className="flex flex-col gap-6">
    <Secao titulo="Minhas medidas">
      <MinhasMedidas />
    </Secao>
    <Secao titulo="Avaliações da nutri">
      <AvaliacoesNutri />
    </Secao>
  </div>
)
