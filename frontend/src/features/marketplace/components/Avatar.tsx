import {
  useAvatarContext,
} from "../context/AvatarContext";

export default function Avatar() {
  const { avatarRef } =
    useAvatarContext();

  return (
    <mesh
      ref={avatarRef}
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