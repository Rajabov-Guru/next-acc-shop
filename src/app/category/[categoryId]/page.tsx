import { SubCategoryListWidget } from "@/components/SubCategoryList";
import ProductsTableWidget from "@/widgets/ProductsTable/ProductsTable";

type Props = {
    params: { categoryId: string }
}

export async function generateMetadata({params}: Props) {
    // TODO: get category name
    return {
        title: `Fresh Accounts - [${params.categoryId}]`,
    }
}


export default function CategoryPage({params}: Props){
    const categoryId = params.categoryId;

    return (
        <div className="flex flex-col gap-[24px] py-[30px] px-[10px] sm:px-0">
            <SubCategoryListWidget categoryId={categoryId}/>
            <div className="flex flex-col">
                <p className="font-bold text-2xl">Товары</p>
                <ProductsTableWidget categoryId={categoryId}/>
            </div>
        </div>
    )
}
