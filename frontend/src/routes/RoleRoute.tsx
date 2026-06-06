import {
  Navigate,
  Outlet,
} from "react-router-dom";

import {
  useAuthStore,
} from "@/stores/authStore";

interface Props {
  allow: string[];
}

export default function RoleRoute({
  allow,
}: Props) {
  const user =
    useAuthStore(
      (state) => state.user
    );

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (
    !allow.includes(user.role)
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
}