import {Card} from "@/shadcdn/ui/card";
import {routes} from "@/lib/consts/routes";
import { CircleChevronDown } from "lucide-react";
import Link from "next/link";

type Props = {
    category: Category
}

const CategoryCard = ({category}: Props) => {
    const link = routes.categoryProducts.replace(":categoryId", category.id)
    return (
        <Link href={link}>
            <Card className="px-3 py-2 text-center bg-app_primary text-app_section_background flex gap-2 items-center border-0">
                <p className="font-bold text-[14px]">{category.name}</p>
                <CircleChevronDown/>
            </Card>
        </Link>
    );
};

export default CategoryCard;
