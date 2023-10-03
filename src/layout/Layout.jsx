import React, { useEffect, useState } from "react";
import SidebarLeft from "../components/SidebarLeft";
import {
  faAngleDown,
  faChartLine,
  faEarthEurope,
  faGauge,
  faMapLocationDot,
  faOilWell,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);

  const menu = [
    {
      icon: faGauge,
      title: "dashboard",
      link: "/",
      disabled: false,
    },
    {
      icon: faOilWell,
      title: "konlar",
      arrow: faAngleDown,
      disabled: loggedInCompany.login.length > 0 ? true : false,
      subMenu: [
        {
          title: "usyurt gaz",
          link: { pathname: "/mines?lat=43.271111&lon=58.28617" },
        },
        {
          title: "usyurt neft",
          link: { pathname: "/mines?lat=43.017959&lon=58.19976" },
        },
        {
          title: "muborak gaz",
          link: { pathname: "/mines?lat=39.170431&lon=65.268902" },
        },
        {
          title: "muborak neft",
          link: { pathname: "/mines?lat=39.2767&lon=65.8097" },
        },
        {
          title: "sho'rtan gaz",
          link: { pathname: "/mines?lat=38.45954&lon=65.80549" },
        },
      ],
    },
    {
      icon: faChartLine,
      title: "monitoring",
      link: "/monitoring",
      disabled: false,
    },
    {
      icon: faMapLocationDot,
      title: "kartateka",
      link: "/kartateka",
      disabled: false,
    },
    {
      icon: faEarthEurope,
      title: "orografiya",
      link: "/orografiya",
      disabled: false,
    },
    {
      icon: faPenRuler,
      title: "Masalani tanlash",
      arrow: faAngleDown,
      disabled: false,
      subMenu: [
        {
          title: "Bir qatlam",
          link: "/first-layer",
        },
        {
          title: "Ikki qatlam",
          link: "/second-layer",
        },
      ],
    },
  ];

  return (
    <>
      <SidebarLeft menu={menu} />
      <main className="main_wrapper__without-rightSidebar ">{children}</main>
    </>
  );
};

export default Layout;
