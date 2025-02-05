import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number
}

export function Loader({ size = 32, className, ...props }: LoaderProps) {
    return (
        <div
            role="status"
            className={cn("flex flex-1 flex-col min-h-screen items-center justify-center gap-4", className)}
            {...props}
        >
            <Loader2
                className="animate-spin"
                size={size}
                aria-hidden="true"
            />
            <span className="">Loading...</span>
        </div>
    )
}