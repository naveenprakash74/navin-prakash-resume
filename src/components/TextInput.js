/** @format */
import React from "react";

import { StyleSheet } from "./StyleSheet";

const TextInput = (props) => {
  let { style, onPress, ...restProps } = props;
  style = StyleSheet.flatten(style);
  return <div {...restProps} onClick={onPress} style={style} />;
};
export default TextInput;
