import request from "@/lib/funcs/request";

export default async function getProducts(categoryId?:string){
    const path = categoryId?`/products/category/${categoryId}`:'/products/all'

    const products = await request<Product[]>({
        path,
        method: 'GET'
    });

    return products || []
}
