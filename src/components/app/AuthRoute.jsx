import { Navigate } from "react-router-dom";

const AuthRoutes = ({ children, path }) => {

    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" />
    }
    else {
        return children;
    }
}
export default AuthRoutes;