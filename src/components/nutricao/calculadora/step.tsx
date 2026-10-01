import type { ReactNode } from 'react'

type StepProps = {
  numero: number
  titulo: string
  children: ReactNode
}

export const Step = ({ numero, titulo, children }: StepProps) => (
  <section className="flex flex-col gap-2">
    <h4 className="flex items-center gap-2 text-sm font-medium">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
        {numero}
      </span>
      {titulo}
    </h4>
    {children}
  </section>
)
