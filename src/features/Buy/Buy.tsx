"use client";

import {Button} from "@/shadcdn/ui/button";
import { observer } from "mobx-react-lite";
import {PositionCounterFeature} from "@/features/PositionCounter";
import {useEffect} from "react";
import useStores from "@/lib/hooks/useStores";

type Props = {
    primary?: boolean
    product: Product
}

const Buy = ({ primary, product }:Props) => {
    const {mainStore} = useStores()
    const position = mainStore.getProductBasketPosition(product.id)

    useEffect(() => {
    }, [mainStore.basket]);

    const handleAddToBasket = () => {
        mainStore.addToBasket({
            product,
            count: 1
        })
    }


    if(position) {
        return (
            <PositionCounterFeature position={position}/>
        )
    }

    return (
        <Button className={primary? "bg-green-600 w-full": ""} onClick={handleAddToBasket}>
            Купить
        </Button>
    );
};

export default observer(Buy);
