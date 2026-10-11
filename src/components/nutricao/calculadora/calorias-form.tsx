import { Segmented } from '@/components/ui/segmented'
import { MacroStats } from '../macro-stats'
import { DIETA_PADRAO } from '../plano'
import { ATIVIDADES, OBJETIVOS, SEXOS } from './constants'
import { calcularCalorias } from './formulas'
import { NumberField } from './number-field'
import { Step } from './step'
import { useDadosCalculadora } from './use-dados-calculadora'
import { formatar } from './utils'

export const CaloriasForm = () => {
  const [dados, onChange] = useDadosCalculadora()
  const resultado = calcularCalorias(dados)

  return (
    <div className="flex flex-col gap-5">
      <Step numero={1} titulo="Qual é o objetivo?">
        <Segmented
          label="Objetivo"
          options={OBJETIVOS}
          value={dados.objetivo}
          onChange={(objetivo) => onChange('objetivo', objetivo)}
        />
      </Step>

      <Step numero={2} titulo="Seus dados">
        <Segmented
          label="Sexo"
          options={SEXOS}
          value={dados.sexo}
          onChange={(sexo) => onChange('sexo', sexo)}
        />
        <div className="grid grid-cols-2 gap-3">
          <NumberField form="calorias" campo="idade" label="Idade" sufixo="anos" dados={dados} onChange={onChange} />
          <NumberField form="calorias" campo="altura" label="Altura" sufixo="cm" dados={dados} onChange={onChange} />
          <NumberField form="calorias" campo="peso" label="Peso" sufixo="kg" dados={dados} onChange={onChange} />
          <NumberField form="calorias" campo="gordura" label="% de gordura" sufixo="%" dados={dados} onChange={onChange} />
        </div>
      </Step>

      <Step numero={3} titulo="Nível de atividade">
        <Segmented
          label="Nível de atividade"
          options={ATIVIDADES}
          value={dados.atividade}
          onChange={(atividade) => onChange('atividade', atividade)}
          className="grid-flow-row grid-cols-1 [&>button]:items-start"
        />
      </Step>

      {resultado ? (
        <div className="flex flex-col gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3">
          <p className="text-sm font-medium">Sua meta diária</p>
          <MacroStats calorias={resultado.calorias} macros={resultado.macros} />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Metabolismo basal {formatar(resultado.tmb, 0)} kcal ({resultado.formula})
            {' · '}gasto total {formatar(resultado.gastoTotal, 0)} kcal
          </p>
          <p className="text-xs text-muted-foreground">
            Plano da nutri ({DIETA_PADRAO.titulo}): {DIETA_PADRAO.calorias} kcal · P{' '}
            {Math.round(DIETA_PADRAO.macros.proteinas)}g · C{' '}
            {Math.round(DIETA_PADRAO.macros.carboidratos)}g · G{' '}
            {Math.round(DIETA_PADRAO.macros.lipideos)}g
          </p>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          Preencha peso e % de gordura (ou idade e altura) para ver o resultado.
        </p>
      )}

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Com % de gordura usa Katch-McArdle (baseada na massa magra); sem ele,
        Mifflin-St Jeor. Proteína e gordura são calculadas por kg de peso e o
        carboidrato completa as calorias. É uma estimativa — o plano da nutri
        continua sendo a referência.
      </p>
    </div>
  )
}
