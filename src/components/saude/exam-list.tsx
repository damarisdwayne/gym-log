import { Square } from 'lucide-react'
import type { GrupoExames } from './types'

type ExamListProps = {
  grupos: GrupoExames[]
  mostrarDescricoes: boolean
}

export const ExamList = ({ grupos, mostrarDescricoes }: ExamListProps) => (
  <div className="flex flex-col gap-4">
    {grupos.map((grupo) => (
      <div key={grupo.categoria} className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
            {grupo.categoria}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <ul className="flex flex-col">
          {grupo.exames.map((exame) => (
            <li key={exame.nome} className="rounded-md px-1 py-1.5">
              <div className="flex items-baseline gap-2">
                <Square className="size-3 shrink-0 translate-y-0.5 text-primary" />
                <span className="text-sm">{exame.nome}</span>
                {exame.abbr && (
                  <span className="text-[10px] text-muted-foreground">
                    {exame.abbr}
                  </span>
                )}
              </div>
              {mostrarDescricoes && (
                <p className="ml-5 mt-1 text-xs leading-relaxed text-muted-foreground">
                  {exame.descricao}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
