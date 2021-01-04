/** @format */

import { StyleSheet } from "./StyleSheet";

const Image = (props) => {
  let { style, source, ...restProps } = props;
  style = StyleSheet.flatten(style);
  if (typeof source === "string") {
    source = { uri: source };
  }
  return <img src={source} {...restProps} style={style} />;
};
export default Image;
