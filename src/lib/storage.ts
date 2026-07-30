import type { SessionMap } from '@/types'

const STORAGE_KEY = 'gym-log:sessions:v1'

export const loadSessions = (): SessionMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return {}
    return parsed as SessionMap
  } catch {
    return {}
  }
}

export const saveSessions = (sessions: SessionMap) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions))
  } catch {
    return
  }
}

export const serializeSessions = (sessions: SessionMap) =>
  JSON.stringify(sessions, null, 2)

export const parseSessions = (raw: string): SessionMap | null => {
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
      return null
    return parsed as SessionMap
  } catch {
    return null
  }
}
