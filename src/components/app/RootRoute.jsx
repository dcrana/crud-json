import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Posts from "../../pages/posts/Posts";
import Register from "../../pages/register/Register";
import AuthRoutes from "./AuthRoute";

const RootRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/posts"
                    element={
                        <AuthRoutes>
                            <Posts />
                        </AuthRoutes>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
};
export default RootRoute;
