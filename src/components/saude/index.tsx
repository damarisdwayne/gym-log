import { Collapsible } from '@/components/ui/collapsible'
import { DicaCard } from './dica-card'
import { ExamList } from './exam-list'
import { ALEM_DO_SANGUE, CARDIACOS } from './exames'
import { ListaClinico } from './lista-clinico'
import { ResultadoTable } from './resultado-table'
import { COLETAS, DICAS } from './resultados'

export const Saude = () => (
  <div className="flex flex-col gap-3">
    <Collapsible
      title="🩸 Minha lista pro clínico"
      description="A lista que mostro no consultório pra pedir exame de sangue"
    >
      <ListaClinico />
    </Collapsible>

    <Collapsible
      title="🫀 Com o cardiologista"
      description="Exames de imagem do coração — não são de sangue"
    >
      <ExamList grupos={CARDIACOS} mostrarDescricoes />
    </Collapsible>

    <Collapsible
      title="🩻 Imagem, urina e pulmão"
      description="Não saem numa coleta de sangue, mas entram no mesmo check-up"
    >
      <ExamList grupos={ALEM_DO_SANGUE} mostrarDescricoes />
    </Collapsible>

    {COLETAS.map((coleta) => (
      <Collapsible
        key={coleta.id}
        title={`📄 Resultado · ${coleta.titulo}`}
        description={`${coleta.data} · ${coleta.laboratorio}`}
      >
        <ResultadoTable coleta={coleta} />
      </Collapsible>
    ))}

    <Collapsible title="💡 Dicas de saúde" description="Anotações e lembretes">
      <div className="flex flex-col gap-3">
        {DICAS.map((dica) => (
          <DicaCard key={dica.id} dica={dica} />
        ))}
      </div>
    </Collapsible>
  </div>
)
