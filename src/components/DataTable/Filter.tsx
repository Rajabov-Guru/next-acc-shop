import {Table} from "@tanstack/react-table";
import {Input} from "@/shadcdn/ui/input";

type Props<TData> = {
    table: Table<TData>,
    column: string;
    placeHolder?: string;
};

const FilterRows = <TData extends object>({ table, column, placeHolder }: Props<TData>) => {
    return (
        <Input
            placeholder = {placeHolder}
            value={(table.getColumn(column)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn(column)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
        />
    );
};

export default FilterRows;
