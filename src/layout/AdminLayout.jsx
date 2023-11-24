import React from "react";
import AdminSideBar from "../adminViews/AdminSideBar";
import { faHome, faKey, faOilWell } from "@fortawesome/free-solid-svg-icons";

const AdminLayout = ({ children }) => {
  const menu = [
    {
      icon: faHome,
      title: "Bosh Sahifa",
      link: "/",
      disabled: false,
    },
    {
      icon: faOilWell,
      title: "barcha konlar",
      link: "/barcha-konlar",
      disabled: false,
    },
    {
      icon: faKey,
      title: "ruhsatnoma",
      link: "/permission",
      disabled: false,
    },
  ];

  return (
    <>
      <AdminSideBar menu={menu} />
      <div className="main_wrapper__without-rightSidebar">{children}</div>
    </>
  );
};

export default AdminLayout;
