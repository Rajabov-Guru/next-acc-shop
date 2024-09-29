type Category = {
    id: string
    parent_id?: string | null
    name: string
}

type Product = {
    id: string
    category_id: string
    name: string
    description: string
    price: number
    count: number
}

type ProductWithCategory = Product & {
    category: Category
}

type ProductWithCategories = Product & {
    categories: Category[]
}


type ProductWithDetails = ProductWithCategories & {
    properties: Property[]
}