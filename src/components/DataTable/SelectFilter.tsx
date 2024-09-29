import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/shadcdn/ui/select";
import {Table} from "@tanstack/react-table";
import {useState} from "react";
import FilterRows from "./Filter";

type Props<TData> = {
    table: Table<TData>,
    columnId: string;
    columnIdMap: ColumnIdMap<TData>;
};

const SelectFilter = <TData extends object>({
    table,
    columnId,
    columnIdMap
}:Props<TData>) => {
    const [targetColumn, setTargetColumn] = useState(columnId);

    const onChange = (value: string) => {
        setTargetColumn(value);
    };

    return (
        <div className="flex gap-[12px]">
            <Select value={targetColumn} onValueChange={onChange}>
                <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Выбрать колонку" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Колонки</SelectLabel>
                        {table.getAllColumns().filter(
                            (column) =>
                                typeof column.accessorFn !== "undefined"
                        ).map((column) =>
                            <SelectItem value={column.id} key={column.id}>
                                {columnIdMap[column.id as keyof TData]}
                            </SelectItem>
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <FilterRows
                table={table}
                column={targetColumn}
                placeHolder={`Фильтр по "${columnIdMap[targetColumn as keyof TData]}"`}
            />
        </div>
    );
};

export default SelectFilter;
