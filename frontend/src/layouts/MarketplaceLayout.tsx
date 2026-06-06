import { Outlet } from "react-router-dom";
import {
  Canvas,
} from "@react-three/fiber";
import InteractionPrompt from "@/features/marketplace/components/InteractionPrompt";

export default function MarketplaceLayout() {
  return (
    <div className="relative h-screen">
      <Canvas>
        <Outlet />
      </Canvas>
      <InteractionPrompt />
    </div>
  );
}