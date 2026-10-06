import type { InputHTMLAttributes } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type CampoProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  id: string
  label: string
  value: string
  onChange: (valor: string) => void
}

export const Campo = ({ id, label, onChange, ...props }: CampoProps) => (
  <div className="flex min-w-0 flex-col gap-1.5">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} autoComplete="off" onChange={(event) => onChange(event.target.value)} {...props} />
  </div>
)
