"use client";
import { observer } from "mobx-react-lite";
import { CirclePlus, CircleMinus} from "lucide-react";
import useStores from "@/lib/hooks/useStores";
import { Card } from "@/shadcdn/ui/card";
import {BasketPosition} from "@/lib/stores/main/store";

type Props = {
    position: BasketPosition
}

const PositionCounter = ({position: basketPosition}: Props) => {
    const {mainStore} = useStores()

    if(!basketPosition) return null;

    const handleIncrement = () => {
        basketPosition.incrementCount()
    }

    const handleDecrement = () => {
        if(basketPosition.count - 1 == 0) {
            mainStore.removeFromBasket(basketPosition.product.id)
        }
        else basketPosition.decrementCount()
    }

    return (
        <Card className="p-1 px-2 bg-gray-100 border-0 w-max">
            <div className="flex gap-[8px] justify-center align-middle">
                <CircleMinus onClick={handleDecrement} className="cursor-pointer"/>
                <p className="text-xs md:text-xl select-none">{basketPosition.count}</p>
                <CirclePlus onClick={handleIncrement} className="cursor-pointer"/>
            </div>
        </Card>
    );
};

export default observer(PositionCounter);
