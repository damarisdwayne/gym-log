import { useState } from 'react'
import { AcoesForm } from '../acoes-form'
import { Campo } from '../campo'
import { GrupoChips } from '../grupo-chips'
import type { GrupoTreinos } from './estado'

type Inicio = 'copia' | 'vazio'

type GrupoFormProps = {
  grupo?: GrupoTreinos
  origem: string
  onSalvar: (nome: string, copiar: boolean) => void
  onRemover?: () => void
}

export const GrupoForm = ({ grupo, origem, onSalvar, onRemover }: GrupoFormProps) => {
  const [nome, setNome] = useState(grupo?.nome ?? '')
  const [inicio, setInicio] = useState<Inicio>('copia')

  const opcoesInicio = [
    { valor: 'copia' as const, rotulo: `Cópia de "${origem}"` },
    { valor: 'vazio' as const, rotulo: 'Nenhum treino' },
  ]

  const remover = () => {
    if (!grupo || !onRemover) return
    if (window.confirm(`Excluir o grupo "${grupo.nome}" e todos os treinos dele?`)) onRemover()
  }

  return (
    <div className="flex flex-col gap-4">
      <Campo
        id="grupo-nome"
        label="Nome do grupo"
        placeholder="Ex.: 3x na semana"
        value={nome}
        onChange={setNome}
        autoFocus
      />
      {!grupo && (
        <GrupoChips label="Começar com" opcoes={opcoesInicio} selecionado={inicio} onChange={setInicio} />
      )}
      <AcoesForm
        rotulo={grupo ? 'Salvar grupo' : 'Criar grupo'}
        podeSalvar={Boolean(nome.trim())}
        onSalvar={() => onSalvar(nome.trim(), inicio === 'copia')}
        onRemover={onRemover && remover}
      />
    </div>
  )
}
