import { ProductCardWidget } from "@/widgets/ProductCard";
import {getProduct} from "@/api/products";

type Props = {
    params: { productId: string }
}

export async function generateMetadata({params}: Props) {
    const product = await getProduct(params.productId)

    if(!product) return {};

    return {
        title: `Fresh Accounts - [${product.name}]`,
        description: product.description
    }
}



export default function ProductPage({params}: Props){
    return (
        <div className="py-[30px]">
            <ProductCardWidget productId={params.productId}/>
        </div>
    )
}
