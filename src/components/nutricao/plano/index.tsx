import { useState } from 'react'
import { Droplets, FileText } from 'lucide-react'
import { Segmented } from '@/components/ui/segmented'
import { MacroStats } from '../macro-stats'
import { dietaDoDia, PLANO } from './data'
import { RefeicaoCard } from './refeicao-card'

export { DIETA_PADRAO, PLANO } from './data'
export type { Macros } from './types'

const OPCOES_DIETA = PLANO.dietas.map((dieta) => ({
  value: dieta.id,
  label: dieta.titulo,
  description: `${dieta.calorias} kcal`,
}))

export const PlanoAlimentar = () => {
  const [dietaId, setDietaId] = useState(() => dietaDoDia().id)
  const [refeicaoId, setRefeicaoId] = useState<string>()

  const dieta = PLANO.dietas.find((item) => item.id === dietaId) ?? PLANO.dietas[0]
  const refeicao =
    dieta.refeicoes.find((item) => item.id === refeicaoId) ?? dieta.refeicoes[0]
  const opcoesRefeicao = dieta.refeicoes.map((item) => ({
    value: item.id,
    label: item.atalho,
    icon: item.emoji,
  }))

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
        <span className="font-medium text-primary">📅 {PLANO.prescritoEm}</span>
        <span className="text-muted-foreground">· {PLANO.nutricionista}</span>
        <a
          href={dieta.arquivo}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="size-3" />
          PDF
        </a>
      </div>

      {PLANO.orientacoes.map((orientacao) => (
        <p key={orientacao} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Droplets className="size-3.5 shrink-0 text-primary" />
          {orientacao}
        </p>
      ))}

      <Segmented label="Dia" options={OPCOES_DIETA} value={dieta.id} onChange={setDietaId} />

      <MacroStats calorias={dieta.calorias} macros={dieta.macros} />

      <Segmented
        label="Refeição"
        options={opcoesRefeicao}
        value={refeicao.id}
        onChange={setRefeicaoId}
        className={opcoesRefeicao.length > 4 ? 'grid-flow-row grid-cols-3' : undefined}
      />

      <RefeicaoCard key={`${dieta.id}-${refeicao.id}`} refeicao={refeicao} />
    </div>
  )
}
