import { Link } from "react-router-dom";

import Container from "@/components/ui/Container/Container";

export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-800
      bg-slate-950/80
      backdrop-blur
      "
    >
      <Container>
        <div
          className="
          flex
          h-16
          items-center
          justify-between
          "
        >
          <Link
            to="/"
            className="font-bold"
          >
            AME
          </Link>

          <nav
            className="
            flex
            items-center
            gap-6
            "
          >
            <Link to="/">
              Beranda
            </Link>

            <Link to="/login">
              Login
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}