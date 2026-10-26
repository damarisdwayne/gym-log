import type { ReactNode } from 'react'
import { Label } from '@/components/ui/label'
import { ChipOpcao, type Divisao } from '../meu-treino'
import { DIAS, FOCOS, semanaAtual, type OpcoesDivisao } from './divisao'

type GrupoChipsProps<T> = {
  label: string
  opcoes: { valor: T; rotulo: ReactNode }[]
  selecionado: T
  onChange: (valor: T) => void
}

const GrupoChips = <T extends string | number>({ label, opcoes, selecionado, onChange }: GrupoChipsProps<T>) => (
  <div className="flex flex-col gap-1.5">
    <Label>{label}</Label>
    <div className="flex flex-wrap gap-1.5">
      {opcoes.map(({ valor, rotulo }) => (
        <ChipOpcao key={valor} selecionado={selecionado === valor} onClick={() => onChange(valor)}>
          {rotulo}
        </ChipOpcao>
      ))}
    </div>
  </div>
)

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
