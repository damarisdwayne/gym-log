import { X } from 'lucide-react'
import { EvolucaoTable } from '../evolucao-table'
import { CAMPOS_MEDICAO } from './constants'
import { useMedicoes } from './use-medicoes'
import { formatarData } from './utils'

export const MinhasMedidas = () => {
  const { medicoes, remover } = useMedicoes()

  if (medicoes.length === 0)
    return (
      <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
        Nenhuma medição salva ainda. Preencha a calculadora de % de gordura e
        toque em "Salvar".
      </p>
    )

  const handleRemover = (data: string) => {
    if (window.confirm(`Apagar a medição de ${formatarData(data)}?`))
      remover(data)
  }

  const colunas = medicoes.map((medicao) => ({
    id: medicao.data,
    titulo: (
      <span className="inline-flex items-center gap-1">
        {formatarData(medicao.data)}
        <button
          type="button"
          onClick={() => handleRemover(medicao.data)}
          aria-label={`Apagar medição de ${formatarData(medicao.data)}`}
          className="rounded p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
        >
          <X className="size-3" />
        </button>
      </span>
    ),
  }))

  const linhas = CAMPOS_MEDICAO.filter(({ campo }) =>
    medicoes.some((medicao) => medicao.valores[campo] !== undefined),
  ).map(({ campo, label, sufixo }) => ({
    parametro: label,
    valores: medicoes.map((medicao) => {
      const valor = medicao.valores[campo]
      return valor === undefined
        ? '-'
        : `${valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} ${sufixo}`
    }),
  }))

  return <EvolucaoTable colunas={colunas} linhas={linhas} />
}
