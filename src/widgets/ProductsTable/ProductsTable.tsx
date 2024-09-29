import { productsColumns } from "@/components/ProductsDataTable/columns";
import ProductsDataTable from "@/components/ProductsDataTable/data-table";
import getProducts from "@/widgets/ProductsTable/api/getProducts";

type Props = {
    categoryId?: string
}
const  ProductsTableWidget = async ({categoryId}:Props) => {
    const products = await getProducts(categoryId)

    return (
        <div className="max-w-[2000px]">
            <ProductsDataTable columns={productsColumns} data={products} />
        </div>
    )
}

export default ProductsTableWidget;
