import type { ReactNode } from 'react'
import { RotateCcw, Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TreinoAtualBannerProps = {
  titulo: string
  onVoltar: () => void
  onRestaurar?: () => void
  children?: ReactNode
}

export const TreinoAtualBanner = ({ titulo, onVoltar, onRestaurar, children }: TreinoAtualBannerProps) => {
  const restaurar = () => {
    if (window.confirm(`Desfazer suas alterações em "${titulo}" e voltar à planilha original?`))
      onRestaurar?.()
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-primary/40 bg-primary/10 p-3">
      <p className="text-sm">
        Usando <span className="font-semibold">{titulo}</span>. O seu treino continua salvo.
      </p>
      {children}
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={onVoltar}>
          <Undo2 className="size-4" />
          Voltar pro meu treino
        </Button>
        {onRestaurar && (
          <Button variant="ghost" size="sm" onClick={restaurar}>
            <RotateCcw className="size-3.5" />
            Restaurar original
          </Button>
        )}
      </div>
    </div>
  )
}
