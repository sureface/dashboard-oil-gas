import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SidebarMenuItem from "./SidebarMenuItem";
import Avatar from "../assets/avatar/avatarme.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarLeft = ({ menu }) => {
  const [drawing, setIsDrawing] = useState(false);

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
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <div className="gis-sidebar__company_name">google</div>
              </div>
              <ul className="gis-sidebar__nav">
                {menu.map((item, index) => (
                  <SidebarMenuItem key={index} catchItem={index} item={item} />
                ))}
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
