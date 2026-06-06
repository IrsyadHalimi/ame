import { Outlet } from "react-router-dom";

export default function MarketplaceLayout() {
  return (
    <div
      className="
      relative
      h-screen
      overflow-hidden
      "
    >
      <Outlet />
    </div>
  );
}