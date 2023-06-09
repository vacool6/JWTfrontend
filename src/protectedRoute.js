import { Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
