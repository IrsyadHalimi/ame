import { Product }
from "@/features/product/types/product.type";

export interface CartItem {
  product: Product;

  quantity: number;
}