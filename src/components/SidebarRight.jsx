import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LineChartSimple, MultpleLineChart, SteppedLineChart } from "./Chart";

const SidebarRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <div className="Sidebar-wrapper">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="sidebar__inner">
          <LineChartSimple />
          <MultpleLineChart />
          <SteppedLineChart />
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
