import { create } from "zustand";

interface Position {
  x: number;
  y: number;
  z: number;
}

interface AvatarStore {
  position: Position;

  rotation: number;

  setPosition: (
    position: Position
  ) => void;

  setRotation: (
    rotation: number
  ) => void;
}

export const useAvatarStore =
  create<AvatarStore>((set) => ({
    position: {
      x: 0,
      y: 0.5,
      z: 0,
    },

    rotation: 0,

    setPosition: (position) =>
      set({ position }),

    setRotation: (rotation) =>
      set({ rotation }),
  }));