/** @format */

import { StyleSheet } from "./StyleSheet";

const View = (props) => {
  let { style, ...restProps } = props;
  style = StyleSheet.flatten(style);
  return <div {...restProps} style={style} />;
};
export default View;
