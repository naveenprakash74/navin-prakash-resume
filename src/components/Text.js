/** @format */
import React from "react";

import { StyleSheet } from "./StyleSheet";

const Text = (props) => {
  let { style, ...restProps } = props;
  style = StyleSheet.flatten(style);

  style = { display: "flex", flexDirection: "column", ...style };
  return <div {...restProps} style={style} />;
};
export default Text;
