import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/Authentication/useAuth";

export default function UserGuard({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
