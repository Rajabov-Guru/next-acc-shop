import getCategories from "@/api/categories";
import CategoryCard from "./CategoryCard";


type Props = {
    categoryId: string
}
const SubCategoryList = async ({categoryId}: Props) => {
    const subCategories = await getCategories(categoryId)

    if(subCategories.length === 0) {
        return null
    }

    return (
        <div className="flex flex-col gap-[20px]">
            <p className="font-bold text-2xl">Подкатегории</p>
            <div className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
                {subCategories.map((item) =>
                    <CategoryCard category={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default SubCategoryList;
