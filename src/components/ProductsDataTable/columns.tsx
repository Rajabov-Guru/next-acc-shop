"use client";
import { ColumnDef } from "@tanstack/react-table";
import { productColumnIdMap } from "./productColumnIdMap";
import { routes } from "@/lib/consts/routes";
import { BuyFeature } from "@/features/Buy";
import {ColumnHeader} from "@/components/DataTable/ColumnHeader";
import Link from "next/link";


export const productsColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: () => {
            return <ColumnHeader title={productColumnIdMap.name}/>
        },
        cell: ({ row }) => {
            const product = row.original;
            const link  = routes.product.replace(':productId', product.id);

            return <Link href={link} className="bg-app" >{row.getValue("name")}</Link>
        },
    },
    {
        accessorKey: "description",
        header: () => {
            return <ColumnHeader title={productColumnIdMap.description}/>
        },
        cell: ({ row }) => {
            const product = row.original;

            return <div>{product.description}</div>
        },
    },
    {
        accessorKey: "count",
        header: () => {
            return <ColumnHeader title={productColumnIdMap.count}/>
        },
    },
    {
        accessorKey: "price",
        header: () => {
            return <ColumnHeader title={productColumnIdMap.price}/>
        },
    },
    {
        id: "actions",
        cell: ({row}) => {
            const product = row.original

            return (
                <BuyFeature product={product}/>
            )
        },
    },
]
