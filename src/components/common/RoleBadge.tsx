import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RoleBadgeProps {
    role: "mentor" | "mentee";
    className?: string;
}

export function RoleBadge({ role, className }: RoleBadgeProps) {
    return (
        <Badge
            variant="secondary"
            className={cn({
                "bg-purple-100 text-purple-800 hover:bg-purple-100": role === "mentor",
                "bg-blue-100 text-blue-800 hover:bg-blue-100": role === "mentee",
            }, className)}
        >
            {role.charAt(0).toUpperCase() + role.slice(1)}
        </Badge>
    );
}
