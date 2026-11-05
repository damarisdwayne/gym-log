import { alongamentos, ebookAlimenteSe, fullBody, guiaCardio, isolados, mesGlow, semanal } from './builders-glow'
import type { Curso } from './types'

const ACADEMIA = { local: 'academia' } as const
const CASA = { local: 'casa' } as const
const INICIANTE = { ...ACADEMIA, nivel: 'iniciante' } as const
const INTERMEDIARIO = { ...ACADEMIA, nivel: 'intermediario' } as const
const AVANCADO = { ...ACADEMIA, nivel: 'avancado' } as const

export const CURSO_GLOW: Curso = {
  id: 'glow',
  nome: 'Glow · Isa Personal',
  descricao: 'Academia e casa · iniciante a avançado, express, full body e isolados',
  geral: [guiaCardio('252 KB'), alongamentos('421 KB'), ebookAlimenteSe('11,6 MB')],
  meses: [
    mesGlow(
      '2026-09',
      isolados('2026-09', {
        gluteos: { iniciante: '844 KB', 'intermediario-avancado': '805 KB' },
        ombros: { iniciante: '599 KB', 'intermediario-avancado': '703 KB' },
        costas: { iniciante: '797 KB', 'intermediario-avancado': '798 KB' },
      }),
    ),
    mesGlow(
      '2026-10',
      isolados('2026-10', {
        gluteos: { iniciante: '431 KB', 'intermediario-avancado': '432 KB' },
        ombros: { iniciante: '261 KB', 'intermediario-avancado': '276 KB' },
        costas: { iniciante: '417 KB', 'intermediario-avancado': '577 KB' },
      }),
    ),
    mesGlow(
      '2026-11',
      semanal('2026-11', INICIANTE, 'completo', { 3: '2,5 MB', 4: '2,8 MB', 5: '3,1 MB' }),
      fullBody('2026-11', INICIANTE, { 'corpo-todo': '957 KB', inferiores: '599 KB', superiores: '836 KB' }),
      semanal('2026-11', INTERMEDIARIO, 'completo', { 3: '2,5 MB', 4: '2,9 MB', 5: '3,3 MB', 6: '3,4 MB' }),
      semanal('2026-11', INTERMEDIARIO, 'express', { 3: '2,3 MB', 4: '2,6 MB', 5: '2,6 MB', 6: '2,7 MB' }),
      fullBody('2026-11', INTERMEDIARIO, { 'corpo-todo': '974 KB', inferiores: '612 KB', superiores: '833 KB' }),
      semanal('2026-11', AVANCADO, 'completo', { 3: '2,5 MB', 4: '2,8 MB', 5: '3,2 MB', 6: '3,2 MB' }),
      semanal('2026-11', AVANCADO, 'express', { 3: '2,3 MB', 4: '2,6 MB', 5: '2,6 MB', 6: '2,7 MB' }),
      fullBody('2026-11', AVANCADO, { 'corpo-todo': '961 KB', inferiores: '570 KB', superiores: '781 KB' }),
      semanal('2026-11', CASA, 'completo', { 3: '684 KB', 4: '936 KB', 5: '985 KB', 6: '1,1 MB' }),
      semanal('2026-11', CASA, 'express', { 3: '565 KB', 4: '698 KB', 5: '743 KB', 6: '878 KB' }),
      fullBody('2026-11', CASA, { 'corpo-todo': '229 KB', inferiores: '201 KB', superiores: '237 KB' }),
    ),
  ],
}
