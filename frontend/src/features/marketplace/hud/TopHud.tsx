import {
  ShoppingBag,
  User,
} from "lucide-react";

export default function TopHUD() {
  return (
    <div
      className="
      absolute
      top-4
      left-4
      right-4
      z-30
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/80
        px-4
        py-3
        backdrop-blur
        "
      >
        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <ShoppingBag
            size={20}
          />

          <span>
            AME
          </span>
        </div>

        <button>
          <User />
        </button>
      </div>
    </div>
  );
}