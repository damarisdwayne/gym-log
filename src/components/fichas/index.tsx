import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { CURSOS } from './data'
import { FichaItem } from './ficha-item'
import type { MesFichas } from './types'

const byMaisRecente = (a: MesFichas, b: MesFichas) => b.id.localeCompare(a.id)

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

        {[...curso.meses].sort(byMaisRecente).map((mes) => (
          <Collapsible
            key={mes.id}
            title={mes.label}
            meta={<Badge>{mes.fichas.length} arquivos</Badge>}
          >
            <div className="flex flex-col gap-2">
              {mes.fichas.map((ficha) => (
                <FichaItem key={ficha.id} ficha={ficha} />
              ))}
            </div>
          </Collapsible>
        ))}
      </section>
    ))}
  </div>
)
