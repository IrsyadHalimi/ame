import { create } from "zustand";

interface CartStore {
  totalItems: number;

  setTotalItems: (total: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  totalItems: 0,

  setTotalItems: (total) =>
    set({
      totalItems: total,
    }),
}));