import request from "@/lib/funcs/request";

export default async function getCategories(parentCategoryId?: string){
    const searchParams = !parentCategoryId?{}:{
        categoryID: parentCategoryId
    }

    const categories = await request<Category[]>({
        path: "/categories",
        method: "GET",
        searchParams,
    })

    return categories || []
}
