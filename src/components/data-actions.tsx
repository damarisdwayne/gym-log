import { useRef } from 'react'
import { Download, Trash, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { todayISO } from '@/lib/date'
import { parseSessions, serializeSessions } from '@/lib/storage'
import type { SessionMap } from '@/types'

type DataActionsProps = {
  sessions: SessionMap
  onReplace: (sessions: SessionMap) => void
  onClear: () => void
}

export const DataActions = ({
  sessions,
  onReplace,
  onClear,
}: DataActionsProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleExport = () => {
    const blob = new Blob([serializeSessions(sessions)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `gym-log-${todayISO()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = async (file: File) => {
    const parsed = parseSessions(await file.text())
    if (!parsed) {
      window.alert('Arquivo inválido.')
      return
    }
    onReplace(parsed)
  }

  const handleClear = () => {
    if (window.confirm('Apagar todo o histórico? Essa ação não tem volta.'))
      onClear()
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={handleExport}>
        <Download className="size-4" />
        Exportar
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="size-4" />
        Importar
      </Button>
      <Button variant="destructive" size="sm" onClick={handleClear}>
        <Trash className="size-4" />
        Limpar
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0]
          if (file) void handleImport(file)
          event.target.value = ''
        }}
      />
    </div>
  )
}
