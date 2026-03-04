import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const token = sessionStorage.getItem("ltk");
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (userInfo?.role !== "admin") {
        return <Navigate to="/notauthorized" replace />;
    }

    return children;
};

export default AdminRoute;