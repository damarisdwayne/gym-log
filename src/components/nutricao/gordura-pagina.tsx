import { GorduraForm, useDadosCalculadora } from './calculadora'
import { SalvarMedicao } from './medidas'

type GorduraPaginaProps = {
  onUsarResultado: () => void
}

export const GorduraPagina = ({ onUsarResultado }: GorduraPaginaProps) => {
  const [dados, atualizar] = useDadosCalculadora()

  return (
    <div className="flex flex-col gap-4">
      <GorduraForm
        dados={dados}
        onChange={atualizar}
        onUsarResultado={onUsarResultado}
      />
      <SalvarMedicao dados={dados} />
    </div>
  )
}
