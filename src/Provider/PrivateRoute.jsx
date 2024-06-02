import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Pages/Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
              <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
              </div>
            </div>
          );
    }

    if ( user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}}  replace />
};

export default PrivateRoute;