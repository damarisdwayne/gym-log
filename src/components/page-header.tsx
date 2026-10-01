import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

type PageHeaderProps = {
  titulo: string
  descricao?: string
  onVoltar: () => void
}

export const PageHeader = ({ titulo, descricao, onVoltar }: PageHeaderProps) => (
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="icon" onClick={onVoltar} aria-label="Voltar">
      <ArrowLeft className="size-5" />
    </Button>
    <div className="flex min-w-0 flex-col">
      <h2 className="truncate text-lg font-semibold leading-tight">{titulo}</h2>
      {descricao && (
        <p className="text-xs text-muted-foreground">{descricao}</p>
      )}
    </div>
  </div>
)
