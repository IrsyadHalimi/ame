import { createBrowserRouter } from "react-router-dom";

// Layout & Public Pages
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage"; // Asumsi halaman login (biasanya tanpa MainLayout)

// Route Guards
import ProtectedRoute from "@/routes/ProtectedRoute";
import RoleRoute from "@/routes/RoleRoute";

// Dashboard Pages
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import SellerDashboard from "@/pages/seller/SellerDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import MarketplacePage from "@/features/marketplace/pages/MarketplacePage";
import MarketplaceLayout from "@/layouts/MarketplaceLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <MarketplaceLayout />,
    children: [
      {
        path: "/marketplace",
        element: <MarketplacePage />
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/customer",
            element: <CustomerDashboard />,
          },
          {
            element: <RoleRoute allow={["seller"]} />,
            children: [
              {
                path: "/seller",
                element: <SellerDashboard />,
              },
            ],
          },
          {
            element: <RoleRoute allow={["superadmin"]} />,
            children: [
              {
                path: "/admin",
                element: <AdminDashboard />,
              },
            ],
          },
        ],
      },
    ],
  },
]);