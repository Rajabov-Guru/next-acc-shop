import {Card, CardContent, CardTitle} from "@/shadcdn/ui/card";
import {BuyFeature} from "@/features/Buy";
import PropertyList from "./PropertyList";
import IconAndBadges from "./IconAndBadges";
import {getProduct} from "@/api/products";


type Props = {
    productId: string
}

const ProductCard = async ({ productId }:Props) => {
    const product = await getProduct(productId)

    if(!product) return null;

    return (
        <Card className="px-3 py-2 border-0 flex flex-col gap-10 min-h-[600px]">
            <CardTitle className="text-center">{product.name}</CardTitle>
            <div className="flex flex-col md:flex-row gap-[40px]">
                <div className="flex flex-col gap-[16px] self-center items-center md:self-start">
                    <IconAndBadges count={product.count} price={product.price}/>
                    <BuyFeature primary product={product}/>
                </div>
                <div className="flex flex-col flex-grow mb-5 self-start">
                    <div className="flex flex-col gap-[16px] mb-5">
                        <p className="font-bold text-xl">Описание</p>
                        <CardContent className="flex-grow px-0">{product.description}</CardContent>
                    </div>
                    <PropertyList properties={product.properties}/>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;