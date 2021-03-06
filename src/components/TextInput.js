/** @format */
import React from "react";

import { StyleSheet } from "./StyleSheet";

const TextInput = (props) => {
  let { style, onPress, ...restProps } = props;
  style = StyleSheet.flatten(style);
  style = { display: "flex", flexDirection: "column", ...style };
  return <input {...restProps} style={style} />;
};
export default TextInput;
