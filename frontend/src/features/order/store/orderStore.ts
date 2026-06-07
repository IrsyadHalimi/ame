import { create } from "zustand";

import { Order }
from "../types/order.type";

interface OrderStore {
  currentOrder:
    Order | null;

  setCurrentOrder: (
    order: Order
  ) => void;
}

export const useOrderStore =
  create<OrderStore>((set) => ({
    currentOrder: null,

    setCurrentOrder: (
      currentOrder
    ) =>
      set({
        currentOrder,
      }),
  }));