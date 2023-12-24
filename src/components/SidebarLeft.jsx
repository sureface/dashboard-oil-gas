import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SidebarMenuItem from "./SidebarMenuItem";
import Avatar from "../assets/avatar/avatarme.png";
import {
  faBarsStaggered,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuperUserReducer,
  loginSuperUserWebReducer,
  loginCompanyReducer,
  loginCompanyWebReducer,
  loginWorkersReducer,
} from "../redux/features/auth/authSlice";
import gisBg1 from "../assets/bgImg/gis-bg1.png";
import Logo1 from "../assets/logo/logo5.png";

const SidebarLeft = ({ menu }) => {
  const [drawing, setIsDrawing] = useState(false);

  const dispatch = useDispatch();

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
  const loggedInWorkers = useSelector((state) => state.auth.loggedInWorkers);

  const logout = () => {
    if (loggedInCompany.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginCompanyReducer(data));
    } else if (loggedInCompanyWeb.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginCompanyWebReducer(data));
    } else if (loggedInsuperUser.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginSuperUserReducer(data));
    } else if (loggedInsuperUserWeb.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginSuperUserWebReducer(data));
    } else if (loggedInWorkers.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginWorkersReducer(data));
    }
  };

  return (
    <>
      <div className={`gis-sidebar ${drawing ? "gis-sidebar--mini" : ""}`}>
        <div className="gis-sidebar__menu-wrapper">
          <div
            className="gis-sidebar__drawer"
            onClick={() => setIsDrawing(!drawing)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
          <div className="gis-sidebar__menu_inrapper">
            <div className="gis-sidebar__logo_details">
              <a href="#" target="_blank" className="gis-sidebar__logo">
                <img src={Logo1} alt="err" style={{ width: "35px" }} />
              </a>
              <div className="gis-sidebar__company_name">
                {loggedInCompany.login.length > 0 ? "Muborak" : "Oʻzbekneftgaz"}
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
          <div className="gis-sidebar__bgImg z-n1">
            <img src={gisBg1} alt="err" />
          </div>
          <div className="gis-sidebar__userInfos">
            <a href={Avatar} target="_blank" className="gis-sidebar__userPic">
              <img src={Avatar} />
            </a>
            <div className="gis-sidebar__userDetails">
              <div className="gis-sidebar__userName">Xamid Olimjon</div>
              <div className="gis-sidebar__userStatus">tizim adminstratori</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
