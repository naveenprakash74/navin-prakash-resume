/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import { View, Text, TouchableOpacity } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine24, F1_R_HeadLine16 } from "../../theme/fonts";
import { isMobile } from "../../Utility";
const { surface_800, borderColor, textColor_300, surface_green, textColor_50, textColor_200 } = colors;
const Home = () => {
  const history = useHistory();
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
      <View style={{ padding: 20 }}>
        <Text style={{ color: textColor_50, ...F1_M_HeadLine24 }}>Hi!,</Text>
        <Text style={{ flexDirection: "row", color: textColor_50, ...F1_M_HeadLine24, fontSize: 32 }}>
          I'm <Text style={{ paddingLeft: 12, color: surface_green }}>Navin Prakash</Text>.
        </Text>
        <Text style={{ color: textColor_200, ...F1_M_HeadLine24, fontSize: isMobile ? 16 : 36 }}>
          I'm a React js | React-Native Developer.
        </Text>
        <TouchableOpacity
          onPress={() => {
            history.push("/about");
          }}
          style={{
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: borderColor,
            borderRadius: 4,
            cursor: "pointer",
            maxWidth: 150,
          }}
        >
          <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }}>View my work! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
