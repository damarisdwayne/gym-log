import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Dica } from './types'

type DicaCardProps = {
  dica: Dica
}

export const DicaCard = ({ dica }: DicaCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{dica.titulo}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {dica.paragrafos.map((paragrafo) => (
        <p key={paragrafo} className="text-sm leading-relaxed text-muted-foreground">
          {paragrafo}
        </p>
      ))}

      {dica.lista && (
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">{dica.lista.titulo}</p>
          <ul className="ml-4 list-disc text-sm text-muted-foreground">
            {dica.lista.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {dica.aviso && (
        <p className="text-xs leading-relaxed text-muted-foreground">
          {dica.aviso}
        </p>
      )}

      <a
        href={dica.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex w-fit items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ExternalLink className="size-3" />
        {dica.link.label}
      </a>
    </CardContent>
  </Card>
)
