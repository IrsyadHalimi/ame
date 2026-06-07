import BoothLabel from "./BoothLabel";

interface Props {
  sellerName: string;

  position: [
    number,
    number,
    number
  ];
}

export default function Booth({
  sellerName,
  position,
}: Props) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry
          args={[4, 3, 4]}
        />

        <meshStandardMaterial
          color="#2563eb"
        />
      </mesh>

      <BoothLabel
        sellerName={sellerName}
      />
    </group>
  );
}