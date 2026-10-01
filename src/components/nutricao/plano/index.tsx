import { useState } from 'react'
import { FileText } from 'lucide-react'
import { Segmented } from '@/components/ui/segmented'
import { MacroStats } from '../macro-stats'
import { PLANO } from './data'
import { RefeicaoCard } from './refeicao-card'

export { PLANO } from './data'
export type { Macros } from './types'

const OPCOES_REFEICAO = PLANO.refeicoes.map((refeicao) => ({
  value: refeicao.id,
  label: refeicao.atalho,
  icon: refeicao.emoji,
}))

export const PlanoAlimentar = () => {
  const [refeicaoId, setRefeicaoId] = useState(PLANO.refeicoes[0].id)
  const refeicao =
    PLANO.refeicoes.find((item) => item.id === refeicaoId) ?? PLANO.refeicoes[0]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
        <span className="font-medium text-primary">📅 {PLANO.prescritoEm}</span>
        <span className="text-muted-foreground">· foco: {PLANO.foco}</span>
        <a
          href={PLANO.arquivo}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="size-3" />
          PDF
        </a>
      </div>

      <MacroStats calorias={PLANO.calorias} macros={PLANO.macros} />

      <Segmented
        label="Refeição"
        options={OPCOES_REFEICAO}
        value={refeicao.id}
        onChange={setRefeicaoId}
      />

      <RefeicaoCard key={refeicao.id} refeicao={refeicao} />
    </div>
  )
}
