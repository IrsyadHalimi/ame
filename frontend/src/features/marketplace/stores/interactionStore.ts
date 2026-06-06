import { create } from "zustand";

interface InteractionStore {
  activeObjectId: string | null;

  setActiveObjectId: (
    id: string | null
  ) => void;
}

export const useInteractionStore =
  create<InteractionStore>((set) => ({
    activeObjectId: null,

    setActiveObjectId: (
      activeObjectId
    ) =>
      set({
        activeObjectId,
      }),
  }));