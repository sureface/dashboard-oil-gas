import React from "react";
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
          link: "/mines",
        },
        {
          title: "usyurt neft",
          link: "/mines",
        },
        {
          title: "muborak gaz",
          link: "/mines",
        },
        {
          title: "muborak neft",
          link: "/mines",
        },
        {
          title: "sho'rtan gaz",
          link: "/mines",
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
      link: "/orografiya",
    },
    {
      icon: faPenRuler,
      title: "Masalani tanlash",
      arrow: faAngleDown,
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
