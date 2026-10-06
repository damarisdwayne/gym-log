import { Check, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

type AcoesFormProps = {
  rotulo: string
  podeSalvar: boolean
  onSalvar: () => void
  onRemover?: () => void
}

export const AcoesForm = ({ rotulo, podeSalvar, onSalvar, onRemover }: AcoesFormProps) => (
  <div className="flex gap-2">
    {onRemover && (
      <Button variant="destructive" onClick={onRemover} aria-label="Excluir">
        <Trash className="size-4" />
      </Button>
    )}
    <Button className="flex-1" onClick={onSalvar} disabled={!podeSalvar}>
      <Check className="size-4" />
      {rotulo}
    </Button>
  </div>
)
