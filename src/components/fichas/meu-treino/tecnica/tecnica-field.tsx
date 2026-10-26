import { Label } from '@/components/ui/label'
import { ChipOpcao } from '../chip-opcao'
import { EXTENSOES_PADRAO, TECNICA_POR_ID, TECNICAS, type TecnicaExercicio, type TecnicaId } from './tecnicas'

const OPCOES_EXTENSOES = [1, 2, 3]

type EscolhaNumeroProps = {
  label: string
  opcoes: number[]
  valor: number
  onChange: (valor: number) => void
}

const EscolhaNumero = ({ label, opcoes, valor, onChange }: EscolhaNumeroProps) => (
  <div className="flex flex-col gap-1.5">
    <Label>{label}</Label>
    <div className="flex flex-wrap gap-1.5">
      {opcoes.map((opcao) => (
        <ChipOpcao key={opcao} selecionado={valor === opcao} onClick={() => onChange(opcao)}>
          {opcao}
        </ChipOpcao>
      ))}
    </div>
  </div>
)

type TecnicaFieldProps = {
  value?: TecnicaExercicio
  series: number
  onChange: (tecnica?: TecnicaExercicio) => void
}

export const TecnicaField = ({ value, series, onChange }: TecnicaFieldProps) => {
  const tecnica = value && TECNICA_POR_ID[value.tipo]
  const opcoesSeries = Array.from({ length: Math.max(series, 1) }, (_, indice) => indice + 1)

  const escolher = (tipo: TecnicaId) =>
    onChange(value?.tipo === tipo ? undefined : { tipo })

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label>Técnica</Label>
        <div className="flex flex-wrap gap-1.5">
          {TECNICAS.map(({ id, label }) => (
            <ChipOpcao key={id} selecionado={value?.tipo === id} onClick={() => escolher(id)}>
              {label}
            </ChipOpcao>
          ))}
        </div>
      </div>

      {value && tecnica && (
        <div className="flex flex-col gap-3 rounded-lg border border-border/60 bg-muted/40 p-3">
          <ol className="flex list-decimal flex-col gap-1 pl-4 text-xs text-muted-foreground">
            {tecnica.comoFazer.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>
          <p className="text-xs font-medium text-primary">{tecnica.volume}</p>

          {tecnica.extensao && (
            <div className="grid grid-cols-2 gap-3">
              <EscolhaNumero
                label={tecnica.extensao.pergunta}
                opcoes={OPCOES_EXTENSOES}
                valor={value.extensoes ?? EXTENSOES_PADRAO}
                onChange={(extensoes) => onChange({ ...value, extensoes })}
              />
              <EscolhaNumero
                label="Em quantas séries"
                opcoes={opcoesSeries}
                valor={Math.min(value.series ?? 1, opcoesSeries.length)}
                onChange={(quantas) => onChange({ ...value, series: quantas })}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
