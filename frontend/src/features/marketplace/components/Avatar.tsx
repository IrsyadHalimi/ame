import { useRef } from "react";

import * as THREE from "three";

import {
  useAvatarStore,
} from "../stores/avatarStore";

import useAvatarMovement from "../hooks/useAvatarMovement";

export default function Avatar() {
  useAvatarMovement();

  const meshRef =
    useRef<THREE.Mesh>(null);

  const position =
    useAvatarStore(
      (state) => state.position
    );

  return (
    <mesh
      ref={meshRef}
      position={[
        position.x,
        position.y,
        position.z,
      ]}
    >
      <boxGeometry
        args={[1, 1, 1]}
      />

      <meshStandardMaterial
        color="#22c55e"
      />
    </mesh>
  );
}