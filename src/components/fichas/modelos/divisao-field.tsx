import { DIAS, FOCOS, semanaAtual, type OpcoesDivisao } from './divisao'
import { GrupoChips, type Divisao } from '../meu-treino'

const OPCOES_DIAS = DIAS.map((dias) => ({ valor: dias, rotulo: dias }))
const OPCOES_FOCO = FOCOS.map(({ id, label }) => ({ valor: id, rotulo: label }))

type DivisaoFieldProps = {
  value: Divisao
  opcoes: OpcoesDivisao
  onChange: (divisao: Divisao) => void
}

export const DivisaoField = ({ value, opcoes, onChange }: DivisaoFieldProps) => {
  const opcoesSemana = Array.from({ length: opcoes.semanas }, (_, indice) => ({
    valor: indice + 1,
    rotulo: indice + 1,
  }))

  return (
    <div className="grid grid-cols-2 gap-3">
      {opcoes.diasEFoco && (
        <>
          <GrupoChips
            label="Dias por semana"
            opcoes={OPCOES_DIAS}
            selecionado={value.dias}
            onChange={(dias) => onChange({ ...value, dias })}
          />
          <GrupoChips
            label="Foco"
            opcoes={OPCOES_FOCO}
            selecionado={value.foco}
            onChange={(foco) => onChange({ ...value, foco })}
          />
        </>
      )}
      {opcoes.semanas > 1 && (
        <div className="col-span-2 flex flex-col gap-1">
          <GrupoChips
            label={`Semana do ciclo (1 a ${opcoes.semanas})`}
            opcoes={opcoesSemana}
            selecionado={semanaAtual(value, opcoes.semanas)}
            onChange={(semana) => onChange({ ...value, semana })}
          />
          {opcoes.nota && <span className="text-xs text-muted-foreground">{opcoes.nota}</span>}
        </div>
      )}
    </div>
  )
}
