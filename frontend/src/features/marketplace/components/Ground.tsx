export default function Ground() {
  return (
    <mesh
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
      receiveShadow={false}
    >
      <planeGeometry
        args={[100, 100]}
      />

      <meshStandardMaterial
        color="#334155"
      />
    </mesh>
  );
}