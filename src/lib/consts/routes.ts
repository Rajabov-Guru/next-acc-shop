export const routes = {
    main: '/',
    contacts: '/contacts',
    rules: '/rules',
    faq: '/faq',
    map: '/map',
    policy: '/policy',
    logs: '/logs',

    myOrders: "/my-orders",
    product: "/products/:productId",
    categoryProducts: "/category/:categoryId/products",

    basket: "/basket"
} as const;

export type MyRoute = typeof routes[keyof typeof routes];

export const defaultRoute = routes.main;
