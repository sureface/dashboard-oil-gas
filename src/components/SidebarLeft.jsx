import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SidebarMenuItem from "./SidebarMenuItem";
import Avatar from "../assets/avatar/avatarme.jpg";
import {
  faBars,
  faFire,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SidebarLeft = ({ menu }) => {
  const [drawing, setIsDrawing] = useState(false);

  const [isComp, setIsComp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const comp = JSON.parse(localStorage.getItem("company"));
    if (comp === true) setIsComp(true);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div
        className={drawing ? "gis-sidebar gis-sidebar--mini" : "gis-sidebar"}
      >
        <div className="gis-sidebar__menu-wrapper w-100 h-100 position-relative">
          <div
            className="gis-sidebar__drawer"
            onClick={() => setIsDrawing(!drawing)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="gis-sidebar__menu-wrapper w-100 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="gis-sidebar__logo_details">
                <a href="#" target="_blank" className="gis-sidebar__logo">
                  <FontAwesomeIcon icon={isComp ? faFire : faGoogle} />
                </a>
                <div className="gis-sidebar__company_name">
                  {isComp ? "Muborak" : "google"}
                </div>
              </div>
              <ul className="gis-sidebar__nav">
                {menu.map((item, index) => (
                  <SidebarMenuItem key={index} catchItem={index} item={item} />
                ))}
                <div
                  className="gis-sidebar__link cursor-pointer"
                  onClick={logout}
                >
                  <div className="gis-sidebar__icon">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                  <div className="gis-sidebar__title">chiqish</div>
                </div>
              </ul>
            </div>

            <div className="gis-sidebar__userInfos">
              <a href={Avatar} target="_blank" className="gis-sidebar__userPic">
                <img src={Avatar} />
              </a>
              <div className="gis-sidebar__userDetails">
                <div className="gis-sidebar__userName">Jasur Juraev</div>
                <div className="gis-sidebar__userStatus">admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
