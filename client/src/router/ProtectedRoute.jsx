import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

function ProtectedRoute({ children }) {

    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>Verifying session...</div>
    }

    if (!user) {
        console.log("No user");
        return <Navigate to={"/"} replace />
    }

    return children;
}

export default ProtectedRoute
