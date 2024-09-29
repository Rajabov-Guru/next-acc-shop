import {
    Table as TableComponent,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow} from "@/shadcdn/ui/table";
import {Table, flexRender} from "@tanstack/react-table";

type Props<TData> = {
    table: Table<TData>,
    columnsLength: number
};

const DataTableView = <TData extends object>({ table, columnsLength }: Props<TData>) => {
    return (
        <TableComponent>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columnsLength} className="h-24 text-center text-app_secondary_text">
                            Нет данных
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </TableComponent>
    );
};

export default DataTableView;
