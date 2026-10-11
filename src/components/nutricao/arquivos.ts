import type { Ficha } from '@/components/fichas'
import { PLANO } from './plano'
import { EBOOKS } from './receitas'
import { EBOOK_RS7 } from './rs7/constants'

const PLANOS_ALIMENTARES: Ficha[] = PLANO.dietas.map(
  ({ id, titulo, calorias, macros, tamanho, arquivo }) => ({
    id: `nutricao-plano-alimentar-${id}`,
    titulo: `Plano alimentar · ${titulo}`,
    descricao: `${PLANO.prescritoEm} · ${calorias} kcal · P ${Math.round(macros.proteinas)}g · C ${Math.round(macros.carboidratos)}g · L ${Math.round(macros.lipideos)}g`,
    tipo: 'cardapio',
    tamanho,
    arquivo,
  }),
)

export const ARQUIVOS: Ficha[] = [
  ...PLANOS_ALIMENTARES,
  {
    id: 'nutricao-plano-alimentar-anterior',
    titulo: 'Plano alimentar anterior',
    descricao: '02/06/2026 · 1579 kcal · P 114g · C 170g · L 52g',
    tipo: 'cardapio',
    tamanho: '61 KB',
    arquivo: '/fichas/nutricao/plano-alimentar-2026-06.pdf',
  },
  {
    id: 'nutricao-evolucao-corporal',
    titulo: 'Evolução corporal',
    descricao: 'Medições de jun/2025 a jun/2026',
    tipo: 'planilha',
    tamanho: '149 KB',
    arquivo: '/fichas/nutricao/evolucao-corporal.pdf',
  },
  {
    id: 'nutricao-ebook-natflix',
    titulo: 'E-book de receitas · Natflix',
    descricao: `Receitas com macros da ${EBOOKS.natflix.autora}`,
    tipo: 'ebook',
    tamanho: '6,1 MB',
    arquivo: EBOOKS.natflix.arquivo,
  },
  {
    id: 'nutricao-ebook-bella-vida-flex',
    titulo: 'E-book de receitas · Uma Bella Vida Flex',
    descricao: `Receitas com macros da ${EBOOKS.bella.autora}`,
    tipo: 'ebook',
    tamanho: '3,8 MB',
    arquivo: EBOOKS.bella.arquivo,
  },
  {
    id: 'nutricao-ebook-rs7',
    titulo: `E-book · ${EBOOK_RS7.titulo}`,
    descricao: `365 receitas por refeição do ${EBOOK_RS7.autor}`,
    tipo: 'ebook',
    tamanho: '34 MB',
    arquivo: EBOOK_RS7.arquivo,
  },
]
