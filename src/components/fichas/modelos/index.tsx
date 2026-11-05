import { useCallback, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import { Sheet } from '@/components/ui/sheet'
import { ModeloDetalhe } from './modelo-detalhe'
import { ModeloLinha } from './modelo-linha'
import { agruparPorGrupo, ORIGENS, rotuloGrupo, tituloCompleto } from './origens'
import { ehModelo } from './variantes'
import type { Divisao } from '../meu-treino'
import type { Modelo } from './types'

export { ajusteDivisao, DIVISAO_PADRAO, opcoesDivisao } from './divisao'
export { DivisaoField } from './divisao-field'
export type { Modelo } from './types'
export { paraAtivar } from './origens'
export { ehModelo, resolverModelo } from './variantes'
export { useModelos } from './use-modelos'

type TreinosProntosProps = {
  modelos?: Modelo[]
  atualId?: string
  divisaoAtual?: Divisao
  varianteAtual?: string
  onUsar: (modelo: Modelo, divisao?: Divisao, variante?: string) => void
}

export const TreinosProntos = ({ modelos, atualId, divisaoAtual, varianteAtual, onUsar }: TreinosProntosProps) => {
  const [aberto, setAberto] = useState<Modelo>()
  const fechar = useCallback(() => setAberto(undefined), [])

  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5 px-1">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Treinos prontos
        </h2>
        <p className="text-xs text-muted-foreground">Use uma planilha como treino atual sem perder o seu</p>
      </div>

      {!modelos && <p className="px-1 text-xs text-muted-foreground">Carregando treinos…</p>}

      {modelos &&
        ORIGENS.map((origem) => {
          const daOrigem = modelos.filter((modelo) => modelo.origem === origem.id)
          if (!daOrigem.length) return null
          return (
            <Collapsible
              key={origem.id}
              title={origem.nome}
              description={origem.descricao}
              meta={<Badge>{daOrigem.length === 1 ? `${daOrigem[0].treinos.length} treinos` : `${daOrigem.length} fichas`}</Badge>}
            >
              <div className="flex flex-col gap-3">
                {[...agruparPorGrupo(daOrigem)].map(([grupo, doGrupo]) => (
                  <div key={grupo} className="flex flex-col">
                    {rotuloGrupo(doGrupo[0]) && (
                      <span className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {rotuloGrupo(doGrupo[0])}
                      </span>
                    )}
                    {doGrupo.map((modelo) => (
                      <ModeloLinha
                        key={modelo.id}
                        modelo={modelo}
                        ativo={ehModelo(modelo, atualId)}
                        onAbrir={() => setAberto(modelo)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </Collapsible>
          )
        })}

      <Sheet open={Boolean(aberto)} title={aberto ? tituloCompleto(aberto) : ''} onClose={fechar}>
        {aberto && (
          <ModeloDetalhe
            modelo={aberto}
            ativo={ehModelo(aberto, atualId)}
            divisaoInicial={ehModelo(aberto, atualId) ? divisaoAtual : undefined}
            varianteInicial={ehModelo(aberto, atualId) ? varianteAtual : undefined}
            onUsar={(divisao, variante) => {
              onUsar(aberto, divisao, variante)
              fechar()
            }}
          />
        )}
      </Sheet>
    </section>
  )
}
