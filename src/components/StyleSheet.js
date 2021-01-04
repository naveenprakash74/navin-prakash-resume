/** @format */

const create = (style) => {
  return { ...style };
};

const flatten = (style) => {
  let newStyle = {};
  if (style && Array.isArray(style)) {
    style.forEach((value) => {
      newStyle = { ...newStyle, ...value };
    });
  } else {
    newStyle = style;
  }
  return newStyle;
};
const absoluteFill = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 };

export const StyleSheet = { create, flatten, absoluteFill, hairlineWidth: 0.12 };

export default StyleSheet;
