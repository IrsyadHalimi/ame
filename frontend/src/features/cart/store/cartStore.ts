import { create } from "zustand";

import {
  CartItem,
} from "../types/cart.type";

import { persist }
from "zustand/middleware";

interface CartStore {
  items: CartItem[];

  addItem: (
    item: CartItem
  ) => void;

  removeItem: (
    productId: string
  ) => void;

  clearCart: () => void;

  updateQuantity: (
    productId: string,
    quantity: number
  ) => void;
}

export const useCartStore =
  create<CartStore>()(persist((set) => ({
    items: [],

    addItem: (item) =>
      set((state) => {
        const existing =
          state.items.find(
            (cartItem) =>
              cartItem.product.id ===
              item.product.id
          );

        if (existing) {
          return {
            items:
              state.items.map(
                (cartItem) =>
                  cartItem.product.id ===
                  item.product.id
                    ? {
                        ...cartItem,
                        quantity:
                          cartItem.quantity +
                          item.quantity,
                      }
                    : cartItem
              ),
          };
        }

        return {
          items: [
            ...state.items,
            item,
          ],
        };
      }),

    removeItem: (
      productId
    ) =>
      set((state) => ({
        items:
          state.items.filter(
            (item) =>
              item.product.id !==
              productId
          ),
      })),

    updateQuantity: (
      productId,
      quantity
    ) =>
      set((state) => ({
        items:
          state.items.map(
            (item) =>
              item.product.id ===
              productId
                ? {
                    ...item,
                    quantity,
                  }
                : item
          ),
      })),

    clearCart: () =>
      set({
        items: [],
      }),
  }), {
    name: "ame-cart",
  }));