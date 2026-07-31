import { useState } from 'react'
import { Check, ClipboardCopy, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExamList } from './exam-list'
import { LISTA_CLINICO } from './exames'

const textoDaLista = () =>
  [
    'Exames de sangue:',
    ...LISTA_CLINICO.flatMap((grupo) => [
      '',
      grupo.categoria.toUpperCase(),
      ...grupo.exames.map(
        (exame) => `- ${exame.nome}${exame.abbr ? ` (${exame.abbr})` : ''}`,
      ),
    ]),
  ].join('\n')

export const ListaClinico = () => {
  const [descricoes, setDescricoes] = useState(false)
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(textoDaLista())
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={descricoes ? 'default' : 'outline'}
          onClick={() => setDescricoes((atual) => !atual)}
          aria-pressed={descricoes}
        >
          <Info className="size-3.5" />
          Descrições
        </Button>
        <Button size="sm" variant="outline" onClick={copiar}>
          {copiado ? (
            <Check className="size-3.5" />
          ) : (
            <ClipboardCopy className="size-3.5" />
          )}
          {copiado ? 'Copiado!' : 'Copiar lista'}
        </Button>
      </div>

      <ExamList grupos={LISTA_CLINICO} mostrarDescricoes={descricoes} />
    </div>
  )
}
