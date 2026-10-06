import { useCallback, useMemo, useState } from 'react'
import { SearchField } from '@/components/ui/search-field'
import { favoritasPrimeiro, normalizar, Resultados, useFavoritas } from '../shared/receita'
import { RECEITAS_SABOROSAS } from './data'
import { ReceitaSaborosaCard } from './receita-saborosa-card'
import { ReceitaSaborosaDetalhe } from './receita-saborosa-detalhe'
import type { ReceitaSaborosa } from './types'

export { RECEITAS_SABOROSAS } from './data'

const FAVORITAS_KEY = 'gym-log:saborosas-favoritas:v1'

const textoBusca = (receita: ReceitaSaborosa) =>
  normalizar(`${receita.nome} ${receita.ingredientes.flatMap((grupo) => grupo.itens).join(' ')}`)

export const ReceitasSaborosas = () => {
  const [busca, setBusca] = useState('')
  const [aberta, setAberta] = useState<ReceitaSaborosa>()
  const fechar = useCallback(() => setAberta(undefined), [])
  const { favoritas, alternar } = useFavoritas(FAVORITAS_KEY)

  const receitas = useMemo(() => {
    const termo = normalizar(busca.trim())
    const filtradas = RECEITAS_SABOROSAS.filter(
      (receita) => !termo || textoBusca(receita).includes(termo),
    )
    return favoritasPrimeiro(filtradas, favoritas)
  }, [busca, favoritas])

  return (
    <div className="flex flex-col gap-4">
      <SearchField
        value={busca}
        placeholder="Buscar receita ou ingrediente"
        label="Buscar receita"
        onChange={setBusca}
      />

      <Resultados
        visiveis={receitas.length}
        total={RECEITAS_SABOROSAS.length}
        temFiltro={Boolean(busca.trim())}
        onLimpar={() => setBusca('')}
      >
        {receitas.map((receita) => (
          <ReceitaSaborosaCard
            key={receita.id}
            receita={receita}
            favorita={favoritas.has(receita.id)}
            onFavoritar={() => alternar(receita.id)}
            onAbrir={setAberta}
          />
        ))}
      </Resultados>

      <ReceitaSaborosaDetalhe
        receita={aberta}
        favorita={Boolean(aberta && favoritas.has(aberta.id))}
        onFavoritar={alternar}
        onFechar={fechar}
      />
    </div>
  )
}
