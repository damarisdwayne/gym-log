import { useCallback, useState } from 'react'
import { Resultados, SeletorOrdem } from '../shared/receita'
import { FiltrosReceitas } from './filtros-receitas'
import { ReceitaCard } from './receita-card'
import { ReceitaDetalhe } from './receita-detalhe'
import type { Receita } from './types'
import { useFiltroReceitas } from './use-filtro-receitas'

export { EBOOKS } from './constants'
export { RECEITAS } from './data'

export const Receitas = () => {
  const filtro = useFiltroReceitas()
  const [aberta, setAberta] = useState<Receita>()
  const fechar = useCallback(() => setAberta(undefined), [])

  return (
    <div className="flex flex-col gap-4">
      <FiltrosReceitas
        busca={filtro.busca}
        tipo={filtro.tipo}
        ativos={filtro.ativos}
        onBusca={filtro.setBusca}
        onTipo={filtro.setTipo}
        onAlternar={filtro.alternar}
      />

      <Resultados
        visiveis={filtro.receitas.length}
        total={filtro.total}
        temFiltro={filtro.temFiltro}
        onLimpar={filtro.limpar}
        acoes={<SeletorOrdem valor={filtro.ordem} onChange={filtro.setOrdem} />}
      >
        {filtro.receitas.map((receita) => (
          <ReceitaCard key={receita.id} receita={receita} onAbrir={setAberta} />
        ))}
      </Resultados>

      <ReceitaDetalhe receita={aberta} onFechar={fechar} />
    </div>
  )
}
