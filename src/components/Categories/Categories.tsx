import getCategories from "@/api/categories";
import CategoryItem from "@/components/Categories/CategoryItem";
import {routes} from "@/lib/consts/routes";

const Categories = async () => {
    const categories = await getCategories()

    return (
        <div className="flex flex-col gap-[12px] py-10">
            <p className="font-bold text-xl mb-2">
                Категории
            </p>
            <div className="flex flex-col gap-[12px] xs:grid grid-flow-row xs:grid-cols-2 md:grid-cols-4 lg:flex">
                <CategoryItem category={{id: "all", name: "Все товары"}} route={routes.main}/>
                {categories.map((category) =>
                    <CategoryItem category={category} key={category.id}/>
                )}
            </div>
        </div>
    );
};

export default Categories;
