import type { ReactNode } from 'react'
import { Label } from '@/components/ui/label'
import { ChipOpcao } from './chip-opcao'

type GrupoChipsProps<T> = {
  label: string
  opcoes: { valor: T; rotulo: ReactNode }[]
  selecionado: T
  onChange: (valor: T) => void
}

export const GrupoChips = <T extends string | number>({ label, opcoes, selecionado, onChange }: GrupoChipsProps<T>) => (
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
