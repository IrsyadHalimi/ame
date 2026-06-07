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
import InteractionManager from "../components/InteractionManager";

export default function MarketplacePage() {
  return (
    <AvatarProvider>
      <Canvas style={{ height: "100vh" }} camera={{ position: [0, 5, 10] }}>

        <ambientLight />

        <Ground />

        <Avatar />

        <SellerBooth
          position={[10, 1.5, 0]}
        />

        <SellerBooth
          position={[-10, 1.5, 0]}
        />

        <AvatarController />

        <CameraRig />

        <InteractionDetector />

        <InteractionManager />

      </Canvas>

      <InteractionPrompt />

    </AvatarProvider>
  );
}