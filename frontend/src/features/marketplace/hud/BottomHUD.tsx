import {
  ShoppingCart,
  MessageCircle,
  Map,
} from "lucide-react";
import { useOverlayStore } from "../stores/overlayStore";

export default function BottomHUD() {
  const openOverlay =
  useOverlayStore(
    (state) =>
      state.openOverlay
  );
  
  return (
    <div
      className="
      absolute
      bottom-4
      left
      ml-4
      z-30
      "
    >
      <div
        className="
        flex
        gap-4
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/80
        px-5
        py-3
        backdrop-blur
        "
      >
        <button
          onClick={() =>
            openOverlay("cart")
          }
        >
          <ShoppingCart />
        </button>

        <button>
          <MessageCircle />
        </button>

        <button>
          <Map />
        </button>
        
      </div>
    </div>
  );
}