import { create } from "zustand";

interface HUDStore {
  showHUD: boolean;

  toggleHUD: () => void;
}

export const useHUDStore =
  create<HUDStore>((set) => ({
    showHUD: true,

    toggleHUD: () =>
      set((state) => ({
        showHUD: !state.showHUD,
      })),
  }));