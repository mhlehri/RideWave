import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

import Example from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Example></Example>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signIn"></Navigate>;
};

export default PrivateRoute;
