import {useState} from "react";
import {
    ColumnDef,
    ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel,
    RowSelectionState,
    SortingState, Table,
    useReactTable,
    VisibilityState
} from "@tanstack/react-table";

type DataTableProps<TData> = {
    columns: ColumnDef<TData>[]
    data: TData[]
}

const useDataTable = <TData>({data, columns}: DataTableProps<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

    const table = useReactTable<TData>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },
    })

    return table as Table<TData>;
}

export default useDataTable;
