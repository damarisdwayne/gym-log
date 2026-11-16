import { Check, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCompartilhar } from '@/hooks/use-compartilhar'
import { textoTreinos } from './texto-treino'
import type { Treino } from './types'

type BotaoCompartilharProps = {
  titulo: string
  treinos: Treino[]
}

export const BotaoCompartilhar = ({ titulo, treinos }: BotaoCompartilharProps) => {
  const { copiado, enviar } = useCompartilhar()

  return (
    <Button variant="ghost" size="sm" onClick={() => enviar(titulo, textoTreinos(titulo, treinos))}>
      {copiado ? <Check className="size-4 text-primary" /> : <Share2 className="size-4" />}
      {copiado ? 'Copiado' : 'Enviar'}
    </Button>
  )
}
