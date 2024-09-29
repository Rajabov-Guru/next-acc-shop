type AddToBasket = {
    product: Product
    count: number
}

type OrderPosition = {
    productId: string
    count: number
}

type OrderRequest = {
    email: string
    positions: OrderPosition[]
}