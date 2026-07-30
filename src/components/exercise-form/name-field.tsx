import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const MAX_SUGGESTIONS = 5

type NameFieldProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
}

export const NameField = ({ value, options, onChange }: NameFieldProps) => {
  const [focused, setFocused] = useState(false)

  const term = value.trim().toLowerCase()
  const suggestions = options
    .filter((option) => {
      const name = option.toLowerCase()
      return name !== term && (!term || name.includes(term))
    })
    .slice(0, MAX_SUGGESTIONS)

  const open = focused && suggestions.length > 0

  const select = (option: string) => {
    onChange(option)
    setFocused(false)
  }

  return (
    <div className="relative flex min-w-0 flex-col gap-1.5">
      <Label htmlFor="exercise-name">Aparelho / exercício</Label>
      <Input
        id="exercise-name"
        placeholder="Ex.: Leg press 45º"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls="exercise-name-options"
      />

      {open && (
        <ul
          id="exercise-name-options"
          role="listbox"
          className="absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-border bg-card py-1 shadow-lg shadow-black/40"
        >
          {suggestions.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={false}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => select(option)}
                className="w-full px-3 py-2.5 text-left text-sm hover:bg-muted"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
