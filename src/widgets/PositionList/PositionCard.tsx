import { observer } from "mobx-react-lite";
import {Card, CardTitle} from "@/shadcdn/ui/card";
import {PositionCounterFeature} from "@/features/PositionCounter";
import {Badge} from "@/shadcdn/ui/badge";
import useStores from "@/lib/hooks/useStores";
import { CircleX } from "lucide-react";
import {routes} from "@/lib/consts/routes";
import {BasketPosition} from "@/lib/stores/main/store";
import Link from "next/link";

type Props = {
    position: BasketPosition
}

const PositionCard = ({position}: Props) => {
    const { mainStore } = useStores();
    const product = position.product;

    const handleDelete  = () => {
        mainStore.removeFromBasket(product.id)
    }

    return (
        <div className="flex justify-between">
            <Card className="py-4 grid sm:grid-cols-2 gap-[20px] items-center align-middle border-0 shadow-card w-full">
                <Link href={routes.product.replace(":productId", product.id)}>
                    <CardTitle className="text-[16px] font-normal text-app_background">
                        {product.name}
                    </CardTitle>
                </Link>
                <div className="grid auto-cols-[minmax(0,_2fr)] grid-flow-col gap-5 items-center w-max sm:w-full">
                    <PositionCounterFeature position={position}/>
                    <Badge className="bg-blue-600 hover:bg-blue-600 md:text-[16px] px-1.5 py-0 md:px-2.5 md:py-0.5 rounded-none select-none justify-self-center">
                        {product.price * position.count} ₽
                    </Badge>
                </div>
            </Card>
            <CircleX className="mr-4 sm:m-0 cursor-pointer self-center row-span-2" onClick={handleDelete} />
        </div>
    );
};

export default observer(PositionCard);
