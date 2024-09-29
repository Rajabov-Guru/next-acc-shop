
import { cn } from "@/lib/utils"


interface DataTableColumnHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

export function ColumnHeader({title, className,}: DataTableColumnHeaderProps) {
    return (
        <div className={cn("flex items-center space-x-2", className || "")}>
            <span>{title}</span>
        </div>
    )
}
