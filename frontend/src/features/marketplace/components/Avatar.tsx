import { useRef } from "react";

import * as THREE from "three";

export default function Avatar() {
  const ref =
    useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={ref}
      position={[0, 0.5, 0]}
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