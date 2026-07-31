import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { CURSOS } from './data'
import { FichaItem } from './ficha-item'
import type { Ficha } from './types'

const FichaList = ({ fichas }: { fichas: Ficha[] }) => (
  <div className="flex flex-col gap-2">
    {fichas.map((ficha) => (
      <FichaItem key={ficha.id} ficha={ficha} />
    ))}
  </div>
)

export const Fichas = () => (
  <div className="flex flex-col gap-6">
    {CURSOS.map((curso) => (
      <section key={curso.id} className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5 px-1">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {curso.nome}
          </h2>
          <p className="text-xs text-muted-foreground">{curso.descricao}</p>
        </div>

        {curso.geral.length > 0 && (
          <Collapsible
            title="Geral"
            meta={<Badge>{curso.geral.length} arquivos</Badge>}
          >
            <FichaList fichas={curso.geral} />
          </Collapsible>
        )}

        {curso.meses.map((mes) => (
          <Collapsible
            key={mes.id}
            title={mes.label}
            meta={<Badge>{mes.fichas.length} arquivos</Badge>}
          >
            <FichaList fichas={mes.fichas} />
          </Collapsible>
        ))}
      </section>
    ))}
  </div>
)
