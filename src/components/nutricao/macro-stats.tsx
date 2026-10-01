import type { Macros } from './plano/types'

type MacroStatsProps = {
  calorias: number
  macros: Macros
}

const Stat = ({ label, valor, unidade }: { label: string; valor: number; unidade: string }) => (
  <div className="flex flex-col items-center rounded-lg bg-muted px-2 py-2">
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
    <span className="text-base font-semibold tabular-nums">
      {Math.round(valor)}
      <span className="ml-0.5 text-xs font-normal text-muted-foreground">
        {unidade}
      </span>
    </span>
  </div>
)

export const MacroStats = ({ calorias, macros }: MacroStatsProps) => (
  <div className="grid grid-cols-4 gap-1.5">
    <Stat label="Kcal" valor={calorias} unidade="" />
    <Stat label="Prot" valor={macros.proteinas} unidade="g" />
    <Stat label="Carb" valor={macros.carboidratos} unidade="g" />
    <Stat label="Gord" valor={macros.lipideos} unidade="g" />
  </div>
)
