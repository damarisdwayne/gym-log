import { Search } from 'lucide-react'
import { Input } from './input'

type SearchFieldProps = {
  value: string
  placeholder: string
  label: string
  onChange: (value: string) => void
}

export const SearchField = ({
  value,
  placeholder,
  label,
  onChange,
}: SearchFieldProps) => (
  <div className="relative">
    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      type="search"
      className="pl-9"
      value={value}
      placeholder={placeholder}
      aria-label={label}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
)
