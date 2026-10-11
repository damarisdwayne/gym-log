import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Segmented } from '@/components/ui/segmented'
import { formatarGramas } from '../shared/receita'
import { AlimentoRow } from './alimento-row'
import { BlocoInfo } from './bloco-info'
import type { Opcao, Refeicao } from './types'

const MacrosOpcao = ({ opcao }: { opcao: Opcao }) => {
  if (opcao.calorias === undefined || !opcao.macros) return null
  const { proteinas, carboidratos, lipideos } = opcao.macros

  return (
    <p className="flex flex-wrap gap-x-2 text-xs tabular-nums text-muted-foreground">
      <span className="font-semibold text-foreground">{opcao.calorias} kcal</span>
      <span className="text-primary">P {formatarGramas(proteinas)}</span>
      <span>C {formatarGramas(carboidratos)}</span>
      <span>G {formatarGramas(lipideos)}</span>
    </p>
  )
}

export const RefeicaoCard = ({ refeicao }: { refeicao: Refeicao }) => {
  const [opcaoId, setOpcaoId] = useState(refeicao.opcoes[0].id)
  const opcao =
    refeicao.opcoes.find((item) => item.id === opcaoId) ?? refeicao.opcoes[0]

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <span className="text-xl" aria-hidden>
          {refeicao.emoji}
        </span>
        <CardTitle>{refeicao.nome}</CardTitle>
        {refeicao.horario && (
          <Badge variant="primary" className="ml-auto tabular-nums">
            {refeicao.horario}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {refeicao.opcoes.length > 1 && (
          <Segmented
            label={`Opções de ${refeicao.nome}`}
            options={refeicao.opcoes.map((item) => ({
              value: item.id,
              label: item.titulo,
            }))}
            value={opcao.id}
            onChange={setOpcaoId}
            className={refeicao.opcoes.length > 3 ? 'grid-flow-row grid-cols-2' : undefined}
          />
        )}

        <MacrosOpcao opcao={opcao} />

        <ul className="flex flex-col divide-y divide-border/60">
          {opcao.alimentos.map((alimento) => (
            <AlimentoRow key={alimento.nome} alimento={alimento} />
          ))}
        </ul>

        {refeicao.blocos?.map((bloco) => (
          <BlocoInfo key={bloco.titulo} bloco={bloco} />
        ))}
      </CardContent>
    </Card>
  )
}
