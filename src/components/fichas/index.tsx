import { CursosFichas } from './cursos-fichas'
import { MeuTreino, useMeuTreino } from './meu-treino'
import {
  ajusteDivisao,
  DIVISAO_PADRAO,
  DivisaoField,
  ehModelo,
  opcoesDivisao,
  paraAtivar,
  resolverModelo,
  TreinosProntos,
  useModelos,
  type Modelo,
} from './modelos'

export { FichaItem } from './ficha-item'
export type { Ficha } from './types'

type FichasProps = {
  exerciseNames: string[]
}

export const Fichas = ({ exerciseNames }: FichasProps) => {
  const meuTreino = useMeuTreino()
  const modelos = useModelos()

  const atual = meuTreino.atual
  const modeloAtual = modelos?.find((modelo) => ehModelo(modelo, atual?.id))
  const resolvidoAtual = modeloAtual && resolverModelo(modeloAtual, atual?.variante)
  const divisaoAtual = atual?.divisao ?? DIVISAO_PADRAO
  const opcoesAtual = resolvidoAtual && opcoesDivisao(resolvidoAtual, divisaoAtual)

  const restaurar = (modelo: Modelo, resolvido: Modelo) =>
    meuTreino.restaurarModelo(
      paraAtivar(modelo, opcoesAtual && divisaoAtual, atual?.variante),
      opcoesAtual && ajusteDivisao(resolvido, divisaoAtual),
    )

  return (
    <div className="flex flex-col gap-6">
      <MeuTreino
        meuTreino={meuTreino}
        exerciseNames={exerciseNames}
        onRestaurar={modeloAtual && resolvidoAtual && (() => restaurar(modeloAtual, resolvidoAtual))}
        ajustesAtual={
          resolvidoAtual &&
          opcoesAtual && (
            <DivisaoField
              value={divisaoAtual}
              opcoes={opcoesAtual}
              onChange={(divisao) => meuTreino.definirDivisao(divisao, ajusteDivisao(resolvidoAtual, divisao))}
            />
          )
        }
      />

      <TreinosProntos
        modelos={modelos}
        atualId={atual?.id}
        divisaoAtual={atual?.divisao}
        varianteAtual={atual?.variante}
        onUsar={(modelo, divisao, variante) =>
          meuTreino.usarModelo(
            paraAtivar(modelo, divisao, variante),
            divisao && ajusteDivisao(resolverModelo(modelo, variante), divisao),
          )
        }
      />

      <CursosFichas />
    </div>
  )
}
