import { FileText } from 'lucide-react'
import { COMPOSICAO } from './composicao'

export const ComposicaoTable = () => (
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

    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-115 border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b border-border px-3 py-2 text-left text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Parâmetro
            </th>
            {COMPOSICAO.datas.map((data) => (
              <th
                key={data}
                className="whitespace-nowrap border-b border-border px-3 py-2 text-left text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPOSICAO.linhas.map((linha) => (
            <tr key={linha.parametro} className="border-b border-border/50">
              <td className="px-3 py-2 align-baseline">{linha.parametro}</td>
              {linha.valores.map((valor, indice) => (
                <td
                  key={`${linha.parametro}-${COMPOSICAO.datas[indice]}`}
                  className="whitespace-nowrap px-3 py-2 align-baseline font-semibold"
                >
                  {valor}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-xs leading-relaxed text-muted-foreground">
      {COMPOSICAO.nota}
    </p>
  </div>
)
