/** @format */

import React from "react";
import { TouchableOpacity, Image } from ".";
import { backIcon, backIconLight } from "../images";
export const BackComponent = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      className="back-btn"
      onPress={onPress}
      style={{
        padding: 5,
        height: 32,
        width: 32,
        borderRadius: 32 / 2,
        borderStyle: "solid",
        borderWidth: 2,
        ...style,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={{ height: 28, width: 28, borderRadius: 28 / 2, objectFit: "contain" }} source={backIconLight} />
    </TouchableOpacity>
  );
};
export default BackComponent;
