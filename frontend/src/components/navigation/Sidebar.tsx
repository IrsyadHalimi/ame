import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
      w-64
      border-r
      border-slate-800
      "
    >
      <nav
        className="
        flex
        flex-col
        p-4
        gap-2
        "
      >
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/products">
          Produk
        </Link>

        <Link to="/orders">
          Pesanan
        </Link>
      </nav>
    </aside>
  );
}