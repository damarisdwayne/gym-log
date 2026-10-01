import type { ReactNode } from 'react'

export type LinhaEvolucao = {
  parametro: string
  valores: string[]
}

type Coluna = {
  id: string
  titulo: ReactNode
}

type EvolucaoTableProps = {
  colunas: Coluna[]
  linhas: LinhaEvolucao[]
}

const CABECALHO =
  'whitespace-nowrap border-b border-border px-3 py-2 text-left text-[10px] font-medium uppercase tracking-wider text-muted-foreground'

export const EvolucaoTable = ({ colunas, linhas }: EvolucaoTableProps) => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          <th className={CABECALHO}>Parâmetro</th>
          {colunas.map((coluna) => (
            <th key={coluna.id} className={CABECALHO}>
              {coluna.titulo}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {linhas.map((linha) => (
          <tr key={linha.parametro} className="border-b border-border/50">
            <td className="whitespace-nowrap px-3 py-2 align-baseline">
              {linha.parametro}
            </td>
            {linha.valores.map((valor, indice) => (
              <td
                key={`${linha.parametro}-${colunas[indice]?.id}`}
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
)
