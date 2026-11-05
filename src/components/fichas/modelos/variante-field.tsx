import { GrupoChips } from '../meu-treino'
import type { Modelo, SelecaoVariante } from './types'

const semDimensao = (selecao: SelecaoVariante, id: string) =>
  Object.fromEntries(Object.entries(selecao).filter(([dimensao]) => dimensao !== id))

type VarianteFieldProps = {
  modelo: Modelo
  value: SelecaoVariante
  onChange: (selecao: SelecaoVariante) => void
}

export const VarianteField = ({ modelo, value, onChange }: VarianteFieldProps) => (
  <div className="flex flex-col gap-3">
    {modelo.dimensoes
      ?.filter(({ id, opcoes }) => opcoes.length > 1 && value[id] !== undefined)
      .map(({ id, label, opcoes }) => (
        <GrupoChips
          key={id}
          label={label}
          opcoes={opcoes}
          selecionado={value[id]}
          onChange={(valor) => onChange({ [id]: valor, ...semDimensao(value, id) })}
        />
      ))}
  </div>
)
