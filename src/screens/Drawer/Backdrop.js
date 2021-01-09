/** @format */

import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close} />;
};
export default Backdrop;