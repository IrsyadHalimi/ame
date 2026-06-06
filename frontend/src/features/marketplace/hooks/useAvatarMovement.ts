import { useFrame } from "@react-three/fiber";

import useKeyboardInput from "./useKeyboardInput";

import {
  useAvatarStore,
} from "../stores/avatarStore";

export default function useAvatarMovement() {
  const keys = useKeyboardInput();

  const position =
    useAvatarStore(
      (state) => state.position
    );

  const setPosition =
    useAvatarStore(
      (state) => state.setPosition
    );

  const speed = 0.08;

  useFrame(() => {
    let x = position.x;
    let z = position.z;

    if (keys["KeyW"]) {
      z -= speed;
    }

    if (keys["KeyS"]) {
      z += speed;
    }

    if (keys["KeyA"]) {
      x -= speed;
    }

    if (keys["KeyD"]) {
      x += speed;
    }

    setPosition({
      x,
      y: 0.5,
      z,
    });
  });
}