"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/shadcdn/ui/dropdown-menu"
import { Button } from "@/shadcdn/ui/button"
import { Settings2 } from "lucide-react"

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
    columnIdMap: ColumnIdMap<TData>;
}

export function DataTableViewOptions<TData>({
    table,
    columnIdMap
}: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <Settings2 className="mr-2 h-4 w-4" />
                    Видимость
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Показать колонки</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {columnIdMap[column.id as keyof TData]}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
