import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import PrivetateRoute from "./router/PrivetateRoute";
import "./assets/css/sidebar.scss";
import "./assets/css/sidebarRight.scss";
import "./assets/css/monitoring.scss";
import DefaultMap from "./views/DefaultMap";
import MuborakNeft from "./views/MuborakNeft";
import Kartateka from "./views/Kartateka";
import Monitoring from "./views/Monitoring";
import Orografiya from "./views/Orografiya";
import FirstLayer from "./views/FirstLayer";
import SecondLayer from "./views/SecondLayer";
import Mines from "./views/Mines";
import SignUp from "./views/SignUp";
import UserInfo from "./views/UserInfo";
import OrografiyaMuborak from "./views/OrografiyaMuborak";
import { useSelector } from "react-redux";

function App() {
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);
  const loggedInsuperUser = useSelector(
    (state) => state.auth.loggedInsuperUser
  );

  function Logchacker() {
    if (loggedInCompany.login.length > 0) {
      return <MuborakNeft />;
    } else if (loggedInsuperUser.login.length > 0) {
      return <DefaultMap />;
    } else {
      return <DefaultMap />;
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivetateRoute />}>
            <Route element={<Logchacker />} path="/" exact />
            <Route element={<Kartateka />} path="/kartateka" />
            <Route element={<Monitoring />} path="/monitoring" />
            <Route
              element={
                loggedInCompany.login.length > 0 ? (
                  <OrografiyaMuborak />
                ) : (
                  <Orografiya />
                )
              }
              path="/orografiya"
            />
            <Route element={<FirstLayer />} path="/1" />
            <Route element={<SecondLayer />} path="/s1" />
            <Route element={<Mines />} path="/mines" />
            <Route element={<UserInfo />} path="/user-info" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
