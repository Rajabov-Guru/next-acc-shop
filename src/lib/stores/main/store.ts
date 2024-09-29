import {makeAutoObservable} from "mobx";


const basket_storage_key = "a_shop_basket_positions"

export class BasketPosition {
    product: Product
    count: number
    orderNumber: number

    constructor(product: Product, count: number, orderNumber: number) {
        this.product = product;
        this.count = count;
        this.orderNumber = orderNumber
        makeAutoObservable(this)
    }

    public incrementCount(){
        const newValue  = this.count + 1;
        if(newValue <= this.product.count){
            this.count = newValue
        }
    }

    public decrementCount(){
        const newValue  = this.count - 1;
        if(newValue > 0){
            this.count = newValue
        }
    }
}

type Basket = Record<string, BasketPosition | undefined>

class MainStore {
    categories: Category[] = []
    products: Product[] = []

    basket: Basket = {}

    constructor() {
        makeAutoObservable(this);
    }

    public setCategories(data: Category[]){
        this.categories = [...data]
    }

    public setProducts(data: Product[]){
        this.products = [...data]
        this.recoveryBasket()
    }

    public getProduct(productId: string) {
        return this.products.find((item) => item.id === productId)
    }

    public get basketItems(){
        const result: BasketPosition[] = []
        for (const [, value] of Object.entries(this.basket)) {
            if(value) result.push(value)
        }
        return result.sort((a, b) => a.orderNumber - b.orderNumber)
    }

    public get basketTotal(){
        const costs = this.basketItems.map((item) => item.product.price * item.count)
        return costs.reduce((prev, cur) => prev + cur,0)
    }

    public addToBasket(data: AddToBasket) {
        const orderNumbers = this.basketItems.map((item) => item.orderNumber)
        const inData = orderNumbers.length?orderNumbers:[0]
        const maxCount = Math.max(...inData)
        this.basket[data.product.id]  = new BasketPosition(data.product, data.count, maxCount + 1)
    }

    public removeFromBasket(productId: string) {
        delete this.basket[productId];
        this.storeBasket()
    }

    public getProductBasketPosition(productId: string) {
        return this.basket[productId]
    }

    public isProductInBasket(productId: string) {
        return Boolean(this.getProductBasketPosition(productId))
    }

    public storeBasket() {
        localStorage.removeItem(basket_storage_key)
        if(this.basketItems.length){
            localStorage.setItem(basket_storage_key, JSON.stringify(this.basket))
        }
    }

    public recoveryBasket() {
        const json = localStorage.getItem(basket_storage_key)
        if(!json) return

        const recovered = JSON.parse(json) as Basket;
        const validated: Basket = {}

        for (const [key, value] of Object.entries(recovered)) {
            const product = this.getProduct(key)
            if(!value) continue;

            let count = value.count;

            if(product) {
                console.log("Here", product.id)
                count = count <= product.count? count: product.count
            }

            validated[key] = new BasketPosition(
                value.product,
                value.count,
                value.orderNumber
            )
        }

        this.basket = validated;
        console.log(validated)

    }
}

export const mainStore = new MainStore();
