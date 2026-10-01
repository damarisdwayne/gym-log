import { useCallback } from 'react'
import { useStoredState } from '@/hooks/use-stored-state'
import { DADOS_INICIAIS, STORAGE_KEY } from './constants'
import type { AtualizarCampo, DadosCalculadora } from './types'

export const useDadosCalculadora = () => {
  const [dados, atualizar] = useStoredState(STORAGE_KEY, DADOS_INICIAIS)

  const atualizarCampo = useCallback<AtualizarCampo>(
    (campo, valor) => atualizar({ [campo]: valor } as Partial<DadosCalculadora>),
    [atualizar],
  )

  return [dados, atualizarCampo] as const
}
