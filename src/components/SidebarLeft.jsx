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
  loginCompanyReducer,
  loginReducer,
  loginSuperUser,
} from "../redux/features/auth/authSlice";
import gisBg1 from "../assets/bgImg/gis-bg1.png";
import Logo1 from "../assets/logo/logo5.png";

const SidebarLeft = ({ menu }) => {
  const [drawing, setIsDrawing] = useState(false);

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const loggedInCompany = useSelector((state) => state.auth.loggedInCompany);
  const signupUser = useSelector((state) => state.auth.signupUser);
  const loggedInsuperUser = useSelector(
    (state) => state.auth.loggedInsuperUser
  );

  const logout = () => {
    if (loggedInCompany.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginCompanyReducer(data));
    } else if (loggedInUser.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginReducer(data));
    } else if (loggedInsuperUser.login.length > 0) {
      const data = {
        login: "",
        password: "",
      };
      dispatch(loginSuperUser(data));
    }
  };

  return (
    <>
      <div
        className={drawing ? "gis-sidebar gis-sidebar--mini" : "gis-sidebar"}
      >
        <div className="gis-sidebar__menu-wrapper w-100 h-100 position-relative">
          <div
            className="gis-sidebar__drawer z-1"
            onClick={() => setIsDrawing(!drawing)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
          <div className="gis-sidebar__menu-wrapper w-100 h-100 d-flex flex-column justify-content-between z-1">
            <div>
              <div className="gis-sidebar__logo_details">
                <a href="#" target="_blank" className="gis-sidebar__logo">
                  <img src={Logo1} alt="err" style={{ width: "35px" }} />
                </a>
                <div className="gis-sidebar__company_name">
                  {loggedInCompany.login.length > 0
                    ? "Muborak"
                    : signupUser.companyName.length > 0
                    ? signupUser.companyName
                    : "Neft Va Gaz"}
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
                <div className="gis-sidebar__userName">
                  {signupUser.userName.length > 0
                    ? signupUser.fullName
                    : "Xamid Olimjon"}
                </div>
                <div className="gis-sidebar__userStatus">admin</div>
              </div>
            </div>
          </div>
          <div className="gis-sidebar__bgImg z-n1">
            <img src={gisBg1} alt="err" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
