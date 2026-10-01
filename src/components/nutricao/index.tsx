import { FichaItem } from '@/components/fichas'
import { NavCard } from '@/components/nav-card'
import { PageHeader } from '@/components/page-header'
import { ARQUIVOS } from './arquivos'
import { PAGINAS, type PaginaNutricao } from './paginas'
import { Resumo } from './resumo'

type NutricaoProps = {
  pagina?: string
  onAbrir: (pagina: PaginaNutricao) => void
  onVoltar: () => void
}

export const Nutricao = ({ pagina, onAbrir, onVoltar }: NutricaoProps) => {
  const atual = PAGINAS.find((item) => item.id === pagina)

  if (atual)
    return (
      <div className="flex flex-col gap-4">
        <PageHeader
          titulo={atual.titulo}
          descricao={atual.descricao}
          onVoltar={onVoltar}
        />
        {atual.render({ abrir: onAbrir })}
      </div>
    )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-0.5 px-1">
        <h2 className="text-lg font-semibold">Nutrição</h2>
        <p className="text-xs text-muted-foreground">
          Acompanhamento com a nutri Naiara Alves
        </p>
      </div>

      <Resumo onAbrir={onAbrir} />

      <div className="flex flex-col gap-2">
        {PAGINAS.map((item) => (
          <NavCard
            key={item.id}
            emoji={item.emoji}
            titulo={item.titulo}
            descricao={item.descricao}
            onClick={() => onAbrir(item.id)}
          />
        ))}
      </div>

      <section className="flex flex-col gap-2">
        <h3 className="px-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Arquivos
        </h3>
        {ARQUIVOS.map((ficha) => (
          <FichaItem key={ficha.id} ficha={ficha} />
        ))}
      </section>
    </div>
  )
}
