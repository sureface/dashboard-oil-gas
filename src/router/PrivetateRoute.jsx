import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivetateRoute = () => {
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);
  const loggedInCompanyWeb = useSelector(
    (state) => state.auth.loggedInCompanyWeb
  );
  const loggedInsuperUser = useSelector(
    (state) => state.auth.loggedInsuperUser
  );
  const loggedInsuperUserWeb = useSelector(
    (state) => state.auth.loggedInsuperUserWeb
  );

  function CheckAuth() {
    if (
      loggedInCompany.login.length > 0 &&
      loggedInCompany.password.length > 0
    ) {
      return <Outlet />;
    } else if (
      loggedInCompanyWeb.login.length > 0 &&
      loggedInCompanyWeb.password.length > 0
    ) {
      return <Outlet />;
    } else if (
      loggedInsuperUser.login.length > 0 &&
      loggedInsuperUser.password.length > 0
    ) {
      return <Outlet />;
    } else if (
      loggedInsuperUserWeb.login.length > 0 &&
      loggedInsuperUserWeb.password.length > 0
    ) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return <CheckAuth />;
};

export default PrivetateRoute;
