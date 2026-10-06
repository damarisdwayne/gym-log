import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { CURSOS } from './data'
import { FichaItem } from './ficha-item'
import { MeuTreino } from './meu-treino'
import type { Ficha } from './types'

export { FichaItem } from './ficha-item'
export type { Ficha } from './types'

const FichaList = ({ fichas }: { fichas: Ficha[] }) => (
  <div className="flex flex-col gap-2">
    {fichas.map((ficha) => (
      <FichaItem key={ficha.id} ficha={ficha} />
    ))}
  </div>
)

type FichasProps = {
  exerciseNames: string[]
}

export const Fichas = ({ exerciseNames }: FichasProps) => (
  <div className="flex flex-col gap-6">
    <MeuTreino exerciseNames={exerciseNames} />

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

        {[...curso.meses, ...(curso.extras ?? [])].map((grupo) => (
          <Collapsible
            key={grupo.id}
            title={grupo.label}
            meta={<Badge>{grupo.fichas.length} arquivos</Badge>}
          >
            <FichaList fichas={grupo.fichas} />
          </Collapsible>
        ))}
      </section>
    ))}
  </div>
)
