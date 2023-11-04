import React, { useContext } from "react";
import AuthProvider from "./../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <div></div>;
  }
  if (user) {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;
