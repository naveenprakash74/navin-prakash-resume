/** @format */
import React from "react";

import { StyleSheet } from "./StyleSheet";

const TouchableOpacity = (props) => {
  let { style, onPress, ...restProps } = props;
  style = StyleSheet.flatten(style);
  
  style = { display: "flex", flexDirection: "column", ...style };
  return <div {...restProps} onClick={onPress} style={style} />;
};
export default TouchableOpacity;
