import { useState } from 'react'
import { Check, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { todayISO } from '@/lib/date'
import type { DadosCalculadora } from '../calculadora'
import { useMedicoes } from './use-medicoes'
import { criarMedicao, formatarData } from './utils'

type SalvarMedicaoProps = {
  dados: DadosCalculadora
}

export const SalvarMedicao = ({ dados }: SalvarMedicaoProps) => {
  const { salvar } = useMedicoes()
  const [data, setData] = useState(todayISO)
  const [salvoEm, setSalvoEm] = useState<string | null>(null)
  const medicao = criarMedicao(data, dados)
  const vazia = Object.keys(medicao.valores).length === 0

  const handleSalvar = () => {
    salvar(medicao)
    setSalvoEm(data)
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border p-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">Salvar no meu histórico</span>
        <span className="text-xs text-muted-foreground">
          Guarda as medidas acima pra acompanhar mês a mês em Composição
          corporal. Na mesma data, substitui a anterior.
        </span>
      </div>

      <div className="flex items-end gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <Label htmlFor="medicao-data">Data</Label>
          <Input
            id="medicao-data"
            type="date"
            value={data}
            max={todayISO()}
            onChange={(event) => {
              setData(event.target.value)
              setSalvoEm(null)
            }}
          />
        </div>
        <Button onClick={handleSalvar} disabled={vazia || !data}>
          {salvoEm === data ? (
            <Check className="size-4" />
          ) : (
            <Save className="size-4" />
          )}
          {salvoEm === data ? 'Salvo' : 'Salvar'}
        </Button>
      </div>

      {salvoEm === data && (
        <p className="text-xs text-primary">
          Medição de {formatarData(data)} salva.
        </p>
      )}
    </div>
  )
}
