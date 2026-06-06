import {
  Canvas,
} from "@react-three/fiber";

import Ground from "../components/Ground";

import Avatar from "../components/Avatar";

import { AvatarProvider } from "../context/AvatarContext";
import AvatarController from "../hooks/avatarController";
import InteractionPrompt from "../components/InteractionPrompt";
import InteractionDetector from "../components/Detector";
import CameraRig from "../components/CameraRigs";
import SellerBooth from "../components/interactables/SellerBooth";

export default function MarketplacePage() {
  return (
    <AvatarProvider>
      <Canvas>

        <ambientLight />

        <Ground />

        <Avatar />

        <SellerBooth
          position={[10, 1.5, 0]}
        />

        <CameraRig />

        <AvatarController />

        <InteractionDetector />

      </Canvas>

      <InteractionPrompt />

    </AvatarProvider>
  );
}