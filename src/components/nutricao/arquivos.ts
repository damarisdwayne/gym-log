import type { Ficha } from '@/components/fichas'
import { PLANO } from './plano'

const { proteinas, carboidratos, lipideos } = PLANO.macros

export const ARQUIVOS: Ficha[] = [
  {
    id: 'nutricao-plano-alimentar',
    titulo: 'Plano alimentar',
    descricao: `${PLANO.prescritoEm} · ${PLANO.calorias} kcal · P ${proteinas}g · C ${carboidratos}g · L ${lipideos}g`,
    tipo: 'cardapio',
    tamanho: '61 KB',
    arquivo: PLANO.arquivo,
  },
  {
    id: 'nutricao-evolucao-corporal',
    titulo: 'Evolução corporal',
    descricao: 'Medições de jun/2025 a jun/2026',
    tipo: 'planilha',
    tamanho: '149 KB',
    arquivo: '/fichas/nutricao/evolucao-corporal.pdf',
  },
]
