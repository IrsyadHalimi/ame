import { create } from "zustand";

export type OverlayType =
  | "product"
  | "cart"
  | "chat"
  | "checkout"
  | null;

interface OverlayStore {
  activeOverlay: OverlayType;

  payload: unknown;

  openOverlay: (
    overlay: OverlayType,
    payload?: unknown
  ) => void;

  closeOverlay: () => void;
}

export const useOverlayStore =
  create<OverlayStore>((set) => ({
    activeOverlay: null,

    payload: null,

    openOverlay: (
      activeOverlay,
      payload
    ) =>
      set({
        activeOverlay,
        payload,
      }),

    closeOverlay: () =>
      set({
        activeOverlay: null,
        payload: null,
      }),
  }));