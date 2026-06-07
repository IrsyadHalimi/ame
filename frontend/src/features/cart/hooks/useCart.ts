import {
  useCartStore,
} from "../store/cartStore";

import {
  getSubtotal,
} from "../utils/cartCalculator";

export function useCart() {
  const items =
    useCartStore(
      (state) => state.items
    );

  const subtotal =
    getSubtotal(items);

  return {
    items,
    subtotal,
  };
}