import { useEffect, useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import { GeneratorFields } from './generator-fields'
import { LastRecordHint } from './last-record-hint'
import { ModeSelect } from './mode-select'
import { SetsEditor } from './sets-editor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { todayISO } from '@/lib/date'
import { findLastEntry } from '@/lib/progress'
import { buildSets, DEFAULT_GENERATOR, type GeneratorConfig } from '@/lib/series'
import { createId } from '@/lib/utils'
import type { ExerciseEntry, SessionMap, WorkoutSet } from '@/types'

type ExerciseFormProps = {
  sessions: SessionMap
  exerciseNames: string[]
  onSubmit: (date: string, entry: ExerciseEntry) => void
}

export const ExerciseForm = ({
  sessions,
  exerciseNames,
  onSubmit,
}: ExerciseFormProps) => {
  const [date, setDate] = useState(todayISO)
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [config, setConfig] = useState<GeneratorConfig>(DEFAULT_GENERATOR)
  const [sets, setSets] = useState<WorkoutSet[]>(() =>
    buildSets(DEFAULT_GENERATOR),
  )

  useEffect(() => {
    setSets(buildSets(config))
  }, [config])

  const lastRecord = useMemo(
    () => findLastEntry(sessions, name, date),
    [sessions, name, date],
  )

  const canSubmit = name.trim().length > 0 && sets.length > 0

  const handleSubmit = () => {
    if (!canSubmit) return
    onSubmit(date, {
      id: createId(),
      name: name.trim(),
      mode: config.mode,
      sets,
      note: note.trim() || undefined,
    })
    setName('')
    setNote('')
    setConfig(DEFAULT_GENERATOR)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registrar exercício</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="exercise-name">Aparelho / exercício</Label>
            <Input
              id="exercise-name"
              list="exercise-names"
              placeholder="Ex.: Leg press 45º"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="off"
            />
            <datalist id="exercise-names">
              {exerciseNames.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="exercise-date">Data</Label>
            <Input
              id="exercise-date"
              type="date"
              value={date}
              max={todayISO()}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        {lastRecord && <LastRecordHint record={lastRecord} onReuse={setSets} />}

        <ModeSelect
          value={config.mode}
          onChange={(mode) => setConfig({ ...config, mode })}
        />

        <GeneratorFields config={config} onChange={setConfig} />

        <SetsEditor sets={sets} onChange={setSets} />

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="exercise-note">Observação</Label>
          <Input
            id="exercise-note"
            placeholder="Opcional — ex.: falhei na última"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>

        <Button onClick={handleSubmit} disabled={!canSubmit}>
          <Check className="size-4" />
          Salvar exercício
        </Button>
      </CardContent>
    </Card>
  )
}
