import { Outlet } from "react-router-dom";
import {
  Canvas,
} from "@react-three/fiber";
import InteractionPrompt from "@/features/marketplace/components/InteractionPrompt";
import OverlayManager from "@/features/marketplace/components/OverlayManager";
import HUD from "@/features/marketplace/hud/HUD";

export default function MainLayout() {
  return (
    <div className="relative h-screen">
      <Outlet />
      <HUD />
    </div>
  );
}