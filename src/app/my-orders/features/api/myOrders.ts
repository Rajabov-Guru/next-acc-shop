import request from "@/lib/funcs/request";

export const myOrders = (email: string) => {
  return request<Category[]>({
      path: '/orders/purchase-history',
      method: 'GET',
      searchParams: {
          email
      }
  });
};
