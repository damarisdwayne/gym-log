export const todayISO = () => {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  return new Date(now.getTime() - offset).toISOString().slice(0, 10)
}

export const formatFullDate = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  })
}

export const formatShortDate = (iso: string) => {
  const [, month, day] = iso.split('-')
  return `${day}/${month}`
}

export const isToday = (iso: string) => iso === todayISO()

export const daysBetween = (from: string, to: string) => {
  const ms = new Date(to).getTime() - new Date(from).getTime()
  return Math.round(ms / 86400000)
}
