import request from "@/lib/funcs/request";

export default async function getCategories(){
    const categories = await request<Category[]>({
        path: "/categories",
        method: "GET"
    })

    return categories || []
}
