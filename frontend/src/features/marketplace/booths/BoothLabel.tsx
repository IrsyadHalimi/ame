import { Html } from "@react-three/drei";

interface Props {
  sellerName: string;
}

export default function BoothLabel({
  sellerName,
}: Props) {
  return (
    <Html
      center
      position={[0, 2.5, 0]}
    >
      <div
        className="
        rounded-lg
        bg-slate-900
        px-3
        py-1
        text-sm
        text-white
        shadow-lg
        "
      >
        {sellerName}
      </div>
    </Html>
  );
}