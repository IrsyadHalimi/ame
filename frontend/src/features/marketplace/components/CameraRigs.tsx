import { useThree } from "@react-three/fiber";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import {
  useAvatarContext,
} from "../context/AvatarContext";

export default function CameraRig() {
  const { camera } = useThree();

  const { avatarRef } =
    useAvatarContext();

  const target =
    new THREE.Vector3();

  useFrame(() => {
    if (!avatarRef.current)
      return;

    target.set(
      avatarRef.current.position.x,
      avatarRef.current.position.y +
        5,
      avatarRef.current.position.z +
        8
    );

    camera.position.lerp(
      target,
      0.08
    );

    camera.lookAt(
      avatarRef.current.position
    );
  });

  return null;
}