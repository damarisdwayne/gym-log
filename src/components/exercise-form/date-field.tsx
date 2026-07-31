import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { todayISO } from '@/lib/date'

type DateFieldProps = {
  value: string
  onChange: (value: string) => void
}

export const DateField = ({ value, onChange }: DateFieldProps) => (
  <div className="flex min-w-0 flex-col gap-1.5">
    <Label htmlFor="exercise-date">Data</Label>
    <div className="flex h-11 w-full min-w-0 items-center overflow-hidden rounded-lg border border-border bg-muted px-3">
      <Input
        id="exercise-date"
        type="date"
        value={value}
        max={todayISO()}
        onChange={(event) => onChange(event.target.value)}
        className="h-full rounded-none border-0 bg-transparent px-0 focus-visible:ring-0 [&::-webkit-date-and-time-value]:text-left"
      />
    </div>
  </div>
)
