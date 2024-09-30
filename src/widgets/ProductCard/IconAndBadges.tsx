import {Earth} from "lucide-react";
import {Badge} from "@/shadcdn/ui/badge";
import {PropsWithChildren} from "react";

const InfoBadge = ({children, className}: PropsWithChildren<PropsWithClassName>) => {
    return <Badge className={`w-max bg-blue-500 rounded-none ${className}`}>{children}</Badge>
}

type Props = {
    count: number
    price: number
}

const IconAndBadges = ({count, price}:Props) => {
    return (
        <div className="relative max-w-max">
            <Earth size={200}/>
            <div className="flex flex-col gap-[16px] absolute top-0 left-[50%] justify-around h-full items-end">
                <InfoBadge>В наличии {count} шт.</InfoBadge>
                <InfoBadge className="bg-green-600">{price} ₽</InfoBadge>
            </div>
        </div>
    );
};

export default IconAndBadges;