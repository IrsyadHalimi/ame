import { useQuery }
from "@tanstack/react-query";

import {
  getProductsBySeller,
} from "../api/productApi";

export function useProducts(
  sellerId: string
) {
  return useQuery({
    queryKey: [
      "products",
      sellerId,
    ],

    queryFn: () =>
      getProductsBySeller(
        sellerId
      ),

    enabled: !!sellerId,
  });
}