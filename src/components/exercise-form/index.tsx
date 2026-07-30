import { useEffect, useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import { LastRecordHint } from './last-record-hint'
import {
  createSet,
  isPristineSet,
  SetsEditor,
  toWorkoutSets,
  type EditableSet,
} from './sets-editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { todayISO } from '@/lib/date'
import { findLastEntry } from '@/lib/progress'
import { detectMode } from '@/lib/series'
import { createId } from '@/lib/utils'
import type { ExerciseEntry, SessionMap, WorkoutSet } from '@/types'

const INITIAL_SETS = 3

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
  const [sets, setSets] = useState<EditableSet[]>(() =>
    Array.from({ length: INITIAL_SETS }, () => createSet()),
  )

  const lastRecord = useMemo(
    () => findLastEntry(sessions, name, date),
    [sessions, name, date],
  )

  const isUntouched = sets.every(isPristineSet)

  useEffect(() => {
    if (!lastRecord || !isUntouched) return
    setSets(lastRecord.entry.sets.map((set) => createSet(set)))
  }, [lastRecord, isUntouched])

  const cleanSets = toWorkoutSets(sets)
  const canSubmit = name.trim().length > 0 && cleanSets.length > 0

  const handleReuse = (previous: WorkoutSet[]) =>
    setSets(previous.map((set) => createSet(set)))

  const handleSubmit = () => {
    if (!canSubmit) return
    onSubmit(date, {
      id: createId(),
      name: name.trim(),
      mode: detectMode(cleanSets),
      sets: cleanSets,
      note: note.trim() || undefined,
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex min-w-0 flex-col gap-1.5">
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
        <div className="flex min-w-0 flex-col gap-1.5">
          <Label htmlFor="exercise-date">Data</Label>
          <Input
            id="exercise-date"
            type="date"
            value={date}
            max={todayISO()}
            onChange={(event) => setDate(event.target.value)}
            className="w-full max-w-40 min-w-0 [&::-webkit-date-and-time-value]:text-left"
          />
        </div>
      </div>

      {lastRecord && <LastRecordHint record={lastRecord} onReuse={handleReuse} />}

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
    </div>
  )
}
