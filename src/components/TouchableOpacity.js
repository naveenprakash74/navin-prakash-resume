/** @format */

import { StyleSheet } from "./StyleSheet";

const TouchableOpacity = (props) => {
  let { style, onPress, ...restProps } = props;
  style = StyleSheet.flatten(style);
  return <div {...restProps} onClick={onPress} style={style} />;
};
export default TouchableOpacity;
