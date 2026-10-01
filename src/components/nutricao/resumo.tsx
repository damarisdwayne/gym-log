import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  MEDIDAS,
  MEDIDAS_EXTRAS,
  OBJETIVOS,
  calcularCalorias,
  calcularGordura,
  formatar,
  parseNumero,
  useDadosCalculadora,
  type CampoNumerico,
} from './calculadora'
import { MacroStats } from './macro-stats'
import type { PaginaNutricao } from './paginas'

type Medida = { campo: CampoNumerico; label: string; sufixo: string }

const BASICAS: Medida[] = [
  { campo: 'peso', label: 'Peso', sufixo: 'kg' },
  { campo: 'altura', label: 'Altura', sufixo: 'cm' },
]

type SecaoProps = {
  titulo: string
  acao: string
  onAcao: () => void
  children: ReactNode
}

const Secao = ({ titulo, acao, onAcao, children }: SecaoProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {titulo}
      </span>
      <button
        type="button"
        onClick={onAcao}
        className="inline-flex items-center text-xs font-medium text-primary hover:underline"
      >
        {acao}
        <ChevronRight className="size-3.5" />
      </button>
    </div>
    {children}
  </div>
)

type ResumoProps = {
  onAbrir: (pagina: PaginaNutricao) => void
}

export const Resumo = ({ onAbrir }: ResumoProps) => {
  const [dados] = useDadosCalculadora()
  const gordura = calcularGordura(dados)
  const percentual = gordura?.percentual ?? parseNumero(dados.gordura)
  const calorias = calcularCalorias(dados)
  const objetivo = OBJETIVOS.find((item) => item.value === dados.objetivo)
  const medidas = [
    ...BASICAS,
    ...[...MEDIDAS[dados.sexo], ...MEDIDAS_EXTRAS[dados.sexo]].map((item) => ({
      ...item,
      sufixo: 'cm',
    })),
  ]
    .map((item) => ({ ...item, valor: parseNumero(dados[item.campo]) }))
    .filter((item) => item.valor !== null)

  return (
    <Card>
      <CardContent className="flex flex-col gap-5 pt-4">
        <Secao
          titulo="Corpo"
          acao="Atualizar medidas"
          onAcao={() => onAbrir('gordura')}
        >
          {percentual === null && medidas.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Preencha a calculadora de % de gordura pra ver suas medidas aqui.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {percentual !== null && (
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-3xl font-semibold tabular-nums text-primary">
                    {formatar(percentual)}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    de gordura
                  </span>
                  {gordura && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      massa magra{' '}
                      <strong className="text-foreground">
                        {formatar(gordura.massaMagra)} kg
                      </strong>
                    </span>
                  )}
                </div>
              )}
              <div className="grid grid-cols-3 gap-1.5">
                {medidas.map((item) => (
                  <div
                    key={item.campo}
                    className="flex flex-col rounded-lg bg-muted px-2.5 py-2"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold tabular-nums">
                      {dados[item.campo]}
                      <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                        {item.sufixo}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Secao>

        <Secao
          titulo="Meta diária"
          acao="Recalcular"
          onAcao={() => onAbrir('calorias')}
        >
          {calorias ? (
            <div className="flex flex-col gap-2">
              <MacroStats
                calorias={calorias.calorias}
                macros={calorias.macros}
              />
              <p className="text-xs text-muted-foreground">
                Objetivo: {objetivo?.label.toLowerCase()}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Preencha a calculadora de calorias pra ver sua meta aqui.
            </p>
          )}
        </Secao>
      </CardContent>
    </Card>
  )
}
