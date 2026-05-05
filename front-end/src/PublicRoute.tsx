import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "./store/user-store";

export const PublicRoute = () => {
  const { user } = useUserStore();

  return user ? <Navigate to="/dashboard-nf" replace /> : <Outlet />;
};