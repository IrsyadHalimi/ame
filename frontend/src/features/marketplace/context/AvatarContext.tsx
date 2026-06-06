import {
  createContext,
  useContext,
  useRef,
} from "react";

import * as THREE from "three";

interface AvatarContextValue {
  avatarRef:
    React.RefObject<THREE.Mesh | null>;
}

const AvatarContext =
  createContext<
    AvatarContextValue | undefined
  >(undefined);

export function AvatarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const avatarRef =
    useRef<THREE.Mesh>(null);

  return (
    <AvatarContext.Provider
      value={{
        avatarRef,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatarContext() {
  const context =
    useContext(AvatarContext);

  if (!context) {
    throw new Error(
      "AvatarContext missing"
    );
  }

  return context;
}