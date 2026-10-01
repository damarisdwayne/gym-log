import { useMemo, useState } from 'react'
import { useStoredState } from '@/hooks/use-stored-state'
import { RECEITAS } from './data'
import { alternarFiltro, filtrarReceitas, type Ordem, type TipoFiltro } from './filtros'

const STORAGE_KEY = 'gym-log:receitas-filtros:v1'

type Preferencias = {
  tipo: TipoFiltro
  ativos: string[]
  ordem: Ordem
}

const INICIAL: Preferencias = { tipo: 'todas', ativos: [], ordem: 'ebook' }

export const useFiltroReceitas = () => {
  const [busca, setBusca] = useState('')
  const [preferencias, atualizar] = useStoredState(STORAGE_KEY, INICIAL)
  const { tipo, ativos, ordem } = preferencias

  const receitas = useMemo(
    () => filtrarReceitas(RECEITAS, { busca, tipo, ativos, ordem }),
    [busca, tipo, ativos, ordem],
  )

  const temFiltro = Boolean(busca.trim()) || tipo !== 'todas' || ativos.length > 0

  return {
    receitas,
    total: RECEITAS.length,
    busca,
    tipo,
    ativos,
    ordem,
    temFiltro,
    setBusca,
    setTipo: (valor: TipoFiltro) => atualizar({ tipo: valor }),
    setOrdem: (valor: Ordem) => atualizar({ ordem: valor }),
    alternar: (id: string) => atualizar({ ativos: alternarFiltro(ativos, id) }),
    limpar: () => {
      setBusca('')
      atualizar({ tipo: 'todas', ativos: [] })
    },
  }
}
