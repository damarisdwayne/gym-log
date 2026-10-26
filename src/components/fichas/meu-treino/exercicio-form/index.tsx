import { useState } from 'react'
import { Link2, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AcoesForm } from '../acoes-form'
import { rotuloGrupo } from '../conjugados'
import type { ExercicioTreino } from '../types'
import { CamposExercicio } from './campos-exercicio'
import { montarExercicio, rascunhoDe, rascunhoValido, type Rascunho } from './rascunho'

type ExercicioFormProps = {
  grupo: ExercicioTreino[]
  exerciseNames: string[]
  onSalvar: (exercicios: ExercicioTreino[]) => void
  onRemover: () => void
}

export const ExercicioForm = ({ grupo, exerciseNames, onSalvar, onRemover }: ExercicioFormProps) => {
  const [rascunhos, setRascunhos] = useState<Rascunho[]>(() =>
    grupo.length ? grupo.map(rascunhoDe) : [rascunhoDe()],
  )
  const emGrupo = rascunhos.length > 1

  const alterar = (rascunho: Rascunho) =>
    setRascunhos((atuais) => atuais.map((atual) => (atual.chave === rascunho.chave ? rascunho : atual)))
  const adicionar = () => setRascunhos((atuais) => [...atuais, rascunhoDe()])
  const removerDoGrupo = (chave: string) => setRascunhos((atuais) => atuais.filter((atual) => atual.chave !== chave))

  const salvar = () =>
    onSalvar(rascunhos.map((rascunho, indice) => montarExercicio(rascunho, indice < rascunhos.length - 1)))

  const remover = () => {
    const tipo = rotuloGrupo(grupo.length).toLowerCase()
    if (grupo.length < 2 || window.confirm(`Excluir os ${grupo.length} exercícios deste ${tipo}?`)) onRemover()
  }

  return (
    <div className="flex flex-col gap-5">
      {emGrupo && (
        <p className="rounded-lg bg-primary/10 p-3 text-xs text-primary">
          {rotuloGrupo(rascunhos.length)}: faça uma série de cada, em sequência, e só descanse depois do último.
        </p>
      )}

      {rascunhos.map((rascunho, indice) => (
        <section key={rascunho.chave} className="flex flex-col gap-3">
          {emGrupo && (
            <div className="flex items-center gap-2 border-b border-border/60 pb-2">
              <span className="text-sm font-semibold">{indice + 1}º exercício</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto"
                onClick={() => removerDoGrupo(rascunho.chave)}
                aria-label={`Remover o ${indice + 1}º exercício`}
              >
                <X className="size-4" />
                Remover
              </Button>
            </div>
          )}
          <CamposExercicio
            rascunho={rascunho}
            exerciseNames={exerciseNames}
            mostrarDescanso={indice === 0}
            onChange={alterar}
          />
        </section>
      ))}

      <Button variant="outline" size="sm" className="self-start" onClick={adicionar}>
        {emGrupo ? <Plus className="size-4" /> : <Link2 className="size-4" />}
        {emGrupo ? 'Adicionar mais um ao grupo' : 'Fazer em bi-set'}
      </Button>

      <AcoesForm
        rotulo={grupo.length ? 'Salvar' : 'Adicionar'}
        podeSalvar={rascunhos.every(rascunhoValido)}
        onSalvar={salvar}
        onRemover={grupo.length ? remover : undefined}
      />
    </div>
  )
}
