import { NameField } from '@/components/exercise-form/name-field'
import { Campo } from '../campo'
import type { Musculo, Musculos } from '../musculos'
import { MusculosField } from '../musculos-field'
import { TecnicaField } from '../tecnica'
import { musculosDoRascunho, numeroSeries, type Rascunho } from './rascunho'

type CamposExercicioProps = {
  rascunho: Rascunho
  exerciseNames: string[]
  mostrarDescanso: boolean
  onChange: (rascunho: Rascunho) => void
}

export const CamposExercicio = ({ rascunho, exerciseNames, mostrarDescanso, onChange }: CamposExercicioProps) => {
  const { chave } = rascunho
  const musculos = musculosDoRascunho(rascunho)
  const alterar = (parcial: Partial<Rascunho>) => onChange({ ...rascunho, ...parcial })
  const alterarMusculos = (campo: keyof Musculos) => (lista: Musculo[]) =>
    alterar({ musculos: { ...musculos, [campo]: lista } })

  return (
    <div className="flex flex-col gap-4">
      <NameField
        id={`nome-${chave}`}
        value={rascunho.nome}
        options={exerciseNames}
        onChange={(nome) => alterar({ nome, musculos: undefined })}
      />

      <div className="grid grid-cols-3 gap-2">
        <Campo
          id={`series-${chave}`}
          label="Séries"
          inputMode="numeric"
          className="tabular-nums"
          value={rascunho.series}
          onChange={(series) => alterar({ series: series.replace(/\D/g, '') })}
        />
        <Campo
          id={`reps-${chave}`}
          label="Reps"
          placeholder="8–12"
          value={rascunho.reps}
          onChange={(reps) => alterar({ reps })}
        />
        {mostrarDescanso && (
          <Campo
            id={`descanso-${chave}`}
            label="Descanso"
            placeholder="60s"
            value={rascunho.descanso}
            onChange={(descanso) => alterar({ descanso })}
          />
        )}
      </div>

      <MusculosField
        label="Foco"
        selecionados={musculos.foco}
        bloqueados={musculos.auxiliares}
        onChange={alterarMusculos('foco')}
      />
      <MusculosField
        label="Também trabalha"
        selecionados={musculos.auxiliares}
        bloqueados={musculos.foco}
        onChange={alterarMusculos('auxiliares')}
      />

      <TecnicaField
        value={rascunho.tecnica}
        series={numeroSeries(rascunho) || 1}
        onChange={(tecnica) => alterar({ tecnica })}
      />

      <Campo
        id={`obs-${chave}`}
        label="Observação"
        placeholder="Opcional — ex.: pausa de 2s embaixo"
        value={rascunho.obs}
        onChange={(obs) => alterar({ obs })}
      />
    </div>
  )
}
