import React, { use } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Lottie from "lottie-react";
import loader from "../assets/load.json"

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={loader} className="w-52 sm:w-64 md:w-72" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
