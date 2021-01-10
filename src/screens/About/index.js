/** @format */

import React from "react";
import { View, Text } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine18, F1_M_HeadLine24 } from "../../theme/fonts";
import { shadow } from "../../theme/shadow";
const { surface_800, textColor_50, textColor_200, borderColor, surface_700 } = colors;
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: surface_800,
      }}
    >
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 8,
          ...shadow,
          padding: 20,
          backgroundColor: surface_700,
          maxHeight: "50%",
          maxWidth: "50%",
        }}
      >
        <Text
          style={{
            color: textColor_50,
            ...F1_M_HeadLine24,
            borderStyle: "solid",
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: borderColor,
          }}
        >
          About me
        </Text>
        <Text style={{ paddingTop: 20, paddingBottom: 20, color: textColor_200, ...F1_M_HeadLine18 }}>
          “ Extremely motivated to constantly develop my skills and grow professionally. I strictly believe in project
          based learning. approach. i am Frontend Developer with 2 years of industrial experience inbuilding and
          maintaining responsiveand optimized websites and cross-platform mobile applications. ”
        </Text>
      </View>
    </View>
  );
};
