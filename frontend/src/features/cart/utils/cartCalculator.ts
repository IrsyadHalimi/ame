import {
  CartItem,
} from "../types/cart.type";

export function getSubtotal(
  items: CartItem[]
) {
  return items.reduce(
    (total, item) =>
      total +
      item.product.price *
        item.quantity,
    0
  );
}