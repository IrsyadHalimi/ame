import { Canvas } from "@react-three/fiber";

export default function MarketplaceScene() {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={1} />
    </Canvas>
  );
}