"use client";
import { observer } from 'mobx-react-lite';
import useStores from "@/lib/hooks/useStores";
import PositionCard from './PositionCard';
import {PurchaseFeature} from "@/features/Purchase";
import {Separator} from "@/shadcdn/ui/separator";
import {useEffect} from "react";

const PositionList = () => {
    const { mainStore } = useStores()


    const onPageUnload = () => {
        mainStore.storeBasket()
    }

    useEffect(() => {
        window.addEventListener("unload", onPageUnload)

        return () => {
            window.removeEventListener("unload", onPageUnload)
        }
    });

    if(!mainStore.basketItems.length) {
        return <p className="text-app_background text-center">Корзина пуста</p>
    }

    return (
        <div className="min-h-max flex flex-col gap-[48px] flex-1">
            <div className="flex flex-col gap-[20px] px-[15px] md:px-20 flex-1">
                {mainStore.basketItems.map((position, ind) =>
                    <div className="flex flex-col" key={position.product.id}>
                        <PositionCard position={position}/>
                        {ind < mainStore.basketItems.length  && <Separator/>}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-[20px] align-middle justify-center">
                <div className="flex flex-col text-center gap-2">
                    <p className="font-bold text-3xl">Итого</p>
                    <p className="text-2xl">{mainStore.basketTotal} ₽</p>
                </div>
                <div className="self-center">
                    <PurchaseFeature/>
                </div>
            </div>
        </div>
    );
};

export default observer(PositionList);
