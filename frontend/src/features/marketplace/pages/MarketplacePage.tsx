import {
  Canvas,
} from "@react-three/fiber";

import Ground from "../components/Ground";

import Avatar from "../components/Avatar";

import CameraController from "../components/CameraController";

export default function MarketplacePage() {
  return (
    <Canvas
      camera={{
        position: [0, 6, 8],
        fov: 60,
      }}
    >
      <ambientLight
        intensity={1}
      />

      <Ground />

      <Avatar />

      <CameraController />
    </Canvas>
  );
}