import { api } from "@/lib/api";

import { Product }
from "../types/product.type";

export async function getProductsBySeller(
  sellerId: string
) {
  const response =
    await api.get<Product[]>(
      `/sellers/${sellerId}/products`
    );

  return response.data;
}