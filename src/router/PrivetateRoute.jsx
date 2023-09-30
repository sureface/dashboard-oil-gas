import { Outlet, Navigate } from "react-router-dom";

const PrivetateRoute = () => {
  const auth = localStorage.getItem("isLoggedIn");
  const authcomp = localStorage.getItem("company");

  return auth || authcomp ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivetateRoute;
