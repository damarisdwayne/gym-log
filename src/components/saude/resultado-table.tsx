import { Fragment } from 'react'
import { FileText } from 'lucide-react'
import type { Coleta } from './types'

type ResultadoTableProps = {
  coleta: Coleta
}

export const ResultadoTable = ({ coleta }: ResultadoTableProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
      <span className="font-medium text-primary">📅 {coleta.data}</span>
      <span className="text-muted-foreground">· {coleta.laboratorio}</span>
      {coleta.arquivo && (
        <a
          href={coleta.arquivo}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="size-3" />
          PDF
        </a>
      )}
    </div>

    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-105 border-collapse text-sm">
        <thead>
          <tr>
            {['Exame', 'Resultado', 'Referência'].map((titulo) => (
              <th
                key={titulo}
                className="border-b border-border px-3 py-2 text-left text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coleta.grupos.map((grupo) => (
            <Fragment key={grupo.categoria}>
              <tr>
                <td
                  colSpan={3}
                  className="bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary"
                >
                  {grupo.categoria}
                </td>
              </tr>
              {grupo.linhas.map((linha) => (
                <tr key={linha.exame} className="border-b border-border/50">
                  <td className="px-3 py-2 align-baseline">{linha.exame}</td>
                  <td className="whitespace-nowrap px-3 py-2 align-baseline font-semibold">
                    {linha.valor}
                  </td>
                  <td className="px-3 py-2 align-baseline text-xs text-muted-foreground">
                    {linha.referencia}
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>

    {coleta.nota && (
      <p className="text-xs leading-relaxed text-muted-foreground">
        {coleta.nota}
      </p>
    )}
  </div>
)
