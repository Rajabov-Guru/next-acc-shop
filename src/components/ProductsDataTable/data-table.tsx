"use client";
import {
    ColumnDef,
} from "@tanstack/react-table"
import useDataTable from "@/lib/hooks/useDataTable";
import {useEffect} from "react";
import FilterRows from "@/components/DataTable/Filter";
import DataTableView from "@/components/DataTable/View";
import { observer } from "mobx-react-lite";
import useStores from "@/lib/hooks/useStores";

interface DataTableProps {
    columns: ColumnDef<Product>[]
    data: Product[]
}
function ProductsDataTable({columns, data }: DataTableProps) {
    const {mainStore} = useStores()

    const table = useDataTable<Product>({columns, data});

    useEffect(() => {
        mainStore.setProducts(data)
        table.setPageSize(data.length)
    }, []);

    return (
        <div>
            <div className="flex items-center py-4">
                <FilterRows<Product> table={table} column="name" placeHolder="Фильтр по названию"/>
            </div>
            <div className="rounded-md border mb-4">
                <DataTableView<Product> table={table} columnsLength={columns.length}/>
            </div>
        </div>
    )
}

export default observer(ProductsDataTable);
