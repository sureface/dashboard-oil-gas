import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DefaultLayout from "./layout/DefaultLayout";
import Login from "./components/Login";
import PrivetateRoute from "./router/PrivetateRoute";
import "./assets/css/sidebar.scss";
import "./assets/css/sidebarRight.scss";
import "./assets/css/monitoring.scss";
import DefaultMap from "./views/DefaultMap";
import Kartateka from "./views/Kartateka";
import Monitoring from "./views/Monitoring";
import Orografiya from "./views/Orografiya";
import FirstLayer from "./views/FirstLayer";
import SecondLayer from "./views/secondLayer";
import Mines from "./views/Mines";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivetateRoute />}>
            <Route element={<DefaultMap />} path="/" exact />
            <Route element={<Kartateka />} path="/kartateka" />
            <Route element={<Monitoring />} path="/monitoring" />
            <Route element={<Orografiya />} path="/orografiya" />
            <Route element={<FirstLayer />} path="/first-layer" />
            <Route element={<SecondLayer />} path="/second-layer" />
            <Route element={<Mines />} path="/mines" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
