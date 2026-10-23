import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VolumeSemanal, type Treino } from '../meu-treino'
import { TREINOS_PK } from './data'
import { TreinoPk } from './treino-pk'

type TreinadorPkProps = {
  onUsar: (treinos: Treino[]) => void
}

export const TreinadorPk = ({ onUsar }: TreinadorPkProps) => {
  const usar = () => {
    if (window.confirm(`Adicionar os ${TREINOS_PK.length} treinos do PK ao Meu treino?`)) onUsar(TREINOS_PK)
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Treinador PK
          </h2>
          <p className="text-xs text-muted-foreground">Divisão em 5 treinos · 8–12 repetições</p>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto" onClick={usar}>
          <Copy className="size-4" />
          Usar no meu treino
        </Button>
      </div>

      <VolumeSemanal treinos={TREINOS_PK} />

      {TREINOS_PK.map((treino, indice) => (
        <TreinoPk key={treino.id} indice={indice} treino={treino} />
      ))}
    </section>
  )
}
