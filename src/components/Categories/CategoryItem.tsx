import {routes} from "@/lib/consts/routes";
import {CircleChevronRight} from "lucide-react";
import Link from "next/link";

type Props = {
    category: Category,
    route?: string
}

const CategoryItem = ({category, route}: Props) => {
    const link = route || routes.categoryProducts.replace(":categoryId", category.id);
    return (
        <Link href={link}>
            <div className="rounded-3xl break-words bg-app_primary flex text-white px-4 py-2 items-center justify-between">
                <p>{category.name}</p>
                <CircleChevronRight size={20} className="flex-shrink-0"/>
            </div>
        </Link>
    );
};

export default CategoryItem;
