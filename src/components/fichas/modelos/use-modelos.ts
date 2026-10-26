import { useEffect, useState } from 'react'
import { carregarModelos } from './data'
import type { Modelo } from './types'

export const useModelos = () => {
  const [modelos, setModelos] = useState<Modelo[]>()

  useEffect(() => {
    let ativo = true
    carregarModelos().then((carregados) => {
      if (ativo) setModelos(carregados)
    })
    return () => {
      ativo = false
    }
  }, [])

  return modelos
}
