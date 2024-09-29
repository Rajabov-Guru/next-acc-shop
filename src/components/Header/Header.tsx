"use client";
import {GoHome} from "@/features/GoHome";
import {Button} from "@/shadcdn/ui/button";
import {FileChartColumnIncreasing, ShoppingCart } from "lucide-react";
import { observer } from "mobx-react-lite";
import {Badge} from "@/shadcdn/ui/badge";
import {CardTitle} from "@/shadcdn/ui/card";
import useStores from "@/lib/hooks/useStores";
import {routes} from "@/lib/consts/routes";
import Link from "next/link";
import {Navbar} from "@/components/NavBar";

const Header = () => {
    const {mainStore} = useStores()

    return (
        <header className="flex flex-col sm:flex-col-reverse md:flex-row-reverse lg:flex-col gap-6 w-full">
            <div className="flex flex-shrink-0 h-[70px] rounded-[6px] md:w-1/2 lg:w-full bg-app_section_background justify-between items-center">
                <GoHome/>
                <div className="flex gap-[24px] h-full w-full px-2 sm:px-6">
                    <div className="w-full flex gap-2 items-center justify-end sm:justify-between md:justify-end lg:justify-between">
                        <div className="hidden lg:block">
                            <Navbar/>
                        </div>
                        <div className="hidden sm:block md:hidden">
                            <CardTitle>Fresh-Accounts</CardTitle>
                        </div>
                        <div className="flex gap-[12px] justify-self-end">
                            <Link href={routes.myOrders}>
                                <Button>
                                    <div className="flex gap-[8px] align-middle">
                                        <p>Мои покупки</p>
                                        <FileChartColumnIncreasing size={20}/>
                                    </div>
                                </Button>
                            </Link>
                            <Link href={routes.basket}>
                                <Button className={mainStore.basketItems.length?"bg-green-600 hover:bg-green-600":""}>
                                    <div className="flex gap-[8px] align-middle">
                                        <ShoppingCart size={20}/>
                                        <Badge className="bg-app_section_background text-app_primary py-0 px-1 hover:bg-app_section_background">
                                            {mainStore.basketItems.length}
                                        </Badge>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex lg:hidden bg-app_section_background rounded-[6px] px-6 py-4 w-full">
                <Navbar/>
            </div>
        </header>
    );
};

export default observer(Header);
