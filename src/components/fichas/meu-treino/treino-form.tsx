import { useState } from 'react'
import { createId } from '@/lib/utils'
import { AcoesForm } from './acoes-form'
import { Campo } from './campo'
import type { Treino } from './types'

type TreinoFormProps = {
  treino?: Treino
  onSalvar: (treino: Treino) => void
  onRemover: (id: string) => void
}

export const TreinoForm = ({ treino, onSalvar, onRemover }: TreinoFormProps) => {
  const [nome, setNome] = useState(treino?.nome ?? '')
  const [vezes, setVezes] = useState(String(treino?.vezesPorSemana ?? 1))

  const vezesPorSemana = Number.parseInt(vezes, 10)

  const salvar = () =>
    onSalvar({ id: createId(), exercicios: [], ...treino, nome: nome.trim(), vezesPorSemana })

  const remover = () => {
    if (!treino) return
    if (window.confirm(`Excluir o treino "${treino.nome}" e todos os exercícios dele?`))
      onRemover(treino.id)
  }

  return (
    <div className="flex flex-col gap-4">
      <Campo
        id="treino-nome"
        label="Nome do treino"
        placeholder="Ex.: Quadríceps"
        value={nome}
        onChange={setNome}
        autoFocus
      />
      <Campo
        id="treino-vezes"
        label="Vezes por semana"
        inputMode="numeric"
        className="tabular-nums"
        value={vezes}
        onChange={(valor) => setVezes(valor.replace(/\D/g, ''))}
      />
      <AcoesForm
        rotulo={treino ? 'Salvar treino' : 'Criar treino'}
        podeSalvar={Boolean(nome.trim()) && vezesPorSemana > 0}
        onSalvar={salvar}
        onRemover={treino && remover}
      />
    </div>
  )
}
