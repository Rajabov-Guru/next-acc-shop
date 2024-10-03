"use client";
import { observer } from "mobx-react-lite";
import {ShoppingCart} from "lucide-react";
import {Button} from "@/shadcdn/ui/button";
import {routes} from "@/lib/consts/routes";
import useStores from "@/lib/hooks/useStores";
import Link from "next/link";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

const FloatingBasket = () => {
    const {mainStore} = useStores();
    const pathname = usePathname()


    useEffect(() => {
        mainStore.recoveryBasket()
    }, []);

    if(!mainStore.basketItems.length || pathname === routes.basket) {
        return null;
    }

    return (
        <Link href={routes.basket}>
            <Button className="rounded-full p-7 relative bg-green-600 shadow-2xl shadow-accent">
                <ShoppingCart size={20} className="absolute"/>
            </Button>
        </Link>
    );
};

export default observer(FloatingBasket);
