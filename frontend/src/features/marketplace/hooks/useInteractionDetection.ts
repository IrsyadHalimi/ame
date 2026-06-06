import { useFrame } from "@react-three/fiber";

import {
  useAvatarContext,
} from "../context/AvatarContext";

import {
  useInteractionStore,
} from "../stores/interactionStore";

import { distance } from "@/lib/distance";

export default function useInteractionDetection() {
  const { avatarRef } =
    useAvatarContext();

  const setActiveObjectId =
    useInteractionStore(
      (state) =>
        state.setActiveObjectId
    );

  useFrame(() => {
    if (!avatarRef.current)
      return;

    const boothPosition = {
      x: 10,
      z: 0,
    };

    const avatarPosition =
      avatarRef.current.position;

    const dist = distance(
      avatarPosition.x,
      avatarPosition.z,

      boothPosition.x,
      boothPosition.z
    );

    if (dist < 5) {
      setActiveObjectId(
        "seller-booth-1"
      );
    } else {
      setActiveObjectId(null);
    }
  });
}