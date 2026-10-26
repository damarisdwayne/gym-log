import { useState } from 'react'
import { Check, FileText, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ListaPorSemana, VolumeSemanal, type Divisao } from '../meu-treino'
import { aplicarDivisao, DIVISAO_PADRAO, opcoesDivisao } from './divisao'
import { DivisaoField } from './divisao-field'
import { TreinoLeitura } from './treino-leitura'
import type { Modelo } from './types'

const mesmaDivisao = (a: Divisao, b?: Divisao) =>
  a.dias === b?.dias && a.foco === b.foco && (a.semana ?? 1) === (b.semana ?? 1)

const rotuloBotao = (ativo: boolean, jaAplicado: boolean) => {
  if (jaAplicado) return 'Este é o treino atual'
  return ativo ? 'Aplicar divisão' : 'Usar como treino atual'
}

type ModeloDetalheProps = {
  modelo: Modelo
  ativo: boolean
  divisaoInicial?: Divisao
  onUsar: (divisao?: Divisao) => void
}

export const ModeloDetalhe = ({ modelo, ativo, divisaoInicial, onUsar }: ModeloDetalheProps) => {
  const [divisao, setDivisao] = useState(divisaoInicial ?? DIVISAO_PADRAO)
  const opcoes = opcoesDivisao(modelo, divisao)
  const treinos = opcoes ? aplicarDivisao(modelo, modelo.treinos, divisao) : modelo.treinos
  const jaAplicado = ativo && (!opcoes || mesmaDivisao(divisao, divisaoInicial))

  return (
    <div className="flex flex-col gap-3">
      {opcoes && <DivisaoField value={divisao} opcoes={opcoes} onChange={setDivisao} />}

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => onUsar(opcoes ? divisao : undefined)} disabled={jaAplicado}>
          {jaAplicado ? <Check className="size-4" /> : <Play className="size-4" />}
          {rotuloBotao(ativo, jaAplicado)}
        </Button>
        {modelo.arquivo && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(modelo.arquivo, '_blank', 'noopener,noreferrer')}
          >
            <FileText className="size-4" />
            Ver planilha
          </Button>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        Vira uma cópia que você pode editar. O seu treino continua salvo e você volta pra ele quando quiser.
      </p>

      <VolumeSemanal treinos={treinos} />

      <ListaPorSemana
        treinos={treinos}
        renderTreino={(treino, indice) => <TreinoLeitura key={treino.id} indice={indice} treino={treino} />}
      />
    </div>
  )
}
