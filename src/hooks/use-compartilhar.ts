import { useState } from 'react'

const TEMPO_COPIADO = 1800

const compartilhar = async (titulo: string, texto: string) => {
  if (navigator.share) {
    try {
      await navigator.share({ title: titulo, text: texto })
      return false
    } catch (erro) {
      if (erro instanceof DOMException && erro.name === 'AbortError') return false
    }
  }
  await navigator.clipboard.writeText(texto)
  return true
}

export const useCompartilhar = () => {
  const [copiado, setCopiado] = useState(false)

  const enviar = async (titulo: string, texto: string) => {
    try {
      if (!(await compartilhar(titulo, texto))) return
      setCopiado(true)
      setTimeout(() => setCopiado(false), TEMPO_COPIADO)
    } catch {
      setCopiado(false)
    }
  }

  return { copiado, enviar }
}
