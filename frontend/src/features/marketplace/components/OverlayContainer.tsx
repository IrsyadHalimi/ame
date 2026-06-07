import { ReactNode } from "react";
import {
  X,
} from "lucide-react";
import { useOverlayStore } from "../stores/overlayStore";

interface Props {
  children: ReactNode;
}

const closeOverlay =
  useOverlayStore(
    (state) =>
      state.closeOverlay
  );

export default function OverlayContainer({
  children,
}: Props) {
  return (
    <div
      className="
      absolute
      right-0
      top-0
      z-40
      h-full
      w-[420px]
      border-l
      border-slate-800
      bg-slate-950/95
      backdrop-blur
      "
    >
      {children}
      <button
        onClick={closeOverlay}
      >
        <X />
      </button>
    </div>
  );
}