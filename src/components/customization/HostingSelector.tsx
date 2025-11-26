import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface HostingOption {
  value: string
  label: string
  price: number
}

interface HostingSelectorProps {
  hostingType: 'website' | 'app'
  value?: string
  onValueChange: (value: string) => void
  options: HostingOption[]
}

export function HostingSelector({
  hostingType,
  value,
  onValueChange,
  options,
}: HostingSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={`hosting-${hostingType}`}>
        {hostingType === 'website' ? 'Website Hosting' : 'App Maintenance'} Plan
      </Label>
      <Select value={value || ''} onValueChange={onValueChange}>
        <SelectTrigger id={`hosting-${hostingType}`}>
          <SelectValue placeholder="Select a hosting plan" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label} - K{option.price.toLocaleString()}/mo
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

