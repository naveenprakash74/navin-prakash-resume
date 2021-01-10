/** @format */
import React from "react";

import { StyleSheet } from "./StyleSheet";

const TextAreaInput = (props) => {
  let { style, onPress, ...restProps } = props;
  style = StyleSheet.flatten(style);
  style = { display: "flex", flexDirection: "column", ...style };
  return <textarea rows={6} {...restProps} style={style} />;
};
export default TextAreaInput;
