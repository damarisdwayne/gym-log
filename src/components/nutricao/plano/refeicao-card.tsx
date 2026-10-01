import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Segmented } from '@/components/ui/segmented'
import { AlimentoRow } from './alimento-row'
import { BlocoInfo } from './bloco-info'
import type { Refeicao } from './types'

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
        <Badge variant="primary" className="ml-auto tabular-nums">
          {refeicao.horario}
        </Badge>
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
          />
        )}

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
