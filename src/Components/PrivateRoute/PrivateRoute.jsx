import React, { useContext } from "react";
import AuthProvider from "./../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <div></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
