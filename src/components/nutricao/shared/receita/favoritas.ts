import { useCallback, useMemo } from 'react'
import { useStoredState } from '@/hooks/use-stored-state'

type Favoritas = { ids: string[] }

const INICIAL: Favoritas = { ids: [] }

export const useFavoritas = (chave: string) => {
  const [{ ids }, atualizar] = useStoredState(chave, INICIAL)
  const favoritas = useMemo(() => new Set(ids), [ids])

  const alternar = useCallback(
    (id: string) =>
      atualizar({ ids: favoritas.has(id) ? ids.filter((item) => item !== id) : [...ids, id] }),
    [atualizar, favoritas, ids],
  )

  return { favoritas, alternar }
}

export const favoritasPrimeiro = <T extends { id: string }>(receitas: T[], favoritas: Set<string>) =>
  [...receitas].sort((a, b) => Number(favoritas.has(b.id)) - Number(favoritas.has(a.id)))
