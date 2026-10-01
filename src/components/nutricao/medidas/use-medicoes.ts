import { useCallback, useState } from 'react'
import { STORAGE_KEY } from './constants'
import type { Medicao } from './types'

const carregar = (): Medicao[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Medicao[]) : []
  } catch {
    return []
  }
}

const gravar = (medicoes: Medicao[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(medicoes))
  } catch {
    return
  }
}

export const useMedicoes = () => {
  const [medicoes, setMedicoes] = useState(carregar)

  const atualizar = useCallback((proximas: Medicao[]) => {
    gravar(proximas)
    setMedicoes(proximas)
  }, [])

  const salvar = useCallback(
    (medicao: Medicao) =>
      atualizar(
        [
          ...carregar().filter((item) => item.data !== medicao.data),
          medicao,
        ].sort((a, b) => a.data.localeCompare(b.data)),
      ),
    [atualizar],
  )

  const remover = useCallback(
    (data: string) =>
      atualizar(carregar().filter((item) => item.data !== data)),
    [atualizar],
  )

  return { medicoes, salvar, remover }
}
