import { useMemo, useState } from 'react'
import { useStoredState } from '@/hooks/use-stored-state'
import { RECEITAS_RS7 } from './data'
import { filtrarRS7, refeicaoAgora, type CriteriosRS7 } from './filtros'
import type { TagRS7 } from './types'

const STORAGE_KEY = 'gym-log:rs7-filtros:v1'

type Preferencias = Omit<CriteriosRS7, 'busca'>

export const useFiltroRS7 = () => {
  const [busca, setBusca] = useState('')
  const [preferencias, atualizar] = useStoredState<Preferencias>(STORAGE_KEY, {
    refeicao: refeicaoAgora(),
    nivel: 'todos',
    tags: [],
    ordem: 'ebook',
  })

  const receitas = useMemo(
    () => filtrarRS7(RECEITAS_RS7, { busca, ...preferencias }),
    [busca, preferencias],
  )

  const { refeicao, nivel, tags, ordem } = preferencias
  const temFiltro = Boolean(busca.trim()) || nivel !== 'todos' || tags.length > 0

  return {
    receitas,
    total: RECEITAS_RS7.length,
    busca,
    refeicao,
    nivel,
    tags,
    ordem,
    temFiltro,
    setBusca,
    setRefeicao: (valor: CriteriosRS7['refeicao']) => atualizar({ refeicao: valor }),
    setNivel: (valor: CriteriosRS7['nivel']) => atualizar({ nivel: valor }),
    setOrdem: (valor: CriteriosRS7['ordem']) => atualizar({ ordem: valor }),
    alternarTag: (tag: TagRS7) =>
      atualizar({ tags: tags.includes(tag) ? tags.filter((item) => item !== tag) : [...tags, tag] }),
    limpar: () => {
      setBusca('')
      atualizar({ nivel: 'todos', tags: [] })
    },
  }
}
