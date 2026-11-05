import { useState } from 'react'
import { Check, FileText, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ListaPorSemana, VolumeSemanal, type Divisao } from '../meu-treino'
import { aplicarDivisao, DIVISAO_PADRAO, opcoesDivisao } from './divisao'
import { DivisaoField } from './divisao-field'
import { TreinoLeitura } from './treino-leitura'
import type { Modelo, SelecaoVariante } from './types'
import { VarianteField } from './variante-field'
import { resolverModelo, varianteDe } from './variantes'

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
  varianteInicial?: string
  onUsar: (divisao?: Divisao, variante?: string) => void
}

export const ModeloDetalhe = ({ modelo, ativo, divisaoInicial, varianteInicial, onUsar }: ModeloDetalheProps) => {
  const [divisao, setDivisao] = useState(divisaoInicial ?? DIVISAO_PADRAO)
  const [selecao, setSelecao] = useState<SelecaoVariante | string | undefined>(varianteInicial)
  const variante = varianteDe(modelo, selecao)
  const resolvido = resolverModelo(modelo, variante?.chave)
  const opcoes = opcoesDivisao(resolvido, divisao)
  const treinos = opcoes ? aplicarDivisao(resolvido, resolvido.treinos, divisao) : resolvido.treinos
  const mesmaVariante = variante?.chave === varianteInicial
  const jaAplicado = ativo && mesmaVariante && (!opcoes || mesmaDivisao(divisao, divisaoInicial))

  return (
    <div className="flex flex-col gap-3">
      {variante && <VarianteField modelo={modelo} value={variante.valores} onChange={setSelecao} />}

      {opcoes && <DivisaoField value={divisao} opcoes={opcoes} onChange={setDivisao} />}

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => onUsar(opcoes ? divisao : undefined, variante?.chave)} disabled={jaAplicado}>
          {jaAplicado ? <Check className="size-4" /> : <Play className="size-4" />}
          {rotuloBotao(ativo && mesmaVariante, jaAplicado)}
        </Button>
        {resolvido.arquivo && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(resolvido.arquivo, '_blank', 'noopener,noreferrer')}
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
