import {
  Canvas,
} from "@react-three/fiber";

import Ground from "../components/Ground";

import Avatar from "../components/Avatar";

import { AvatarProvider } from "../context/AvatarContext";
import AvatarController from "../hooks/avatarController";

export default function MarketplacePage() {
  return (
    <AvatarProvider>
      <Canvas>
        <ambientLight />

        <Ground />

        <Avatar />

        <AvatarController />
      </Canvas>
    </AvatarProvider>
  );
}