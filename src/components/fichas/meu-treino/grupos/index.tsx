import { useCallback, useState } from 'react'
import { Pencil, Plus } from 'lucide-react'
import { Sheet } from '@/components/ui/sheet'
import { ChipOpcao } from '../chip-opcao'
import type { MeuTreinoEstado } from '../use-meu-treino'
import type { GrupoTreinos } from './estado'
import { GrupoForm } from './grupo-form'

export { acoesGrupos, gruposDe, type GrupoTreinos } from './estado'

type Edicao = { grupo?: GrupoTreinos }

export const GruposTreino = ({ meuTreino }: { meuTreino: MeuTreinoEstado }) => {
  const [edicao, setEdicao] = useState<Edicao>()
  const fechar = useCallback(() => setEdicao(undefined), [])
  const { grupos, grupo: ativo } = meuTreino

  const salvar = (nome: string, copiar: boolean) => {
    if (edicao?.grupo) meuTreino.renomearGrupo(edicao.grupo.id, nome)
    else meuTreino.criarGrupo(nome, copiar)
    fechar()
  }

  const remover = (id: string) => {
    meuTreino.excluirGrupo(id)
    fechar()
  }

  return (
    <>
      <div className="flex flex-wrap gap-1.5 px-1">
        {grupos.map((grupo) => {
          const selecionado = grupo.id === ativo.id
          return (
            <ChipOpcao
              key={grupo.id}
              selecionado={selecionado}
              onClick={() => (selecionado ? setEdicao({ grupo }) : meuTreino.selecionarGrupo(grupo.id))}
            >
              <span className="flex items-center gap-1">
                {grupo.nome}
                {selecionado && <Pencil className="size-3" aria-label="Editar grupo" />}
              </span>
            </ChipOpcao>
          )
        })}
        <ChipOpcao selecionado={false} onClick={() => setEdicao({})}>
          <span className="flex items-center gap-1">
            <Plus className="size-3" />
            Novo grupo
          </span>
        </ChipOpcao>
      </div>

      <Sheet open={Boolean(edicao)} title={edicao?.grupo ? 'Editar grupo' : 'Novo grupo'} onClose={fechar}>
        {edicao && (
          <GrupoForm
            grupo={edicao.grupo}
            origem={ativo.nome}
            onSalvar={salvar}
            onRemover={edicao.grupo && grupos.length > 1 ? () => remover(ativo.id) : undefined}
          />
        )}
      </Sheet>
    </>
  )
}
