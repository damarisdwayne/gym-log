import { useCallback, useRef, useState } from 'react'

const load = <T extends object>(key: string, initial: T): T => {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return initial
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return initial
    return { ...initial, ...parsed }
  } catch {
    return initial
  }
}

const save = (key: string, value: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    return
  }
}

export const useStoredState = <T extends object>(key: string, initial: T) => {
  const [value, setValue] = useState<T>(() => load(key, initial))
  const atual = useRef(value)

  const update = useCallback(
    (patch: Partial<T>) => {
      const next = { ...atual.current, ...patch }
      atual.current = next
      save(key, next)
      setValue(next)
    },
    [key],
  )

  return [value, update] as const
}
