import { useCallback, useMemo, useState } from 'react'
import { favoritasPrimeiro, Resultados, SeletorOrdem, useFavoritas } from '../shared/receita'
import { FiltrosReceitas } from './filtros-receitas'
import { ReceitaCard } from './receita-card'
import { ReceitaDetalhe } from './receita-detalhe'
import type { Receita } from './types'
import { useFiltroReceitas } from './use-filtro-receitas'

export { EBOOKS } from './constants'
export { RECEITAS } from './data'

const FAVORITAS_KEY = 'gym-log:receitas-favoritas:v1'

export const Receitas = () => {
  const filtro = useFiltroReceitas()
  const [aberta, setAberta] = useState<Receita>()
  const fechar = useCallback(() => setAberta(undefined), [])
  const { favoritas, alternar } = useFavoritas(FAVORITAS_KEY)
  const receitas = useMemo(
    () => favoritasPrimeiro(filtro.receitas, favoritas),
    [filtro.receitas, favoritas],
  )

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
        visiveis={receitas.length}
        total={filtro.total}
        temFiltro={filtro.temFiltro}
        onLimpar={filtro.limpar}
        acoes={<SeletorOrdem valor={filtro.ordem} onChange={filtro.setOrdem} />}
      >
        {receitas.map((receita) => (
          <ReceitaCard
            key={receita.id}
            receita={receita}
            favorita={favoritas.has(receita.id)}
            onFavoritar={() => alternar(receita.id)}
            onAbrir={setAberta}
          />
        ))}
      </Resultados>

      <ReceitaDetalhe
        receita={aberta}
        favorita={Boolean(aberta && favoritas.has(aberta.id))}
        onFavoritar={alternar}
        onFechar={fechar}
      />
    </div>
  )
}
