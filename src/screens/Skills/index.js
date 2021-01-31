/** @format */

import React from "react";
import { View, Text } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine24, F1_R_HeadLine18 } from "../../theme/fonts";
import { isMobile } from "../../Utility";
const { surface_800, surface_700, textColor_50, textColor_200, surface_green, borderColor } = colors;
const skills = ["React js", "React Native", "HTML/CSS", "Node js", "MongoDb"];
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

          backgroundColor: surface_700,
          borderRadius: 8,
          padding: 20,
          margin: 20,
          // flexDirection: isMobile ? "column" : "row",
          minWidth: 300,
          minHeight: 300,
        }}
      >
        <Text
          style={{
            ...F1_M_HeadLine24,
            color: textColor_50,
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: surface_green,
            borderBottomWidth: 2,
          }}
        >
          Skills
        </Text>
        {skills.map((item) => {
          return <Text style={{ padding: 20, ...F1_R_HeadLine18, color: textColor_200 }}>{item}</Text>;
        })}
      </View>
    </View>
  );
};
