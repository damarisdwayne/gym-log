import type { Ficha } from '@/components/fichas'
import { PLANO } from './plano'
import { EBOOKS } from './receitas'
import { EBOOK_RS7 } from './rs7/constants'

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
