/** @format */

import { StyleSheet } from "./StyleSheet";

const Text = (props) => {
  let { style, ...restProps } = props;
  style = StyleSheet.flatten(style);
  return <div {...restProps} style={style} />;
};
export default Text;
