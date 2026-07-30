import { topWeight, totalVolume } from './series'
import type { ExerciseEntry, SessionMap } from '@/types'

export type DatedEntry = {
  date: string
  entry: ExerciseEntry
}

export type ExerciseHistory = {
  name: string
  entries: DatedEntry[]
  bestWeight: number
  lastWeight: number
  previousWeight: number | null
  lastVolume: number
}

const byDateDesc = (a: DatedEntry, b: DatedEntry) =>
  b.date.localeCompare(a.date)

export const flattenEntries = (sessions: SessionMap): DatedEntry[] =>
  Object.entries(sessions)
    .flatMap(([date, entries]) => entries.map((entry) => ({ date, entry })))
    .sort(byDateDesc)

export const buildHistories = (sessions: SessionMap): ExerciseHistory[] => {
  const grouped = new Map<string, DatedEntry[]>()

  for (const item of flattenEntries(sessions)) {
    const key = item.entry.name.trim().toLowerCase()
    grouped.set(key, [...(grouped.get(key) ?? []), item])
  }

  return [...grouped.values()]
    .map((entries) => {
      const [last, previous] = entries
      return {
        name: last.entry.name,
        entries,
        bestWeight: entries.reduce(
          (max, item) => Math.max(max, topWeight(item.entry.sets)),
          0,
        ),
        lastWeight: topWeight(last.entry.sets),
        previousWeight: previous ? topWeight(previous.entry.sets) : null,
        lastVolume: totalVolume(last.entry.sets),
      }
    })
    .sort((a, b) => b.entries[0].date.localeCompare(a.entries[0].date))
}

export const findLastEntry = (
  sessions: SessionMap,
  name: string,
  excludeDate?: string,
): DatedEntry | null => {
  const key = name.trim().toLowerCase()
  if (!key) return null
  return (
    flattenEntries(sessions).find(
      (item) =>
        item.entry.name.trim().toLowerCase() === key &&
        item.date !== excludeDate,
    ) ?? null
  )
}
