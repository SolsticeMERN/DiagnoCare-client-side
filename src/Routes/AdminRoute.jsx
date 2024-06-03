import { Navigate } from "react-router-dom";
import useRole from "../Pages/Hooks/useRole";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <div>Loading....</div>;
  if (role === "admin") return children;
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;