import React from "react";
import SidebarLeft from "../components/SidebarLeft";
import {
  faAngleDown,
  faChartLine,
  faEarthEurope,
  faGauge,
  faMapLocationDot,
  faOilWell,
} from "@fortawesome/free-solid-svg-icons";
import SidebarRight from "../components/SidebarRight";

const DefaultLayout = ({ children }) => {
  const menu = [
    {
      icon: faGauge,
      title: "dashboard",
      link: "/",
    },
    {
      icon: faOilWell,
      title: "konlar",
      arrow: faAngleDown,
      subMenu: [
        {
          title: "usyurt gaz",
        },
        {
          title: "usyurt neft",
        },
        {
          title: "muborak gaz",
        },
        {
          title: "muborak neft",
        },
        {
          title: "sho'rtan gaz",
        },
      ],
    },
    {
      icon: faChartLine,
      title: "monitoring",
      link: "/monitoring",
    },
    {
      icon: faMapLocationDot,
      title: "kartateka",
      link: "/kartateka",
    },
    {
      icon: faEarthEurope,
      title: "orografiya",
      link: "/",
    },
  ];

  return (
    <>
      <SidebarLeft menu={menu} />
      <SidebarRight />
      <main className="main_wrapper">{children}</main>
    </>
  );
};

export default DefaultLayout;
