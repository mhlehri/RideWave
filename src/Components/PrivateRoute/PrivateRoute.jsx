import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { LoadingData } from "../Lottie/Lottie";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingData></LoadingData>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signIn"></Navigate>;
};

export default PrivateRoute;
