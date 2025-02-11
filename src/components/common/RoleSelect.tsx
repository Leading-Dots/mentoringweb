import * as React from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { LucideUniversity,  School2,} from 'lucide-react'


interface RoleSelectProps {
    onRoleChange?: (role: 'mentor' | 'mentee') => void
}

export function RoleSelect({ onRoleChange }: RoleSelectProps) {
    const [role, setRole] = React.useState<'mentor' | 'mentee'>('mentee')

    const handleValueChange = (value: string) => {
        if (value === 'mentor' || value === 'mentee') {
            setRole(value)
            onRoleChange?.(value)
        }
    }

    return (
        <ToggleGroup
            variant="outline"
            type="single"
            value={role}
            onValueChange={handleValueChange}
            className="relative rounded-lg p-1"
        >
            <ToggleGroupItem
                value="mentee"
                aria-label="Mentee"
                className="relative w-[50%] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
                <School2 className="mr-2 h-4 w-4" />
                Mentee
            </ToggleGroupItem>
            <ToggleGroupItem
                value="mentor"
                aria-label="Mentor"
                className="relative w-[50%] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
                <LucideUniversity className="mr-2 h-4 w-4" />
                Mentor
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
