import { Outlet, Navigate } from "react-router-dom";

const PrivetateRoute = () => {
  const auth = localStorage.getItem("isLoggedIn");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivetateRoute;
