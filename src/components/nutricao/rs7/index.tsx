import { useCallback, useState } from 'react'
import { Resultados, SeletorOrdem } from '../shared/receita'
import { FiltrosRS7 } from './filtros-rs7'
import { ReceitaRS7Card } from './receita-rs7-card'
import { ReceitaRS7Detalhe } from './receita-rs7-detalhe'
import type { ReceitaRS7 } from './types'
import { useFiltroRS7 } from './use-filtro-rs7'

const ReceitasRS7 = () => {
  const filtro = useFiltroRS7()
  const [aberta, setAberta] = useState<ReceitaRS7>()
  const fechar = useCallback(() => setAberta(undefined), [])

  return (
    <div className="flex flex-col gap-4">
      <FiltrosRS7
        busca={filtro.busca}
        refeicao={filtro.refeicao}
        nivel={filtro.nivel}
        tags={filtro.tags}
        onBusca={filtro.setBusca}
        onRefeicao={filtro.setRefeicao}
        onNivel={filtro.setNivel}
        onTag={filtro.alternarTag}
      />

      <Resultados
        visiveis={filtro.receitas.length}
        total={filtro.total}
        temFiltro={filtro.temFiltro}
        onLimpar={filtro.limpar}
        acoes={<SeletorOrdem valor={filtro.ordem} onChange={filtro.setOrdem} />}
      >
        {filtro.receitas.map((receita) => (
          <ReceitaRS7Card key={receita.id} receita={receita} onAbrir={setAberta} />
        ))}
      </Resultados>

      <ReceitaRS7Detalhe receita={aberta} onFechar={fechar} />
    </div>
  )
}

export default ReceitasRS7
