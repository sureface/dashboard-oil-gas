import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivetateRoute = () => {
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const loggedInsuperUser = useSelector(
    (state) => state.auth.loggedInsuperUser
  );

  function CheckAuth() {
    if (
      loggedInCompany.login.length > 0 &&
      loggedInCompany.password.length > 0
    ) {
      return <Outlet />;
    } else if (
      loggedInUser.login.length > 0 &&
      loggedInUser.password.length > 0
    ) {
      return <Outlet />;
    } else if (
      loggedInsuperUser.login.length > 0 &&
      loggedInsuperUser.password.length > 0
    ) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return <CheckAuth />;
};

export default PrivetateRoute;
