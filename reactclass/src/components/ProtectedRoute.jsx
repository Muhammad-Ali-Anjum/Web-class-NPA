import { Navigate } from "react-router-dom";
import { isAuth } from "./auth";

function ProtectedRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;