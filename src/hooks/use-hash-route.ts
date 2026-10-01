import { useCallback, useEffect, useState } from 'react'

type EstadoInterno = { interno: true }

const lerSegmentos = () =>
  window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)

const ehInterno = (state: unknown): state is EstadoInterno =>
  typeof state === 'object' && state !== null && 'interno' in state

export const useHashRoute = () => {
  const [segmentos, setSegmentos] = useState(lerSegmentos)

  useEffect(() => {
    const sincronizar = () => setSegmentos(lerSegmentos())
    window.addEventListener('popstate', sincronizar)
    return () => window.removeEventListener('popstate', sincronizar)
  }, [])

  const navegar = useCallback((caminho: string) => {
    const estado: EstadoInterno = { interno: true }
    window.history.pushState(estado, '', `#/${caminho}`)
    setSegmentos(lerSegmentos())
    window.scrollTo(0, 0)
  }, [])

  const voltar = useCallback((fallback: string) => {
    if (ehInterno(window.history.state)) {
      window.history.back()
      return
    }
    window.history.replaceState(null, '', `#/${fallback}`)
    setSegmentos(lerSegmentos())
    window.scrollTo(0, 0)
  }, [])

  return { segmentos, navegar, voltar }
}
