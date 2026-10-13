import { useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Collapsible } from '@/components/ui/collapsible'
import type { Treino } from '../types'
import { calcularVolume, contarSemFoco, FAIXA_IDEAL } from './calculo'
import { VolumeLinha } from './volume-linha'

export const VolumeSemanal = ({ treinos }: { treinos: Treino[] }) => {
  const volumes = useMemo(() => calcularVolume(treinos), [treinos])
  const semFoco = useMemo(() => contarSemFoco(treinos), [treinos])

  if (!volumes.length && !semFoco) return null

  return (
    <Collapsible
      title="Volume semanal"
      description="Séries por músculo · auxiliar conta meia série"
      meta={<Badge>{volumes.length} músculos</Badge>}
    >
      <div className="flex flex-col gap-2">
        {volumes.length > 0 && (
          <ul className="flex flex-col divide-y divide-border/60">
            {volumes.map((volume) => (
              <VolumeLinha key={volume.musculo} volume={volume} />
            ))}
          </ul>
        )}
        <p className="text-xs text-muted-foreground">
          Referência: {FAIXA_IDEAL.min}–{FAIXA_IDEAL.max} séries por músculo na semana.
        </p>
        {semFoco > 0 && (
          <p className="text-xs text-accent">
            {semFoco === 1
              ? '1 exercício sem músculo de foco não entra na conta.'
              : `${semFoco} exercícios sem músculo de foco não entram na conta.`}
          </p>
        )}
      </div>
    </Collapsible>
  )
}
