import type { Bloco } from './types'

export const BlocoInfo = ({ bloco }: { bloco: Bloco }) => (
  <details className="group rounded-lg bg-muted/60 px-3 py-2">
    <summary className="cursor-pointer list-none text-xs font-medium text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
      <span className="mr-1 inline-block transition-transform group-open:rotate-90">
        ›
      </span>
      {bloco.titulo}
    </summary>
    <ul className="mt-2 ml-4 flex list-disc flex-col gap-1 text-xs leading-relaxed text-muted-foreground">
      {bloco.itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {bloco.nota && (
      <p className="mt-2 text-xs italic leading-relaxed text-muted-foreground">
        {bloco.nota}
      </p>
    )}
  </details>
)
