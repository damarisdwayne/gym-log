import { Button } from '@/components/ui/button'
import { Segmented } from '@/components/ui/segmented'
import { MEDIDAS, MEDIDAS_EXTRAS, SEXOS } from './constants'
import { calcularGordura } from './formulas'
import { NumberField } from './number-field'
import { formatar } from './utils'
import type { AtualizarCampo, DadosCalculadora, Sexo } from './types'

const DICA_MEDIDA: Record<Sexo, string> = {
  feminino:
    'Cintura na parte mais fina do tronco, quadril na parte mais larga do bumbum e pescoço logo abaixo do pomo.',
  masculino:
    'Abdômen na altura do umbigo e pescoço logo abaixo do pomo de adão.',
}

type GorduraFormProps = {
  dados: DadosCalculadora
  onChange: AtualizarCampo
  onUsarResultado: () => void
}

export const GorduraForm = ({
  dados,
  onChange,
  onUsarResultado,
}: GorduraFormProps) => {
  const resultado = calcularGordura(dados)
  const percentual = resultado ? formatar(resultado.percentual) : null

  return (
    <div className="flex flex-col gap-4">
      <Segmented
        label="Sexo"
        options={SEXOS}
        value={dados.sexo}
        onChange={(sexo) => onChange('sexo', sexo)}
      />

      <div className="grid grid-cols-2 gap-3">
        <NumberField
          form="gordura"
          campo="altura"
          label="Altura"
          sufixo="cm"
          dados={dados}
          onChange={onChange}
        />
        <NumberField
          form="gordura"
          campo="peso"
          label="Peso"
          sufixo="kg"
          dados={dados}
          onChange={onChange}
        />
        {MEDIDAS[dados.sexo].map((medida) => (
          <NumberField
            form="gordura"
            key={medida.campo}
            campo={medida.campo}
            label={medida.label}
            sufixo="cm"
            dados={dados}
            onChange={onChange}
          />
        ))}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        📏 {DICA_MEDIDA[dados.sexo]} Fita rente à pele, sem apertar.
      </p>

      <div className="flex flex-col gap-3 rounded-lg border border-border p-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">Medidas extras</span>
          <span className="text-xs text-muted-foreground">
            Só pra acompanhar — não entram no cálculo. Coxa no meio da coxa e
            braço relaxado, sempre do mesmo lado.
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {MEDIDAS_EXTRAS[dados.sexo].map((medida) => (
            <NumberField
              form="gordura"
              key={medida.campo}
              campo={medida.campo}
              label={medida.label}
              sufixo="cm"
              dados={dados}
              onChange={onChange}
            />
          ))}
        </div>
      </div>

      {resultado && percentual && (
        <div className="flex flex-col gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold tabular-nums text-primary">
              {percentual}%
            </span>
            <span className="text-xs text-muted-foreground">de gordura</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Massa magra{' '}
            <strong className="text-foreground">
              {formatar(resultado.massaMagra)} kg
            </strong>
            {' · '}
            Massa gorda{' '}
            <strong className="text-foreground">
              {formatar(resultado.massaGorda)} kg
            </strong>
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onChange('gordura', percentual)
              onUsarResultado()
            }}
          >
            Usar no cálculo de calorias
          </Button>
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Método da Marinha americana (US Navy). Margem de erro de ~3–4 pontos —
        pode diferir da bioimpedância ou das dobras da nutri.
      </p>
    </div>
  )
}
