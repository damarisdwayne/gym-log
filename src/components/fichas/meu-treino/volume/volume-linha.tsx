import { cn } from '@/lib/utils'
import { FAIXA_IDEAL, formatarSeries, type VolumeMusculo } from './calculo'

const largura = (total: number) => `${Math.min(total / FAIXA_IDEAL.max, 1) * 100}%`

const corBarra = (total: number) => {
  if (total < FAIXA_IDEAL.min) return 'bg-muted-foreground/50'
  if (total > FAIXA_IDEAL.max) return 'bg-accent'
  return 'bg-primary'
}

const detalhe = ({ foco, tecnica, auxiliar }: VolumeMusculo) =>
  [
    foco && `${formatarSeries(foco)} foco`,
    tecnica && `${formatarSeries(tecnica)} técnica`,
    auxiliar && `${formatarSeries(auxiliar)} auxiliar`,
  ]
    .filter(Boolean)
    .join(' + ')

export const VolumeLinha = ({ volume }: { volume: VolumeMusculo }) => (
  <li className="flex flex-col gap-1 py-2">
    <div className="flex items-baseline gap-2">
      <span className="text-sm font-medium">{volume.musculo}</span>
      <span className="text-xs tabular-nums text-muted-foreground">{detalhe(volume)}</span>
      <span className="ml-auto text-sm font-semibold tabular-nums">
        {formatarSeries(volume.total)} séries
      </span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
      <div
        className={cn('h-full rounded-full', corBarra(volume.total))}
        style={{ width: largura(volume.total) }}
      />
    </div>
  </li>
)
