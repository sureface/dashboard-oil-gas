import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// gis-sidebar--active

const SidebarMenuItem = ({ item, catchItem }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div>
        <li
          className={
            selected == catchItem
              ? "gis-sidebar__item gis-sidebar--show"
              : "gis-sidebar__item"
          }
          onClick={() => toggle(catchItem)}
        >
          <Link to={item.link} className="gis-sidebar__link">
            <div className="gis-sidebar__icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="gis-sidebar__title">{item.title}</div>
            <div
              className={
                selected == catchItem
                  ? "gis-sidebar__arrowDown-icon arrowDown-icon-go"
                  : "gis-sidebar__arrowDown-icon"
              }
            >
              <FontAwesomeIcon icon={item.arrow} />
            </div>
          </Link>
          {item.subMenu && (
            <ul className="gis-sidebar__dropdown">
              {item.subMenu.map((subItem, index) => (
                <li className="gis-sidebar__dropdown_item" key={index}>
                  <Link to="/" className="gis-sidebar__dropdown_link">
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
    </div>
  );
};

export default SidebarMenuItem;
