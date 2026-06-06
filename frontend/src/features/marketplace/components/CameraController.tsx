import {
  OrbitControls,
} from "@react-three/drei";

export default function CameraController() {
  return (
    <OrbitControls
      enablePan={false}
      minDistance={4}
      maxDistance={10}
    />
  );
}