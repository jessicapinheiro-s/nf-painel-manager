import { Navigate } from "react-router-dom";
import { useUserStore } from "./store/user-store"
import { Layout } from "./Layout";

export const ProtectedLayout = () => {
    const { user } = useUserStore();
    const isAuthenticated = user !== null;

    return isAuthenticated ? <Layout /> : <Navigate to="/" replace />
}

