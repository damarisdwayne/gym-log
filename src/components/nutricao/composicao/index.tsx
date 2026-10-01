import { FileText } from 'lucide-react'
import { EvolucaoTable } from '../evolucao-table'
import { COMPOSICAO } from './data'

export const AvaliacoesNutri = () => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
      <span className="font-medium text-primary">📅 até 02/06/2026</span>
      <span className="text-muted-foreground">· avaliação da nutri</span>
      {COMPOSICAO.arquivo && (
        <a
          href={COMPOSICAO.arquivo}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="size-3" />
          PDF
        </a>
      )}
    </div>

    <EvolucaoTable
      colunas={COMPOSICAO.datas.map((data) => ({ id: data, titulo: data }))}
      linhas={COMPOSICAO.linhas}
    />

    <p className="text-xs leading-relaxed text-muted-foreground">
      {COMPOSICAO.nota}
    </p>
  </div>
)
