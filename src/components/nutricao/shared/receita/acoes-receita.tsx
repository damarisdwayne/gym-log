import { Check, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BotaoFavorito } from './botao-favorito'
import { useCompartilhar, type ReceitaCompartilhavel } from './compartilhar'

type AcoesReceitaProps = {
  receita: ReceitaCompartilhavel
  favorita: boolean
  onFavoritar: () => void
}

export const AcoesReceita = ({ receita, favorita, onFavoritar }: AcoesReceitaProps) => {
  const { copiado, enviar } = useCompartilhar()

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => enviar(receita)}
        aria-label={copiado ? 'Receita copiada' : 'Compartilhar receita'}
      >
        {copiado ? <Check className="size-4 text-primary" /> : <Share2 className="size-4" />}
      </Button>
      <BotaoFavorito
        favorita={favorita}
        onClick={onFavoritar}
        className="size-9 text-muted-foreground hover:bg-muted hover:text-foreground"
      />
    </>
  )
}
