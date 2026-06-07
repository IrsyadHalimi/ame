import { useFrame } from "@react-three/fiber";

import { interactables } from "../registry/interactables";

import { distance } from "@/lib/distance";

import {
  useAvatarContext,
} from "../context/AvatarContext";

import {
  useInteractionStore,
} from "../stores/interactionStore";

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

    const avatar =
      avatarRef.current.position;

    let nearest: string | null =
      null;

    for (const object of interactables) {
      const dist = distance(
        avatar.x,
        avatar.z,

        object.position.x,
        object.position.z
      );

      if (dist <= object.radius) {
        nearest = object.id;

        break;
      }
    }

    setActiveObjectId(nearest);
  });
}