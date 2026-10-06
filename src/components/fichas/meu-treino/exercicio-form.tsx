import { useState } from 'react'
import { NameField } from '@/components/exercise-form/name-field'
import { createId } from '@/lib/utils'
import { AcoesForm } from './acoes-form'
import { Campo } from './campo'
import type { ExercicioTreino } from './types'
import { opcional } from './utils'

const SERIES_PADRAO = 3

type ExercicioFormProps = {
  exercicio?: ExercicioTreino
  exerciseNames: string[]
  onSalvar: (exercicio: ExercicioTreino) => void
  onRemover: (id: string) => void
}

export const ExercicioForm = ({
  exercicio,
  exerciseNames,
  onSalvar,
  onRemover,
}: ExercicioFormProps) => {
  const [nome, setNome] = useState(exercicio?.nome ?? '')
  const [series, setSeries] = useState(String(exercicio?.series ?? SERIES_PADRAO))
  const [reps, setReps] = useState(exercicio?.reps ?? '')
  const [descanso, setDescanso] = useState(exercicio?.descanso ?? '')
  const [obs, setObs] = useState(exercicio?.obs ?? '')

  const numeroSeries = Number.parseInt(series, 10)
  const podeSalvar = Boolean(nome.trim()) && numeroSeries > 0

  const salvar = () =>
    onSalvar({
      id: exercicio?.id ?? createId(),
      nome: nome.trim(),
      series: numeroSeries,
      reps: opcional(reps),
      descanso: opcional(descanso),
      obs: opcional(obs),
    })

  return (
    <div className="flex flex-col gap-4">
      <NameField value={nome} options={exerciseNames} onChange={setNome} />

      <div className="grid grid-cols-3 gap-2">
        <Campo
          id="exercicio-series"
          label="Séries"
          inputMode="numeric"
          className="tabular-nums"
          value={series}
          onChange={(valor) => setSeries(valor.replace(/\D/g, ''))}
        />
        <Campo id="exercicio-reps" label="Reps" placeholder="8–12" value={reps} onChange={setReps} />
        <Campo
          id="exercicio-descanso"
          label="Descanso"
          placeholder="60s"
          value={descanso}
          onChange={setDescanso}
        />
      </div>

      <Campo
        id="exercicio-obs"
        label="Observação"
        placeholder="Opcional — ex.: drop set na última"
        value={obs}
        onChange={setObs}
      />

      <AcoesForm
        rotulo={exercicio ? 'Salvar exercício' : 'Adicionar exercício'}
        podeSalvar={podeSalvar}
        onSalvar={salvar}
        onRemover={exercicio && (() => onRemover(exercicio.id))}
      />
    </div>
  )
}
