import request from "@/lib/funcs/request";

export async function getProducts(categoryId?:string){
    const path = categoryId?`/products/category/${categoryId}`:'/products/all'

    const products = await request<Product[]>({
        path,
        method: 'GET'
    });

    return products || []
}

export async function getProduct(productId: string){
    const path = `/products/${productId}`

    return await request<ProductWithDetails>({
        path,
        method: 'GET'
    })
}