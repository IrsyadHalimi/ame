import { api } from "@/lib/api";

import { Order } from "../types/order.type";

export async function createOrder(
  payload: {
    items: {
      productId: string;
      quantity: number;
    }[];
  }
) {
  const response =
    await api.post<Order>(
      "/orders",
      payload
    );

  return response.data;
}

export async function getOrder(
  orderId: string
) {
  const response =
    await api.get<Order>(
      `/orders/${orderId}`
    );

  return response.data;
}