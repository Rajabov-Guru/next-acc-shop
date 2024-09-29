import request from "@/lib/funcs/request";

export const createOrder = (body: OrderRequest) => {
    return request<ProductWithDetails>({
        path: "/orders/create",
        method: 'POST',
        body: JSON.stringify(body)
    });
};
