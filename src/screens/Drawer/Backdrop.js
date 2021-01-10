/** @format */

import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closeModal} />;
};
export default Backdrop;
