import { LinkEbook, LinkOriginal } from '../shared/receita'
import { EBOOKS } from './constants'
import type { OrigemReceita } from './types'

export const LinkOrigem = ({ origem }: { origem: OrigemReceita }) => {
  if (origem.tipo === 'minhas')
    return <LinkOriginal link={origem.link} autor={origem.autor} />

  const ebook = EBOOKS[origem.ebook]

  return (
    <LinkEbook arquivo={ebook.arquivo} pagina={origem.pagina}>
      Ebook {ebook.titulo} ({ebook.autora}) · pág. {origem.pagina}
    </LinkEbook>
  )
}
