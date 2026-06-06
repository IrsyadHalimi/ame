import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import useKeyboardInput from "./useKeyboardInput";

import {
  useAvatarContext,
} from "../context/AvatarContext";

export default function useAvatarController() {
  const keys =
    useKeyboardInput();

  const { avatarRef } =
    useAvatarContext();

  const direction =
    new THREE.Vector3();

  const speed = 0.08;

  useFrame(() => {
    if (!avatarRef.current)
      return;

    direction.set(0, 0, 0);

    if (keys["KeyW"])
      direction.z -= 1;

    if (keys["KeyS"])
      direction.z += 1;

    if (keys["KeyA"])
      direction.x -= 1;

    if (keys["KeyD"])
      direction.x += 1;

    direction.normalize();

    avatarRef.current.position.add(
      direction.multiplyScalar(
        speed
      )
    );
  });
}