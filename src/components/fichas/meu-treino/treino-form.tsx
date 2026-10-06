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

  const salvar = () =>
    onSalvar({ id: createId(), exercicios: [], ...treino, nome: nome.trim() })

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
      <AcoesForm
        rotulo={treino ? 'Salvar treino' : 'Criar treino'}
        podeSalvar={Boolean(nome.trim())}
        onSalvar={salvar}
        onRemover={treino && remover}
      />
    </div>
  )
}
