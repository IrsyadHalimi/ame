interface Props {
  position: [
    number,
    number,
    number
  ];
}

export default function SellerBooth({
  position,
}: Props) {
  return (
    <mesh position={position}>
      <boxGeometry
        args={[3, 3, 3]}
      />

      <meshStandardMaterial
        color="#38bdf8"
      />
    </mesh>
  );
}