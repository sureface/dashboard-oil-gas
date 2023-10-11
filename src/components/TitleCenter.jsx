import React from "react";

const TitleCenter = ({ title }) => {
  return <div className="h4 text-main text-center">{title ? title : ""}</div>;
};

export default TitleCenter;
