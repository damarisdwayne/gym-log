import { NumberField } from './number-field'
import type { GeneratorConfig } from '@/lib/series'

type GeneratorFieldsProps = {
  config: GeneratorConfig
  onChange: (config: GeneratorConfig) => void
}

export const GeneratorFields = ({ config, onChange }: GeneratorFieldsProps) => {
  const patch = (values: Partial<GeneratorConfig>) =>
    onChange({ ...config, ...values })

  return (
    <div className="grid grid-cols-2 gap-3">
      <NumberField
        label="Séries"
        value={config.count}
        min={1}
        onChange={(count) => patch({ count })}
      />
      <NumberField
        label={config.mode === 'pyramid' ? 'Reps iniciais' : 'Repetições'}
        value={config.reps}
        min={1}
        onChange={(reps) => patch({ reps })}
      />
      <NumberField
        label={config.mode === 'constant' ? 'Peso' : 'Peso inicial'}
        value={config.weight}
        step={0.5}
        suffix="kg"
        onChange={(weight) => patch({ weight })}
      />
      {config.mode !== 'constant' && (
        <NumberField
          label="Incremento"
          value={config.weightStep}
          step={0.5}
          suffix="kg"
          onChange={(weightStep) => patch({ weightStep })}
        />
      )}
      {config.mode === 'pyramid' && (
        <NumberField
          label="Reduz reps"
          value={config.repsStep}
          min={0}
          onChange={(repsStep) => patch({ repsStep })}
        />
      )}
    </div>
  )
}
